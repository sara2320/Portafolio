import { useState } from "react";
import { ArrowLeft, Download, ZoomIn, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const illustrations = [
  {
    id: 1,
    title: "Espacio Digital",
    category: "Editorial",
    desc: "Ilustración de portada para artículo sobre el futuro de internet y la conectividad global.",
    colors: ["#6C63FF", "#FF6584", "#3ECFCF", "#1A1A2E"],
    bg: "from-[#0d0221] to-[#1a1a2e]",
    emoji: "🌌",
    tools: ["Procreate", "Illustrator"],
    page: "Tecnología y Futuro",
  },
  {
    id: 2,
    title: "Ecosistema Verde",
    category: "Medioambiente",
    desc: "Ilustración conceptual para reportaje sobre biodiversidad y conservación de ecosistemas.",
    colors: ["#2ECC71", "#27AE60", "#F9CA24", "#6C5CE7"],
    bg: "from-[#0d2b1a] to-[#1a3d28]",
    emoji: "🌿",
    tools: ["Procreate", "Photoshop"],
    page: "Planeta Vivo",
  },
  {
    id: 3,
    title: "Mente Creativa",
    category: "Psicología",
    desc: "Representación visual del proceso creativo para columna de opinión sobre neurociencia.",
    colors: ["#FD79A8", "#FDCB6E", "#6C5CE7", "#00CEC9"],
    bg: "from-[#2d1b33] to-[#1a1040]",
    emoji: "🧠",
    tools: ["Illustrator", "Procreate"],
    page: "Mente Humana",
  },
  {
    id: 4,
    title: "Ciudad Conectada",
    category: "Urbanismo",
    desc: "Infografía ilustrada sobre smart cities y el impacto del IoT en las ciudades modernas.",
    colors: ["#00E5FF", "#0099CC", "#1A1A2E", "#FF6B35"],
    bg: "from-[#050d1a] to-[#0d1f35]",
    emoji: "🏙️",
    tools: ["Illustrator", "After Effects"],
    page: "Ciudad Futura",
  },
  {
    id: 5,
    title: "Inteligencia Artificial",
    category: "Tecnología",
    desc: "Portada para serie especial de reportajes sobre el impacto de la IA en el trabajo.",
    colors: ["#A855F7", "#7C3AED", "#EC4899", "#F59E0B"],
    bg: "from-[#1a0533] to-[#2d0d52]",
    emoji: "🤖",
    tools: ["Procreate", "Figma"],
    page: "IA & Futuro",
  },
  {
    id: 6,
    title: "Cultura Pop Latina",
    category: "Cultural",
    desc: "Serie de ilustraciones vibrantes celebrando la diversidad cultural latinoamericana.",
    colors: ["#FF6B35", "#FFD93D", "#6BCB77", "#4D96FF"],
    bg: "from-[#2d1500] to-[#1a0d00]",
    emoji: "🎨",
    tools: ["Procreate", "Illustrator"],
    page: "Latitudes",
  },
];

export default function DemoIlustraciones() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-lg border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/Portfolio"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-400" />
            </Link>
            <div>
              <h1 className="text-xl font-bold">Ilustraciones Editorial</h1>
              <p className="text-sm text-gray-400">
                Set de 6 ilustraciones para revista digital de tecnología
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Portafolio PDF
          </button>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-pink-900/20" />
        <div className="max-w-7xl mx-auto px-6 py-16 relative">
          <div className="max-w-2xl">
            <p className="text-purple-400 text-sm font-medium tracking-wider uppercase mb-3">
              Ilustración Editorial
            </p>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Arte que da vida a las historias
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Serie de ilustraciones digitales creadas para acompañar reportajes
              de la revista
              <span className="text-white font-medium"> TechMag</span>,
              combinando concepto narrativo con estética contemporánea.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {illustrations.map((ill) => (
            <div
              key={ill.id}
              className="group relative rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:border-white/30 transition-all hover:scale-[1.02]"
              onClick={() => setSelected(ill)}
            >
              {/* Illustration "canvas" */}
              <div
                className={`h-64 bg-gradient-to-br ${ill.bg} relative flex items-center justify-center overflow-hidden`}
              >
                {/* Abstract shapes */}
                <div
                  className="absolute w-48 h-48 rounded-full opacity-20 blur-2xl"
                  style={{
                    backgroundColor: ill.colors[0],
                    top: "10%",
                    left: "10%",
                  }}
                />
                <div
                  className="absolute w-32 h-32 rounded-full opacity-20 blur-xl"
                  style={{
                    backgroundColor: ill.colors[1],
                    bottom: "10%",
                    right: "10%",
                  }}
                />
                {/* Main icon */}
                <div className="relative text-7xl filter drop-shadow-2xl select-none transform group-hover:scale-110 transition-transform duration-300">
                  {ill.emoji}
                </div>
                {/* Color dots */}
                <div className="absolute bottom-4 left-4 flex gap-1.5">
                  {ill.colors.map((color) => (
                    <div
                      key={color}
                      className="w-4 h-4 rounded-full border border-white/30"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <ZoomIn className="w-5 h-5" />
                    Ver detalles
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="bg-[#111118] p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-white">{ill.title}</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Tag className="w-3 h-3 text-purple-400" />
                      <span className="text-xs text-purple-400">
                        {ill.category}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-lg">
                    {ill.page}
                  </span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                  {ill.desc}
                </p>
                <div className="flex gap-1.5 mt-3">
                  {ill.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#111118] border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`h-72 bg-gradient-to-br ${selected.bg} relative flex items-center justify-center`}
            >
              <div
                className="absolute w-56 h-56 rounded-full opacity-25 blur-3xl"
                style={{ backgroundColor: selected.colors[0] }}
              />
              <div className="text-9xl filter drop-shadow-2xl select-none">
                {selected.emoji}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{selected.title}</h2>
                  <span className="text-purple-400 text-sm">
                    {selected.category} · {selected.page}
                  </span>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                {selected.desc}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {selected.colors.map((color) => (
                    <div
                      key={color}
                      className="w-8 h-8 rounded-lg border border-white/10"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex gap-1.5">
                  {selected.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
