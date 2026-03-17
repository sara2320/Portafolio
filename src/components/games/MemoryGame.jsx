import { useState, useEffect, useCallback } from "react";

const EMOJIS = ["🚀", "💎", "⚡", "🎯", "🔥", "🌊", "🎮", "💻"];
const ICONS = [...EMOJIS, ...EMOJIS]
  .sort(() => Math.random() - 0.5)
  .map((e, i) => ({ id: i, emoji: e, flipped: false, matched: false }));

export default function MemoryGame() {
  const [cards, setCards] = useState(ICONS);
  const [flipped, setFlipped] = useState([]);
  const [moves, setMoves] = useState(0);
  const [locked, setLocked] = useState(false);
  const [wins, setWins] = useState(0);
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);

  const reset = useCallback(() => {
    setCards(
      [...EMOJIS, ...EMOJIS]
        .sort(() => Math.random() - 0.5)
        .map((e, i) => ({ id: i, emoji: e, flipped: false, matched: false })),
    );
    setFlipped([]);
    setMoves(0);
    setLocked(false);
    setTime(0);
    setStarted(false);
  }, []);

  useEffect(() => {
    if (!started) return;
    const t = setInterval(() => setTime((p) => p + 1), 1000);
    return () => clearInterval(t);
  }, [started]);

  const click = (id) => {
    if (locked || flipped.length === 2) return;
    const card = cards.find((c) => c.id === id);
    if (!card || card.flipped || card.matched) return;
    if (!started) setStarted(true);
    const newCards = cards.map((c) =>
      c.id === id ? { ...c, flipped: true } : c,
    );
    const newFlipped = [...flipped, id];
    setCards(newCards);
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setLocked(true);
      const [a, b] = newFlipped.map((fid) =>
        newCards.find((c) => c.id === fid),
      );
      if (a.emoji === b.emoji) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newFlipped.includes(c.id) ? { ...c, matched: true } : c,
            ),
          );
          setFlipped([]);
          setLocked(false);
          if (
            newCards.filter((c) => c.matched).length + 2 ===
            newCards.length
          ) {
            setWins((w) => w + 1);
            setStarted(false);
          }
        }, 400);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              newFlipped.includes(c.id) ? { ...c, flipped: false } : c,
            ),
          );
          setFlipped([]);
          setLocked(false);
        }, 800);
      }
    }
  };

  const matched = cards.filter((c) => c.matched).length / 2;
  const won = matched === EMOJIS.length;

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
      {/* Stats */}
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-4 text-sm font-code">
          <span className="text-neon-cyan">
            Moves: <strong>{moves}</strong>
          </span>
          <span className="text-neon-purple">
            Time: <strong>{time}s</strong>
          </span>
          <span className="text-neon-green">
            Wins: <strong>{wins}</strong>
          </span>
        </div>
        <button
          onClick={reset}
          className="px-3 py-1 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs hover:bg-neon-cyan/20 transition-all"
        >
          ↺ Reset
        </button>
      </div>

      {/* Progress */}
      <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full skill-bar-fill transition-all duration-500"
          style={{ width: `${(matched / EMOJIS.length) * 100}%` }}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-2 w-full">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => click(card.id)}
            className={`aspect-square rounded-xl text-2xl flex items-center justify-center border transition-all duration-300 ${
              card.matched
                ? "bg-neon-green/10 border-neon-green/30 scale-95"
                : card.flipped
                  ? "bg-neon-cyan/15 border-neon-cyan/40 scale-105 shadow-lg shadow-neon-cyan/20"
                  : "bg-white/5 border-border hover:border-neon-cyan/20 hover:bg-white/8 cursor-pointer"
            }`}
            style={{ fontSize: card.flipped || card.matched ? "1.5rem" : "0" }}
          >
            {card.flipped || card.matched ? (
              card.emoji
            ) : (
              <span className="w-3 h-3 rounded-full bg-neon-cyan/20" />
            )}
          </button>
        ))}
      </div>

      {won && (
        <div className="text-center py-2">
          <p className="text-neon-green font-bold text-lg">🎉 ¡Completado!</p>
          <p className="text-muted-foreground text-sm">
            {moves} movimientos · {time}s
          </p>
          <button
            onClick={reset}
            className="mt-3 px-5 py-2 rounded-xl bg-neon-cyan text-dark-900 font-semibold text-sm hover:bg-neon-cyan/90 transition-all"
          >
            Jugar de nuevo
          </button>
        </div>
      )}
    </div>
  );
}
