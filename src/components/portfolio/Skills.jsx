import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "../useScrollReveal";

const categories = [
  {
    name: "Frontend",
    color: "neon-cyan",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Three.js / WebGL", level: 68 },
    ],
  },
  {
    name: "Backend",
    color: "neon-purple",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / Django", level: 75 },
      { name: "GraphQL", level: 72 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    name: "Bases de datos",
    color: "neon-green",
    skills: [
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Redis", level: 70 },
      { name: "Supabase / Firebase", level: 85 },
    ],
  },
  {
    name: "Herramientas",
    color: "pink-400",
    skills: [
      { name: "Docker / K8s", level: 72 },
      { name: "Git / GitHub", level: 95 },
      { name: "CI/CD (GitHub Actions)", level: 80 },
      { name: "AWS / Vercel", level: 76 },
    ],
  },
];

const techIcons = [
  { name: "React", color: "#61DAFB", char: "⚛" },
  { name: "Node", color: "#68A063", char: "⬡" },
  { name: "TypeScript", color: "#3178C6", char: "TS" },
  { name: "Python", color: "#FFD43B", char: "🐍" },
  { name: "Docker", color: "#2496ED", char: "🐋" },
  { name: "PostgreSQL", color: "#336791", char: "🐘" },
  { name: "MongoDB", color: "#4EA94B", char: "🍃" },
  { name: "AWS", color: "#FF9900", char: "☁" },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className={`text-${color} font-code text-xs`}>{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full skill-bar-fill transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="habilidades"
      className="py-24 relative overflow-hidden grid-bg"
    >
      <div className="orb absolute w-80 h-80 bg-neon-cyan/5 bottom-0 left-0" />

      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-code text-neon-cyan text-sm">// 02</span>
          <h2 className="section-title text-3xl sm:text-4xl font-bold mt-2">
            Habilidades
          </h2>
        </div>

        {/* Tech icons strip */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {techIcons.map(({ name, color, char }) => (
            <div
              key={name}
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-border hover:border-neon-cyan/30 hover:scale-105 transition-all cursor-default"
            >
              <span style={{ color }} className="text-lg leading-none">
                {char}
              </span>
              <span className="text-sm text-foreground font-medium">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`glass-card border border-border rounded-2xl p-6 hover:border-${cat.color}/30 transition-all`}
            >
              <h3
                className={`font-bold text-${cat.color} mb-6 font-code text-sm`}
              >
                {"// "}
                {cat.name}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <SkillBar
                    key={s.name}
                    {...s}
                    color={cat.color}
                    animate={visible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
