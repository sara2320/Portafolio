import { useScrollReveal } from "../useScrollReveal";
import { Terminal, Zap, Globe, Heart } from "lucide-react";

const stats = [
  { value: "1+", label: "Años exp." },
  { value: "20+", label: "Proyectos" },
  { value: "10+", label: "Clientes" },
  { value: "99%", label: "Satisfacción" },
];

const highlights = [
  {
    icon: Terminal,
    text: "Código limpio y escalable",
    color: "text-neon-cyan",
  },
  { icon: Zap, text: "Performance optimizada", color: "text-neon-purple" },
  {
    icon: Globe,
    text: "Apps responsive & accesibles",
    color: "text-neon-green",
  },
  { icon: Heart, text: "UX centrado en el usuario", color: "text-pink-400" },
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden">
      <div className="orb absolute w-96 h-96 bg-neon-purple/6 top-0 right-0" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-code text-neon-cyan text-sm">// 01</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2">
            Sobre mí
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image + Stats */}
          <div className="space-y-6">
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rotate-6" />
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-neon-cyan/20">
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=500&fit=crop"
                  alt="coding"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card border border-neon-cyan/20 rounded-xl px-4 py-2 text-sm font-code">
                <span className="text-neon-green">◉ </span>
                <span className="text-foreground">npm run dev</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto lg:mx-0">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="glass-card border border-border rounded-xl p-4 text-center hover:border-neon-cyan/30 transition-all"
                >
                  <div className="text-2xl font-bold rounded gradient-text">
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <div className="font-code text-neon-purple text-sm">
              {"const developer = {"}
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm pl-6">
              Hola, soy{" "}
              <span className="text-foreground font-semibold">
                Alexa Castrillón
              </span>
              , desarrolladora Full Stack de Medellín, Colombia, con más de 1
              año de experiencia creando aplicaciones web modernas y escalables.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm pl-6">
              Me especializo en <span className="text-neon-cyan">React</span>,{" "}
              <span className="text-neon-cyan">Node.js</span> y bases de datos
              tanto SQL como NoSQL. Mi objetivo es siempre entregar productos de
              alta calidad que resuelvan problemas reales desde la ciudad más
              innovadora de Colombia.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm pl-6">
              Cuando no estoy programando, contribuyo a proyectos open source,
              escribo artículos técnicos y exploro las últimas tendencias en IA
              y desarrollo web.
            </p>

            <div className="font-code text-neon-purple text-sm">{"}"}</div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {highlights.map(({ icon: Icon, text, color }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Icon className={`w-4 h-4 ${color} shrink-0`} />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neon-cyan/30 text-neon-cyan text-sm font-medium hover:bg-neon-cyan/10 transition-all mt-2"
            >
              Trabajemos juntos →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
