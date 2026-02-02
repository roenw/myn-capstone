"use client";

import { Button, Card, Container } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Step6() {
    const router = useRouter();

    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100 text-center"
            style={{ backgroundColor: "#020617" }} // slate-950
        >
            <Container style={{ maxWidth: 640 }}>
                <Card
                    className="border-0 shadow-lg"
                    style={{
                        backgroundColor: "rgba(15, 23, 42, 0.75)", // slate-900/70
                        borderRadius: "1rem",
                        border: "1px solid #1e293b", // slate-800
                    }}
                >
                    <Card.Body className="p-5">
                        {/* Icon */}
                        <div
                            className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                            style={{
                                width: 64,
                                height: 64,
                                borderRadius: "50%",
                                backgroundColor: "rgba(59,130,246,0.15)", // blue glow
                                color: "#3b82f6", // blue-500
                                fontSize: "1.75rem",
                                fontWeight: 600,
                            }}
                        >
                            ✓
                        </div>

                        {/* Heading */}
                        <h3 className="fw-semibold text-light mb-2">
                            Verification submitted
                        </h3>

                        {/* Description */}
                        <p
                            className="text-secondary mb-4"
                            style={{ maxWidth: 480, margin: "0 auto" }}
                        >
                            Your physician credentials have been received successfully.
                            Our team will verify your information and notify you once
                            access has been approved.
                        </p>

                        {/* CTA */}
                        <Button
                            type="button"
                            onClick={() => router.push("/")}
                            style={{
                                backgroundColor: "#3b82f6",
                                border: "none",
                                borderRadius: "9999px",
                                padding: "0.6rem 2.5rem",
                                fontWeight: 500,
                                boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                            }}
                        >
                            Go to dashboard →
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}