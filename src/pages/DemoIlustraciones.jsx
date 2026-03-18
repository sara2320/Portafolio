import { useState } from "react";
import { ArrowLeft, Download, ZoomIn, Tag, X } from "lucide-react";
import { Link } from "react-router-dom";

// Ilustraciones 100% CSS - originales y únicas
const IllustrationCanvas = ({ id, large = false }) => {
  const size = large ? "h-72" : "h-64";

  const canvases = {
    6: (
      <div
        className={`w-full ${size} relative overflow-hidden flex items-center justify-center`}
        style={{
          background:
            "linear-gradient(160deg, #2d1500 0%, #1a0d00 50%, #2d1500 100%)",
        }}
      >
        {/* Colorful confetti-like shapes */}
        {[
          ["#FF6B35", 10, 15],
          ["#FFD93D", 75, 20],
          ["#6BCB77", 20, 70],
          ["#4D96FF", 80, 65],
          ["#FF6B35", 50, 10],
          ["#FFD93D", 40, 80],
        ].map(([c, l, t], i) => (
          <div
            key={i}
            className="absolute w-8 h-8 rounded-full opacity-40"
            style={{
              backgroundColor: String(c), // ✅ FIX
              left: `${l}%`,
              top: `${t}%`,
              transform: `rotate(${i * 30}deg)`,
            }}
          />
        ))}

        {/* Wavy lines */}
        <svg className="absolute inset-0 w-full h-full opacity-15">
          <path
            d="M0,40 Q50,20 100,40 Q150,60 200,40"
            stroke="#FFD93D"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,60 Q50,80 100,60 Q150,40 200,60"
            stroke="#FF6B35"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div className="relative z-10 text-center">
          <div
            className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #FF6B35, #FFD93D, #6BCB77, #4D96FF)",
              boxShadow: "0 0 40px #FF6B3560",
            }}
          >
            <span className="text-3xl">🎨</span>
          </div>
          <div className="text-orange-300/80 text-xs tracking-widest">
            CULTURA POP LATINA
          </div>
        </div>
      </div>
    ),
  };

  return canvases[id] || null;
};

const illustrations = [
  {
    id: 6,
    title: "Cultura Pop Latina",
    category: "Cultural",
    desc: "Serie de ilustraciones vibrantes celebrando la diversidad cultural latinoamericana.",
    colors: ["#FF6B35", "#FFD93D", "#6BCB77", "#4D96FF"],
    tools: ["Procreate", "Illustrator"],
    page: "Latitudes",
  },
];

export default function DemoIlustraciones() {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#07070f" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {illustrations.map((ill) => (
            <div
              key={ill.id}
              className="group relative rounded-2xl overflow-hidden border border-white/8 cursor-pointer"
              onClick={() => setSelected(ill)}
            >
              <IllustrationCanvas id={ill.id} />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-sm">
                  <ZoomIn className="w-4 h-4" />
                  Ver detalles
                </div>
              </div>

              {/* Colors */}
              <div className="absolute top-3 left-3 flex gap-1">
                {ill.colors.map((c) => (
                  <div
                    key={c}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              <div className="p-5 bg-[#0f0f1a]">
                <h3 className="font-bold">{ill.title}</h3>
                <p className="text-xs text-white/40">{ill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#0f0f1a] p-6 rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <IllustrationCanvas id={selected.id} large />
            <h2 className="text-xl mt-4">{selected.title}</h2>
            <p className="text-white/50">{selected.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
