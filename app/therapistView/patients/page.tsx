"use client";

import Image from "next/image";
import { Container, Nav, Navbar, Card, Badge, Button } from "react-bootstrap";

export default function Patients() {
    return (
        <>
            {/* Navbar */}
            <Navbar
                expand="lg"
                className="border-bottom"
                style={{ backgroundColor: "#020617", borderColor: "#1e293b" }}
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
                            <Nav.Link href="/therapistView/patients" style={{ color: "#3b82f6" }}>
                                Patients
                            </Nav.Link>
                            <Nav.Link href="/therapistView/requests" style={navLink}>
                                Requests
                            </Nav.Link>
                            <Nav.Link href="/therapistView/calendar" style={navLink}>
                                Calendar
                            </Nav.Link>
                        </Nav>

                        <Nav.Link className="ms-4" style={{ color: "#cbd5f5" }}>
                            <i className="bi bi-person-circle fs-4" />
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Main */}
            <main
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#020617",
                    padding: "3rem 0",
                }}
            >
                <Container style={{ maxWidth: 1200 }}>
                    {/* Header */}
                    <div className="mb-5">
                        <h1 className="text-light fw-semibold mb-1">Your patients</h1>
                        <p className="text-secondary">
                            Manage and review clients currently under your care
                        </p>
                    </div>

                    {/* Grid */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                            gap: "1.5rem",
                        }}
                    >
                        {patients.map((p) => (
                            <Card
                                key={p.name}
                                className="h-100"
                                style={{
                                    backgroundColor: "rgba(15,23,42,0.75)",
                                    border: "1px solid #1e293b",
                                    borderRadius: "1rem",
                                }}
                            >
                                <Image
                                    src={p.img}
                                    alt="profile"
                                    width={400}
                                    height={260}
                                    style={{
                                        objectFit: "cover",
                                        borderTopLeftRadius: "1rem",
                                        borderTopRightRadius: "1rem",
                                    }}
                                />

                                <Card.Body className="d-flex flex-column">
                                    <div className="d-flex justify-content-between align-items-start mb-2">
                                        <Card.Title className="text-light fs-6 mb-0">
                                            {p.name}
                                        </Card.Title>
                                        <Badge bg="primary" pill>
                                            Active
                                        </Badge>
                                    </div>

                                    <p className="text-secondary small mb-1">
                                        Current yoga plan
                                    </p>

                                    <p className="text-secondary small mb-4">
                                        Next session: {p.date}
                                    </p>

                                    <Button
                                        size="sm"
                                        variant="outline-primary"
                                        className="mt-auto rounded-pill"
                                    >
                                        View details
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </main>
        </>
    );
}

/* ---------- data ---------- */

const patients = [
    {
        name: "George Yousefson",
        img: "/exDude1.jpg",
        date: "11/24/25",
    },
    {
        name: "Alicia Shells",
        img: "/exDude2.jpg",
        date: "12/24/25",
    },
    {
        name: "Jennifer Bells",
        img: "/exDude3.jpg",
        date: "12/24/25",
    },
];

/* ---------- styles ---------- */

const navLink = {
    color: "#cbd5f5",
};