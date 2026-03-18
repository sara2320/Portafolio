import { useState } from "react";
import {
  ArrowLeft,
  Download,
  Smartphone,
  Bell,
  Search,
  Heart,
  Star,
  ChevronRight,
  Home,
  Settings,
  User,
  Grid,
  Sun,
  Moon,
  Zap,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const colorPalette = [
  {
    name: "Primary",
    values: ["#6366F1", "#818CF8", "#A5B4FC", "#C7D2FE", "#EEF2FF"],
  },
  {
    name: "Success",
    values: ["#10B981", "#34D399", "#6EE7B7", "#A7F3D0", "#ECFDF5"],
  },
  {
    name: "Warning",
    values: ["#F59E0B", "#FBBF24", "#FCD34D", "#FDE68A", "#FFFBEB"],
  },
  {
    name: "Error",
    values: ["#EF4444", "#F87171", "#FCA5A5", "#FECACA", "#FEF2F2"],
  },
  {
    name: "Neutral",
    values: ["#1F2937", "#374151", "#6B7280", "#D1D5DB", "#F9FAFB"],
  },
];

const components = [
  {
    id: "buttons",
    name: "Botones",
    preview: () => (
      <div className="p-8 space-y-4">
        <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-5">
          Variantes
        </p>
        <div className="flex flex-wrap gap-3 items-center">
          <button
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
              boxShadow: "0 4px 15px rgba(99,102,241,0.4)",
            }}
          >
            Primary
          </button>
          <button className="px-5 py-2.5 rounded-xl text-sm font-bold text-indigo-600 bg-indigo-50 border-2 border-indigo-200 hover:bg-indigo-100 transition-all">
            Secondary
          </button>
          <button className="px-5 py-2.5 rounded-xl text-sm font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 shadow-sm transition-all">
            Ghost
          </button>
          <button
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg transition-all"
            style={{
              background: "linear-gradient(135deg, #EF4444, #F97316)",
              boxShadow: "0 4px 15px rgba(239,68,68,0.3)",
            }}
          >
            Danger
          </button>
          <button
            className="w-10 h-10 rounded-xl text-white flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: "linear-gradient(135deg, #10B981, #059669)",
              boxShadow: "0 4px 12px rgba(16,185,129,0.35)",
            }}
          >
            <CheckCircle className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-xl border border-slate-200 text-slate-400 flex items-center justify-center hover:bg-slate-50 transition-all">
            <Heart className="w-4 h-4" />
          </button>
        </div>
        <div className="flex flex-wrap gap-3 items-center mt-2">
          <button
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white opacity-50 cursor-not-allowed"
            style={{ background: "#6366F1" }}
          >
            Disabled
          </button>
          <button className="px-5 py-2.5 rounded-xl text-sm font-bold text-indigo-600 border-2 border-indigo-300 bg-transparent flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-indigo-400 border-t-transparent animate-spin" />
            Cargando...
          </button>
          <button
            className="px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-lg"
            style={{ background: "linear-gradient(135deg, #6366F1, #EC4899)" }}
          >
            Pill Shape
          </button>
        </div>
      </div>
    ),
  },
  {
    id: "cards",
    name: "Tarjetas",
    preview: () => (
      <div className="p-8 flex flex-wrap gap-4 justify-center">
        {/* Stat card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 w-52">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
              <Zap className="w-5 h-5 text-indigo-500" />
            </div>
            <span className="text-xs text-green-500 font-semibold bg-green-50 px-2 py-0.5 rounded-full">
              +12%
            </span>
          </div>
          <p className="text-2xl font-black text-slate-900">2,847</p>
          <p className="text-xs text-slate-400 mt-0.5">Usuarios activos</p>
        </div>
        {/* Gradient card */}
        <div
          className="rounded-2xl p-5 w-52 text-white"
          style={{
            background: "linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)",
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4">
            <Star className="w-5 h-5 text-yellow-300" />
          </div>
          <p className="font-black text-lg">Premium</p>
          <p className="text-white/70 text-xs mt-1">
            Desbloquea todo el sistema
          </p>
          <div className="mt-4 px-3 py-1.5 rounded-lg bg-white/20 text-xs font-semibold text-center">
            Actualizar →
          </div>
        </div>
        {/* Alert card */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 w-52">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            <p className="font-bold text-amber-800 text-sm">Atención</p>
          </div>
          <p className="text-xs text-amber-700 leading-relaxed">
            Tu prueba gratuita vence en 3 días.
          </p>
          <button className="mt-3 text-xs font-semibold text-amber-600 underline">
            Renovar ahora
          </button>
        </div>
      </div>
    ),
  },
  {
    id: "inputs",
    name: "Inputs",
    preview: () => (
      <div className="p-8 max-w-sm mx-auto space-y-4">
        <div>
          <label className="text-xs font-bold text-slate-600 mb-1.5 block tracking-wide uppercase">
            Usuario
          </label>
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-400" />
            <div className="w-full bg-indigo-50 border-2 border-indigo-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-indigo-700 font-medium focus:outline-none ring-4 ring-indigo-100">
              @alexacastrillon
            </div>
          </div>
          <p className="text-xs text-indigo-500 mt-1 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Usuario disponible
          </p>
        </div>
        <div>
          <label className="text-xs font-bold text-slate-600 mb-1.5 block tracking-wide uppercase">
            Contraseña
          </label>
          <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-400">
            ••••••••••
          </div>
        </div>
        <div>
          <label className="text-xs font-bold text-red-500 mb-1.5 block tracking-wide uppercase">
            Email
          </label>
          <div className="w-full bg-red-50 border-2 border-red-300 rounded-xl px-4 py-2.5 text-sm text-red-600">
            invalido@
          </div>
          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            Ingresa un email válido
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-indigo-500 flex items-center justify-center">
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
            <span className="text-xs text-slate-700 font-medium">
              Recuérdame
            </span>
          </div>
          <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2 border-slate-300" />
            <span className="text-xs text-slate-400">Newsletter</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "nav",
    name: "Navegación",
    preview: () => (
      <div className="p-8 space-y-4">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100">
          {[
            {
              icon: User,
              label: "Mi Perfil",
              sub: "Ver y editar cuenta",
              badge: null,
              active: true,
            },
            {
              icon: Bell,
              label: "Notificaciones",
              sub: "3 mensajes nuevos",
              badge: "3",
              active: false,
            },
            {
              icon: Settings,
              label: "Configuración",
              sub: "Privacidad y seguridad",
              badge: null,
              active: false,
            },
          ].map(({ icon: Icon, label, sub, badge, active }) => (
            <div
              key={label}
              className={`flex items-center gap-3 p-4 border-b border-slate-50 last:border-0 ${active ? "bg-indigo-50" : "hover:bg-slate-50"} transition-colors cursor-pointer`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center ${active ? "bg-indigo-500" : "bg-slate-100"}`}
              >
                <Icon
                  className={`w-4 h-4 ${active ? "text-white" : "text-slate-500"}`}
                />
              </div>
              <div className="flex-1">
                <p
                  className={`text-sm font-semibold ${active ? "text-indigo-700" : "text-slate-800"}`}
                >
                  {label}
                </p>
                <p className="text-xs text-slate-400">{sub}</p>
              </div>
              {badge ? (
                <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                  {badge}
                </span>
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-300" />
              )}
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 px-2 py-1.5 flex justify-around">
          {[Home, Search, Grid, Heart, User].map((Icon, i) => (
            <button
              key={i}
              className={`flex flex-col items-center gap-1 p-2.5 rounded-xl transition-all ${i === 0 ? "bg-indigo-50" : "hover:bg-slate-50"}`}
            >
              <Icon
                className={`w-5 h-5 ${i === 0 ? "text-indigo-600" : "text-slate-300"}`}
              />
              {i === 0 && (
                <span className="w-1 h-1 rounded-full bg-indigo-500" />
              )}
            </button>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "badges",
    name: "Badges & Tags",
    preview: () => (
      <div className="p-8 space-y-5">
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Nuevo", bg: "#EEF2FF", fg: "#6366F1", dot: "#6366F1" },
            { label: "Activo", bg: "#ECFDF5", fg: "#10B981", dot: "#10B981" },
            {
              label: "Pendiente",
              bg: "#FFFBEB",
              fg: "#F59E0B",
              dot: "#F59E0B",
            },
            { label: "Error", bg: "#FEF2F2", fg: "#EF4444", dot: "#EF4444" },
            {
              label: "Archivado",
              bg: "#F9FAFB",
              fg: "#6B7280",
              dot: "#6B7280",
            },
          ].map(({ label, bg, fg, dot }) => (
            <span
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: bg, color: fg }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: dot }}
              />
              {label}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "Figma", "Node.js", "Tailwind"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-900 text-slate-100"
              >
                {tag}
              </span>
            ),
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            ["🔥 Trending", "#FF6B35"],
            ["⚡ Fast", "#F59E0B"],
            ["💎 Premium", "#6366F1"],
            ["🌟 Top Pick", "#EC4899"],
          ].map(([label, color]) => (
            <span
              key={label}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
              style={{ background: color }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export default function DemoUIKit() {
  const [activeComponent, setActiveComponent] = useState("buttons");
  const [darkMode, setDarkMode] = useState(false);
  const ActivePreview = components.find(
    (c) => c.id === activeComponent,
  )?.preview;

  return (
    <div
      className={`min-h-screen transition-colors ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}
    >
      <header
        className={`border-b sticky top-0 z-10 backdrop-blur-lg ${darkMode ? "bg-slate-900/90 border-white/10" : "bg-white/90 border-slate-200"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/Portfolio"
              className={`p-2 rounded-xl transition-colors ${darkMode ? "hover:bg-white/10" : "hover:bg-slate-100"}`}
            >
              <ArrowLeft
                className={`w-5 h-5 ${darkMode ? "text-white/50" : "text-slate-600"}`}
              />
            </Link>
            <div>
              <h1
                className={`text-xl font-black ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                NovaMobile UI Kit
              </h1>
              <p
                className={`text-sm ${darkMode ? "text-white/40" : "text-slate-500"}`}
              >
                Sistema de diseño · 80+ componentes
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all ${darkMode ? "bg-white/10 border-white/20 text-yellow-400" : "bg-slate-100 border-slate-200 text-slate-600"}`}
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white"
              style={{
                background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
              }}
            >
              <Download className="w-4 h-4" />
              Descargar Kit
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-5">
            <div
              className={`rounded-2xl border p-6 ${darkMode ? "bg-slate-800 border-white/10" : "bg-white border-slate-100"} shadow-sm`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                  }}
                >
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p
                    className={`font-black text-lg ${darkMode ? "text-white" : "text-slate-900"}`}
                  >
                    NovaMobile DS
                  </p>
                  <p className="text-xs text-indigo-500 font-mono font-semibold">
                    v2.4.0 — Figma
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                {[
                  ["80+", "Componentes"],
                  ["12", "Pantallas"],
                  ["5", "Temas"],
                ].map(([v, l]) => (
                  <div
                    key={l}
                    className={`rounded-xl p-3 ${darkMode ? "bg-white/5" : "bg-slate-50"}`}
                  >
                    <p className="font-black text-lg text-indigo-500">{v}</p>
                    <p
                      className={`${darkMode ? "text-white/40" : "text-slate-400"}`}
                    >
                      {l}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`rounded-2xl border p-5 ${darkMode ? "bg-slate-800 border-white/10" : "bg-white border-slate-100"} shadow-sm`}
            >
              <h3
                className={`font-bold mb-3 text-sm ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Componentes
              </h3>
              <div className="space-y-1">
                {components.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => setActiveComponent(comp.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      activeComponent === comp.id
                        ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/20"
                        : darkMode
                          ? "text-white/50 hover:bg-white/10 hover:text-white"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    {comp.name}
                  </button>
                ))}
              </div>
            </div>

            <div
              className={`rounded-2xl border p-5 ${darkMode ? "bg-slate-800 border-white/10" : "bg-white border-slate-100"} shadow-sm`}
            >
              <h3
                className={`font-bold mb-4 text-sm ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Paleta
              </h3>
              <div className="space-y-2.5">
                {colorPalette.map((g) => (
                  <div key={g.name}>
                    <p
                      className={`text-[10px] uppercase tracking-widest mb-1.5 ${darkMode ? "text-white/30" : "text-slate-400"}`}
                    >
                      {g.name}
                    </p>
                    <div className="flex gap-1">
                      {g.values.map((c) => (
                        <div
                          key={c}
                          className="flex-1 h-7 rounded-lg border border-black/5 cursor-pointer hover:scale-110 transition-transform"
                          style={{ backgroundColor: c }}
                          title={c}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className={`rounded-2xl border overflow-hidden ${darkMode ? "bg-slate-800 border-white/10" : "bg-white border-slate-100"} shadow-sm`}
            >
              <div
                className={`border-b px-6 py-4 flex items-center justify-between ${darkMode ? "border-white/10" : "border-slate-100"}`}
              >
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <p
                    className={`text-sm font-bold ml-2 ${darkMode ? "text-white" : "text-slate-800"}`}
                  >
                    {components.find((c) => c.id === activeComponent)?.name}
                  </p>
                </div>
                <span
                  className={`text-xs font-mono px-2 py-1 rounded-lg ${darkMode ? "bg-white/10 text-white/40" : "bg-slate-100 text-slate-400"}`}
                >
                  Preview
                </span>
              </div>
              <div className={darkMode ? "bg-slate-900/50" : "bg-slate-50"}>
                {ActivePreview && <ActivePreview />}
              </div>
            </div>

            {/* Phone mockup */}
            <div
              className={`rounded-2xl border p-8 ${darkMode ? "bg-slate-800 border-white/10" : "bg-white border-slate-100"} shadow-sm`}
            >
              <h3
                className={`font-bold text-center mb-6 ${darkMode ? "text-white" : "text-slate-900"}`}
              >
                Vista en Dispositivo
              </h3>
              <div className="flex justify-center">
                <div className="relative w-60">
                  <div
                    className="bg-slate-900 rounded-[2.8rem] p-2 shadow-2xl"
                    style={{
                      boxShadow:
                        "0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Notch */}
                    <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-full z-10" />
                    <div className="bg-white rounded-[2.3rem] overflow-hidden">
                      <div
                        className="pt-8"
                        style={{
                          background:
                            "linear-gradient(160deg, #6366F1 0%, #8B5CF6 100%)",
                        }}
                      >
                        <div className="px-5 py-4 text-white">
                          <p className="text-xs opacity-60 mb-0.5">
                            Lunes, 16 Mar
                          </p>
                          <p className="text-lg font-black">Hola, Alexa 👋</p>
                          <div className="mt-3 bg-white/20 rounded-2xl px-3 py-2 flex items-center gap-2 backdrop-blur-sm">
                            <Search className="w-3.5 h-3.5 opacity-60" />
                            <span className="text-xs opacity-60">
                              Buscar componentes...
                            </span>
                          </div>
                        </div>
                        {/* Wave effect */}
                        <div
                          className="h-4 bg-white"
                          style={{
                            borderRadius: "60% 60% 0 0 / 30px 30px 0 0",
                          }}
                        />
                      </div>
                      <div className="px-4 py-3 space-y-3 bg-white">
                        <div className="flex gap-2">
                          {["Botones", "Cards", "Nav"].map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-semibold"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {[1, 2].map((i) => (
                          <div
                            key={i}
                            className="bg-slate-50 rounded-2xl p-3 flex items-center gap-3"
                          >
                            <div
                              className="w-9 h-9 rounded-xl flex-shrink-0"
                              style={{
                                background:
                                  i === 1
                                    ? "linear-gradient(135deg, #6366F1, #8B5CF6)"
                                    : "linear-gradient(135deg, #10B981, #059669)",
                              }}
                            />
                            <div className="flex-1">
                              <div className="h-2.5 bg-slate-200 rounded-full w-20 mb-1.5" />
                              <div className="h-2 bg-slate-100 rounded-full w-14" />
                            </div>
                            <Heart className="w-4 h-4 text-slate-200" />
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-slate-100 bg-white flex justify-around px-2 py-2">
                        {[Home, Search, Grid, User].map((Icon, i) => (
                          <button
                            key={i}
                            className={`p-2 rounded-xl ${i === 0 ? "bg-indigo-50 text-indigo-600" : "text-slate-300"}`}
                          >
                            <Icon className="w-4 h-4" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
