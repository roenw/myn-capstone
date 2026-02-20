import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Booking } from '@/lib/models/Booking';
import mongoose from 'mongoose';

export async function GET(
  req: NextRequest,
  { params }: { params: { practitionerId: string } }
) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(req.url);
    const date = searchParams.get('date'); // YYYY-MM-DD
    
    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }
    
    // Define working hours (9 AM - 5 PM)
    const workingHours = {
      start: 9,
      end: 17
    };
    
    // Get start and end of day
    const startOfDay = new Date(date + 'T00:00:00');
    const endOfDay = new Date(date + 'T23:59:59');
    
    // Fetch existing bookings for this practitioner on this date
    const bookings = await Booking.find({
      practitionerId: new mongoose.Types.ObjectId(params.practitionerId),
      startTime: { $gte: startOfDay, $lte: endOfDay },
      status: 'confirmed'
    }).sort({ startTime: 1 });
    
    // Generate available slots
    const slots = [];
    
    for (let hour = workingHours.start; hour < workingHours.end; hour++) {
      const slotStart = new Date(date + `T${hour.toString().padStart(2, '0')}:00:00`);
      const slotEnd = new Date(slotStart.getTime() + 60 * 60 * 1000); // 1 hour slots
      
      // Check if slot conflicts with any booking
      const isBooked = bookings.some(booking => {
        return (
          booking.startTime < slotEnd && 
          booking.endTime > slotStart
        );
      });
      
      // Only add if not booked and in the future
      if (!isBooked && slotStart > new Date()) {
        slots.push({
          start: slotStart.toISOString(),
          end: slotEnd.toISOString()
        });
      }
    }
    
    return NextResponse.json({ slots });
  } catch (error) {
    console.error('Fetch availability error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch availability' },
      { status: 500 }
    );
  }
}
