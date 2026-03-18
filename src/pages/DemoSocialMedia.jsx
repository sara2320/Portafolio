import { useState } from "react";
import {
  ArrowLeft,
  Download,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";
import { Link } from "react-router-dom";

// Todas las "imágenes" son diseños CSS originales
const PostVisual = ({ id }) => {
  const visuals = {
    1: (
      <div
        className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #833AB4 0%, #E1306C 60%, #F58529 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #fff, transparent)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #fff, transparent)",
            transform: "translate(-30%, 30%)",
          }}
        />
        <div className="text-center z-10 px-6">
          <div className="text-5xl mb-3">🚀</div>
          <p className="text-white font-black text-2xl leading-tight tracking-tight">
            LANZAMIENTO
          </p>
          <p className="text-white/80 font-light text-sm tracking-widest mt-1">
            NUEVA COLECCIÓN
          </p>
          <div className="mt-4 px-6 py-2 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm">
            <p className="text-white text-xs font-semibold tracking-widest">
              DISPONIBLE YA →
            </p>
          </div>
        </div>
      </div>
    ),
    2: (
      <div
        className="w-full h-full flex flex-col relative overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg, #DD2A7B 0%, #833AB4 50%, #1a0533 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="p-5 z-10">
          <div className="flex items-center gap-2 mb-auto">
            <div className="w-7 h-7 rounded-full bg-white/20 border border-white/40" />
            <div>
              <p className="text-white text-xs font-semibold">
                @novatech.studio
              </p>
              <p className="text-white/50 text-[10px]">Behind the scenes</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-white/50 text-[10px] tracking-widest mb-2">
              ASÍ SE HACE
            </p>
            <div className="text-6xl">👀</div>
            <p className="text-white font-black text-xl mt-2">
              DETRÁS DE
              <br />
              CÁMARAS
            </p>
          </div>
        </div>
        <div className="p-5 z-10">
          <div className="flex justify-around">
            {["❤️", "💬", "📤"].map((e) => (
              <span key={e} className="text-xl">
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    3: (
      <div
        className="w-full h-full flex items-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1877F2 0%, #4267B2 100%)",
        }}
      >
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20"
          style={{ background: "linear-gradient(to left, #fff, transparent)" }}
        />
        <div className="z-10 px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Facebook className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">NovaTech Studio</p>
              <p className="text-white/60 text-xs">Empresa de Diseño</p>
            </div>
          </div>
          <p className="text-white font-black text-3xl leading-tight">
            Donde el
            <br />
            diseño
            <br />
            <span className="text-yellow-300">cobra vida.</span>
          </p>
        </div>
      </div>
    ),
    4: (
      <div
        className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A66C2 0%, #004182 100%)",
        }}
      >
        <div className="absolute top-4 left-4 right-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20" />
            <div>
              <div className="h-2 w-20 bg-white/40 rounded mb-1" />
              <div className="h-1.5 w-12 bg-white/20 rounded" />
            </div>
          </div>
        </div>
        <div className="text-center z-10">
          <div className="text-4xl mb-3">💼</div>
          <p className="text-white font-black text-xl leading-tight">
            5 TIPS DE
            <br />
            DISEÑO UX
          </p>
          <p className="text-white/60 text-xs mt-2 tracking-wide">
            para profesionales
          </p>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex gap-4">
          {["👍 234", "💬 48", "↗ 91"].map((s) => (
            <span key={s} className="text-white/60 text-xs">
              {s}
            </span>
          ))}
        </div>
      </div>
    ),
    5: (
      <div
        className="w-full h-full relative overflow-hidden"
        style={{ background: "#0F0F1A" }}
      >
        <div className="absolute inset-0 flex">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex-1 border-r border-white/5 flex flex-col"
            >
              <div
                className="h-1"
                style={{ background: i === 0 ? "#405DE6" : "transparent" }}
              />
              <div className="flex-1 flex items-center justify-center p-2">
                {i === 0 ? (
                  <div className="text-center">
                    <div className="w-6 h-6 rounded-full bg-[#405DE6] text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">
                      1
                    </div>
                    <p className="text-white text-xs font-semibold">
                      Define tu
                    </p>
                    <p className="text-[#405DE6] text-xs font-bold">objetivo</p>
                  </div>
                ) : (
                  <div className="text-center opacity-40">
                    <div className="w-6 h-6 rounded-full border border-white/20 text-white text-xs font-bold flex items-center justify-center mx-auto mb-2">
                      {i + 1}
                    </div>
                    <p className="text-white text-xs">Paso {i + 1}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-[#405DE6] text-xs font-bold tracking-widest">
            TUTORIAL MULTI-SLIDE
          </p>
          <p className="text-white/40 text-[10px] mt-0.5">
            Desliza para continuar →
          </p>
        </div>
      </div>
    ),
    6: (
      <div
        className="w-full h-full flex items-center justify-center relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1DA1F2 0%, #0C85D0 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.1) 0%, transparent 50%)",
          }}
        />
        <div className="text-center z-10 px-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Twitter className="w-5 h-5 text-white" />
            <span className="text-white/60 text-xs tracking-widest">
              ANUNCIO IMPORTANTE
            </span>
          </div>
          <div className="text-6xl mb-3">⚡</div>
          <p className="text-white font-black text-xl leading-tight">
            NUEVA ALIANZA
            <br />
            <span className="text-yellow-300">CONFIRMADA</span>
          </p>
          <div className="mt-3 text-white/60 text-xs">
            #NovaTech #Diseño #Innovación
          </div>
        </div>
      </div>
    ),
  };
  return visuals[id] || null;
};

const posts = [
  {
    id: 1,
    platform: "Instagram",
    format: "Square Post (1080×1080)",
    title: "Lanzamiento de Producto",
    caption: "🚀 Nuevo producto disponible",
    colors: ["#E1306C", "#833AB4", "#F58529"],
  },
  {
    id: 2,
    platform: "Instagram",
    format: "Story (1080×1920)",
    title: "Behind the Scenes",
    caption: "👀 Detrás de cámaras",
    colors: ["#F58529", "#DD2A7B", "#1a0533"],
  },
  {
    id: 3,
    platform: "Facebook",
    format: "Cover Photo (820×312)",
    title: "Banner Principal",
    caption: "Portada corporativa",
    colors: ["#1877F2", "#4267B2"],
  },
  {
    id: 4,
    platform: "LinkedIn",
    format: "Post (1200×627)",
    title: "Contenido Profesional",
    caption: "💼 Tips de diseño UX",
    colors: ["#0A66C2", "#004182"],
  },
  {
    id: 5,
    platform: "Instagram",
    format: "Carousel (1080×1080)",
    title: "Tutorial Multi-slide",
    caption: "📚 Guía paso a paso",
    colors: ["#405DE6", "#5851DB", "#0F0F1A"],
  },
  {
    id: 6,
    platform: "Twitter",
    format: "Tweet Image (1200×675)",
    title: "Anuncio Rápido",
    caption: "⚡ Noticia importante",
    colors: ["#1DA1F2", "#0C85D0"],
  },
];

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    activeCls: "bg-gradient-to-r from-purple-600 to-pink-500 text-white",
  },
  { name: "Facebook", icon: Facebook, activeCls: "bg-blue-600 text-white" },
  { name: "LinkedIn", icon: Linkedin, activeCls: "bg-blue-700 text-white" },
  { name: "Twitter", icon: Twitter, activeCls: "bg-sky-500 text-white" },
];

export default function DemoSocialMedia() {
  const [filter, setFilter] = useState("Todos");
  const [liked, setLiked] = useState({});

  const filtered =
    filter === "Todos" ? posts : posts.filter((p) => p.platform === filter);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/Portfolio"
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <div>
              <h1 className="text-xl font-black text-slate-900">
                Campaña Social Media 2024
              </h1>
              <p className="text-sm text-slate-500">
                Estrategia visual multiplataforma · 4 canales
              </p>
            </div>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold"
            style={{ background: "linear-gradient(135deg, #833AB4, #E1306C)" }}
          >
            <Download className="w-4 h-4" />
            Descargar Kit
          </button>
        </div>
      </header>

      {/* Stats banner */}
      <div
        className="text-white py-10 px-6"
        style={{
          background:
            "linear-gradient(135deg, #833AB4 0%, #E1306C 50%, #F58529 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ["24", "Piezas Diseñadas"],
              ["4", "Plataformas"],
              ["12K+", "Impresiones"],
              ["8.5%", "Engagement Rate"],
            ].map(([val, label]) => (
              <div key={label}>
                <p className="text-3xl font-black">{val}</p>
                <p className="text-white/70 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-slate-200 sticky top-[73px] z-10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 flex-wrap">
          <button
            onClick={() => setFilter("Todos")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${filter === "Todos" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
          >
            Todos
          </button>
          {platforms.map(({ name, icon: Icon, activeCls }) => (
            <button
              key={name}
              onClick={() => setFilter(name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${filter === name ? activeCls : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
            >
              <Icon className="w-4 h-4" />
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => {
            const pl = platforms.find((p) => p.name === post.platform);
            const PlIcon = pl?.icon;
            return (
              <div
                key={post.id}
                className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Visual */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 260 }}
                >
                  <PostVisual id={post.id} />
                  <div className="absolute top-3 right-3">
                    <div
                      className={`p-2 rounded-xl ${pl?.activeCls || "bg-white"} shadow-lg`}
                    >
                      {PlIcon && <PlIcon className="w-4 h-4" />}
                    </div>
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900">{post.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {post.format}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{post.caption}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      {post.colors.map((c, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm ring-1 ring-slate-200"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <button
                        onClick={() =>
                          setLiked((l) => ({ ...l, [post.id]: !l[post.id] }))
                        }
                        className={`transition-colors ${liked[post.id] ? "text-red-500" : "hover:text-red-400"}`}
                      >
                        <Heart
                          className="w-4 h-4"
                          fill={liked[post.id] ? "currentColor" : "none"}
                        />
                      </button>
                      <MessageCircle className="w-4 h-4 hover:text-blue-400 cursor-pointer transition-colors" />
                      <Bookmark className="w-4 h-4 hover:text-yellow-400 cursor-pointer transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Style guide */}
      <div className="bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-black text-slate-900 mb-8">
            Guía de Estilo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Tono de Comunicación",
                items: [
                  "Cercano y profesional",
                  "Emojis estratégicos",
                  "CTAs directos y claros",
                  "Hashtags 3–5 por post",
                ],
              },
              {
                title: "Elementos Visuales",
                items: [
                  "Composición centrada en móvil",
                  "Gradientes vibrantes de marca",
                  "Tipografía bold para impacto",
                  "Contrastes alto para legibilidad",
                ],
              },
              {
                title: "Especificaciones",
                items: [
                  "Instagram Post: 1080×1080px",
                  "Instagram Story: 1080×1920px",
                  "Facebook Cover: 820×312px",
                  "Twitter Post: 1200×675px",
                ],
              },
            ].map(({ title, items }) => (
              <div key={title} className="space-y-3">
                <h3 className="font-bold text-slate-900">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span
                        className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold"
                        style={{
                          background:
                            "linear-gradient(135deg, #833AB4, #E1306C)",
                        }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
