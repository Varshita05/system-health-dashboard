import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Usage", value: 84.29 }
];

export default function MemoryChart() {
  return (
    <div
      style={{
        width: "400px",
        height: "250px",
        background: "#0f172a",
        borderRadius: "12px",
        padding: "16px",
        color: "white"
      }}
    >
      <h3 style={{ marginBottom: "12px", fontSize: "18px" }}>Memory Usage</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
            contentStyle={{ background: "#1e293b", border: "none", color: "white" }}
            cursor={{ fill: "rgba(255,255,255,0.1)" }}
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            <Cell fill="#38bdf8" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
