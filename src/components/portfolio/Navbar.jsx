import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  "inicio",
  "sobre-mi",
  "habilidades",
  "proyectos",
  "diseno",
  "juegos",
  "contacto",
];
const labels = [
  "Inicio",
  "Sobre mí",
  "Habilidades",
  "Proyectos",
  "Diseño",
  "Juegos",
  "Contacto",
];

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-900/95 backdrop-blur-xl border-b border-neon-cyan/10 shadow-lg shadow-neon-cyan/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scroll("inicio")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center group-hover:bg-neon-cyan/20 transition-all">
            <Code2 className="w-4 h-4 text-neon-cyan" />
          </div>
          <span className="font-code text-sm font-semibold neon-text">
            &lt;DevPortfolio /&gt;
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((id, i) => (
            <li key={id}>
              <button
                onClick={() => scroll(id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === id
                    ? "text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {labels[i]}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scroll("contacto")}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-sm font-medium hover:bg-neon-cyan/20 transition-all"
        >
          Contactar
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-800/98 backdrop-blur-xl border-b border-border px-4 py-4 space-y-1">
          {links.map((id, i) => (
            <button
              key={id}
              onClick={() => scroll(id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                active === id
                  ? "text-neon-cyan bg-neon-cyan/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {labels[i]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
