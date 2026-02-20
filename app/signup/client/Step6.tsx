"use client";

import { Button, Card, Container } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Step6() {
    const router = useRouter();

    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{
                background:
                    "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
            }}
        >
            <Container style={{ maxWidth: 640 }}>
                <Card
                    className="border-0 shadow-sm text-center"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "1rem",
                        border: "none",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
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
                                backgroundColor: "rgba(59,130,246,0.12)",
                                color: "#3b82f6",
                                fontSize: "1.8rem",
                                fontWeight: 600,
                            }}
                        >
                            ✓
                        </div>

                        {/* Heading */}
                        <h3 className="fw-semibold mb-2">
                            You’re all set
                        </h3>

                        {/* Subtext */}
                        <p
                            className="text-muted mb-4"
                            style={{ maxWidth: 480, margin: "0 auto" }}
                        >
                            We’ve received your information successfully. A confirmation
                            email will be sent shortly, and your account is now ready to go.
                        </p>

                        {/* CTA */}
                        <Button
                            onClick={() => router.push("/")}
                            style={{
                                borderRadius: "9999px",
                                padding: "0.6rem 2.5rem",
                                boxShadow:
                                    "0 4px 14px rgba(59,130,246,0.2)",
                                fontWeight: 500,
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