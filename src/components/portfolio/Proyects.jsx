import { useScrollReveal } from "../useScrollReveal";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { createPageUrl } from "../../utils";

const projects = [
  {
    title: "DevFlow CRM",
    description:
      "CRM completo para gestión de clientes, ventas y analíticas en tiempo real. Dashboard interactivo con gráficos y KPIs.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    stars: 142,
    forks: 38,
    github: "https://github.com/alexcastrillon",
    demo: createPageUrl("DemoCRM"),
    featured: true,
  },
  {
    title: "AI Chat Assistant",
    description:
      "Asistente conversacional con IA integrado, soporte multi-modelo, historial de chats y exportación de conversaciones.",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=340&fit=crop",
    tech: ["Next.js", "OpenAI", "Supabase", "TypeScript"],
    stars: 287,
    forks: 65,
    github: "https://github.com/alexcastrillon",
    demo: createPageUrl("DemoChat"),
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico con carrito, pagos con Stripe, gestión de inventario y panel de administración.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop",
    tech: ["React", "Stripe", "MongoDB", "Express"],
    stars: 95,
    forks: 22,
    github: "https://github.com/alexcastrillon",
    demo: createPageUrl("DemoEcommerce"),
    featured: false,
  },
  {
    title: "3D Portfolio Viewer",
    description:
      "Visualizador 3D interactivo para portfolios creativos. Efectos de partículas, animaciones y transiciones fluidas.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=340&fit=crop",
    tech: ["Three.js", "GSAP", "WebGL", "Vite"],
    stars: 213,
    forks: 47,
    github: "https://github.com/alexcastrillon",
    demo: "#",
    featured: false,
  },
  {
    title: "Real-time Collab Tool",
    description:
      "Herramienta de colaboración en tiempo real tipo Figma. Edición simultánea, cursores en vivo y comentarios.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=340&fit=crop",
    tech: ["React", "Socket.io", "Canvas API", "Redis"],
    stars: 176,
    forks: 41,
    github: "https://github.com/alexcastrillon",
    demo: createPageUrl("DemoCollab"),
    featured: false,
  },
  {
    title: "DevOps Dashboard",
    description:
      "Panel de monitoreo para infraestructura cloud. Métricas en tiempo real, alertas, logs y gestión de deployments.",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=340&fit=crop",
    tech: ["Vue.js", "Docker", "Prometheus", "Python"],
    stars: 119,
    forks: 29,
    github: "https://github.com/alexcastrillon",
    demo: createPageUrl("DemoDevOps"),
    featured: false,
  },
];

export default function Projects() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="proyectos" className="py-24 relative overflow-hidden">
      <div className="orb absolute w-96 h-96 bg-neon-purple/6 top-1/2 -right-32" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-code text-neon-cyan text-sm">// 03</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2">
            Proyectos
          </h2>
          <p className="text-muted-foreground text-sm mt-6 max-w-md mx-auto">
            Algunos de mis proyectos más relevantes. Todos con código disponible
            en GitHub.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`project-card glass-card border rounded-2xl overflow-hidden group ${p.featured ? "border-neon-cyan/30 neon-border" : "border-border"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                {p.featured && (
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-neon-cyan/20 border border-neon-cyan/40 text-neon-cyan text-xs font-medium">
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                  {p.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full bg-neon-cyan/8 border border-neon-cyan/15 text-neon-cyan text-xs font-code"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      {p.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {p.forks}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={p.github}
                      className="p-1.5 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-all"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={p.demo}
                      target={p.demo !== "#" ? "_self" : undefined}
                      className="p-1.5 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-neon-cyan transition-all"
                      title="Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-muted-foreground text-sm hover:text-foreground hover:border-neon-cyan/30 transition-all"
          >
            <Github className="w-4 h-4" />
            Ver todos en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
