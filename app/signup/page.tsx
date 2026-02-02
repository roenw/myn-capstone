"use client";

import { Button, Card, Container } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();

    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{ backgroundColor: "#020617" }} // slate-950
        >
            <Container style={{ maxWidth: 720 }}>
                <Card
                    className="border-0 shadow-lg"
                    style={{
                        backgroundColor: "rgba(15,23,42,0.75)", // slate-900/70
                        borderRadius: "1rem",
                        border: "1px solid #1e293b",
                    }}
                >
                    <Card.Body className="p-5 text-center">
                        {/* Header */}
                        <h3 className="fw-semibold text-light mb-2">
                            Create your account
                        </h3>
                        <p className="text-secondary mb-4">
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
                                title="Instructor"
                                description="Provide yoga therapy sessions and support clients."
                                onClick={() => router.push("/signup/instructor")}
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
                backgroundColor: "#020617",
                border: "1px solid #1e293b",
                borderRadius: "0.75rem",
                padding: "1rem 1.25rem",
                color: "#e5e7eb",
                boxShadow: "none",
            }}
        >
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className="fw-semibold text-light">{title}</div>
                    <div className="text-secondary small">
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