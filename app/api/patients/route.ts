import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Patient } from '@/lib/models/Patient';

export async function GET() {
  try {
    await connectDB();
    const patients = await Patient.find().sort({ createdAt: -1 });
    return NextResponse.json(patients);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch patients' }, { status: 500 });
  }
}
