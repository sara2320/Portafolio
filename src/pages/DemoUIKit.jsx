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
    values: ["#F59E0B", "#FBbf24", "#FCD34D", "#FDE68A", "#FFFBEB"],
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
      <div className="flex flex-wrap gap-3 items-center justify-center p-6">
        <button className="px-5 py-2.5 bg-indigo-500 text-white rounded-xl text-sm font-semibold hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/30">
          Primary
        </button>
        <button className="px-5 py-2.5 bg-white text-indigo-600 border-2 border-indigo-200 rounded-xl text-sm font-semibold hover:bg-indigo-50 transition-colors">
          Secondary
        </button>
        <button className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors">
          Ghost
        </button>
        <button className="px-5 py-2.5 bg-red-500 text-white rounded-xl text-sm font-semibold hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30">
          Danger
        </button>
        <button className="w-10 h-10 bg-indigo-500 text-white rounded-xl flex items-center justify-center hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/30">
          <Heart className="w-4 h-4" />
        </button>
      </div>
    ),
  },
  {
    id: "cards",
    name: "Tarjetas",
    preview: () => (
      <div className="flex gap-4 flex-wrap justify-center p-6">
        <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 w-56">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center mb-3">
            <Star className="w-5 h-5 text-indigo-500" />
          </div>
          <p className="font-bold text-gray-900 mb-1">Tarjeta Info</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Descripción breve del contenido de la tarjeta.
          </p>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-5 shadow-md w-56 text-white">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
            <Bell className="w-5 h-5" />
          </div>
          <p className="font-bold mb-1">Tarjeta Acción</p>
          <p className="text-xs opacity-80 leading-relaxed">
            Versión con gradiente para destacar.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "inputs",
    name: "Inputs",
    preview: () => (
      <div className="space-y-3 p-6 max-w-xs mx-auto">
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
            Nombre de usuario
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              readOnly
              value="@alexacastrillon"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-gray-600 mb-1.5 block">
            Contraseña
          </label>
          <input
            readOnly
            type="password"
            value="password"
            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-red-500 mb-1.5 block">
            Email (error)
          </label>
          <input
            readOnly
            value="invalido@"
            className="w-full bg-red-50 border-2 border-red-300 rounded-xl px-4 py-2.5 text-sm text-red-700"
          />
          <p className="text-xs text-red-500 mt-1">
            Por favor ingresa un email válido
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "nav",
    name: "Navegación",
    preview: () => (
      <div className="p-6 space-y-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-indigo-50">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Perfil</p>
              <p className="text-xs text-gray-500">Configurar cuenta</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Bell className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">
                Notificaciones
              </p>
              <p className="text-xs text-gray-500">3 nuevas</p>
            </div>
            <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">
              3
            </span>
          </div>
          <div className="flex items-center gap-3 p-4 hover:bg-gray-50">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Settings className="w-4 h-4 text-gray-500" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Ajustes</p>
              <p className="text-xs text-gray-500">Privacidad y seguridad</p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        {/* Tab bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 flex justify-around">
          {[Home, Search, Grid, Heart, User].map((Icon, i) => (
            <button
              key={i}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl ${i === 0 ? "bg-indigo-50 text-indigo-600" : "text-gray-400"}`}
            >
              <Icon className="w-5 h-5" />
              {i === 0 && (
                <span className="w-1 h-1 rounded-full bg-indigo-500" />
              )}
            </button>
          ))}
        </div>
      </div>
    ),
  },
];

export default function DemoUIKit() {
  const [activeComponent, setActiveComponent] = useState("buttons");

  const ActivePreview = components.find(
    (c) => c.id === activeComponent,
  )?.preview;

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
                UI Kit Mobile App
              </h1>
              <p className="text-sm text-slate-500">
                Sistema de diseño con 80+ componentes
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Descargar Kit
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">NovaMobile DS</p>
                  <p className="text-xs text-slate-500">v2.4.0</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="font-bold text-indigo-600 text-lg">80+</p>
                  <p className="text-slate-500">Componentes</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="font-bold text-indigo-600 text-lg">12</p>
                  <p className="text-slate-500">Pantallas</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-3">
                  <p className="font-bold text-indigo-600 text-lg">5</p>
                  <p className="text-slate-500">Temas</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Componentes</h3>
              <div className="space-y-1">
                {components.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveComponent(c.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      activeComponent === c.id
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Paleta */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">
                Paleta de Colores
              </h3>
              <div className="space-y-3">
                {colorPalette.map((group) => (
                  <div key={group.name}>
                    <p className="text-xs text-slate-500 mb-1.5">
                      {group.name}
                    </p>
                    <div className="flex gap-1">
                      {group.values.map((color) => (
                        <div
                          key={color}
                          className="flex-1 h-6 rounded-md border border-slate-200"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main preview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <h2 className="font-bold text-slate-900">
                  {components.find((c) => c.id === activeComponent)?.name}
                </h2>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
              </div>
              <div className="bg-slate-50 min-h-48">
                {ActivePreview && <ActivePreview />}
              </div>
            </div>

            {/* Mock phone screen */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h3 className="font-bold text-slate-900 mb-6 text-center">
                Vista en Dispositivo
              </h3>
              <div className="flex justify-center">
                <div className="relative w-64">
                  {/* Phone frame */}
                  <div className="bg-slate-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-white rounded-[2rem] overflow-hidden">
                      {/* Status bar */}
                      <div className="bg-indigo-600 px-5 pt-10 pb-5 text-white">
                        <p className="text-xs opacity-70 mb-1">
                          Buenos días 👋
                        </p>
                        <p className="text-lg font-bold">Hola, Alexa</p>
                        <div className="mt-3 bg-white/20 rounded-xl px-3 py-2 flex items-center gap-2">
                          <Search className="w-3.5 h-3.5 opacity-70" />
                          <span className="text-xs opacity-70">Buscar...</span>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="p-4 space-y-3">
                        <div className="flex gap-2">
                          {["UI Kit", "Colores", "Tipos"].map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        {[1, 2].map((i) => (
                          <div
                            key={i}
                            className="bg-gray-50 rounded-xl p-3 flex items-center gap-3"
                          >
                            <div className="w-8 h-8 rounded-lg bg-indigo-100" />
                            <div className="flex-1">
                              <div className="h-2.5 bg-gray-200 rounded w-24 mb-1.5" />
                              <div className="h-2 bg-gray-100 rounded w-16" />
                            </div>
                            <Heart className="w-4 h-4 text-gray-300" />
                          </div>
                        ))}
                      </div>
                      {/* Bottom nav */}
                      <div className="border-t border-gray-100 flex justify-around p-2">
                        {[Home, Search, Grid, User].map((Icon, i) => (
                          <button
                            key={i}
                            className={`p-2 rounded-lg ${i === 0 ? "text-indigo-600" : "text-gray-300"}`}
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
