"use client";

import { useRouter } from "next/navigation";
import { Container, Card, Form, Button } from "react-bootstrap";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Role-based routing should happen AFTER auth (session / backend)
        router.push("/client"); // placeholder
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{ backgroundColor: "#020617" }} // slate-950
        >
            <Container style={{ maxWidth: "420px" }}>
                <Card
                    className="border-0 shadow-lg"
                    style={{
                        backgroundColor: "rgba(15, 23, 42, 0.7)", // slate-900/70
                        borderRadius: "1rem",
                        border: "1px solid #1e293b", // slate-800
                    }}
                >
                    <Card.Body className="p-4">
                        {/* Header */}
                        <div className="text-center mb-4">
                            <h2 className="fw-semibold text-light mb-1">
                                Welcome Back
                            </h2>
                            <p className="text-secondary small mb-0">
                                Sign in to your account
                            </p>
                        </div>

                        {/* Login Form */}
                        <Form onSubmit={handleLogin}>
                            {/* Username */}
                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-secondary">
                                    Username
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    placeholder="Enter your username"
                                    className="border-0"
                                    style={{
                                        backgroundColor: "#020617", // slate-950
                                        color: "#e5e7eb",
                                        borderRadius: "0.75rem",
                                        padding: "0.6rem 0.75rem",
                                    }}
                                />
                            </Form.Group>

                            {/* Password */}
                            <Form.Group className="mb-4">
                                <Form.Label className="text-uppercase small text-secondary">
                                    Password
                                </Form.Label>
                                <Form.Control
                                    type="password"
                                    required
                                    placeholder="Enter your password"
                                    className="border-0"
                                    style={{
                                        backgroundColor: "#020617",
                                        color: "#e5e7eb",
                                        borderRadius: "0.75rem",
                                        padding: "0.6rem 0.75rem",
                                    }}
                                />
                            </Form.Group>

                            {/* Submit */}
                            <Button
                                type="submit"
                                className="w-100 fw-medium"
                                style={{
                                    backgroundColor: "#3b82f6", // blue-500
                                    border: "none",
                                    borderRadius: "9999px",
                                    padding: "0.6rem 0",
                                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                                }}
                            >
                                Log In
                            </Button>
                        </Form>

                        {/* Footer */}
                        <div className="text-center mt-4">
                            <small className="text-secondary">
                                Don't have an account?{" "}
                                <a
                                    href="/signup"
                                    className="text-decoration-none"
                                    style={{ color: "#60a5fa" }}
                                >
                                    Sign up
                                </a>
                            </small>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}