import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Code2,
  Heart,
} from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const links = [
  { label: "Inicio", id: "inicio" },
  { label: "Sobre mí", id: "sobre-mi" },
  { label: "Habilidades", id: "habilidades" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Juegos", id: "juegos" },
  { label: "Contacto", id: "contacto" },
];

export default function Footer() {
  const scroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-dark-900/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-neon-cyan" />
              </div>
              <span className="font-code text-sm font-semibold neon-text">
                &lt;Alexa.dev /&gt;
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              Desarrolladora Full Stack desde Medellín, Colombia 🇨🇴.
              Construyendo experiencias digitales modernas con código limpio y
              diseño elegante.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {links.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => scroll(id)}
                    className="text-xs text-muted-foreground hover:text-neon-cyan transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
              Redes
            </h4>
            <div className="flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              <a
                href="mailto:saracastrillon34@gmail.com"
                className="hover:text-neon-cyan transition-colors"
              >
                saracastrillon34@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {year} Alexa Castrillón. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-pink-500" /> en React +
            Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
