"use client";

import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown, Button, Badge, Card } from "react-bootstrap";
import "./../therapistStyles.css";
import { useParams } from "next/navigation";

export default function Patients() {
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
                style={{
                    minHeight: "100vh",

                    background: "linear-gradient(to bottom, #94f1f1ff, #5fc3fdff)",
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