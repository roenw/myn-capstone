"use client";

import { useEffect, useState } from "react";
import { Button, Card, Container, Navbar, Nav, Spinner } from "react-bootstrap";
import { useRouter } from "next/navigation";

interface PhysicianData {
    firstName: string;
    lastName: string;
    credentials?: string;
    email: string;
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
                    router.push('/login');
                }
            } catch (error) {
                console.error('Error fetching physician data:', error);
                router.push('/login');
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
                        <Nav>
                            <Nav.Link
                                onClick={handleLogout}
                                style={{ color: "#cbd5f5" }}
                            >
                                Logout
                            </Nav.Link>
                            <Nav.Link
                                onClick={() => router.push("/physician/profile")}
                                style={{ color: "#cbd5f5" }}
                            >
                                <i className="bi bi-person-circle fs-4" />
                            </Nav.Link>
                        </Nav>
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
            >
                <Container style={{ maxWidth: 720 }}>
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