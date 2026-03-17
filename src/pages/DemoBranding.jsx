import { useState } from "react";
import { ArrowLeft, Download, Palette, Type, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const brandColors = [
  { name: "Primary", hex: "#6C63FF", rgb: "108, 99, 255" },
  { name: "Secondary", hex: "#FF6584", rgb: "255, 101, 132" },
  { name: "Accent", hex: "#00E5FF", rgb: "0, 229, 255" },
  { name: "Dark", hex: "#1A1A2E", rgb: "26, 26, 46" },
  { name: "Light", hex: "#F8F9FA", rgb: "248, 249, 250" },
];

const typography = [
  {
    name: "Heading",
    font: "Poppins",
    weight: "700",
    size: "48px",
    usage: "Títulos principales",
  },
  {
    name: "Subheading",
    font: "Poppins",
    weight: "600",
    size: "32px",
    usage: "Subtítulos",
  },
  {
    name: "Body",
    font: "Inter",
    weight: "400",
    size: "16px",
    usage: "Texto general",
  },
  {
    name: "Caption",
    font: "Inter",
    weight: "500",
    size: "14px",
    usage: "Anotaciones",
  },
];

const logoVariants = [
  { name: "Full Color", bg: "#FFFFFF", color: "#6C63FF" },
  { name: "Monocromo", bg: "#1A1A2E", color: "#FFFFFF" },
  { name: "Invertido", bg: "#6C63FF", color: "#FFFFFF" },
];

export default function DemoBranding() {
  const [activeTab, setActiveTab] = useState("logo");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
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
                NovaTech - Identidad Visual
              </h1>
              <p className="text-sm text-slate-500">
                Sistema completo de diseño de marca
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Manual de Marca
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: "logo", label: "Logotipo", icon: Sparkles },
              { id: "colors", label: "Paleta", icon: Palette },
              { id: "typography", label: "Tipografía", icon: Type },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-3 border-b-2 text-sm font-medium transition-colors ${
                  activeTab === id
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === "logo" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Versiones del Logotipo
              </h2>
              <p className="text-slate-600">
                Variaciones para diferentes aplicaciones y fondos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {logoVariants.map((variant) => (
                <div
                  key={variant.name}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 p-8"
                >
                  <div
                    className="rounded-lg mb-4 h-48 flex items-center justify-center"
                    style={{ backgroundColor: variant.bg }}
                  >
                    <div className="text-center">
                      <div
                        className="text-5xl font-black mb-2 tracking-tight"
                        style={{ color: variant.color }}
                      >
                        NOVA
                      </div>
                      <div
                        className="text-sm font-light tracking-widest"
                        style={{ color: variant.color, opacity: 0.8 }}
                      >
                        T E C H
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm">
                    {variant.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Para fondos claros/oscuros
                  </p>
                </div>
              ))}
            </div>

            {/* Construcción del logo */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Construcción y Espaciado
              </h3>
              <div className="bg-slate-50 rounded-lg p-12 relative">
                <div className="text-center relative">
                  <div className="text-6xl font-black text-indigo-600 mb-3 tracking-tight">
                    NOVA
                  </div>
                  <div className="text-lg font-light tracking-widest text-indigo-500">
                    T E C H
                  </div>

                  {/* Grid overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="w-full h-full grid grid-cols-8 grid-rows-6 gap-0">
                      {[...Array(48)].map((_, i) => (
                        <div key={i} className="border border-indigo-300"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-500 text-xs mb-1">
                    Espaciado mínimo
                  </p>
                  <p className="font-semibold text-slate-900">
                    2x altura de la X
                  </p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-slate-500 text-xs mb-1">Tamaño mínimo</p>
                  <p className="font-semibold text-slate-900">40px de alto</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "colors" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Paleta de Colores
              </h2>
              <p className="text-slate-600">
                Colores principales de la marca y sus aplicaciones
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandColors.map((color) => (
                <div
                  key={color.name}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
                >
                  <div
                    className="h-40"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900 mb-3">
                      {color.name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">HEX</span>
                        <span className="font-mono font-semibold text-slate-900">
                          {color.hex}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">RGB</span>
                        <span className="font-mono font-semibold text-slate-900">
                          {color.rgb}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Combinaciones */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Combinaciones Recomendadas
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="rounded-lg overflow-hidden border border-slate-200">
                  <div className="h-32 bg-[#6C63FF] flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Aa</span>
                  </div>
                  <div className="p-3 bg-slate-50">
                    <p className="text-xs text-slate-600">Primary + Light</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden border border-slate-200">
                  <div className="h-32 bg-[#1A1A2E] flex items-center justify-center">
                    <span className="text-[#00E5FF] font-bold text-xl">Aa</span>
                  </div>
                  <div className="p-3 bg-slate-50">
                    <p className="text-xs text-slate-600">Dark + Accent</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden border border-slate-200">
                  <div className="h-32 bg-[#FF6584] flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Aa</span>
                  </div>
                  <div className="p-3 bg-slate-50">
                    <p className="text-xs text-slate-600">Secondary + Light</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "typography" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Sistema Tipográfico
              </h2>
              <p className="text-slate-600">
                Familias tipográficas y jerarquía de texto
              </p>
            </div>

            <div className="space-y-6">
              {typography.map((typo) => (
                <div
                  key={typo.name}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 p-8"
                >
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <p
                        className="text-slate-900 mb-2"
                        style={{
                          fontFamily: typo.font,
                          fontSize: typo.size,
                          fontWeight: typo.weight,
                          lineHeight: "1.2",
                        }}
                      >
                        The quick brown fox
                      </p>
                      <p className="text-slate-400 text-sm">
                        ABCDEFGHIJKLMNOPQRSTUVWXYZ
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Familia</span>
                        <span className="font-semibold text-slate-900">
                          {typo.font}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Peso</span>
                        <span className="font-semibold text-slate-900">
                          {typo.weight}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Tamaño</span>
                        <span className="font-semibold text-slate-900">
                          {typo.size}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-slate-200">
                        <p className="text-slate-600 text-xs">{typo.usage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ejemplo de aplicación */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Ejemplo de Aplicación
              </h3>
              <div className="bg-[#6C63FF] rounded-lg p-12 text-white">
                <h1
                  className="text-5xl font-bold mb-4"
                  style={{ fontFamily: "Poppins" }}
                >
                  Innovación Digital
                </h1>
                <h2
                  className="text-2xl font-semibold mb-6 opacity-90"
                  style={{ fontFamily: "Poppins" }}
                >
                  Transformando el futuro con tecnología
                </h2>
                <p
                  className="text-base opacity-80 max-w-2xl"
                  style={{ fontFamily: "Inter" }}
                >
                  Creamos soluciones tecnológicas innovadoras que impulsan el
                  crecimiento de tu negocio. Nuestro equipo experto trabaja
                  contigo para desarrollar productos digitales excepcionales.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
