import { NextRequest, NextResponse } from 'next/server';
import { auth0 } from '@/lib/auth0';
import connectDB from '@/lib/mongodb';
import Physician from '@/models/Physician';

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

    // Check if physician already exists
    let physician = await Physician.findOne({ auth0Id });
    
    if (physician) {
      return NextResponse.json({ error: 'Physician profile already exists' }, { status: 409 });
    }

    // Create new physician
    // Parse name if provided as single field
    const nameParts = data.name ? data.name.split(' ') : [];
    const firstName = data.firstName || (nameParts.length > 0 ? nameParts[0] : '');
    const lastName = data.lastName || (nameParts.length > 1 ? nameParts.slice(1).join(' ') : '');
    
    physician = await Physician.create({
      auth0Id,
      email,
      firstName,
      lastName,
      phone: data.phone,
      credentials: data.credentials,
      medicalLicenseNumber: data.medicalLicenseNumber,
      specialty: data.specialty,
      hospitalAffiliation: data.hospitalAffiliation,
      license: data.license,
      npi: data.npi,
      organization: data.organization,
    });

    return NextResponse.json({ 
      success: true, 
      userId: physician._id,
      message: 'Physician profile created successfully'
    });
  } catch (error) {
    console.error('Error creating physician:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
