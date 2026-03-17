import { useState, useRef, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  MousePointer2,
  Square,
  Circle,
  Minus,
  Trash2,
  Download,
} from "lucide-react";
import { createPageUrl } from "../utils";

const COLORS = [
  "#00e5ff",
  "#a855f7",
  "#00ff88",
  "#ff6b9d",
  "#fbbf24",
  "#f97316",
];
const TOOLS = [
  { id: "pen", icon: MousePointer2, label: "Dibujar" },
  { id: "line", icon: Minus, label: "Línea" },
  { id: "rect", icon: Square, label: "Rectángulo" },
  { id: "circle", icon: Circle, label: "Círculo" },
];
const CURSORS = [
  { name: "Alex", x: 120, y: 200, color: "#00e5ff" },
  { name: "María", x: 380, y: 150, color: "#a855f7" },
  { name: "Carlos", x: 540, y: 300, color: "#00ff88" },
];

export default function DemoCollab() {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState(COLORS[0]);
  const [size, setSize] = useState(3);
  const [drawing, setDrawing] = useState(false);
  const [start, setStart] = useState(null);
  const [strokes, setStrokes] = useState([]);
  const [current, setCurrent] = useState([]);
  const offsetRef = useRef(null);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const cl = e.touches ? e.touches[0] : e;
    return { x: cl.clientX - rect.left, y: cl.clientY - rect.top };
  };

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // grid
    ctx.strokeStyle = "rgba(0,229,255,0.04)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    [
      ...strokes,
      ...(current.length
        ? [{ tool, color, size, points: current, start }]
        : []),
    ].forEach((s) => {
      ctx.strokeStyle = s.color;
      ctx.lineWidth = s.size;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      if (s.tool === "pen" && s.points.length > 1) {
        ctx.beginPath();
        ctx.moveTo(s.points[0].x, s.points[0].y);
        s.points.slice(1).forEach((p) => ctx.lineTo(p.x, p.y));
        ctx.stroke();
      } else if (s.tool === "line" && s.start && s.points.length > 0) {
        const last = s.points[s.points.length - 1];
        ctx.beginPath();
        ctx.moveTo(s.start.x, s.start.y);
        ctx.lineTo(last.x, last.y);
        ctx.stroke();
      } else if (s.tool === "rect" && s.start && s.points.length > 0) {
        const last = s.points[s.points.length - 1];
        ctx.strokeRect(
          s.start.x,
          s.start.y,
          last.x - s.start.x,
          last.y - s.start.y,
        );
      } else if (s.tool === "circle" && s.start && s.points.length > 0) {
        const last = s.points[s.points.length - 1];
        const r = Math.sqrt(
          (last.x - s.start.x) ** 2 + (last.y - s.start.y) ** 2,
        );
        ctx.beginPath();
        ctx.arc(s.start.x, s.start.y, r, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    // fake cursors
    CURSORS.forEach((c) => {
      ctx.fillStyle = c.color;
      ctx.font = "bold 11px Inter";
      ctx.fillText(c.name, c.x + 12, c.y - 4);
      ctx.beginPath();
      ctx.moveTo(c.x, c.y);
      ctx.lineTo(c.x + 10, c.y + 14);
      ctx.lineTo(c.x + 4, c.y + 12);
      ctx.closePath();
      ctx.fill();
    });
  }, [strokes, current, tool, color, size, start]);

  useEffect(() => {
    redraw();
  }, [redraw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    redraw();
  }, []);

  const onDown = (e) => {
    e.preventDefault();
    const p = getPos(e);
    setDrawing(true);
    setStart(p);
    setCurrent([p]);
  };
  const onMove = (e) => {
    e.preventDefault();
    if (!drawing) return;
    const p = getPos(e);
    setCurrent((c) => [...c, p]);
  };
  const onUp = () => {
    if (!drawing) return;
    setStrokes((s) => [...s, { tool, color, size, points: current, start }]);
    setCurrent([]);
    setDrawing(false);
    setStart(null);
  };

  return (
    <div className="min-h-screen bg-background font-inter text-foreground flex flex-col">
      <header className="border-b border-border bg-card/80 backdrop-blur-xl px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <a
            href={createPageUrl("Portfolio")}
            className="flex items-center gap-1 text-muted-foreground hover:text-neon-cyan text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver
          </a>
          <span className="text-border">|</span>
          <span className="font-bold gradient-text text-sm">Collab Board</span>
          <div className="hidden sm:flex items-center gap-1">
            {CURSORS.map((c) => (
              <span
                key={c.name}
                className="w-5 h-5 rounded-full border-2 border-dark-900 -ml-1"
                style={{ background: c.color }}
                title={c.name}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-2">
              3 en línea
            </span>
          </div>
        </div>
        <button
          onClick={() => setStrokes([])}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-red-400 transition-colors"
        >
          <Trash2 className="w-3.5 h-3.5" /> Limpiar
        </button>
      </header>

      {/* Toolbar */}
      <div className="border-b border-border bg-card/50 px-4 py-2 flex items-center gap-4 flex-wrap">
        <div className="flex gap-1">
          {TOOLS.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setTool(id)}
              title={label}
              className={`p-2 rounded-lg transition-all ${tool === id ? "bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}
            >
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
        <div className="flex gap-1.5">
          {COLORS.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`w-5 h-5 rounded-full transition-all ${color === c ? "ring-2 ring-offset-1 ring-offset-card ring-white scale-110" : "opacity-70 hover:opacity-100"}`}
              style={{ background: c }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Grosor:</span>
          <input
            type="range"
            min={1}
            max={12}
            value={size}
            onChange={(e) => setSize(+e.target.value)}
            className="w-20 accent-neon-cyan"
          />
          <span className="text-xs text-muted-foreground w-3">{size}</span>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 relative overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-crosshair"
          style={{ minHeight: "400px" }}
          onMouseDown={onDown}
          onMouseMove={onMove}
          onMouseUp={onUp}
          onMouseLeave={onUp}
          onTouchStart={onDown}
          onTouchMove={onMove}
          onTouchEnd={onUp}
        />
        {strokes.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-muted-foreground text-sm opacity-50">
              Dibuja aquí — Colaboración en tiempo real
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
