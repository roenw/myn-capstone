import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Patient } from '@/lib/models/Patient';
import mongoose from 'mongoose';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const patient = await Patient.findById(new mongoose.Types.ObjectId(params.id));
    
    if (!patient) {
      return NextResponse.json({ error: 'Patient not found' }, { status: 404 });
    }
    
    return NextResponse.json(patient);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch patient' }, { status: 500 });
  }
}
