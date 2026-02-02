"use client";

import Image from "next/image";
import { Container, Nav, Navbar, Card } from "react-bootstrap";

export default function Patients() {
    return (
        <>
            {/* Navbar */}
            <Navbar
                expand="lg"
                className="border-bottom"
                style={{
                    backgroundColor: "#020617",
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
                            <Nav.Link
                                href="/therapistView/patients"
                                style={{ color: "#3b82f6" }}
                            >
                                Patients
                            </Nav.Link>
                            <Nav.Link
                                href="/therapistView/requests"
                                style={navLink}
                            >
                                Requests
                            </Nav.Link>
                            <Nav.Link
                                href="/therapistView/calendar"
                                style={navLink}
                            >
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
                className="py-5"
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#020617",
                }}
            >
                <Container style={{ maxWidth: "1200px" }}>
                    {/* Header */}
                    <div className="mb-4">
                        <h1 className="text-light fw-semibold mb-1">
                            Your patients
                        </h1>
                        <p className="text-secondary">
                            Active clients currently under your care
                        </p>
                    </div>

                    {/* Patients row */}
                    <div className="d-flex gap-4 overflow-auto pb-3">
                        {[
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
                        ].map((p) => (
                            <Card
                                key={p.name}
                                style={{
                                    minWidth: 260,
                                    backgroundColor: "rgba(15,23,42,0.75)",
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
                                    <Card.Title className="text-light fs-6 mb-1">
                                        {p.name}
                                    </Card.Title>

                                    <Card.Text className="text-secondary small mb-1">
                                        Current yoga plan
                                    </Card.Text>

                                    <Card.Text className="text-secondary small">
                                        Next session: {p.date}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </main>
        </>
    );
}

/* ---------- styles ---------- */

const navLink = {
    color: "#cbd5f5",
};
