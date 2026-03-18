import { useState } from "react";
import {
  ArrowLeft,
  Download,
  Music,
  Calendar,
  MapPin,
  Zap,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";

const posters = [
  {
    id: 1,
    title: "SOUNDWAVE",
    subtitle: "FESTIVAL",
    year: "2024",
    date: "15 · 16 · 17 AGO",
    venue: "Medellín, Colombia",
    artists: ["KAIROS", "NEON PULSE", "DEEP ECHO", "THE VOID", "STATIC DREAM"],
    accent: "#ff2d78",
    accent2: "#7b2fff",
    bg1: "#0d0221",
    bg2: "#1a0533",
    genre: "Electronic / Pop",
    icon: Zap,
  },
  {
    id: 2,
    title: "TECHNO",
    subtitle: "UNDERGROUND",
    year: "2024",
    date: "22 · 23 SEP",
    venue: "Bogotá, Colombia",
    artists: ["CIRCUIT", "PHASE 4", "BINARY", "PULSE X", "AXIOM"],
    accent: "#00e5ff",
    accent2: "#0066ff",
    bg1: "#000a12",
    bg2: "#001529",
    genre: "Techno / Industrial",
    icon: Headphones,
  },
  {
    id: 3,
    title: "JAZZ",
    subtitle: "NOCTURNO",
    year: "2024",
    date: "5 · 6 · 7 OCT",
    venue: "Cali, Colombia",
    artists: ["THE TRIO", "SOUL INK", "MOODY BLUE", "ECHOES", "SERENA V"],
    accent: "#ffaa00",
    accent2: "#ff6600",
    bg1: "#1a0a00",
    bg2: "#2d1500",
    genre: "Jazz / Soul",
    icon: Music,
  },
];

const PosterPreview = ({ poster }) => {
  const Icon = poster.icon;
  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        aspectRatio: "2/3",
        background: `linear-gradient(180deg, ${poster.bg1} 0%, ${poster.bg2} 50%, ${poster.bg1} 100%)`,
        boxShadow: `0 0 80px ${poster.accent}40, 0 40px 80px rgba(0,0,0,0.6)`,
      }}
    >
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Top glow orb */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-30"
        style={{
          background: `radial-gradient(circle, ${poster.accent}, transparent 70%)`,
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 translate-x-1/2 w-40 h-40 rounded-full opacity-20"
        style={{
          background: `radial-gradient(circle, ${poster.accent2}, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-8">
        {/* Top bar */}
        <div className="flex justify-between items-start mb-auto">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <div
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: poster.accent }}
              />
              <span
                className="text-xs tracking-[0.3em] font-light"
                style={{ color: poster.accent }}
              >
                LIVE MUSIC
              </span>
            </div>
            <p className="text-white/20 text-[10px] tracking-widest">
              {poster.genre.toUpperCase()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-white/20 text-[10px] tracking-widest">EST.</p>
            <p className="text-white/30 text-xs font-light">{poster.year}</p>
          </div>
        </div>

        {/* Center main */}
        <div className="flex flex-col items-center justify-center text-center py-10 flex-1">
          {/* Geometric ring */}
          <div className="relative mb-8">
            <div
              className="w-28 h-28 rounded-full flex items-center justify-center"
              style={{ border: `1px solid ${poster.accent}40` }}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ border: `1.5px solid ${poster.accent}70` }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: `${poster.accent}20`,
                    border: `2px solid ${poster.accent}`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: poster.accent }} />
                </div>
              </div>
            </div>
            {/* Orbit dot */}
            <div
              className="absolute top-1 right-3 w-2 h-2 rounded-full"
              style={{ backgroundColor: poster.accent2 }}
            />
          </div>

          <h1
            className="text-6xl font-black tracking-tighter leading-none text-white mb-1"
            style={{ textShadow: `0 0 60px ${poster.accent}60` }}
          >
            {poster.title}
          </h1>
          <p
            className="text-lg font-light tracking-[0.6em] mb-2"
            style={{ color: poster.accent }}
          >
            {poster.subtitle}
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6 w-full max-w-[200px]">
            <div
              className="flex-1 h-px"
              style={{
                background: `linear-gradient(to right, transparent, ${poster.accent})`,
              }}
            />
            <div
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: poster.accent }}
            />
            <div
              className="flex-1 h-px"
              style={{
                background: `linear-gradient(to left, transparent, ${poster.accent})`,
              }}
            />
          </div>

          {/* Artists */}
          <div className="space-y-2 text-center">
            {poster.artists.map((artist, i) => (
              <p
                key={artist}
                className="font-bold tracking-widest transition-all"
                style={{
                  color:
                    i === 0
                      ? "white"
                      : i === 1
                        ? `${poster.accent}CC`
                        : "rgba(255,255,255,0.4)",
                  fontSize: i === 0 ? "1rem" : i === 1 ? "0.85rem" : "0.7rem",
                  letterSpacing: i === 0 ? "0.2em" : "0.15em",
                }}
              >
                {artist}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-end">
          <div>
            <div
              className="flex items-center gap-1.5"
              style={{ color: poster.accent }}
            >
              <Calendar className="w-3 h-3" />
              <span className="text-xs tracking-widest font-medium">
                {poster.date}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-white/30">
            <MapPin className="w-3 h-3" />
            <span className="text-xs">{poster.venue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DemoPoster() {
  const [active, setActive] = useState(0);
  const poster = posters[active];

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#080810" }}
    >
      <header
        className="border-b border-white/10 sticky top-0 z-10 backdrop-blur-xl"
        style={{ backgroundColor: "rgba(8,8,16,0.85)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/Portfolio"
              className="p-2 hover:bg-white/10 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white/50" />
            </Link>
            <div>
              <h1 className="text-xl font-black">Posters Festival de Música</h1>
              <p className="text-sm text-white/40">
                Serie de 3 identidades visuales para eventos en vivo
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-white/20 hover:bg-white/10 transition-colors">
            <Download className="w-4 h-4" />
            Descargar
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Poster */}
          <div className="lg:col-span-2 space-y-5">
            <PosterPreview poster={poster} />

            {/* Selector */}
            <div className="grid grid-cols-3 gap-3">
              {posters.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActive(idx)}
                  className={`py-3 px-2 rounded-xl border text-sm font-bold transition-all ${active === idx ? "border-transparent" : "border-white/10 text-white/40 hover:text-white/60"}`}
                  style={
                    active === idx
                      ? {
                          backgroundColor: `${p.accent}20`,
                          borderColor: `${p.accent}50`,
                          color: p.accent,
                        }
                      : {}
                  }
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-3 space-y-5">
            {/* Header info */}
            <div
              className="rounded-2xl border border-white/10 p-8"
              style={{ backgroundColor: "#0f0f1a" }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: `${poster.accent}20`,
                    border: `1px solid ${poster.accent}40`,
                  }}
                >
                  {(() => {
                    const PosterIcon = poster.icon;
                    return (
                      <PosterIcon
                        className="w-6 h-6"
                        style={{ color: poster.accent }}
                      />
                    );
                  })()}
                </div>
                <div>
                  <h2 className="text-2xl font-black">
                    {poster.title}{" "}
                    <span style={{ color: poster.accent }}>
                      {poster.subtitle}
                    </span>
                  </h2>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="flex items-center gap-1 text-white/40 text-xs">
                      <Calendar className="w-3 h-3" />
                      {poster.date}
                    </span>
                    <span className="flex items-center gap-1 text-white/40 text-xs">
                      <MapPin className="w-3 h-3" />
                      {poster.venue}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Diseño de póster editorial para evento de música en vivo en
                Colombia. La identidad visual captura la energía y atmósfera del
                género <strong className="text-white/70">{poster.genre}</strong>
                , usando una paleta cromática construida alrededor del color
                principal del festival.
              </p>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Formato", "A2 · 42 × 59.4 cm"],
                ["Resolución", "300 DPI"],
                ["Modo color", "CMYK + Pantone"],
                ["Entrega", "PDF · PNG · AI"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-xl border border-white/10 p-4"
                  style={{ backgroundColor: "#0f0f1a" }}
                >
                  <p className="text-white/30 text-xs mb-1">{k}</p>
                  <p className="font-semibold text-sm">{v}</p>
                </div>
              ))}
            </div>

            {/* Color palette */}
            <div
              className="rounded-2xl border border-white/10 p-6"
              style={{ backgroundColor: "#0f0f1a" }}
            >
              <h3 className="font-bold mb-4">Paleta Cromática</h3>
              <div className="flex gap-3 mb-3">
                {[
                  poster.accent,
                  poster.accent2,
                  "#FFFFFF",
                  poster.bg2,
                  poster.bg1,
                ].map((c, i) => (
                  <div key={i} className="flex-1">
                    <div
                      className="h-16 rounded-xl mb-2 border border-white/5"
                      style={{ backgroundColor: c }}
                    />
                    <p className="text-xs text-white/30 text-center font-mono">
                      {c}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Artists */}
            <div
              className="rounded-2xl border border-white/10 p-6"
              style={{ backgroundColor: "#0f0f1a" }}
            >
              <h3 className="font-bold mb-4">Line-up</h3>
              <div className="space-y-2">
                {poster.artists.map((artist, i) => (
                  <div
                    key={artist}
                    className="flex items-center justify-between py-2 border-b border-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-5 text-xs font-mono"
                        style={{ color: poster.accent }}
                      >
                        0{i + 1}
                      </span>
                      <span className="font-bold text-sm">{artist}</span>
                    </div>
                    <span className="text-xs text-white/30">
                      {i === 0 ? "Headliner" : i < 3 ? "Featured" : "Support"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div
              className="rounded-2xl border border-white/10 p-6"
              style={{ backgroundColor: "#0f0f1a" }}
            >
              <h3 className="font-bold mb-5">Proceso Creativo</h3>
              <div className="space-y-4">
                {[
                  {
                    n: "01",
                    title: "Brief & Research",
                    desc: "Análisis del género musical, audiencia y referencias visuales del evento",
                  },
                  {
                    n: "02",
                    title: "Dirección de Arte",
                    desc: "Definición de la paleta, composición tipográfica y sistema de elementos",
                  },
                  {
                    n: "03",
                    title: "Diseño & Iteración",
                    desc: "3 rondas de revisión con el cliente hasta aprobación final",
                  },
                  {
                    n: "04",
                    title: "Entrega Final",
                    desc: "Archivos listos para impresión offset y versiones digitales optimizadas",
                  },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-4">
                    <span
                      className="font-mono text-xs font-bold shrink-0 mt-0.5"
                      style={{ color: poster.accent }}
                    >
                      {n}
                    </span>
                    <div>
                      <p className="font-semibold text-sm">{title}</p>
                      <p className="text-xs text-white/40 mt-0.5 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
