import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Practitioner } from '@/lib/models/Practitioner';

export async function GET() {
  try {
    await connectDB();
    const practitioners = await Practitioner.find().sort({ createdAt: -1 });
    return NextResponse.json(practitioners);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch Practitioners' }, { status: 500 });
  }
}
