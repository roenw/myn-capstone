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
    practitionerName: string;
    practitionerEmail: string;
    status: string;
  };
}

export default function TestPatientCalendar({ params }: { params: { patientId: string } }) {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [patientInfo, setPatientInfo] = useState<any>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [params.patientId]);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch client info
      const patientRes = await fetch(`/api/patients/${params.patientId}`);
      const patient = await patientRes.json();
      setPatientInfo(patient);
      
      // Fetch bookings
      const bookingsRes = await fetch(`/api/bookings/patient/${params.patientId}`);
      const bookings = await bookingsRes.json();
      
      if (Array.isArray(bookings)) {
        const calendarEvents = bookings.map((booking: any) => ({
          id: booking._id,
          title: `Session with ${booking.practitionerId?.name || 'Unknown'}`,
          start: booking.startTime,
          end: booking.endTime,
          backgroundColor: booking.status === 'confirmed' ? '#10b981' : '#ef4444',
          borderColor: booking.status === 'confirmed' ? '#059669' : '#dc2626',
          extendedProps: {
            practitionerName: booking.practitionerId?.name || 'Unknown',
            practitionerEmail: booking.practitionerId?.email || '',
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
    setSelectedEvent({
      id: info.event.id,
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      ...info.event.extendedProps
    });
  };

  const handleCancelBooking = async () => {
    if (!selectedEvent) return;
    
    try {
      const res = await fetch(`/api/bookings/${selectedEvent.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'cancelled' })
      });
      
      if (res.ok) {
        setSelectedEvent(null);
        fetchData();
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Link href="/test-dashboard" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Test Dashboard
      </Link>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold text-blue-900">Testing Client View</h2>
        {patientInfo && (
          <div className="mt-2">
            <p className="text-blue-800"><strong>Name:</strong> {patientInfo.name}</p>
            <p className="text-blue-800"><strong>Email:</strong> {patientInfo.email}</p>
            <p className="text-blue-700 text-sm"><strong>ID:</strong> {params.patientId}</p>
          </div>
        )}
      </div>

      <h1 className="text-3xl font-bold mb-6">My Appointments</h1>
      
      {events.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <p className="text-yellow-800">No upcoming appointments for this client.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            events={events}
            eventClick={handleEventClick}
            height="auto"
            slotMinTime="08:00:00"
            slotMaxTime="20:00:00"
            allDaySlot={false}
          />
        </div>
      )}

      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-200 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Booking Details</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Practitioner</p>
                <p className="font-semibold">{selectedEvent.practitionerName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date & Time</p>
                <p className="font-semibold">
                  {new Date(selectedEvent.start).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className={`font-semibold ${selectedEvent.status === 'confirmed' ? 'text-green-600' : 'text-red-600'}`}>
                  {selectedEvent.status}
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {selectedEvent.status === 'confirmed' && (
                <button
                  onClick={handleCancelBooking}
                  className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Cancel Booking
                </button>
              )}
              <button
                onClick={() => setSelectedEvent(null)}
                className="flex-1 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
