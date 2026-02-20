import { NextResponse } from 'next/server';
import { auth0 } from '@/lib/auth0';
import connectDB from '@/lib/mongodb';
import Therapist from '@/models/Therapist';

export async function GET() {
    try {
        const session = await auth0.getSession();
        
        if (!session || !session.user) {
            return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
        }

        await connectDB();

        // Get all therapists
        const therapists = await Therapist.find({}).lean();
        
        return NextResponse.json(therapists);
    } catch (error) {
        console.error('Error fetching therapists:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
