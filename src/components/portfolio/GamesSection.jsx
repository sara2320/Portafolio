import { useState } from "react";
import { useScrollReveal } from "../useScrollReveal";
import SnakeGame from "../games/SnakeGame";
import MemoryGame from "../games/MemoryGame";
import TicTacToe from "../games/TicTacToe";
import { Gamepad2, Zap, Grid3X3 } from "lucide-react";

const games = [
  {
    id: "snake",
    label: "Snake",
    icon: Zap,
    component: SnakeGame,
    desc: "Come la comida, evita las paredes",
  },
  {
    id: "memory",
    label: "Memory",
    icon: Grid3X3,
    component: MemoryGame,
    desc: "Encuentra los pares de emojis",
  },
  {
    id: "tictactoe",
    label: "Tic Tac Toe",
    icon: Gamepad2,
    component: TicTacToe,
    desc: "Vence a la IA si puedes",
  },
];

export default function GamesSection() {
  const { ref, visible } = useScrollReveal();
  const [active, setActive] = useState("snake");

  const Game = games.find((g) => g.id === active)?.component;

  return (
    <section id="juegos" className="py-24 relative overflow-hidden grid-bg">
      <div className="orb absolute w-80 h-80 bg-neon-cyan/6 top-1/4 right-0" />
      <div className="orb absolute w-60 h-60 bg-neon-purple/6 bottom-1/4 left-0" />

      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Title */}
        <div className="text-center mb-12">
          <span className="font-code text-neon-cyan text-sm">// 05</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2">
            Mini Juegos
          </h2>
          <p className="text-muted-foreground text-sm mt-6 max-w-md mx-auto">
            Juegos interactivos construidos con JavaScript puro. ¿Puedes vencer
            a la IA?
          </p>
        </div>

        {/* Game tabs */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {games.map(({ id, label, icon: Icon, desc }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                active === id
                  ? "bg-neon-cyan/10 border-neon-cyan/40 text-neon-cyan shadow-lg shadow-neon-cyan/10"
                  : "border-border text-muted-foreground hover:border-neon-cyan/20 hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Game container */}
        <div className="glass-card border border-border rounded-2xl p-6 sm:p-8 min-h-[480px] flex flex-col">
          {/* Game header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div>
              <h3 className="font-bold text-foreground">
                {games.find((g) => g.id === active)?.label}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {games.find((g) => g.id === active)?.desc}
              </p>
            </div>
            <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
              <Gamepad2 className="w-4 h-4 text-neon-cyan" />
            </div>
          </div>

          {/* Game */}
          <div className="flex-1 flex items-center justify-center">
            {Game && <Game />}
          </div>
        </div>
      </div>
    </section>
  );
}
