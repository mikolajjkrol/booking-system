import { useMemo, useState } from 'react';
import './../../styles/calendar.css'


function getDaysArray(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startOffset = first.getDay(); // 0 = Sun .. 6 = Sat
  const days: (number | null)[] = [];

  // leading blanks
  for (let i = 0; i < startOffset; i++) days.push(null);
  for (let d = 1; d <= last.getDate(); d++) days.push(d);
  return days;
}

export default function Calendar() {
  const today = new Date();
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selected, setSelected] = useState<Date | null>(null);

  const year = view.getFullYear();
  const month = view.getMonth();
  const monthName = view.toLocaleString(undefined, { month: 'long', year: 'numeric' });
  const days = useMemo(() => getDaysArray(year, month), [year, month]);
  const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  function prevMonth() { setView(new Date(year, month - 1, 1)); }
  function nextMonth() { setView(new Date(year, month + 1, 1)); }
  function pickDay(d: number) { setSelected(new Date(year, month, d)); }

  return (
    <div className="calendar-widget" role="application" aria-label="Month calendar">
      <header className="cal-header">
        <button aria-label="Previous month" onClick={prevMonth} className="cal-nav">{'‹'}</button>
        <div className="cal-title">{monthName}</div>
        <button aria-label="Next month" onClick={nextMonth} className="cal-nav">{'›'}</button>
      </header>

      <div className="cal-weekdays">
        {weekdays.map(w => <div key={w} className="cal-weekday">{w}</div>)}
      </div>

      <div className="cal-grid">
        {days.map((d, i) => {
          if (d === null) return <div key={i} className="cal-day empty" />;
          const isToday = today.getFullYear() === year && today.getMonth() === month && today.getDate() === d;
          const isSelected = selected && selected.getFullYear() === year && selected.getMonth() === month && selected.getDate() === d;
          const cls = ['cal-day', isToday ? 'cal-day--today' : '', isSelected ? 'cal-day--selected' : ''].join(' ');
          return (
            <button
              key={i}
              className={cls}
              onClick={() => pickDay(d)}
              aria-pressed={!!isSelected}
              title={`${monthName} ${d}`}
            >
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}