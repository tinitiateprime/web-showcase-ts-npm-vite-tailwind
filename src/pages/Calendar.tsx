import { CalendarDays } from "lucide-react";

const Calendar = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md animate-fade-in">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <CalendarDays /> Calendar
      </h1>
      <p className="text-gray-500 mt-4">Integrate your events and schedules here.</p>
    </div>
  );
};

export default Calendar;
