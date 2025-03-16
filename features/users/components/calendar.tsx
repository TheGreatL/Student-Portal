'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin, {DateClickArg} from '@fullcalendar/interaction'; // for selectable
import timeGridPlugin from '@fullcalendar/timegrid';
import {useState} from 'react';
import TestModal from '@/components/modal/test-modal';
import {EventSourceInput} from '@fullcalendar/core/index.js';

export default function Calendar() {
  const [dateClicked, setDateClicked] = useState<null | DateClickArg>(null);
  const [events, setEvents] = useState<EventSourceInput>([]);
  const handleOnDateClick = (clickArg: DateClickArg) => {
    setDateClicked(clickArg);
  };

  const handleOnDialogClose = () => {
    setDateClicked(null);
  };

  const handleAddEvent = (date: Date, title: string) => {
    setEvents((prevEvents: EventSourceInput) => {
      if (Array.isArray(prevEvents)) {
        return [...prevEvents, {date, title, className: 'bg-red-500 text-white'}];
      }
      return prevEvents;
    });
  };
  return (
    <div className='grow rounded-2xl bg-gray-900 p-2 text-white'>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView='dayGridMonth'
        selectable={true}
        headerToolbar={{
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={events}
        dateClick={(info) => {
          handleOnDateClick(info);
        }}
      />
      <TestModal
        handleAddEvent={handleAddEvent}
        dateClicked={dateClicked}
        handleOnDialogClose={handleOnDialogClose}
      />
    </div>
  );
}
