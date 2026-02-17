"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Card, Button, Spinner } from "react-bootstrap";

export default function LoginPage() {
    const router = useRouter();

    useEffect(() => {
        // Check if user is already logged in
        fetch('/api/user/profile')
            .then(res => {
                if (res.ok) {
                    // User is already logged in, redirect based on their role
                    router.push('/auth/determine-route');
                }
            })
            .catch(() => {
                // Not logged in, do nothing
            });
    }, [router]);

    const handleLogin = () => {
        // Redirect to Auth0 login
        window.location.href = '/auth/login';
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

                        {/* Login Button */}
                        <Button
                            onClick={handleLogin}
                            className="w-100 fw-medium"
                            style={{
                                backgroundColor: "#3b82f6", // blue-500
                                border: "none",
                                borderRadius: "9999px",
                                padding: "0.6rem 0",
                                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                            }}
                        >
                            Log In with Auth0
                        </Button>

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