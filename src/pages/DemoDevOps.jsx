import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  ArrowLeft,
  Activity,
  Server,
  Cpu,
  HardDrive,
  AlertTriangle,
  CheckCircle,
  RefreshCw,
} from "lucide-react";
import { createPageUrl } from "../utils";

const genData = () =>
  Array.from({ length: 20 }, (_, i) => ({
    t: `${i}m`,
    cpu: Math.floor(Math.random() * 40 + 30),
    mem: Math.floor(Math.random() * 30 + 50),
    req: Math.floor(Math.random() * 500 + 200),
  }));

const services = [
  { name: "API Gateway", status: "online", uptime: "99.98%", latency: "12ms" },
  { name: "Auth Service", status: "online", uptime: "99.95%", latency: "8ms" },
  { name: "Database", status: "online", uptime: "99.99%", latency: "3ms" },
  {
    name: "Cache (Redis)",
    status: "warning",
    uptime: "98.12%",
    latency: "45ms",
  },
  { name: "File Storage", status: "online", uptime: "99.90%", latency: "22ms" },
  { name: "Queue Worker", status: "offline", uptime: "95.40%", latency: "—" },
];

const statusStyle = {
  online: "text-neon-green bg-neon-green/10 border-neon-green/20",
  warning: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  offline: "text-red-400 bg-red-400/10 border-red-400/20",
};
const statusDot = {
  online: "bg-neon-green",
  warning: "bg-yellow-400 animate-pulse",
  offline: "bg-red-400",
};

export default function DemoDevOps() {
  const [data, setData] = useState(genData());
  const [refreshing, setRefreshing] = useState(false);

  const refresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setData(genData());
      setRefreshing(false);
    }, 800);
  };

  useEffect(() => {
    const t = setInterval(() => setData(genData()), 5000);
    return () => clearInterval(t);
  }, []);

  const last = data[data.length - 1] || {};

  return (
    <div className="min-h-screen bg-background font-inter text-foreground">
      <header className="border-b border-border bg-card/80 backdrop-blur-xl px-6 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <a
            href={createPageUrl("Portfolio")}
            className="flex items-center gap-1 text-muted-foreground hover:text-neon-cyan text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Volver
          </a>
          <span className="text-border">|</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="font-bold gradient-text text-sm">
              DevOps Dashboard
            </span>
          </div>
        </div>
        <button
          onClick={refresh}
          className={`flex items-center gap-1.5 text-xs text-muted-foreground hover:text-neon-cyan transition-colors ${refreshing ? "opacity-50" : ""}`}
        >
          <RefreshCw
            className={`w-3.5 h-3.5 ${refreshing ? "animate-spin" : ""}`}
          />{" "}
          Actualizar
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Cpu,
              label: "CPU",
              value: `${last.cpu}%`,
              color: "text-neon-cyan",
              warn: last.cpu > 60,
            },
            {
              icon: HardDrive,
              label: "Memoria",
              value: `${last.mem}%`,
              color: "text-neon-purple",
              warn: last.mem > 75,
            },
            {
              icon: Activity,
              label: "Req/min",
              value: last.req,
              color: "text-neon-green",
              warn: false,
            },
            {
              icon: Server,
              label: "Servicios",
              value: `${services.filter((s) => s.status === "online").length}/${services.length}`,
              color: "text-yellow-400",
              warn: services.some((s) => s.status !== "online"),
            },
          ].map(({ icon: Icon, label, value, color, warn }) => (
            <div
              key={label}
              className={`glass-card border rounded-2xl p-4 transition-all ${warn ? "border-yellow-400/30" : "border-border hover:border-neon-cyan/20"}`}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-muted-foreground">{label}</p>
                <div className="flex items-center gap-1">
                  {warn && (
                    <AlertTriangle className="w-3 h-3 text-yellow-400" />
                  )}
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
              </div>
              <p className="text-2xl font-bold font-code">{value}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-card border border-border rounded-2xl p-5">
            <h3 className="text-sm font-semibold mb-4">
              CPU & Memoria (últimos 20 min)
            </h3>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={data}>
                <XAxis
                  dataKey="t"
                  tick={{ fill: "#64748b", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  interval={4}
                />
                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: "#64748b", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#090d18",
                    border: "1px solid #1e293b",
                    borderRadius: 8,
                    fontSize: 11,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="cpu"
                  stroke="#00e5ff"
                  strokeWidth={2}
                  dot={false}
                  name="CPU %"
                />
                <Line
                  type="monotone"
                  dataKey="mem"
                  stroke="#a855f7"
                  strokeWidth={2}
                  dot={false}
                  name="Mem %"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="glass-card border border-border rounded-2xl p-5">
            <h3 className="text-sm font-semibold mb-4">Requests por minuto</h3>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={data}>
                <XAxis
                  dataKey="t"
                  tick={{ fill: "#64748b", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                  interval={4}
                />
                <YAxis
                  tick={{ fill: "#64748b", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#090d18",
                    border: "1px solid #1e293b",
                    borderRadius: 8,
                    fontSize: 11,
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="req"
                  stroke="#00ff88"
                  strokeWidth={2}
                  fill="rgba(0,255,136,0.08)"
                  name="Requests"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Services */}
        <div className="glass-card border border-border rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-border">
            <h3 className="text-sm font-semibold">Estado de servicios</h3>
          </div>
          <div className="divide-y divide-border/50">
            {services.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between px-5 py-3 hover:bg-white/2 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full ${statusDot[s.status]}`}
                  />
                  <span className="text-sm font-medium">{s.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-xs text-muted-foreground hidden sm:block">
                    Uptime: <span className="text-foreground">{s.uptime}</span>
                  </span>
                  <span className="text-xs text-muted-foreground hidden sm:block">
                    Latencia:{" "}
                    <span className="font-code text-neon-cyan">
                      {s.latency}
                    </span>
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs border font-medium ${statusStyle[s.status]}`}
                  >
                    {s.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
