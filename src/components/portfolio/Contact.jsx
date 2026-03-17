import { useState } from "react";
import { useScrollReveal } from "../useScrollReveal";
import { Send, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  const info = [
    {
      icon: Mail,
      label: "Email",
      value: "saracastrillon34@gmail.com",
      color: "text-neon-cyan",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Medellín, Colombia 🇨🇴",
      color: "text-neon-purple",
    },
    {
      icon: Clock,
      label: "Disponibilidad",
      value: "Lun–Vie 9am–6pm",
      color: "text-neon-green",
    },
  ];

  const inputCls =
    "w-full bg-white/3 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-cyan/40 focus:bg-neon-cyan/3 transition-all";

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="orb absolute w-96 h-96 bg-neon-cyan/5 top-0 -left-32" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-code text-neon-cyan text-sm">// 06</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2">
            Contacto
          </h2>
          <p className="text-muted-foreground text-sm mt-6 max-w-md mx-auto">
            ¿Tienes un proyecto en mente? Hablemos. Respondo en menos de 24
            horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card border border-border rounded-2xl p-6 space-y-5">
              {info.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-border flex items-center justify-center shrink-0">
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {label === "Email" ? (
                      <a
                        href={`mailto:${value}`}
                        className="text-sm font-medium text-neon-cyan hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card border border-neon-cyan/15 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-sm font-medium text-foreground">
                  Disponible para proyectos
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Actualmente acepto proyectos freelance y oportunidades de
                colaboración. ¡Hablemos!
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <div className="glass-card border border-border rounded-2xl p-6 sm:p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-muted-foreground text-sm text-center">
                    Te responderé en menos de 24 horas. ¡Gracias!
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    className="mt-2 px-5 py-2 rounded-xl border border-border text-sm text-muted-foreground hover:border-neon-cyan/30 hover:text-neon-cyan transition-all"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-2 block">
                        Nombre *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handle}
                        placeholder="Tu nombre"
                        className={inputCls}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-2 block">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handle}
                        placeholder="tu@email.com"
                        className={inputCls}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-2 block">
                      Asunto
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handle}
                      placeholder="¿En qué puedo ayudarte?"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-2 block">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={5}
                      className={`${inputCls} resize-none`}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neon-cyan text-dark-900 font-semibold text-sm hover:bg-neon-cyan/90 transition-all disabled:opacity-60 shadow-lg shadow-neon-cyan/20"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
