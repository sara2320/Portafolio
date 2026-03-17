import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Users,
  DollarSign,
  TrendingUp,
  ShoppingCart,
  ArrowLeft,
  Bell,
  Search,
} from "lucide-react";
import { createPageUrl } from "../utils";

const salesData = [
  { mes: "Ene", ventas: 42000 },
  { mes: "Feb", ventas: 58000 },
  { mes: "Mar", ventas: 51000 },
  { mes: "Abr", ventas: 73000 },
  { mes: "May", ventas: 67000 },
  { mes: "Jun", ventas: 91000 },
];
const clients = [
  { name: "Empresa ABC", status: "Activo", value: "$12,400", stage: "Cerrado" },
  {
    name: "Tech Solutions",
    status: "Negociando",
    value: "$8,900",
    stage: "Propuesta",
  },
  { name: "Innovate Co.", status: "Nuevo", value: "$5,200", stage: "Contacto" },
  {
    name: "Global Retail",
    status: "Activo",
    value: "$21,000",
    stage: "Cerrado",
  },
  {
    name: "StartUp XYZ",
    status: "Perdido",
    value: "$3,100",
    stage: "Inactivo",
  },
];
const stageColors = {
  Cerrado: "text-neon-green",
  Propuesta: "text-neon-cyan",
  Contacto: "text-yellow-400",
  Inactivo: "text-red-400",
};
const statusColors = {
  Activo: "bg-green-500/20 text-green-400",
  Negociando: "bg-yellow-500/20 text-yellow-400",
  Nuevo: "bg-blue-500/20 text-blue-400",
  Perdido: "bg-red-500/20 text-red-400",
};

export default function DemoCRM() {
  const [search, setSearch] = useState("");
  const filtered = clients.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-background font-inter text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-xl px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <a
            href={createPageUrl("Portfolio")}
            className="flex items-center gap-1 text-muted-foreground hover:text-neon-cyan text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver
          </a>
          <span className="text-border">|</span>
          <span className="font-bold gradient-text text-sm">DevFlow CRM</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar cliente..."
              className="bg-secondary/50 border border-border rounded-xl pl-8 pr-4 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-cyan/40 w-48"
            />
          </div>
          <button className="relative p-2 rounded-xl hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-all">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-neon-cyan" />
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: DollarSign,
              label: "Ingresos totales",
              value: "$382,000",
              change: "+18%",
              color: "text-neon-cyan",
            },
            {
              icon: Users,
              label: "Clientes activos",
              value: "284",
              change: "+7%",
              color: "text-neon-purple",
            },
            {
              icon: ShoppingCart,
              label: "Deals cerrados",
              value: "63",
              change: "+12%",
              color: "text-neon-green",
            },
            {
              icon: TrendingUp,
              label: "Tasa conversión",
              value: "38%",
              change: "+3%",
              color: "text-yellow-400",
            },
          ].map(({ icon: Icon, label, value, change, color }) => (
            <div
              key={label}
              className="glass-card border border-border rounded-2xl p-4 hover:border-neon-cyan/20 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-muted-foreground">{label}</p>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <p className="text-xs text-neon-green mt-1">{change} este mes</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-card border border-border rounded-2xl p-5">
            <h3 className="text-sm font-semibold mb-4">Ventas mensuales</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={salesData}>
                <XAxis
                  dataKey="mes"
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    background: "#090d18",
                    border: "1px solid #1e293b",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(v) => [`$${v.toLocaleString()}`, "Ventas"]}
                />
                <Bar
                  dataKey="ventas"
                  fill="#00e5ff"
                  radius={[4, 4, 0, 0]}
                  opacity={0.8}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="glass-card border border-border rounded-2xl p-5">
            <h3 className="text-sm font-semibold mb-4">
              Tendencia de clientes
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={salesData}>
                <XAxis
                  dataKey="mes"
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    background: "#090d18",
                    border: "1px solid #1e293b",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="ventas"
                  stroke="#a855f7"
                  strokeWidth={2}
                  dot={{ fill: "#a855f7", r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Clients table */}
        <div className="glass-card border border-border rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-border flex items-center justify-between">
            <h3 className="text-sm font-semibold">Clientes recientes</h3>
            <span className="text-xs text-muted-foreground">
              {filtered.length} resultados
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  {["Empresa", "Estado", "Valor", "Etapa"].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3 text-left text-xs text-muted-foreground font-medium"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr
                    key={c.name}
                    className="border-b border-border/50 hover:bg-white/2 transition-colors"
                  >
                    <td className="px-5 py-3 font-medium text-sm">{c.name}</td>
                    <td className="px-5 py-3">
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[c.status]}`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-neon-cyan font-code text-xs">
                      {c.value}
                    </td>
                    <td
                      className={`px-5 py-3 text-xs font-medium ${stageColors[c.stage]}`}
                    >
                      {c.stage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
