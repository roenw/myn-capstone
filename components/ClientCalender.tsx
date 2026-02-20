'use client';

import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

interface ClientCalendarProps {
  userId: string;
}

export default function ClientCalendar({ userId }: ClientCalendarProps) {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, [userId]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/bookings/user/${userId}`);
      const bookings = await res.json();
      
      const calendarEvents = bookings.map((booking: any) => ({
        id: booking._id,
        title: `Session with ${booking.practitionerId.name}`,
        start: booking.startTime,
        end: booking.endTime,
        backgroundColor: '#10b981',
        borderColor: '#059669',
        extendedProps: {
          practitionerName: booking.practitionerId.name,
          practitionerEmail: booking.practitionerId.email,
          status: booking.status
        }
      }));
      
      setEvents(calendarEvents);
    } catch (error) {
      console.error('Error fetching bookings:', error);
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
        fetchBookings();
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
    }
  };

  if (loading) {
    return <div className="p-6">Loading calendar...</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Appointments</h1>
      
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

      {/* Booking Details */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
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
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">
                  {Math.round((new Date(selectedEvent.end).getTime() - new Date(selectedEvent.start).getTime()) / (1000 * 60))} minutes
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleCancelBooking}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Cancel Booking
              </button>
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
