'use client';

import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

interface PractitionerScheduleProps {
  practitionerId: string;
}

export default function PractitionerSchedule({ practitionerId }: PractitionerScheduleProps) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSchedule = async (start: Date, end: Date) => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/bookings/practitioner/${practitionerId}?start=${start.toISOString()}&end=${end.toISOString()}`
      );
      const bookings = await res.json();
      
      const calendarEvents = bookings.map((booking: any) => ({
        id: booking._id,
        title: booking.clientId.name,
        start: booking.startTime,
        end: booking.endTime,
        backgroundColor: '#3b82f6',
        borderColor: '#2563eb',
        extendedProps: {
          clientName: booking.clientId.name,
          clientEmail: booking.clientId.email
        }
      }));
      
      setEvents(calendarEvents);
    } catch (error) {
      console.error('Error fetching schedule:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDatesSet = (dateInfo: any) => {
    fetchSchedule(dateInfo.start, dateInfo.end);
  };

  const handleEventClick = (info: any) => {
    alert(`Client: ${info.event.extendedProps.clientName}\nEmail: ${info.event.extendedProps.clientEmail}`);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Schedule</h1>
      
      {loading ? (
        <div>Loading schedule...</div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            events={events}
            datesSet={handleDatesSet}
            eventClick={handleEventClick}
            slotMinTime="08:00:00"
            slotMaxTime="20:00:00"
            slotDuration="00:30:00"
            allDaySlot={false}
            nowIndicator={true}
            height="auto"
          />
        </div>
      )}
    </div>
  );
}
