function MetricCard({ title, value }) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default MetricCard;
