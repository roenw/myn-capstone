'use client';

import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Link from 'next/link';

interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  backgroundColor: string;
  borderColor: string;
  extendedProps: {
    patientName: string;
    patientEmail: string;
    status: string;
  };
}

export default function TestPractitionerSchedule({ params }: { params: { practitionerId: string } }) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [practitionerInfo, setPractitionerInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [params.practitionerId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch practitioner info
      const practitionerRes = await fetch(`/api/practitioners/${params.practitionerId}`);
      const practitioner = await practitionerRes.json();
      setPractitionerInfo(practitioner);
      
      // Fetch schedule for next 30 days
      const now = new Date();
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 30);
      
      const bookingsRes = await fetch(
        `/api/bookings/practitioner/${params.practitionerId}?start=${now.toISOString()}&end=${endDate.toISOString()}`
      );
      const bookings = await bookingsRes.json();
      
      if (Array.isArray(bookings)) {
        const calendarEvents = bookings.map((booking: any) => ({
          id: booking._id,
          title: booking.patientId?.name || 'Unknown Patient',
          start: booking.startTime,
          end: booking.endTime,
          backgroundColor: booking.status === 'confirmed' ? '#3b82f6' : '#94a3b8',
          borderColor: booking.status === 'confirmed' ? '#2563eb' : '#64748b',
          extendedProps: {
            patientName: booking.patientId?.name || 'Unknown',
            patientEmail: booking.patientId?.email || '',
            status: booking.status
          }
        }));
        setEvents(calendarEvents);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEventClick = (info: any) => {
    alert(
      `Patient: ${info.event.extendedProps.patientName}\n` +
      `Email: ${info.event.extendedProps.patientEmail}\n` +
      `Status: ${info.event.extendedProps.status}`
    );
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Link href="/test-dashboard" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Test Dashboard
      </Link>
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold text-purple-900">Testing Practitioner View</h2>
        {practitionerInfo && (
          <div className="mt-2">
            <p className="text-purple-800"><strong>Name:</strong> {practitionerInfo.name}</p>
            <p className="text-purple-800"><strong>Email:</strong> {practitionerInfo.email}</p>
            <p className="text-purple-700 text-sm"><strong>ID:</strong> {params.practitionerId}</p>
          </div>
        )}
      </div>

      <h1 className="text-3xl font-bold mb-6">My Schedule</h1>
      
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
          eventClick={handleEventClick}
          slotMinTime="08:00:00"
          slotMaxTime="20:00:00"
          slotDuration="00:30:00"
          allDaySlot={false}
          nowIndicator={true}
          height="auto"
        />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Total Bookings</p>
          <p className="text-2xl font-bold text-blue-600">{events.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Confirmed</p>
          <p className="text-2xl font-bold text-green-600">
            {events.filter((e: any) => e.extendedProps.status === 'confirmed').length}
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600">Cancelled</p>
          <p className="text-2xl font-bold text-red-600">
            {events.filter((e: any) => e.extendedProps.status === 'cancelled').length}
          </p>
        </div>
      </div>
    </div>
  );
}
