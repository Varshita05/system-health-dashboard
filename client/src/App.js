import { useEffect, useState } from "react";
import io from "socket.io-client";
import MetricCard from "./components/MetricCard";
import LineChartComponent from "./components/LineChartComponent";

const socket = io("http://localhost:5000");

function App() {
  const [metrics, setMetrics] = useState({});
  const [cpuHistory, setCpuHistory] = useState([]);
  const [memHistory, setMemHistory] = useState([]);

  useEffect(() => {
    socket.on("metrics-update", (data) => {
      setMetrics(data);

      setCpuHistory(prev => [...prev.slice(-20), { value: data.cpuLoad }]);
      setMemHistory(prev => [...prev.slice(-20), { value: data.memoryUsage }]);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Real-Time System Health Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard title="CPU Load" value={metrics.cpuLoad} />
        <MetricCard title="Memory Usage (%)" value={metrics.memoryUsage} />
        <MetricCard title="Uptime (s)" value={metrics.uptime} />
        <MetricCard title="Processes" value={metrics.processes} />
        <MetricCard title="API Latency (ms)" value={metrics.apiLatency} />
        <MetricCard title="Error Rate (%)" value={metrics.errorRate} />
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <LineChartComponent data={cpuHistory} label="CPU Load History" />
        <LineChartComponent data={memHistory} label="Memory Usage History" />
      </div>
    </div>
  );
}

export default App;
