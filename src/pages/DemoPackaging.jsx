import { useState } from "react";
import { ArrowLeft, Download, Leaf, Droplets, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "Green Tea Extract",
    subtitle: "Té Verde Orgánico",
    color: "#7CB342",
    icon: Leaf,
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=600&fit=crop",
    description: "100% natural, cosecha sostenible",
  },
  {
    name: "Lavender Essence",
    subtitle: "Esencia de Lavanda",
    color: "#9575CD",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop",
    description: "Extracto puro francés",
  },
  {
    name: "Citrus Fusion",
    subtitle: "Mezcla Cítrica",
    color: "#FFB300",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=600&fit=crop",
    description: "Energía natural de naranjas",
  },
];

const views = [
  { id: "front", name: "Frontal" },
  { id: "back", name: "Trasera" },
  { id: "side", name: "Lateral" },
];

export default function DemoPackaging() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeView, setActiveView] = useState("front");

  const current = products[activeProduct];
  const Icon = current.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-10">
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
                EcoNature - Línea Orgánica
              </h1>
              <p className="text-sm text-slate-500">
                Diseño de packaging premium
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium">
            <Download className="w-4 h-4" />
            Specs Técnicas
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: 3D Preview */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div className="aspect-[3/4] bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${current.color} 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                {/* Product mockup */}
                <div className="relative">
                  {/* FRONT VIEW */}
                  {activeView === "front" && (
                    <div
                      className="w-48 h-72 rounded-2xl shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-300"
                      style={{ backgroundColor: current.color }}
                    >
                      <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                        <div className="text-center">
                          <Icon
                            className="w-12 h-12 mx-auto mb-3 opacity-90"
                            strokeWidth={1.5}
                          />
                          <div className="font-light text-xs tracking-widest mb-1">
                            ECONATURE
                          </div>
                          <div className="font-bold text-lg leading-tight">
                            {current.name}
                          </div>
                          <div className="text-xs opacity-75 mt-1">
                            {current.subtitle}
                          </div>
                        </div>
                        <div className="space-y-2 text-xs opacity-90">
                          <div className="flex justify-between">
                            <span>Peso neto</span>
                            <span>50ml</span>
                          </div>
                          <div className="border-t border-white/30 pt-2 text-center">
                            <p className="text-[10px]">{current.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                    </div>
                  )}

                  {/* BACK VIEW */}
                  {activeView === "back" && (
                    <div
                      className="w-48 h-72 rounded-2xl shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-300"
                      style={{
                        backgroundColor: current.color,
                        filter: "brightness(0.85)",
                      }}
                    >
                      <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                        <div>
                          <div className="font-light text-[9px] tracking-widest mb-3 opacity-60 border-b border-white/20 pb-2">
                            INFORMACIÓN NUTRICIONAL
                          </div>
                          <div className="space-y-1 text-[9px] opacity-80">
                            {[
                              ["Ingrediente activo", "95%"],
                              ["Extracto natural", "100%"],
                              ["Sin conservantes", "✓"],
                              ["Sin parabenos", "✓"],
                              ["Testado dermat.", "✓"],
                            ].map(([k, v]) => (
                              <div
                                key={k}
                                className="flex justify-between border-b border-white/10 pb-1"
                              >
                                <span>{k}</span>
                                <span className="font-semibold">{v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="text-center space-y-1">
                          <div className="text-[8px] opacity-50 leading-relaxed">
                            Mantener en lugar fresco y seco.
                            <br />
                            Evitar exposición directa al sol.
                            <br />
                            Agitar antes de usar.
                          </div>
                          <div className="text-[8px] opacity-40 border-t border-white/20 pt-1">
                            Fabricado en Colombia · Lote: 240315
                            <br />
                            Reg. INVIMA 2024-01234
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SIDE VIEW */}
                  {activeView === "side" && (
                    <div
                      className="w-20 h-72 rounded-xl shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-300 mx-auto"
                      style={{
                        backgroundColor: current.color,
                        filter: "brightness(0.75)",
                      }}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-between py-6 text-white">
                        <div className="text-[8px] tracking-widest opacity-60 rotate-0">
                          50ml
                        </div>
                        <div
                          className="font-bold text-xs tracking-widest opacity-90 whitespace-nowrap"
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {current.name.toUpperCase()}
                        </div>
                        <div
                          className="text-[8px] tracking-widest opacity-50 whitespace-nowrap"
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                        >
                          ECONATURE
                        </div>
                        <div className="w-px h-12 bg-white/20 rounded" />
                        <Icon
                          className="w-5 h-5 opacity-70"
                          strokeWidth={1.5}
                        />
                      </div>
                      {/* Edge highlight */}
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-white/20 to-transparent" />
                    </div>
                  )}
                </div>
              </div>

              {/* View selector */}
              <div className="flex gap-2 mt-6 justify-center">
                {views.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setActiveView(view.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeView === view.id
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {view.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Product selector */}
            <div className="grid grid-cols-3 gap-4">
              {products.map((product, idx) => {
                const ProductIcon = product.icon;
                return (
                  <button
                    key={product.name}
                    onClick={() => setActiveProduct(idx)}
                    className={`bg-white rounded-xl p-4 border-2 transition-all ${
                      activeProduct === idx
                        ? "border-emerald-600 shadow-md"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div
                      className="w-12 h-12 rounded-lg mx-auto mb-2 flex items-center justify-center"
                      style={{ backgroundColor: product.color }}
                    >
                      <ProductIcon
                        className="w-6 h-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <p className="text-xs font-medium text-slate-900">
                      {product.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Concepto de Diseño
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Packaging minimalista que refleja los valores de sostenibilidad
                y pureza de la marca EcoNature. Cada producto utiliza un color
                distintivo derivado de su ingrediente principal, creando una
                familia visual coherente y reconocible.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Materiales
                  </h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Vidrio reciclado 100%</li>
                    <li>• Etiqueta papel biodegradable</li>
                    <li>• Tinta vegetal certificada</li>
                    <li>• Tapón de bambú sostenible</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Dimensiones
                  </h3>
                  <div className="bg-slate-50 rounded-lg p-4 text-sm">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-slate-500 text-xs mb-1">Alto</p>
                        <p className="font-bold text-slate-900">12cm</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-1">Ancho</p>
                        <p className="font-bold text-slate-900">4cm</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-1">Prof.</p>
                        <p className="font-bold text-slate-900">4cm</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Certificaciones
                  </h3>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      "USDA Organic",
                      "Fair Trade",
                      "Cruelty Free",
                      "Vegan",
                    ].map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium border border-emerald-200"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Paleta de colores */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h3 className="font-semibold text-slate-900 mb-4">
                Paleta de Colores
              </h3>
              <div className="space-y-3">
                {products.map((product) => (
                  <div key={product.name} className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-lg shadow-sm border border-slate-200"
                      style={{ backgroundColor: product.color }}
                    ></div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {product.subtitle}
                      </p>
                      <p className="text-xs text-slate-500 font-mono">
                        {product.color}
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
