import { useState } from "react";
import { ArrowLeft, Download, Music, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const posters = [
  {
    id: 1,
    title: "SOUNDWAVE",
    subtitle: "FESTIVAL 2024",
    date: "15 · 16 · 17 AGO",
    venue: "Medellín, Colombia",
    artists: ["KAIROS", "NEON PULSE", "DEEP ECHO", "THE VOID"],
    bg: "from-[#0d0221] via-[#1a0533] to-[#0d0221]",
    accent: "#ff2d78",
    accent2: "#7b2fff",
    glow: "shadow-[0_0_80px_rgba(255,45,120,0.4)]",
  },
  {
    id: 2,
    title: "TECHNO",
    subtitle: "UNDERGROUND",
    date: "22 · 23 SEP",
    venue: "Bogotá, Colombia",
    artists: ["CIRCUIT", "PHASE 4", "BINARY", "PULSE X"],
    bg: "from-[#000a12] via-[#001529] to-[#000a12]",
    accent: "#00e5ff",
    accent2: "#0066ff",
    glow: "shadow-[0_0_80px_rgba(0,229,255,0.4)]",
  },
  {
    id: 3,
    title: "JAZZ",
    subtitle: "NOCTURNO",
    date: "5 · 6 · 7 OCT",
    venue: "Cali, Colombia",
    artists: ["THE TRIO", "SOUL INK", "MOODY BLUE", "ECHOES"],
    bg: "from-[#1a0a00] via-[#2d1500] to-[#1a0a00]",
    accent: "#ffaa00",
    accent2: "#ff6600",
    glow: "shadow-[0_0_80px_rgba(255,170,0,0.4)]",
  },
];

export default function DemoPoster() {
  const [active, setActive] = useState(0);
  const poster = posters[active];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-lg border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/Portfolio"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </Link>
            <div>
              <h1 className="text-xl font-bold">Posters Festival de Música</h1>
              <p className="text-sm text-gray-400">
                Serie de 3 identidades para eventos culturales
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Descargar
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Poster Preview */}
          <div className="space-y-6">
            <div
              className={`aspect-[2/3] rounded-2xl bg-gradient-to-b ${poster.bg} ${poster.glow} relative overflow-hidden flex flex-col justify-between p-10 transition-all duration-500`}
            >
              {/* Top decorations */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col items-start gap-1">
                  <div
                    className="flex items-center gap-2 text-xs tracking-widest"
                    style={{ color: poster.accent }}
                  >
                    <Music className="w-3 h-3" />
                    LIVE MUSIC
                  </div>
                </div>
                <div className="text-xs tracking-widest text-white/40 text-right">
                  <div>EST. 2024</div>
                </div>
              </div>

              {/* Center: Main visual */}
              <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                {/* Geometric decoration */}
                <div className="relative mb-6">
                  <div
                    className="w-40 h-40 rounded-full opacity-20 absolute inset-0 -translate-x-4 -translate-y-4"
                    style={{
                      background: `radial-gradient(circle, ${poster.accent}, transparent)`,
                    }}
                  />
                  <div
                    className="w-32 h-32 rounded-full opacity-20 absolute inset-0 translate-x-4 translate-y-4"
                    style={{
                      background: `radial-gradient(circle, ${poster.accent2}, transparent)`,
                    }}
                  />
                  <div
                    className="relative w-24 h-24 rounded-full border-2 flex items-center justify-center mx-auto"
                    style={{ borderColor: poster.accent }}
                  >
                    <Music
                      className="w-10 h-10"
                      style={{ color: poster.accent }}
                    />
                  </div>
                </div>

                <h2
                  className="text-6xl font-black tracking-tighter mb-1 leading-none"
                  style={{
                    textShadow: `0 0 40px ${poster.accent}80`,
                    color: "white",
                  }}
                >
                  {poster.title}
                </h2>
                <p
                  className="text-xl font-light tracking-[0.5em] mb-6"
                  style={{ color: poster.accent }}
                >
                  {poster.subtitle}
                </p>

                {/* Divider */}
                <div
                  className="w-32 h-px mb-6"
                  style={{
                    background: `linear-gradient(to right, transparent, ${poster.accent}, transparent)`,
                  }}
                />

                {/* Artists */}
                <div className="space-y-1.5">
                  {poster.artists.map((artist, i) => (
                    <p
                      key={artist}
                      className={`font-bold tracking-widest ${i === 0 ? "text-lg" : i === 1 ? "text-base text-white/80" : "text-sm text-white/60"}`}
                    >
                      {artist}
                    </p>
                  ))}
                </div>
              </div>

              {/* Bottom info */}
              <div className="flex justify-between items-end">
                <div
                  className="flex items-center gap-2 text-xs"
                  style={{ color: poster.accent }}
                >
                  <Calendar className="w-3 h-3" />
                  <span className="tracking-widest">{poster.date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-white/50">
                  <MapPin className="w-3 h-3" />
                  <span>{poster.venue}</span>
                </div>
              </div>
            </div>

            {/* Selector */}
            <div className="flex gap-4 justify-center">
              {posters.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActive(idx)}
                  className={`flex-1 py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                    active === idx
                      ? "border-white/40 bg-white/10 text-white"
                      : "border-white/10 text-white/40 hover:text-white/70 hover:border-white/20"
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-2xl border border-white/10 p-8">
              <h2 className="text-2xl font-bold mb-4">Concepto</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Serie de 3 identidades visuales para eventos musicales en
                Colombia. Cada poster tiene su propio universo cromático y
                atmosférico, manteniendo coherencia con el género musical que
                representa.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-500 text-xs mb-1">Formato</p>
                  <p className="font-semibold">A2 · 42×59.4cm</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-500 text-xs mb-1">Resolución</p>
                  <p className="font-semibold">300 DPI</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-500 text-xs mb-1">Modo de color</p>
                  <p className="font-semibold">CMYK + RGB</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-gray-500 text-xs mb-1">
                    Formato de entrega
                  </p>
                  <p className="font-semibold">PDF, PNG, AI</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl border border-white/10 p-8">
              <h3 className="font-bold mb-4">Paleta del Poster Activo</h3>
              <div className="flex gap-3">
                <div
                  className="flex-1 rounded-xl h-20"
                  style={{ backgroundColor: poster.accent }}
                />
                <div
                  className="flex-1 rounded-xl h-20"
                  style={{ backgroundColor: poster.accent2 }}
                />
                <div className="flex-1 rounded-xl h-20 bg-white" />
                <div className="flex-1 rounded-xl h-20 bg-gray-950 border border-white/10" />
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl border border-white/10 p-8">
              <h3 className="font-bold mb-4">Proceso Creativo</h3>
              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Brief",
                    desc: "Reunión con el cliente y definición de audiencia objetivo",
                  },
                  {
                    step: "02",
                    title: "Moodboard",
                    desc: "Selección de referencias visuales y dirección artística",
                  },
                  {
                    step: "03",
                    title: "Diseño",
                    desc: "Creación de la composición tipográfica y elementos gráficos",
                  },
                  {
                    step: "04",
                    title: "Entrega",
                    desc: "Archivos listos para impresión y versiones digitales",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <span
                      className="font-code text-xs font-bold mt-0.5"
                      style={{ color: poster.accent }}
                    >
                      {step}
                    </span>
                    <div>
                      <p className="font-semibold text-sm">{title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
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
