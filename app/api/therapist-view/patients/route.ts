import { NextResponse } from 'next/server';

export async function GET() {
    const patients = [
        {
            id: 1,
            name: "George Youfesen",
            email: "Youfesen@gmail.com",
            phone: "480-9424-3223",
            currentYogaPlan: `
            Yoga Type: Hatha Yoga

            Monday: Focus on gentle stretches and breathing exercises to improve flexibility and reduce stress.
            Tuesday: Core strength and balance poses, including plank variations and tree pose.
            Wednesday: Relaxation and restorative yoga, focusing on deep stretches and mindfulness.
            Thursday: Strength and endurance with standing poses and sun salutations.
            Friday: Hip openers and spinal twists to release tension and improve mobility.
            Saturday: Flow session combining balance, flexibility, and light cardio through sequences.
            Sunday: Restorative and meditation-focused session for recovery and mental clarity.`,
            nextMeeting: "11/23/2025",
            patientImageURL: "",
            therapistId: 2
        },
        {
            id: 2,
            name: "Lila Fernandez",
            email: "l.fernandez@gmail.com",
            phone: "602-555-7812",
            currentYogaPlan: `
            Yoga Type: Vinyasa Yoga

            Monday: Sun salutations and gentle flow to wake up the body and improve circulation.
            Tuesday: Core and arm strength poses, including plank variations and boat pose.
            Wednesday: Hip openers and forward folds for flexibility and relaxation.
            Thursday: Balance and standing poses to improve posture and stability.
            Friday: Backbends and chest openers to release tension and boost energy.
            Saturday: Flow session linking breath with movement for endurance.
            Sunday: Restorative and meditation-focused session for mental clarity and recovery.`,
            nextMeeting: "11/24/2025",
            patientImageURL: "",
            therapistId: 2
        },
        {
            id: 3,
            name: "Marcus Lee",
            email: "marcus.lee@yahoo.com",
            phone: "480-678-9934",
            currentYogaPlan: `
            Yoga Type: Yin Yoga

            Monday: Deep stretches focusing on hips and lower back to release tension.
            Tuesday: Shoulder and spine stretches for improved mobility.
            Wednesday: Mindful meditation and long-held poses to increase flexibility.
            Thursday: Leg and hamstring stretches with breathing techniques.
            Friday: Gentle twists and restorative poses for spinal health.
            Saturday: Flow of slow sequences combining balance and flexibility.
            Sunday: Full-body restorative session with meditation for stress relief.`,
            nextMeeting: "11/25/2025",
            patientImageURL: "",
            therapistId: 3
        },
    ];
    return NextResponse.json(patients);
}

export async function POST(request: Request) {
    const body = await request.json();
    const { name, email, phone, currentYogaPlan,
        nextMeeting, patientImageURL, therapistId
    } = body;
    const newPatient = { id: Date.now(),
        name, email, phone, currentYogaPlan,
        nextMeeting, patientImageURL, therapistId,
        createdAt: new Date()
    };
    return NextResponse.json({ success: true, data: newPatient}, { status: 201})
}