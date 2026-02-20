import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Booking } from '@/lib/models/Booking';
import mongoose from 'mongoose';

export async function GET(
  req: NextRequest,
  { params }: { params: { patientId: string } }
) {
  try {
    await connectDB();
    
    const bookings = await Booking.find({
      patientId: new mongoose.Types.ObjectId(params.patientId),
      status: 'confirmed',
    })
      .populate('practitionerId', 'name email')
      .sort({ startTime: 1 });
    
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Fetch user bookings error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
