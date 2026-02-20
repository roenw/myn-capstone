"use client";

import { useRouter } from "next/navigation";
import { Container, Card, Form, Button } from "react-bootstrap";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/client"); // placeholder
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
            }}
        >
            <Container style={{ maxWidth: "480px" }}>
                <Card
                    className="border-0 shadow-sm"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "1.25rem",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                            "0 8px 20px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "";
                    }}
                >
                    <Card.Body className="p-5">
                        {/* Header */}
                        <div className="text-center mb-4">
                            <h2 className="fw-semibold mb-2">
                                Welcome Back
                            </h2>
                            <p className="text-muted mb-0">
                                Sign in to your Yoga Network account
                            </p>
                        </div>

                        {/* Form */}
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-4">
                                <Form.Label className="fw-semibold small">
                                    Username
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    placeholder="Enter your username"
                                    style={{
                                        borderRadius: "0.75rem",
                                        padding: "0.7rem",
                                        border: "1px solid #dee2e6",
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="fw-semibold small">
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    required
                                    placeholder="Enter your password"
                                    style={{
                                        borderRadius: "0.75rem",
                                        padding: "0.7rem",
                                        border: "1px solid #dee2e6",
                                    }}
                                />
                            </Form.Group>

                            <Button
                                type="submit"
                                className="w-100 fw-medium"
                                style={{
                                    borderRadius: "9999px",
                                    padding: "0.7rem 0",
                                    boxShadow:
                                        "0 4px 14px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                Log In
                            </Button>
                        </Form>

                        {/* Footer */}
                        <div className="text-center mt-4">
                            <small className="text-muted">
                                Don't have an account?{" "}
                                <a
                                    href="/signup"
                                    style={{
                                        textDecoration: "none",
                                        fontWeight: 500,
                                    }}
                                >
                                    Sign up
                                </a>
                            </small>
                        </div>
                    </Card.Body>
                </Card>

                <div className="text-center mt-4">
                    <p className="text-muted small mb-0">
                        Yoga Network
                    </p>
                </div>
            </Container>
        </div>
    );
}