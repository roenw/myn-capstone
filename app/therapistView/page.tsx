"use client";

import Image from "next/image";
import { Navbar, Container, Nav, Row, Col, Card, Button } from "react-bootstrap";

export default function TherapistView() {
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

                        <Nav.Link className="ms-4" style={{ color: "#cbd5f5" }}>
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
                                    Welcome back
                                </h2>
                                <p className="text-secondary mb-0">
                                    Here's a quick overview of your schedule and patients.
                                </p>
                            </DashboardCard>
                        </Col>

                        <Col md={5} className="d-flex flex-column gap-4">
                            <StatCard title="Upcoming meetings">
                                <StatRow label="George Yousefson" value="Mon - 5:30 PM" />
                                <StatRow label="Alicia Shells" value="Wed - 4:00 PM" />
                            </StatCard>

                            <StatCard title="New requests">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-light">Lily Shwartz</span>
                                    <Button size="sm" variant="outline-primary">
                                        View
                                    </Button>
                                </div>
                            </StatCard>
                        </Col>
                    </Row>

                    {/* Patients */}
                    <DashboardCard>
                        <h4 className="text-light fw-semibold mb-4">
                            Current patients
                        </h4>

                        <div className="d-flex gap-4 overflow-auto pb-2">
                            {[
                                { name: "George Yousefson", img: "/exDude1.jpg", date: "11/24/25" },
                                { name: "Alicia Shells", img: "/exDude2.jpg", date: "12/24/25" },
                                { name: "Jennifer Bells", img: "/exDude3.jpg", date: "12/24/25" },
                            ].map((p) => (
                                <Card
                                    key={p.name}
                                    style={{
                                        minWidth: 260,
                                        backgroundColor: "#020617",
                                        border: "1px solid #1e293b",
                                    }}
                                >
                                    <Image
                                        src={p.img}
                                        alt="profile"
                                        width={260}
                                        height={220}
                                        style={{ objectFit: "cover" }}
                                    />
                                    <Card.Body>
                                        <Card.Title className="text-light fs-6">
                                            {p.name}
                                        </Card.Title>
                                        <Card.Text className="text-secondary small">
                                            Next session: {p.date}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
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

function StatRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="d-flex justify-content-between text-light">
            <span>{label}</span>
            <span className="text-secondary">{value}</span>
        </div>
    );
}