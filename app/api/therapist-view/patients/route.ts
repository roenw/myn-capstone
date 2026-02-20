import { NextRequest, NextResponse } from 'next/server';
import { auth0 } from '@/lib/auth0';
import connectDB from '@/lib/mongodb';
import Client from '@/models/Client';
import Therapist from '@/models/Therapist';

export async function GET() {
    try {
        const session = await auth0.getSession();
        
        if (!session || !session.user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
        }

        const auth0Id = session.user.sub;
        
        await connectDB();

        // Find the therapist
        const therapist = await Therapist.findOne({ auth0Id });
        
        if (!therapist) {
            return NextResponse.json({ error: 'Therapist not found' }, { status: 404 });
        }

        // Find all clients assigned to this therapist
        const patients = await Client.find({ therapistId: therapist._id }).lean();
        
        return NextResponse.json(patients);
    } catch (error) {
        console.error('Error fetching patients:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const session = await auth0.getSession();
        
        if (!session || !session.user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
        }

        const body = await request.json();
        
        await connectDB();
        
        // Create or update a client
        const newPatient = await Client.create(body);
        
        return NextResponse.json({ success: true, data: newPatient }, { status: 201 });
    } catch (error) {
        console.error('Error creating patient:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}