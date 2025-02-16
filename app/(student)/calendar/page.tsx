'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import timeGridPlugin from '@fullcalendar/timegrid';
import {useState} from 'react';
import TestModal from '@/components/modal/test-modal';
export default function CalendarPage() {
  const [isClicked, setIsClicked] = useState(false);
  const handleOnDateClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <div className='flex grow p-5'>
      <div className='grow rounded-2xl bg-white p-2'>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          initialView='dayGridMonth'
          selectable={true}
          headerToolbar={{
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          }}
          events={[
            // YYYY-MM-DD
            {title: 'event 1', date: '2025-02-16'},
            {title: 'event 2', date: '2025-02-16'}
          ]}
          dateClick={(info) => {
            handleOnDateClick();
          }}
        />
      </div>
      <TestModal
        isOpen={isClicked}
        onOpenChange={handleOnDateClick}
      />
    </div>
  );
}
