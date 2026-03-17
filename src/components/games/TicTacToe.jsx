import { useState, useEffect } from "react";

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const checkWin = (board, p) =>
  WIN_LINES.find((l) => l.every((i) => board[i] === p)) || null;
const minimax = (board, isMax, depth = 0) => {
  if (checkWin(board, "O")) return 10 - depth;
  if (checkWin(board, "X")) return depth - 10;
  const empty = board
    .map((v, i) => (v === null ? i : -1))
    .filter((i) => i >= 0);
  if (!empty.length) return 0;
  const scores = empty.map((i) => {
    const b = [...board];
    b[i] = isMax ? "O" : "X";
    return minimax(b, !isMax, depth + 1);
  });
  return isMax ? Math.max(...scores) : Math.min(...scores);
};
const bestMove = (board) => {
  const empty = board
    .map((v, i) => (v === null ? i : -1))
    .filter((i) => i >= 0);
  let best = -Infinity,
    move = empty[0];
  empty.forEach((i) => {
    const b = [...board];
    b[i] = "O";
    const s = minimax(b, false);
    if (s > best) {
      best = s;
      move = i;
    }
  });
  return move;
};

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0, D: 0 });
  const [thinking, setThinking] = useState(false);

  const winLine = checkWin(board, "X") || checkWin(board, "O");
  const winner = winLine ? board[winLine[0]] : null;
  const draw = !winner && board.every(Boolean);
  const over = winner || draw;

  useEffect(() => {
    if (!isX && !over) {
      setThinking(true);
      const t = setTimeout(() => {
        const move = bestMove([...board]);
        const nb = [...board];
        nb[move] = "O";
        setBoard(nb);
        setIsX(true);
        setThinking(false);
        const wl = checkWin(nb, "O");
        if (wl) setScore((s) => ({ ...s, O: s.O + 1 }));
        else if (nb.every(Boolean)) setScore((s) => ({ ...s, D: s.D + 1 }));
      }, 400);
      return () => clearTimeout(t);
    }
  }, [isX, board, over]);

  const click = (i) => {
    if (board[i] || over || !isX || thinking) return;
    const nb = [...board];
    nb[i] = "X";
    setBoard(nb);
    const wl = checkWin(nb, "X");
    if (wl) setScore((s) => ({ ...s, X: s.X + 1 }));
    else if (nb.every(Boolean)) setScore((s) => ({ ...s, D: s.D + 1 }));
    else setIsX(false);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
  };

  const labels = { X: "Tú (X)", O: "IA (O)", D: "Empates" };

  return (
    <div className="flex flex-col items-center gap-5 w-full max-w-xs mx-auto">
      {/* Score */}
      <div className="flex gap-4 w-full justify-center">
        {["X", "D", "O"].map((k) => (
          <div
            key={k}
            className={`flex-1 text-center py-2 rounded-xl border transition-all ${
              !over && ((k === "X" && isX) || (k === "O" && !isX))
                ? k === "X"
                  ? "border-neon-cyan/40 bg-neon-cyan/10"
                  : "border-neon-purple/40 bg-neon-purple/10"
                : "border-border bg-white/2"
            }`}
          >
            <div
              className={`text-xl font-bold ${k === "X" ? "text-neon-cyan" : k === "O" ? "text-neon-purple" : "text-muted-foreground"}`}
            >
              {score[k]}
            </div>
            <div className="text-xs text-muted-foreground">{labels[k]}</div>
          </div>
        ))}
      </div>

      {/* Status */}
      <p className="text-sm font-medium h-5 text-center">
        {over ? (
          winner ? (
            <span
              className={winner === "X" ? "text-neon-cyan" : "text-neon-purple"}
            >
              {winner === "X" ? "🎉 ¡Ganaste!" : "🤖 Ganó la IA"}
            </span>
          ) : (
            <span className="text-muted-foreground">🤝 Empate</span>
          )
        ) : thinking ? (
          <span className="text-neon-purple">🤖 Pensando...</span>
        ) : (
          <span className="text-neon-cyan">Tu turno</span>
        )}
      </p>

      {/* Board */}
      <div className="grid grid-cols-3 gap-2 w-full">
        {board.map((cell, i) => {
          const inWin = winLine?.includes(i);
          return (
            <button
              key={i}
              onClick={() => click(i)}
              className={`aspect-square rounded-xl text-3xl font-bold border transition-all duration-200 flex items-center justify-center ${
                cell
                  ? inWin
                    ? cell === "X"
                      ? "bg-neon-cyan/20 border-neon-cyan/60 scale-105"
                      : "bg-neon-purple/20 border-neon-purple/60 scale-105"
                    : "bg-white/5 border-border"
                  : "bg-white/3 border-border hover:border-neon-cyan/20 hover:bg-white/6 cursor-pointer"
              }`}
            >
              {cell && (
                <span
                  className={`${cell === "X" ? "text-neon-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" : "text-neon-purple drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]"}`}
                >
                  {cell}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <button
        onClick={reset}
        className="px-5 py-2 rounded-xl border border-border text-muted-foreground text-sm hover:border-neon-cyan/30 hover:text-neon-cyan transition-all"
      >
        {over ? "↺ Nueva partida" : "↺ Reiniciar"}
      </button>
    </div>
  );
}
