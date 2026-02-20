"use client";

import { useEffect, useState } from "react";
import { Button, Card, Container, Navbar, Nav, NavDropdown, Spinner } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function TherapistDebugPage() {
    const router = useRouter();
    const [therapistData, setTherapistData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTherapistData = async () => {
            try {
                const response = await fetch('/api/user/profile');
                if (response.ok) {
                    const data = await response.json();
                    setTherapistData(data);
                } else {
                    // Not authenticated, redirect to login
                    window.location.href = '/auth/login';
                }
            } catch (error) {
                console.error('Error fetching therapist data:', error);
                window.location.href = '/auth/login';
            } finally {
                setLoading(false);
            }
        };

        fetchTherapistData();
    }, [router]);

    const handleLogout = () => {
        window.location.href = '/auth/logout';
    };

    if (loading) {
        return (
            <div
                className="d-flex align-items-center justify-content-center"
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
                }}
            >
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    return (
        <>
            {/* Navbar */}
            <Navbar
                expand="lg"
                className="py-3"
                style={{
                    backgroundColor: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid #dee2e6",
                }}
            >
                <Container fluid className="px-5">
                    <Navbar.Brand
                        style={{
                            color: "#212529",
                            fontWeight: 600,
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        Yoga Network
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end">
                        <NavDropdown
                            title={
                                <span style={{ color: "#212529" }}>
                                    {therapistData?.firstName} {therapistData?.lastName}
                                </span>
                            }
                            id="therapist-dropdown"
                            align="end"
                        >
                            <NavDropdown.Item onClick={() => router.push("/therapistView")}>
                                <i className="bi bi-dashboard me-2" />
                                Dashboard
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push("/therapist_debug")}>
                                <i className="bi bi-bug me-2" />
                                Debug View
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout}>
                                <i className="bi bi-box-arrow-right me-2" />
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Main */}
            <main
                className="py-5"
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <Container style={{ maxWidth: "1200px" }}>
                    <Card
                        className="border-0 mb-4 shadow-sm"
                        style={{
                            backgroundColor: "rgba(255,255,255,0.85)",
                            backdropFilter: "blur(10px)",
                            borderRadius: "0.75rem",
                            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                        }}
                    >
                        <Card.Body className="p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div>
                                    <h2 className="fw-semibold mb-2" style={{ color: "#212529" }}>
                                        Therapist Debug View
                                    </h2>
                                    <p className="text-muted mb-0">
                                        {therapistData?.firstName} {therapistData?.lastName} - Raw Database Data
                                    </p>
                                </div>
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(59,130,246,0.15)",
                                        color: "#3b82f6",
                                        fontSize: "1.25rem",
                                        fontWeight: 600,
                                    }}
                                >
                                    {therapistData?.firstName?.[0]}{therapistData?.lastName?.[0]}
                                </div>
                            </div>

                            <div
                                className="alert mb-0"
                                style={{
                                    backgroundColor: "rgba(59,130,246,0.1)",
                                    border: "1px solid rgba(59,130,246,0.3)",
                                    borderRadius: "0.5rem",
                                    color: "#1e40af",
                                }}
                            >
                                <i className="bi bi-info-circle me-2" />
                                This is a debug view showing all your profile data from the database.
                            </div>

                            <div className="mt-4">
                                <pre
                                    className="p-4 mb-0"
                                    style={{
                                        backgroundColor: "#f8f9fa",
                                        border: "1px solid #dee2e6",
                                        borderRadius: "0.5rem",
                                        color: "#495057",
                                        maxHeight: "600px",
                                        overflow: "auto",
                                        fontSize: "0.875rem",
                                    }}
                                >
                                    {JSON.stringify(therapistData, null, 2)}
                                </pre>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </main>
        </>
    );
}
