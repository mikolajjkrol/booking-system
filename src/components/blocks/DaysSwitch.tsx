import { motion } from "framer-motion";

interface WeekdaySelectorProps {
  selectedDays?: string[];
  onChange: (days: string[]) => void;
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
type Day = typeof days[number];

export default function WeekdaySelector({ selectedDays = [], onChange }: WeekdaySelectorProps) {
  const toggleDay = (day: Day) => {
    const updated = selectedDays.includes(day)
      ? selectedDays.filter((d) => d !== day)
      : [...selectedDays, day];
    onChange(updated);
  };

  return (
    <div className="days">
      {days.map((day) => {
        const isSelected = selectedDays.includes(day);
        return (
          <motion.button
            key={day}
            onClick={() => toggleDay(day)}
            whileTap={{ scale: 0.9 }}
            className={`day ${isSelected ? "selected" : ""}`}>
            {day}
          </motion.button>
        );
      })}
    </div>
  );
}