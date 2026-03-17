// @ts-nocheck
import { useState, useRef, useEffect } from "react";
import { Send, ArrowLeft, Bot, Sparkles, Trash2 } from "lucide-react";
import { createPageUrl } from "../utils";
import axios from "axios";

const SUGGESTIONS = [
  "¿Qué es React?",
  "Explícame qué es una API REST",
  "Dame ideas para un proyecto web",
  "¿Cómo funciona Node.js?",
];

export default function DemoChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "¡Hola! Soy tu asistente de IA. Puedo responder preguntas sobre programación, tecnología y más. ¿En qué puedo ayudarte hoy?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;

    setInput("");
    setMessages((m) => [...m, { role: "user", content: msg }]);
    setLoading(true);

    const history = messages
      .map(
        (m) => `${m.role === "user" ? "Usuario" : "Asistente"}: ${m.content}`,
      )
      .join("\n");

    try {
      const response = await axios.post("http://localhost:3000/chat", {
        prompt: `Eres un asistente...

Historial:
${history}

Usuario: ${msg}
Asistente:`,
      });

      const res = response.data.reply;

      setMessages((m) => [...m, { role: "assistant", content: res }]);
    } catch (error) {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "Error conectando con la IA" },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background font-inter flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-xl px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <a
            href={createPageUrl("Portfolio")}
            className="flex items-center gap-1 text-muted-foreground hover:text-neon-cyan text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver
          </a>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-neon-purple" />
            </div>
            <span className="font-bold gradient-text text-sm">
              AI Chat Assistant
            </span>
          </div>
        </div>
        <button
          onClick={() =>
            setMessages([
              {
                role: "assistant",
                content: "Chat reiniciado. ¿En qué puedo ayudarte?",
              },
            ])
          }
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-red-400 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" /> Limpiar
        </button>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl mx-auto w-full space-y-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {m.role === "assistant" && (
              <div className="w-8 h-8 rounded-xl bg-neon-purple/15 border border-neon-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-4 h-4 text-neon-purple" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-neon-cyan/10 border border-neon-cyan/20 text-foreground"
                  : "bg-card border border-border text-foreground"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-xl bg-neon-purple/15 border border-neon-purple/20 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-neon-purple" />
            </div>
            <div className="bg-card border border-border rounded-2xl px-4 py-3 flex items-center gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-neon-purple animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-3 max-w-3xl mx-auto w-full">
          <div className="flex flex-wrap gap-2 justify-center">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="px-3 py-1.5 rounded-xl border border-border text-xs text-muted-foreground hover:border-neon-cyan/30 hover:text-neon-cyan transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="border-t border-border bg-card/50 backdrop-blur-xl px-4 py-4">
        <div className="max-w-3xl mx-auto flex gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
            placeholder="Escribe tu mensaje..."
            className="flex-1 bg-secondary/50 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-cyan/40 transition-all"
          />
          <button
            onClick={() => send()}
            disabled={loading || !input.trim()}
            className="w-10 h-10 rounded-xl bg-neon-cyan text-dark-900 flex items-center justify-center hover:bg-neon-cyan/90 transition-all disabled:opacity-40 shrink-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
