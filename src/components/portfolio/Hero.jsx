import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";

const phrases = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "React Expert",
  "Open Source Lover",
  "Problem Solver",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);
  const canvasRef = useRef(null);

  // Typing animation
  useEffect(() => {
    const current = phrases[phraseIdx];
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setText(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setText(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 45);
        return () => clearTimeout(t);
      } else {
        setPhraseIdx((i) => (i + 1) % phrases.length);
        setTyping(true);
      }
    }
  }, [charIdx, typing, phraseIdx]);

  // Particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? "0, 229, 255" : "168, 85, 247",
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      });
      // Lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Orbs */}
      <div className="orb absolute w-[500px] h-[500px] bg-neon-cyan/5 top-1/4 -left-32" />
      <div className="orb absolute w-[400px] h-[400px] bg-neon-purple/8 bottom-1/4 -right-24" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-cyan/20 bg-neon-cyan/5 text-neon-cyan text-xs font-code mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          Disponible para proyectos
        </div>

        {/* Avatar */}
        <div className="w-28 h-28 mx-auto mb-8 relative animate-float">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple animate-pulse-glow" />
          <div className="absolute inset-[3px] rounded-full bg-dark-800 flex items-center justify-center overflow-hidden">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69af54f8bd7e2e9e1af0c587/d2156f3c4_hojavida.jpg"
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-foreground">Alexa </span>
          <span className="gradient-text">Castrillón</span>
        </h1>

        {/* Typing */}
        <p
          className="text-xl sm:text-2xl font-code text-muted-foreground mb-8 h-9 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-neon-cyan">&gt; </span>
          {text}
          <span className="cursor" />
        </p>

        {/* Description */}
        <p
          className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up text-sm sm:text-base"
          style={{ animationDelay: "0.3s" }}
        >
          Construyo aplicaciones web modernas y escalables. Apasionada por el
          código limpio, el diseño elegante y las experiencias de usuario
          excepcionales.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <button
            onClick={() => scrollTo("proyectos")}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-neon-cyan text-dark-900 font-semibold text-sm hover:bg-neon-cyan/90 transition-all shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40"
          >
            Ver proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("contacto")}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-neon-cyan/30 text-neon-cyan text-sm font-medium hover:bg-neon-cyan/10 transition-all"
          >
            <Download className="w-4 h-4" />
            Contacto
          </button>
        </div>

        {/* Socials */}
        <div
          className="flex items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("sobre-mi")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-neon-cyan transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
