import { useState } from "react";
import {
  ArrowLeft,
  Download,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    platform: "Instagram",
    format: "Square Post",
    title: "Lanzamiento de Producto",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    caption: "🚀 Nuevo producto disponible",
    colors: ["#E1306C", "#833AB4"],
  },
  {
    id: 2,
    platform: "Instagram",
    format: "Story",
    title: "Behind the Scenes",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=700&fit=crop",
    caption: "👀 Detrás de cámaras",
    colors: ["#F58529", "#DD2A7B"],
  },
  {
    id: 3,
    platform: "Facebook",
    format: "Cover Photo",
    title: "Banner Principal",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&h=300&fit=crop",
    caption: "Portada de empresa",
    colors: ["#1877F2", "#4267B2"],
  },
  {
    id: 4,
    platform: "LinkedIn",
    format: "Post",
    title: "Contenido Profesional",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=600&fit=crop",
    caption: "💼 Tips profesionales",
    colors: ["#0A66C2", "#004182"],
  },
  {
    id: 5,
    platform: "Instagram",
    format: "Carousel",
    title: "Tutorial Multi-slide",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop",
    caption: "📚 Guía paso a paso",
    colors: ["#405DE6", "#5851DB"],
  },
  {
    id: 6,
    platform: "Twitter",
    format: "Tweet Image",
    title: "Anuncio Rápido",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    caption: "⚡ Noticia importante",
    colors: ["#1DA1F2", "#0C85D0"],
  },
];

const platforms = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "bg-gradient-to-br from-purple-600 to-pink-500",
  },
  { name: "Facebook", icon: Facebook, color: "bg-blue-600" },
  { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700" },
  { name: "Twitter", icon: Twitter, color: "bg-sky-500" },
];

export default function DemoSocialMedia() {
  const [filter, setFilter] = useState("Todos");

  const filtered =
    filter === "Todos" ? posts : posts.filter((p) => p.platform === filter);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/Portfolio"
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-slate-900">
                Campaña Social Media 2024
              </h1>
              <p className="text-sm text-slate-500">
                Estrategia visual multiplataforma
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Descargar Kit
          </button>
        </div>
      </header>

      {/* Stats */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">24</div>
              <div className="text-sm opacity-90">Piezas Creadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">4</div>
              <div className="text-sm opacity-90">Plataformas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">12K+</div>
              <div className="text-sm opacity-90">Impresiones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">8.5%</div>
              <div className="text-sm opacity-90">Engagement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-slate-200 sticky top-[73px] z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter("Todos")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === "Todos"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Todos
            </button>
            {platforms.map(({ name, icon: Icon, color }) => (
              <button
                key={name}
                onClick={() => setFilter(name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === name
                    ? `${color} text-white`
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => {
            const Platform = platforms.find((p) => p.name === post.platform);
            const PlatformIcon = Platform?.icon;

            return (
              <div
                key={post.id}
                className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">
                        {post.caption}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <div
                      className={`${Platform?.color} p-2 rounded-lg backdrop-blur-sm bg-opacity-90`}
                    >
                      {PlatformIcon && (
                        <PlatformIcon className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {post.format}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {post.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Guía de estilo */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Guía de Estilo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900">
                Tono de Comunicación
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ Cercano y profesional</li>
                <li>✓ Uso de emojis moderado</li>
                <li>✓ Llamadas a la acción claras</li>
                <li>✓ Hashtags estratégicos (3-5)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900">
                Elementos Visuales
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>✓ Fotografías de alta calidad</li>
                <li>✓ Gradientes vibrantes</li>
                <li>✓ Tipografía sans-serif moderna</li>
                <li>✓ Espacios en blanco generosos</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900">Formatos</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Instagram Post: 1080x1080px</li>
                <li>• Instagram Story: 1080x1920px</li>
                <li>• Facebook Cover: 820x312px</li>
                <li>• Twitter Post: 1200x675px</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
