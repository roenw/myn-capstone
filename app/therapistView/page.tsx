"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar, Container, Nav, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useRouter } from "next/navigation";

interface TherapistData {
    firstName: string;
    lastName: string;
    email: string;
}

interface Patient {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
}

export default function TherapistView() {
    const router = useRouter();
    const [therapistData, setTherapistData] = useState<TherapistData | null>(null);
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch therapist profile
                const profileResponse = await fetch('/api/user/profile');
                if (profileResponse.ok) {
                    const profileData = await profileResponse.json();
                    setTherapistData(profileData);
                } else {
                    router.push('/login');
                    return;
                }

                // Fetch patients
                const patientsResponse = await fetch('/api/therapist-view/patients');
                if (patientsResponse.ok) {
                    const patientsData = await patientsResponse.json();
                    setPatients(patientsData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                router.push('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
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
                        href="/therapistView"
                        style={{ color: "#e5e7eb", fontWeight: 600 }}
                    >
                        Yoga Network
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="gap-4">
                            {["Patients", "Requests", "Calendar"].map((item) => (
                                <Nav.Link
                                    key={item}
                                    href={`/therapistView/${item.toLowerCase()}`}
                                    style={{ color: "#cbd5f5" }}
                                >
                                    {item}
                                </Nav.Link>
                            ))}
                        </Nav>

                        <Nav.Link 
                            className="ms-4" 
                            style={{ color: "#cbd5f5" }}
                            onClick={handleLogout}
                        >
                            Logout
                        </Nav.Link>

                        <Nav.Link className="ms-2" style={{ color: "#cbd5f5" }}>
                            <i className="bi bi-person-circle fs-4" />
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Main */}
            <main
                className="py-5"
                style={{ minHeight: "100vh", backgroundColor: "#020617" }}
            >
                <Container style={{ maxWidth: "1200px" }}>
                    {/* Top Grid */}
                    <Row className="g-4 mb-5">
                        <Col md={7}>
                            <DashboardCard>
                                <h2 className="text-light fw-semibold mb-2">
                                    Welcome back, {therapistData?.firstName} {therapistData?.lastName}
                                </h2>
                                <p className="text-secondary mb-0">
                                    Here's a quick overview of your schedule and patients.
                                </p>
                            </DashboardCard>
                        </Col>

                        <Col md={5} className="d-flex flex-column gap-4">
                            <StatCard title="Total Patients">
                                <div className="text-light text-center fs-3 fw-bold">
                                    {patients.length}
                                </div>
                            </StatCard>

                            <StatCard title="Email">
                                <div className="text-light">
                                    {therapistData?.email}
                                </div>
                            </StatCard>
                        </Col>
                    </Row>

                    {/* Patients */}
                    <DashboardCard>
                        <h4 className="text-light fw-semibold mb-4">
                            Current patients
                        </h4>

                        {patients.length === 0 ? (
                            <p className="text-secondary text-center py-4">
                                No patients assigned yet.
                            </p>
                        ) : (
                            <div className="d-flex gap-4 overflow-auto pb-2">
                                {patients.map((patient) => (
                                    <Card
                                        key={patient._id}
                                        style={{
                                            minWidth: 260,
                                            backgroundColor: "#020617",
                                            border: "1px solid #1e293b",
                                        }}
                                    >
                                        <div
                                            className="d-flex align-items-center justify-content-center"
                                            style={{
                                                height: 180,
                                                backgroundColor: "rgba(59,130,246,0.15)",
                                                color: "#3b82f6",
                                                fontSize: "3rem",
                                                fontWeight: 600,
                                            }}
                                        >
                                            {patient.firstName[0]}{patient.lastName[0]}
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="text-light fs-6">
                                                {patient.firstName} {patient.lastName}
                                            </Card.Title>
                                            <Card.Text className="text-secondary small">
                                                {patient.email}
                                            </Card.Text>
                                            {patient.phone && (
                                                <Card.Text className="text-secondary small">
                                                    {patient.phone}
                                                </Card.Text>
                                            )}
                                        </Card.Body>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </DashboardCard>
                </Container>
            </main>
        </>
    );
}

/* ---------- Reusable UI blocks ---------- */

function DashboardCard({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="p-4"
            style={{
                backgroundColor: "rgba(15,23,42,0.75)", // slate-900/70
                borderRadius: "1rem",
                border: "1px solid #1e293b",
            }}
        >
            {children}
        </div>
    );
}

function StatCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <DashboardCard>
            <p className="text-uppercase small text-secondary mb-3">
                {title}
            </p>
            <div className="d-flex flex-column gap-2">{children}</div>
        </DashboardCard>
    );
}