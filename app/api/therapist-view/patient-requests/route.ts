import { NextResponse } from 'next/server';

export async function GET() {
    const requests = [
        {
            id: 1,
            name: "Lily Shwartz",
            email: "lily.shwartz@email.com",
            phone: "(555) 123-4567",
            requestDate: "10/12/2025",
            message:
                "Hi! I'm interested in starting yoga therapy for anxiety and stress management. I've tried yoga before but would love guidance from a professional.",
            preferredDays: ["Monday", "Wednesday"],
            preferredTime: "Evening (5-7pm)",
            experience: "Beginner",
            status: "pending",
            targetTherapistId: 2
        },
        {
            id: 2,
            name: "Marcus Thompson",
            email: "m.thompson@email.com",
            phone: "(555) 234-5678",
            requestDate: "10/13/2025",
            message:
                "Looking for yoga therapy to help with lower back pain. My doctor recommended it as part of my recovery plan.",
            preferredDays: ["Tuesday", "Thursday"],
            preferredTime: "Morning (9-11am)",
            experience: "Intermediate",
            status: "pending",
            targetTherapistId: 2
        },
        {
            id: 3,
            name: "Sarah Chen",
            email: "sarah.chen@email.com",
            phone: "(555) 345-6789",
            requestDate: "10/14/2025",
            message:
                "I'm dealing with postpartum depression and heard yoga therapy could help. Would love to connect and discuss options.",
            preferredDays: ["Friday"],
            preferredTime: "Afternoon (2-4pm)",
            experience: "Beginner",
            status: "pending",
            targetTherapistId: 2
        },
        {
            id: 4,
            name: "David Rodriguez",
            email: "d.rodriguez@email.com",
            phone: "(555) 456-7890",
            requestDate: "10/14/2025",
            message:
                "Interested in yoga therapy for PTSD management. I'm a veteran looking for holistic approaches to healing.",
            preferredDays: ["Monday", "Friday"],
            preferredTime: "Morning (10am-12pm)",
            experience: "No experience",
            status: "pending",
            targetTherapistId: 2
        },
    ];
    return NextResponse.json(requests);
}

{/* Make sure to implement for specific therapists */}
export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, phone, message, preferredDays,
        preferredTime, experience} = body;
        const status = "pending"
    const newPatientReq = { id: Date.now(),
        name, email, phone, 
        requestDate: new Date().toISOString(), 
        message, preferredDays, 
        preferredTime, experience, status,
        createdAt: new Date()
    };
    return NextResponse.json({ success: true, data: newPatientReq }, { status: 201 })
}