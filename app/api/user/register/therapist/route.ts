import { NextRequest, NextResponse } from 'next/server';
import { auth0 } from '@/lib/auth0';
import connectDB from '@/lib/mongodb';
import Therapist from '@/models/Therapist';

export async function POST(request: NextRequest) {
  try {
    const session = await auth0.getSession();
    
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const auth0Id = session.user.sub;
    const email = session.user.email;
    
    const data = await request.json();
    
    await connectDB();

    // Check if therapist already exists
    let therapist = await Therapist.findOne({ auth0Id });
    
    if (therapist) {
      return NextResponse.json({ error: 'Therapist profile already exists' }, { status: 409 });
    }

    // Create new therapist
    therapist = await Therapist.create({
      auth0Id,
      email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      location: data.location,
      credentials: data.credentials,
      bio: data.bio,
      specialties: data.specialties,
      yearsOfExperience: data.yearsOfExperience,
    });

    return NextResponse.json({ 
      success: true, 
      userId: therapist._id,
      message: 'Therapist profile created successfully'
    });
  } catch (error) {
    console.error('Error creating therapist:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
