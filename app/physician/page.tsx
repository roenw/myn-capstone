'use client'

import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function PhysicianPage() {
    const router = useRouter();

    return (
        <div
            className="border border-dark min-vh-100 position-relative d-flex align-items-center justify-content-center bg-light"
        >
            {/* Profile icon top right */}
            <button
                type="button"
                className="position-absolute top-0 end-0 mt-3 me-4 bg-secondary rounded-circle d-flex align-items-center justify-content-center fw-bold"
                style={{ width: 40, height: 40 }}
                onClick={() => {
                    router.push("/physician/profile"); 
                }}
            >
                User
            </button>

            <div
                className="d-flex position-relative w-100"
                style={{ maxWidth: "60%", height: 700, backgroundColor: "#a4a3a3" }}
            >
                {/* Left side grey */}
                <div style={{ flex: 0.42, backgroundColor: "#a4a3a3" }}></div>

                {/* Right side lighter grey */}
                <div style={{ flex: 0.58, backgroundColor: "#d9d9d9" }}></div>

                {/* Main Container */}
                <div
                    className="position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center text-center"
                    style={{
                        width: "100%",
                        color: "#171716",
                        fontWeight: "700",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 50,
                        pointerEvents: "none",
                    }}
                >
                    <div>
                        WELCOME BACK Dr. Skyler...!<br />
                        Your journey to balance continues...
                    </div>

                    <Button
                        type="button"
                        className="btn btn-light rounded-pill mt-4"
                        style={{
                            pointerEvents: "auto",
                            fontSize: "1.25rem",
                            padding: "12px 36px",
                            borderWidth: 2,
                            borderColor: "#f0f0f0",
                        }}
                        onClick={() => {
                            router.push("/physician/patientList");
                        }}
                    >
                        Let's get started
                    </Button>
                </div>
            </div>
        </div>
    );
}