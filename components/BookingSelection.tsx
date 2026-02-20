'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface BookingSelectionProps {
  practitionerId: string;
  clientId: string;
  practitionerName: string;
}

export default function BookingSelection({ 
  practitionerId, 
  clientId,
  practitionerName 
}: BookingSelectionProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState<any[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchAvailability = async (date: string) => {
    try {
      setLoading(true);
      const res = await fetch(`/api/availability/${practitionerId}?date=${date}`);
      const { slots } = await res.json();
      setAvailableSlots(slots);
    } catch (error) {
      console.error('Error fetching availability:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    setSelectedSlot(null);
    fetchAvailability(date);
  };

  const handleBooking = async () => {
    if (!selectedSlot) return;

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientId,
          practitionerId,
          startTime: selectedSlot.start,
          endTime: selectedSlot.end
        })
      });

      if (res.ok) {
        router.push('/dashboard/calendar');
      } else {
        const error = await res.json();
        alert(error.error || 'Booking failed');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Book Session with {practitionerName}
      </h1>

      <div className="bg-white rounded-lg shadow p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            Select Date
          </label>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading && (
          <div className="text-center py-4">Loading available slots...</div>
        )}

        {!loading && availableSlots.length > 0 && (
          <div>
            <label className="block text-sm font-medium mb-2">
              Available Time Slots
            </label>
            <div className="grid grid-cols-2 gap-3">
              {availableSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSlot(slot)}
                  className={`px-4 py-3 rounded-lg border-2 transition ${
                    selectedSlot === slot
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {new Date(slot.start).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </button>
              ))}
            </div>
          </div>
        )}

        {!loading && selectedDate && availableSlots.length === 0 && (
          <div className="text-center py-4 text-gray-600">
            No available slots for this date
          </div>
        )}

        {selectedSlot && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Selected Time Slot</h3>
            <p className="text-sm text-gray-700">
              {new Date(selectedSlot.start).toLocaleString()} - 
              {new Date(selectedSlot.end).toLocaleTimeString()}
            </p>
            <button
              onClick={handleBooking}
              className="mt-4 w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
            >
              Confirm Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
