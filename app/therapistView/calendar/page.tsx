"use client";

import { Navbar, Container, Nav, Card } from "react-bootstrap";

export default function Calendar() {
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
                            <Nav.Link href="/therapistView/patients" style={navLink}>
                                Patients
                            </Nav.Link>
                            <Nav.Link href="/therapistView/requests" style={navLink}>
                                Requests
                            </Nav.Link>
                            <Nav.Link
                                href="/therapistView/calendar"
                                style={{ color: "#3b82f6" }}
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
                <Container style={{ maxWidth: "1000px" }}>
                    {/* Header */}
                    <div className="mb-4">
                        <h1 className="text-light fw-semibold mb-1">
                            Calendar
                        </h1>
                        <p className="text-secondary">
                            View and manage your upcoming sessions
                        </p>
                    </div>

                    {/* Placeholder Card */}
                    <Card
                        className="p-5 text-center"
                        style={{
                            backgroundColor: "rgba(15,23,42,0.75)",
                            border: "1px solid #1e293b",
                            borderRadius: "1rem",
                        }}
                    >
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
                            CAL
                        </div>

                        <h4 className="text-light fw-semibold mb-2">
                            Calendar integration coming soon
                        </h4>

                        <p className="text-secondary mb-0">
                            This section will display your scheduled sessions and availability.
                            A calendar component can be added here later.
                        </p>
                    </Card>
                </Container>
            </main>
        </>
    );
}

/* ---------- styles ---------- */

const navLink = {
    color: "#cbd5f5",
};