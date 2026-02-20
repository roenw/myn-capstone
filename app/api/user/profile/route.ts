import { NextResponse } from 'next/server';
import { auth0 } from '@/lib/auth0';
import connectDB from '@/lib/mongodb';
import Client from '@/models/Client';
import Therapist from '@/models/Therapist';
import Physician from '@/models/Physician';

export async function GET() {
  try {
    const session = await auth0.getSession();
    
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const auth0Id = session.user.sub;
    
    await connectDB();

    // Check which user type they are
    let user = await Client.findOne({ auth0Id }).lean();
    if (user) {
      return NextResponse.json({ ...user, userType: 'client' });
    }

    user = await Therapist.findOne({ auth0Id }).lean();
    if (user) {
      return NextResponse.json({ ...user, userType: 'therapist' });
    }

    user = await Physician.findOne({ auth0Id }).lean();
    if (user) {
      return NextResponse.json({ ...user, userType: 'physician' });
    }

    return NextResponse.json({ error: 'User not found in database' }, { status: 404 });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
