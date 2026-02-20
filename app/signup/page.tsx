"use client";

import { Button, Card, Container } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();

    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{
                background:
                    "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
            }}
        >
            <Container style={{ maxWidth: 720 }}>
                <Card
                    className="border-0 shadow-sm"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "1rem",
                        border: "none",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    }}
                >
                    <Card.Body className="p-5 text-center">
                        {/* Header */}
                        <h3 className="fw-semibold mb-2">
                            Create your account
                        </h3>
                        <p className="text-muted mb-4">
                            Choose the role that best describes you. You’ll be guided through
                            a tailored signup process.
                        </p>

                        {/* Role cards */}
                        <div className="d-grid gap-3">

                            <RoleCard
                                title="Client"
                                description="Looking for guided yoga therapy and wellness support."
                                onClick={() => router.push("/signup/client")}
                            />

                            <RoleCard
                                title="Therapist"
                                description="Provide yoga therapy sessions and support clients."
                                onClick={() => router.push("/signup/therapist")}
                            />

                            <RoleCard
                                title="Physician"
                                description="Collaborate and monitor patient wellness."
                                onClick={() => router.push("/signup/physician")}
                            />

                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

/* ---------- Role Card ---------- */

function RoleCard({
    title,
    description,
    onClick,
}: {
    title: string;
    description: string;
    onClick: () => void;
}) {
    return (
        <Button
            onClick={onClick}
            className="text-start"
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                border: "1px solid #dee2e6",
                borderRadius: "0.75rem",
                padding: "1rem 1.25rem",
                color: "#212529",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
        >
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className="fw-semibold">{title}</div>
                    <div className="text-muted small">
                        {description}
                    </div>
                </div>
                <span
                    style={{
                        color: "#3b82f6",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                    }}
                >
                    →
                </span>
            </div>
        </Button>
    );
}