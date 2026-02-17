"use client";

import { useEffect, useState } from "react";
import { Button, Card, Container, Navbar, Nav, NavDropdown, Spinner } from "react-bootstrap";
import { useRouter } from "next/navigation";

interface PhysicianData {
    firstName: string;
    lastName: string;
    credentials?: string;
    email: string;
    status?: 'pending' | 'approved' | 'rejected';
}

export default function PhysicianPage() {
    const router = useRouter();
    const [physicianData, setPhysicianData] = useState<PhysicianData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhysicianData = async () => {
            try {
                const response = await fetch('/api/user/profile');
                if (response.ok) {
                    const data = await response.json();
                    setPhysicianData(data);
                } else {
                    // Not authenticated, redirect to login
                    window.location.href = '/auth/login';
                }
            } catch (error) {
                console.error('Error fetching physician data:', error);
                window.location.href = '/auth/login';
            } finally {
                setLoading(false);
            }
        };

        fetchPhysicianData();
    }, [router]);

    const handleLogout = () => {
        window.location.href = '/auth/logout';
    };

    if (loading) {
        return (
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh", backgroundColor: "#020617" }}
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
                className="border-bottom"
                style={{
                    backgroundColor: "#020617", // slate-950
                    borderColor: "#1e293b",
                }}
            >
                <Container fluid className="px-5">
                    <Navbar.Brand
                        style={{ color: "#e5e7eb", fontWeight: 600 }}
                    >
                        Yoga Network
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end">
                        <NavDropdown
                            title={
                                <span style={{ color: "#e5e7eb" }}>
                                    {physicianData?.firstName} {physicianData?.lastName}
                                </span>
                            }
                            id="physician-dropdown"
                            align="end"
                        >
                            <NavDropdown.Item onClick={() => router.push("/physician")}>
                                <i className="bi bi-house me-2" />
                                Home
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push("/physician_debug")}>
                                <i className="bi bi-bug me-2" />
                                Debug View
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => router.push("/physician/profile")}>
                                <i className="bi bi-person-circle me-2" />
                                Profile
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
                className="d-flex align-items-center justify-content-center"
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#020617",
                }}
            >                <Container style={{ maxWidth: 720 }}>
                    {/* Account Status Warning */}
                    {physicianData?.status === 'pending' && (
                        <Card
                            className="mb-4 border-0"
                            style={{
                                backgroundColor: "rgba(251, 191, 36, 0.1)",
                                border: "1px solid rgba(251, 191, 36, 0.3)",
                                borderRadius: "0.75rem",
                            }}
                        >
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-start gap-3">
                                    <i className="bi bi-hourglass-split text-warning fs-3" />
                                    <div>
                                        <h5 className="text-warning fw-semibold mb-2">
                                            Account Under Review
                                        </h5>
                                        <p className="text-light mb-0">
                                            Your physician account is currently being reviewed by our admin team. 
                                            You'll be notified once your credentials have been verified and you can 
                                            start referring patients.
                                        </p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    )}

                    <Card
                        className="p-5 text-center"
                        style={{
                            backgroundColor: "rgba(15,23,42,0.75)", // slate-900/70
                            border: "1px solid #1e293b",
                            borderRadius: "1rem",
                        }}
                    >
                        {/* Icon */}
                        <div
                            className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                            style={{
                                width: 64,
                                height: 64,
                                borderRadius: "50%",
                                backgroundColor: "rgba(59,130,246,0.15)",
                                color: "#3b82f6",
                                fontSize: "1.5rem",
                                fontWeight: 600,
                            }}
                        >
                            MD
                        </div>

                        {/* Heading */}
                        <h2 className="text-light fw-semibold mb-2">
                            Welcome back, Dr. {physicianData?.lastName || 'Physician'}
                        </h2>

                        {physicianData?.credentials && (
                            <p className="text-secondary mb-1">
                                {physicianData.credentials}
                            </p>
                        )}

                        {/* Subtext */}
                        <p className="text-secondary mb-4">
                            Review patient activity and collaborate with instructors
                            to support ongoing care.
                        </p>

                        {/* CTA */}
                        <Button
                            type="button"
                            onClick={() => router.push("/physician/patientList")}
                            style={{
                                backgroundColor: "#3b82f6",
                                border: "none",
                                borderRadius: "9999px",
                                padding: "0.7rem 2.75rem",
                                fontSize: "1rem",
                                fontWeight: 500,
                                boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                            }}
                        >
                            View patients
                        </Button>
                    </Card>
                </Container>
            </main>
        </>
    );
}