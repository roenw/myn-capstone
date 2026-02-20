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
    const startDate = searchParams.get('start');
    const endDate = searchParams.get('end');
    
    const query: any = {
      practitionerId: new mongoose.Types.ObjectId(params.practitionerId),
      status: 'confirmed'
    };
    
    
    const bookings = await Booking.find(query)
      .populate('patientId', 'name email')
      .sort({ startTime: 1 });
    
    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Fetch practitioner schedule error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schedule' },
      { status: 500 }
    );
  }
}
