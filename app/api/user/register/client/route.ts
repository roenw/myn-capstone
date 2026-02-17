import { NextRequest, NextResponse } from 'next/server';
import { auth0 } from '@/lib/auth0';
import connectDB from '@/lib/mongodb';
import Client from '@/models/Client';

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

    // Check if client already exists
    let client = await Client.findOne({ auth0Id });
    
    if (client) {
      return NextResponse.json({ error: 'Client profile already exists' }, { status: 409 });
    }

    // Create new client
    client = await Client.create({
      auth0Id,
      email,
      firstName: data.firstName,
      lastName: data.lastName,
      preferredName: data.preferredName,
      dob: data.dob ? new Date(data.dob) : undefined,
      phone: data.phone,
      location: data.location,
      referral: data.referral,
      interests: data.interests,
      yogaBefore: data.yogaBefore,
      practiceFrequency: data.practiceFrequency,
      sessionType: data.sessionType,
    });

    return NextResponse.json({ 
      success: true, 
      userId: client._id,
      message: 'Client profile created successfully'
    });
  } catch (error) {
    console.error('Error creating client:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
