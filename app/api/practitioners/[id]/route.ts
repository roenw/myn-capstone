import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { Practitioner } from '@/lib/models/Practitioner';
import mongoose from 'mongoose';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const practitioner = await Practitioner.findById(new mongoose.Types.ObjectId(params.id));
    
    if (!practitioner) {
      return NextResponse.json({ error: 'Practitioner not found' }, { status: 404 });
    }
    
    return NextResponse.json(practitioner);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch practitioner' }, { status: 500 });
  }
}
