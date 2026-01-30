'use client';

import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

const clients = [
    "Client A",
    "Client B",
    "Client C",
    "Client D"
];

export default function PatientReferral() {
    const router = useRouter();

    return (
        <div className="border border-dark min-vh-100 position-relative d-flex align-items-center justify-content-center bg-light">
            {/* Profile icon top right */}
            <button
                type="button"
                className="position-absolute top-0 end-0 mt-3 me-4 bg-secondary rounded-circle d-flex align-items-center justify-content-center fw-bold"
                style={{ width: 40, height: 40 }}
                onClick={() => {
                    console.log("Profile Navigation");
                }}
            >
                User
            </button>

            <div className="d-flex position-relative w-100" style={{ maxWidth: 1200, height: 700 }}>
                {/* Main Container */}
                <div
                    className="position-absolute top-10 start-50 translate-middle-x d-flex flex-column align-items-center text-center"
                    style={{
                        width: "100%",
                        color: "#171716",
                        fontWeight: "700",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "24px",
                        pointerEvents: "none"
                    }}
                >
                    <div>Referred Clients</div>

                    <ul style={{ listStyle: "none", padding: 0, marginTop: 50, pointerEvents: "auto" }}>
                        {clients.map((client, index) => (
                            <li key={index} style={{ marginBottom: 50 }}>
                                <Button
                                    type="button"
                                    className="btn btn-light rounded-pill"
                                    style={{
                                        fontSize: "1.25rem",
                                        padding: "12px 36px",
                                        borderWidth: 2,
                                        borderColor: "#f0f0f0",
                                        width: "100%",
                                        maxWidth: "300px",
                                        pointerEvents: "auto"
                                    }}
                                    onClick={() => {
                                        router.push('/physician/patientNotes');
                                    }}
                                >
                                    {client}
                                </Button>
                            </li>
                        ))}
                    </ul>

                    {/* Refer New Patient Button */}
                    <Button
                        variant="primary"
                        className="rounded-pill mt-3"
                        style={{
                            fontSize: "1.1rem",
                            padding: "12px 36px",
                            pointerEvents: "auto"
                        }}
                        onClick={() => router.push('/physician/instructorReferral')}
                    >
                        + Refer New Patient
                    </Button>
                </div>
            </div>
        </div>
    );
}
