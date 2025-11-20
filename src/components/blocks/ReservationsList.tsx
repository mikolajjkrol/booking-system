const sampleReservations = [
  { firstName: 'Anna', lastName: 'Kowalska', date: '2025-11-25', time: '10:30', services: 'Haircut, Beard Trim' },
  { firstName: 'Piotr', lastName: 'Nowak', date: '2025-11-26', time: '12:00', services: 'Full Color' },
  { firstName: 'Marta', lastName: 'Zielinska', date: '2025-11-27', time: '09:00', services: 'Manicure' },
  { firstName: 'Tomasz', lastName: 'Wolski', date: '2025-11-28', time: '14:15', services: 'Consultation, Haircut' },
]

export default function ReservationsList() {
  return (
    <div className="reservations" aria-label="Reservations list">
      <div className="reservations-grid reservations-header" role="row">
        <div className="col name">Name</div>
        <div className="col surname">Surname</div>
        <div className="col date">Date</div>
        <div className="col time">Time</div>
        <div className="col services">Services</div>
      </div>

      <div className="reservations-body">
        {sampleReservations.map((r, i) => (
          <div className={`reservations-grid reservations-row ${i%2==0 ? 'even' : ''}`} role="row" key={`${r.firstName}-${i}`}>
            <div className="col name">{r.firstName}</div>
            <div className="col surname">{r.lastName}</div>
            <div className="col date">{r.date}</div>
            <div className="col time">{r.time}</div>
            <div className="col services">{r.services}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
