import { useEffect, useRef, useState, useCallback } from "react";

const CELL = 20;
const COLS = 20;
const ROWS = 18;
const DIR = {
  ArrowUp: [0, -1],
  ArrowDown: [0, 1],
  ArrowLeft: [-1, 0],
  ArrowRight: [1, 0],
};

const rand = () => [
  Math.floor(Math.random() * COLS),
  Math.floor(Math.random() * ROWS),
];

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    snake: [
      [10, 9],
      [9, 9],
      [8, 9],
    ],
    dir: [1, 0],
    food: rand(),
    score: 0,
    running: false,
    dead: false,
  });
  const animRef = useRef(null);
  const lastRef = useRef(0);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | running | dead

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { snake, food } = stateRef.current;

    ctx.fillStyle = "#050810";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Grid dots
    ctx.fillStyle = "rgba(0,229,255,0.04)";
    for (let x = 0; x < COLS; x++)
      for (let y = 0; y < ROWS; y++) {
        ctx.beginPath();
        ctx.arc(x * CELL + CELL / 2, y * CELL + CELL / 2, 1, 0, Math.PI * 2);
        ctx.fill();
      }

    // Food
    ctx.shadowBlur = 16;
    ctx.shadowColor = "#ff6b9d";
    ctx.fillStyle = "#ff6b9d";
    ctx.beginPath();
    ctx.arc(
      food[0] * CELL + CELL / 2,
      food[1] * CELL + CELL / 2,
      CELL / 2 - 2,
      0,
      Math.PI * 2,
    );
    ctx.fill();
    ctx.shadowBlur = 0;

    // Snake
    snake.forEach(([x, y], i) => {
      const ratio = i / snake.length;
      ctx.shadowBlur = i === 0 ? 14 : 6;
      ctx.shadowColor = "#00e5ff";
      ctx.fillStyle =
        i === 0
          ? "#00e5ff"
          : `rgba(0,${Math.round(180 + 75 * (1 - ratio))},255,${0.9 - ratio * 0.4})`;
      const r = i === 0 ? CELL / 2 - 1 : CELL / 2 - 3;
      ctx.beginPath();
      ctx.roundRect(x * CELL + 2, y * CELL + 2, CELL - 4, CELL - 4, 4);
      ctx.fill();
    });
    ctx.shadowBlur = 0;
  }, []);

  const step = useCallback(
    (ts) => {
      const s = stateRef.current;
      if (!s.running) return;
      if (ts - lastRef.current > 130) {
        lastRef.current = ts;
        const head = [s.snake[0][0] + s.dir[0], s.snake[0][1] + s.dir[1]];
        if (
          head[0] < 0 ||
          head[0] >= COLS ||
          head[1] < 0 ||
          head[1] >= ROWS ||
          s.snake.some(([x, y]) => x === head[0] && y === head[1])
        ) {
          s.running = false;
          s.dead = true;
          setStatus("dead");
          draw();
          return;
        }
        const ate = head[0] === s.food[0] && head[1] === s.food[1];
        s.snake = [head, ...s.snake.slice(0, ate ? undefined : -1)];
        if (ate) {
          s.food = rand();
          s.score++;
          setScore(s.score);
        }
      }
      draw();
      animRef.current = requestAnimationFrame(step);
    },
    [draw],
  );

  const start = () => {
    stateRef.current = {
      snake: [
        [10, 9],
        [9, 9],
        [8, 9],
      ],
      dir: [1, 0],
      food: rand(),
      score: 0,
      running: true,
      dead: false,
    };
    setScore(0);
    setStatus("running");
    lastRef.current = 0;
    cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    draw();
    const onKey = (e) => {
      if (DIR[e.key]) {
        e.preventDefault();
        const s = stateRef.current;
        const nd = DIR[e.key];
        if (s.dir[0] + nd[0] !== 0 || s.dir[1] + nd[1] !== 0) s.dir = nd;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(animRef.current);
    };
  }, [draw, step]);

  // Touch / swipe
  const touchRef = useRef(null);
  const onTouchStart = (e) =>
    (touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY });
  const onTouchEnd = (e) => {
    if (!touchRef.current) return;
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    const dy = e.changedTouches[0].clientY - touchRef.current.y;
    const s = stateRef.current;
    if (Math.abs(dx) > Math.abs(dy)) {
      const nd = dx > 0 ? [1, 0] : [-1, 0];
      if (s.dir[0] + nd[0] !== 0 || s.dir[1] + nd[1] !== 0) s.dir = nd;
    } else {
      const nd = dy > 0 ? [0, 1] : [0, -1];
      if (s.dir[0] + nd[0] !== 0 || s.dir[1] + nd[1] !== 0) s.dir = nd;
    }
  };

  // D-pad buttons
  const moveDir = (d) => {
    const s = stateRef.current;
    if (!s.running) return;
    const nd = DIR[d];
    if (s.dir[0] + nd[0] !== 0 || s.dir[1] + nd[1] !== 0) s.dir = nd;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center justify-between w-full max-w-sm">
        <span className="font-code text-neon-cyan text-sm">
          Score: <strong>{score}</strong>
        </span>
        <button
          onClick={start}
          className="px-4 py-1.5 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-medium hover:bg-neon-cyan/20 transition-all"
        >
          {status === "idle" ? "▶ Iniciar" : "↺ Reiniciar"}
        </button>
      </div>

      <div
        className="relative rounded-xl overflow-hidden border border-neon-cyan/20"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <canvas
          ref={canvasRef}
          width={COLS * CELL}
          height={ROWS * CELL}
          className="block"
        />
        {status !== "running" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-900/80 backdrop-blur-sm">
            {status === "dead" && (
              <p className="text-red-400 font-bold text-xl mb-1">
                💀 Game Over
              </p>
            )}
            {status === "dead" && (
              <p className="text-muted-foreground text-sm mb-4">
                Score: {score}
              </p>
            )}
            {status === "idle" && (
              <p className="text-neon-cyan font-bold text-lg mb-4">🐍 Snake</p>
            )}
            <button
              onClick={start}
              className="px-6 py-2 rounded-xl bg-neon-cyan text-dark-900 font-semibold text-sm hover:bg-neon-cyan/90 transition-all"
            >
              {status === "idle" ? "Iniciar juego" : "Jugar de nuevo"}
            </button>
          </div>
        )}
      </div>

      {/* Mobile D-Pad */}
      <div className="grid grid-cols-3 gap-1 md:hidden">
        {[
          ["", "ArrowUp", ""],
          ["ArrowLeft", "", "ArrowRight"],
          ["", "ArrowDown", ""],
        ].map((row, ri) =>
          row.map((d, ci) =>
            d ? (
              <button
                key={d}
                onTouchStart={(e) => {
                  e.preventDefault();
                  moveDir(d);
                }}
                className="w-12 h-12 rounded-xl bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan flex items-center justify-center text-lg active:bg-neon-cyan/25"
              >
                {d === "ArrowUp"
                  ? "↑"
                  : d === "ArrowDown"
                    ? "↓"
                    : d === "ArrowLeft"
                      ? "←"
                      : "→"}
              </button>
            ) : (
              <div key={`e-${ri}-${ci}`} className="w-12 h-12" />
            ),
          ),
        )}
      </div>

      <p className="text-muted-foreground text-xs">
        Usa las flechas del teclado o D-Pad
      </p>
    </div>
  );
}
