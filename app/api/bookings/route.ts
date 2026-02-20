import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Booking } from '@/lib/models/Booking';
import mongoose from 'mongoose';

// Create new booking
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const { patientId, practitionerId, startTime, endTime } = await req.json();
    
    // Validate times
    const start = new Date(startTime);
    const end = new Date(endTime);
    
    if (start >= end) {
      return NextResponse.json(
        { error: 'End time must be after start time' },
        { status: 400 }
      );
    }
    
    if (start < new Date()) {
      return NextResponse.json(
        { error: 'Cannot book past time slots' },
        { status: 400 }
      );
    }
    
    // Check for conflicts
    const hasConflict = await Booking.checkConflict(
      new mongoose.Types.ObjectId(practitionerId),
      start,
      end
    );
    
    if (hasConflict) {
      return NextResponse.json(
        { error: 'Time slot is already booked' },
        { status: 409 }
      );
    }
    
    // Create booking
    const booking = await Booking.create({
      patientId: new mongoose.Types.ObjectId(patientId),
      practitionerId: new mongoose.Types.ObjectId(practitionerId),
      startTime: start,
      endTime: end,
      status: 'confirmed'
    });
    
    // Populate and return
    await booking.populate([
      { path: 'patientId', select: 'name email' },
      { path: 'practitionerId', select: 'name email' }
    ]);
    
    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error('Booking creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

// Get all bookings (with optional filters)
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(req.url);
    const patientId = searchParams.get('patientId');
    const practitionerId = searchParams.get('practitionerId');
    const status = searchParams.get('status');
    
    const query: any = {};
    
    if (patientId) {
      query.patientId = new mongoose.Types.ObjectId(patientId);
    }
    
    if (practitionerId) {
      query.practitionerId = new mongoose.Types.ObjectId(practitionerId);
    }
    
    if (status) {
      query.status = status;
    }
    
    const bookings = await Booking.find(query)
      .populate('patientId', 'name email')
      .populate('practitionerId', 'name email')
      .sort({ startTime: -1 });
    
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Fetch bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
