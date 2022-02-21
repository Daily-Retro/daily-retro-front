import React from 'react'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, DayValue } from "react-modern-calendar-datepicker";

export default function CalendarTemplate() {
  const defaultValue = {
    year: 2022,
    month: 2,
    day: 17,
  };
  const [selectedDay, setSelectedDay] = React.useState<DayValue>(defaultValue);

  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      colorPrimary="#9c88ff" // added this
      shouldHighlightWeekends
      calendarClassName="custom-calendar" 
      customDaysClassName={[
        // here we add some CSS classes
        { year: 2022, month: 2, day: 4, className: 'purpleDay' },
        { year: 2022, month: 2, day: 12, className: 'orangeDay' },
        { year: 2022, month: 2, day: 15, className: 'yellowDay' },
        { year: 2022, month: 2, day: 20, className: 'navyBlueDay' },
      ]}
    />
  )
}