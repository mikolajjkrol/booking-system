import '../../styles/list.css'
const sampleServices = [
  { name: 'Haircut', duration: '30m' },
  { name: 'Full Color', duration: '90m' },
  { name: 'Beard Trim', duration: '15m' },
]

export default function ServicesList() {
  return (
    <div className="services-list" aria-label="Services list">
      <ul>
        {sampleServices.map((s, i) => (
          <li key={s.name} className="service-item">
            <span className="service-index">{i + 1}</span>
            <div className="service-meta">
              <div className="service-name">{s.name}</div>
              <div className="service-duration">{s.duration}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
