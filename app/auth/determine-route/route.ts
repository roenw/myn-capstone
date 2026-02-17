import { NextResponse } from 'next/server';
import { auth0 } from '@/lib/auth0';
import connectDB from '@/lib/mongodb';
import Client from '@/models/Client';
import Therapist from '@/models/Therapist';
import Physician from '@/models/Physician';

export async function GET() {
  try {
    const session = await auth0.getSession();
    
    if (!session) {
      return NextResponse.redirect(new URL('/auth/login', process.env.APP_BASE_URL));
    }

    const auth0Id = session.user.sub;
    
    await connectDB();

    // Check which user type they are
    const client = await Client.findOne({ auth0Id });
    if (client) {
      return NextResponse.redirect(new URL('/client', process.env.APP_BASE_URL));
    }

    const therapist = await Therapist.findOne({ auth0Id });
    if (therapist) {
      return NextResponse.redirect(new URL('/therapistView', process.env.APP_BASE_URL));
    }

    const physician = await Physician.findOne({ auth0Id });
    if (physician) {
      return NextResponse.redirect(new URL('/physician', process.env.APP_BASE_URL));
    }

    // If user not found in any collection, redirect to signup
    return NextResponse.redirect(new URL('/signup', process.env.APP_BASE_URL));
  } catch (error) {
    console.error('Error determining route:', error);
    return NextResponse.redirect(new URL('/auth/login', process.env.APP_BASE_URL));
  }
}
