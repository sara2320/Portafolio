import { useScrollReveal } from "../useScrollReveal";
import { Palette, ExternalLink, Eye } from "lucide-react";
import { createPageUrl } from "../../utils";

// CSS-only original thumbnails for each design project
const DesignThumbnail = ({ id }) => {
  if (id === "branding")
    return (
      <div className="w-full h-full bg-[#1a1a2e] flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #6C63FF 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-[#6C63FF]/30 opacity-40" />
        <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full border border-[#FF6584]/30 opacity-40" />
        <div className="text-center z-10">
          <div
            className="text-4xl font-black tracking-tighter mb-1"
            style={{ color: "#6C63FF", textShadow: "0 0 30px #6C63FF80" }}
          >
            NOVA
          </div>
          <div
            className="text-xs tracking-[0.5em] font-light"
            style={{ color: "#6C63FF", opacity: 0.7 }}
          >
            T E C H
          </div>
          <div className="flex gap-1.5 justify-center mt-3">
            {["#6C63FF", "#FF6584", "#00E5FF", "#1A1A2E", "#F8F9FA"].map(
              (c) => (
                <div
                  key={c}
                  className="w-4 h-4 rounded-full border border-white/10"
                  style={{ backgroundColor: c }}
                />
              ),
            )}
          </div>
        </div>
      </div>
    );

  if (id === "social")
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#1a0533] to-[#0d0a1f] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Instagram-like post mockup */}
          <div
            className="absolute top-4 left-4 w-28 h-28 rounded-xl overflow-hidden border border-white/10"
            style={{
              background: "linear-gradient(135deg, #833AB4, #E1306C, #F58529)",
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-2 border-white/60" />
            </div>
          </div>
          <div
            className="absolute top-4 right-4 w-20 h-28 rounded-xl overflow-hidden border border-white/10"
            style={{ background: "linear-gradient(135deg, #0A66C2, #004182)" }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center gap-1 p-2">
              <div className="w-8 h-1 bg-white/50 rounded" />
              <div className="w-6 h-1 bg-white/30 rounded" />
              <div className="w-7 h-1 bg-white/30 rounded" />
            </div>
          </div>
          <div
            className="absolute bottom-4 left-4 right-4 h-20 rounded-xl border border-white/10 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1877F2, #4267B2)" }}
          >
            <div className="w-full h-full flex items-center justify-center gap-3 px-4">
              <div className="w-8 h-8 rounded-full bg-white/20" />
              <div className="flex-1">
                <div className="h-2 bg-white/40 rounded mb-1.5 w-3/4" />
                <div className="h-1.5 bg-white/20 rounded w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  if (id === "packaging")
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#0d2b1a] to-[#0a1f12] flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #2ECC71 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="flex gap-3 z-10">
          {[
            { color: "#7CB342", label: "🍃" },
            { color: "#9575CD", label: "💜" },
            { color: "#FFB300", label: "🍊" },
          ].map(({ color, label }, i) => (
            <div key={i} className="relative">
              <div
                className="w-16 h-24 rounded-xl border border-white/10 flex flex-col items-center justify-between p-2 shadow-lg"
                style={{ backgroundColor: color }}
              >
                <div
                  className="text-xs font-light tracking-widest text-white/70"
                  style={{ fontSize: "6px" }}
                >
                  ECONATURE
                </div>
                <div className="text-2xl">{label}</div>
                <div className="w-8 h-px bg-white/40" />
                <div className="text-white/60" style={{ fontSize: "6px" }}>
                  50ml
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );

  if (id === "poster")
    return (
      <div className="w-full h-full bg-gradient-to-b from-[#0d0221] via-[#1a0533] to-[#0d0221] flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #ff2d78, transparent)",
          }}
        />
        <div className="text-center z-10">
          <div
            className="text-xs tracking-widest mb-1"
            style={{ color: "#ff2d78" }}
          >
            LIVE MUSIC
          </div>
          <div
            className="text-4xl font-black text-white tracking-tighter"
            style={{ textShadow: "0 0 30px #ff2d7880" }}
          >
            SOUND
          </div>
          <div
            className="text-4xl font-black tracking-tighter mb-2"
            style={{ color: "#ff2d78", textShadow: "0 0 30px #ff2d78" }}
          >
            WAVE
          </div>
          <div
            className="w-24 h-px mx-auto mb-2"
            style={{
              background:
                "linear-gradient(to right, transparent, #ff2d78, transparent)",
            }}
          />
          <div className="text-white/60 text-xs tracking-widest">
            FESTIVAL 2024
          </div>
          <div className="text-white/40 text-xs mt-1">15 · 16 · 17 AGO</div>
        </div>
      </div>
    );

  if (id === "uikit")
    return (
      <div className="w-full h-full bg-slate-100 flex items-center justify-center relative overflow-hidden p-3">
        <div className="w-full h-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
          {/* Fake top bar */}
          <div className="h-6 bg-indigo-600 flex items-center px-3 gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="flex-1 h-2 bg-white/20 rounded-full" />
          </div>
          {/* Fake content */}
          <div className="flex-1 p-2 space-y-1.5">
            <div className="flex gap-1.5">
              <div className="h-5 px-3 bg-indigo-500 rounded-lg flex items-center">
                <div className="w-6 h-1.5 bg-white/80 rounded" />
              </div>
              <div className="h-5 px-3 bg-slate-100 border border-slate-200 rounded-lg flex items-center">
                <div className="w-6 h-1.5 bg-slate-400 rounded" />
              </div>
            </div>
            <div className="h-8 bg-slate-50 border border-slate-200 rounded-lg flex items-center px-2 gap-1">
              <div className="w-2 h-2 rounded-full bg-slate-300" />
              <div className="flex-1 h-1.5 bg-slate-200 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="h-10 bg-indigo-50 border border-indigo-200 rounded-lg p-1.5">
                <div className="w-4 h-1.5 bg-indigo-400 rounded mb-1" />
                <div className="w-6 h-1 bg-indigo-200 rounded" />
              </div>
              <div className="h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-1.5">
                <div className="w-4 h-1.5 bg-white/60 rounded mb-1" />
                <div className="w-6 h-1 bg-white/30 rounded" />
              </div>
            </div>
            <div className="flex gap-1">
              {["#6366F1", "#10B981", "#F59E0B", "#EF4444"].map((c) => (
                <div
                  key={c}
                  className="flex-1 h-3 rounded-md"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );

  if (id === "ilustraciones")
    return (
      <div className="w-full h-full bg-[#0a0a0f] flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute top-3 left-3 w-16 h-16 rounded-xl border border-purple-500/20 flex items-center justify-center text-3xl"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #6C63FF30, transparent)",
          }}
        >
          🌌
        </div>
        <div
          className="absolute top-3 right-3 w-14 h-14 rounded-xl border border-pink-500/20 flex items-center justify-center text-2xl"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, #FF658430, transparent)",
          }}
        >
          🧠
        </div>
        <div
          className="absolute bottom-3 left-3 w-14 h-14 rounded-xl border border-green-500/20 flex items-center justify-center text-2xl"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, #2ECC7130, transparent)",
          }}
        >
          🌿
        </div>
        <div
          className="absolute bottom-3 right-3 w-16 h-16 rounded-xl border border-cyan-500/20 flex items-center justify-center text-3xl"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, #00E5FF30, transparent)",
          }}
        >
          🏙️
        </div>
        <div className="z-10 text-center">
          <div className="text-xs tracking-widest text-purple-400 mb-1">
            EDITORIAL
          </div>
          <div className="text-4xl mb-1">🎨</div>
          <div className="text-xs text-white/40">6 ilustraciones</div>
        </div>
      </div>
    );

  return null;
};

const designs = [
  {
    id: "branding",
    title: "Identidad Visual Corporativa",
    description:
      "Diseño completo de marca incluyendo logo, paleta de colores, tipografía y manual de identidad.",
    category: "Branding",
    tools: ["Illustrator", "Photoshop", "InDesign"],
    views: "2.3k",
    featured: true,
    demo: createPageUrl("DemoBranding"),
  },
  {
    id: "social",
    title: "Campaña Social Media",
    description:
      "Serie de 20+ piezas gráficas para redes sociales con concepto creativo unificado.",
    category: "Social Media",
    tools: ["Figma", "After Effects", "Canva"],
    views: "1.8k",
    featured: true,
    demo: createPageUrl("DemoSocialMedia"),
  },
  {
    id: "packaging",
    title: "Packaging Producto",
    description:
      "Diseño de empaque y etiquetas para línea de productos orgánicos premium.",
    category: "Packaging",
    tools: ["Illustrator", "Photoshop"],
    views: "1.5k",
    featured: false,
    demo: createPageUrl("DemoPackaging"),
  },
  {
    id: "poster",
    title: "Poster Evento Cultural",
    description:
      "Serie de posters para festival de música con estilo vibrante y moderno.",
    category: "Print Design",
    tools: ["Photoshop", "Illustrator"],
    views: "1.2k",
    featured: false,
    demo: createPageUrl("DemoPoster"),
  },
  {
    id: "uikit",
    title: "UI Kit Mobile App",
    description:
      "Sistema de diseño completo con componentes reutilizables y guías de estilo.",
    category: "UI/UX",
    tools: ["Figma", "Adobe XD"],
    views: "3.1k",
    featured: false,
    demo: createPageUrl("DemoUIKit"),
  },
  {
    id: "ilustraciones",
    title: "Ilustraciones Editorial",
    description:
      "Set de ilustraciones personalizadas para revista digital de tecnología.",
    category: "Ilustración",
    tools: ["Procreate", "Illustrator"],
    views: "2.7k",
    featured: false,
    demo: createPageUrl("DemoIlustraciones"),
  },
];

export default function DesignSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="diseno"
      className="py-24 relative overflow-hidden bg-secondary/20"
    >
      <div className="orb absolute w-96 h-96 bg-neon-green/6 top-0 left-0" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-code text-neon-cyan text-sm">// 04</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2">
            Diseño Gráfico
          </h2>
          <p className="text-muted-foreground text-sm mt-6 max-w-md mx-auto">
            Proyectos creativos que combinan estética y funcionalidad visual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((d, i) => (
            <div
              key={d.title}
              className={`project-card glass-card border rounded-2xl overflow-hidden group ${d.featured ? "border-neon-green/30" : "border-border"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Original CSS thumbnail */}
              <div className="relative h-44 overflow-hidden">
                <DesignThumbnail id={d.id} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                {d.featured && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-neon-green/20 border border-neon-green/40 text-neon-green text-xs font-medium">
                    ✨ Destacado
                  </div>
                )}
                <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-dark-900/80 backdrop-blur-sm text-white text-xs font-medium">
                  {d.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  {d.description}
                </p>

                {/* Tools tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {d.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full bg-neon-green/8 border border-neon-green/15 text-neon-green text-xs font-code"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Eye className="w-3 h-3" />
                    <span>{d.views} vistas</span>
                  </div>
                  {d.demo ? (
                    <a
                      href={d.demo}
                      target="_self"
                      className="flex items-center gap-1.5 p-1.5 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-neon-green transition-all text-xs"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button className="flex items-center gap-1.5 p-1.5 rounded-lg text-muted-foreground/50 cursor-not-allowed text-xs">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-muted-foreground text-sm hover:text-foreground hover:border-neon-green/30 transition-all"
          >
            <Palette className="w-4 h-4" />
            Ver portafolio completo en Behance
          </a>
        </div>
      </div>
    </section>
  );
}
