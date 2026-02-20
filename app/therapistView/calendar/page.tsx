'use client';
import "./../therapistStyles.css";
import { Navbar, Container, Nav, Card, NavDropdown } from 'react-bootstrap';
import { useParams } from "next/navigation";

export default function Calendar() {
    return (
        <>
            <Navbar expand="lg" className="py-4 text-raleway" bg="light" data-bs-theme="light">
                <Container fluid className="mx-5">
                    <Navbar.Brand href={`/therapistView`}>My Yoga Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent" className="justify-content-end">
                        <Nav className="mb-lg-0 mt-1">
                            <Nav.Link href={`/therapistView`}>Home</Nav.Link>
                            <Nav.Link href={`/therapistView/patients`}>Patients</Nav.Link>
                            <Nav.Link href={`/therapistView/requests`}>Requests</Nav.Link>
                            <Nav.Link href={`/therapistView/calendar`} className="me-5">Calendar</Nav.Link>
                        </Nav>

                        <NavDropdown
                            title={<i className="bi bi-person-circle fs-4" />}
                            id="therapist-dropdown"
                            align="end"
                        >
                            <NavDropdown.Item href="/therapistView">
                                <i className="bi bi-house me-2" />
                                Dashboard
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/therapist_debug">
                                <i className="bi bi-bug me-2" />
                                Debug View
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/auth/logout">
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