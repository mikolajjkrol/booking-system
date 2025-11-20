export default function Statistics() {
  const stats = [
    { label: "This Month", value: 42 },
    { label: "This Week", value: 20 },
    { label: "Upcoming Today", value: 7 },
  ];
  return (
    <div className="statistics-panel">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
