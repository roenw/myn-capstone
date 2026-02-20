"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Card, Spinner } from "react-bootstrap";

export default function CompleteSignup() {
    const router = useRouter();
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const completeSignup = async () => {
            try {
                // Get the saved form data
                const signupType = localStorage.getItem("signupType");
                const formDataStr = localStorage.getItem(`${signupType}SignupData`);
                
                if (!formDataStr || !signupType) {
                    setStatus('error');
                    setErrorMessage('No signup data found. Please start the signup process again.');
                    return;
                }

                const formData = JSON.parse(formDataStr);
                
                // Send to appropriate API endpoint based on user type
                const response = await fetch(`/api/user/register/${signupType}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();

                if (response.ok) {
                    // Clear localStorage
                    localStorage.removeItem(`${signupType}SignupData`);
                    localStorage.removeItem("signupType");
                    
                    setStatus('success');
                    
                    // Redirect to appropriate dashboard
                    setTimeout(() => {
                        router.push('/auth/determine-route');
                    }, 2000);
                } else {
                    setStatus('error');
                    setErrorMessage(data.error || 'Failed to create profile');
                }
            } catch (error) {
                console.error('Error completing signup:', error);
                setStatus('error');
                setErrorMessage('An error occurred during signup');
            }
        };

        completeSignup();
    }, [router]);

    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{
                background: "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <Container style={{ maxWidth: 640 }}>
                <Card
                    className="border-0 shadow-sm text-center"
                    style={{
                        backgroundColor: "rgba(255,255,255,0.85)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "1rem",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    }}
                >
                    <Card.Body className="p-5">
                        {status === 'loading' && (
                            <>
                                <Spinner animation="border" variant="primary" className="mb-4" />
                                <h3 className="fw-semibold mb-2" style={{ color: "#212529" }}>
                                    Creating your account...
                                </h3>
                                <p className="text-muted">
                                    Please wait while we set up your profile.
                                </p>
                            </>
                        )}
                        
                        {status === 'success' && (
                            <>
                                <div
                                    className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(59,130,246,0.15)",
                                        color: "#3b82f6",
                                        fontSize: "1.8rem",
                                        fontWeight: 600,
                                    }}
                                >
                                    ✓
                                </div>
                                <h3 className="fw-semibold mb-2" style={{ color: "#212529" }}>
                                    Account created successfully!
                                </h3>
                                <p className="text-muted">
                                    Redirecting you to your dashboard...
                                </p>
                            </>
                        )}
                        
                        {status === 'error' && (
                            <>
                                <div
                                    className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(239,68,68,0.15)",
                                        color: "#ef4444",
                                        fontSize: "1.8rem",
                                        fontWeight: 600,
                                    }}
                                >
                                    ✕
                                </div>
                                <h3 className="fw-semibold mb-2" style={{ color: "#212529" }}>
                                    Error creating account
                                </h3>
                                <p className="text-muted">
                                    {errorMessage}
                                </p>
                                <button
                                    onClick={() => router.push('/signup')}
                                    className="btn btn-primary mt-3"
                                    style={{
                                        backgroundColor: "#3b82f6",
                                        border: "none",
                                        boxShadow: "0 4px 14px rgba(59,130,246,0.2)",
                                    }}
                                >
                                    Back to Signup
                                </button>
                            </>
                        )}
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}
