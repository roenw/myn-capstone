"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar, Container, Nav, NavDropdown, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useRouter } from "next/navigation";

interface TherapistData {
    firstName: string;
    lastName: string;
    email: string;
    status?: 'pending' | 'approved' | 'rejected';
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
                    window.location.href = '/auth/login';
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
                window.location.href = '/auth/login';
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
                        href="/therapistView"
                        style={{
                            color: "#212529",
                            fontWeight: 600,
                            fontFamily: "'Poppins', sans-serif",
                        }}
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
                                    style={{ color: "#6c757d" }}
                                >
                                    {item}
                                </Nav.Link>
                            ))}
                        </Nav>

                        <NavDropdown
                            title={
                                <span style={{ color: "#212529" }}>
                                    {therapistData?.firstName} {therapistData?.lastName}
                                </span>
                            }
                            id="therapist-dropdown"
                            align="end"
                            className="ms-4"
                        >
                            <NavDropdown.Item onClick={() => router.push("/therapistView")}>
                                <i className="bi bi-house me-2" />
                                Home
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => router.push("/therapist_debug")}>
                                <i className="bi bi-bug me-2" />
                                Debug View
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={() => router.push("/therapistView/profile")}>
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
                className="py-5"
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <Container style={{ maxWidth: "1200px" }}>
                    {/* Account Status Warning */}
                    {therapistData?.status === 'pending' && (
                        <Card
                            className="mb-4 border-0 shadow-sm"
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
                                        <p className="text-muted mb-0">
                                            Your therapist account is currently being reviewed by our admin team. 
                                            You'll receive an email once your account has been approved and you can 
                                            start working with clients.
                                        </p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    )}

                    {/* Top Grid */}
                    <Row className="g-4 mb-5">
                        <Col md={7}>
                            <DashboardCard>
                                <h2 className="fw-semibold mb-2" style={{ color: "#212529" }}>
                                    Welcome back, {therapistData?.firstName} {therapistData?.lastName}
                                </h2>
                                <p className="text-muted mb-0">
                                    Here's a quick overview of your schedule and patients.
                                </p>
                            </DashboardCard>
                        </Col>

                        <Col md={5} className="d-flex flex-column gap-4">
                            <StatCard title="Total Patients">
                                <div className="text-center fs-3 fw-bold" style={{ color: "#212529" }}>
                                    {patients.length}
                                </div>
                            </StatCard>

                            <StatCard title="Email">
                                <div style={{ color: "#212529" }}>
                                    {therapistData?.email}
                                </div>
                            </StatCard>
                        </Col>
                    </Row>

                    {/* Patients */}
                    <DashboardCard>
                        <h4 className="fw-semibold mb-4" style={{ color: "#212529" }}>
                            Current patients
                        </h4>

                        {patients.length === 0 ? (
                            <p className="text-muted text-center py-4">
                                No patients assigned yet.
                            </p>
                        ) : (
                            <div className="d-flex gap-4 overflow-auto pb-2">
                                {patients.map((patient) => (
                                    <Card
                                        key={patient._id}
                                        className="shadow-sm"
                                        style={{
                                            minWidth: 260,
                                            backgroundColor: "rgba(255,255,255,0.9)",
                                            border: "1px solid #dee2e6",
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
                                            <Card.Title className="fs-6" style={{ color: "#212529" }}>
                                                {patient.firstName} {patient.lastName}
                                            </Card.Title>
                                            <Card.Text className="text-muted small">
                                                {patient.email}
                                            </Card.Text>
                                            {patient.phone && (
                                                <Card.Text className="text-muted small">
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
            className="p-4 shadow-sm"
            style={{
                backgroundColor: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(10px)",
                borderRadius: "1rem",
                border: "1px solid #dee2e6",
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
            <p className="text-uppercase small text-muted mb-3">
                {title}
            </p>
            <div className="d-flex flex-column gap-2">{children}</div>
        </DashboardCard>
    );
}