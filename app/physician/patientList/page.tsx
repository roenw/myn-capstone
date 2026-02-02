"use client";

import { Button, Card, Container, Navbar, Nav, ListGroup } from "react-bootstrap";
import { useRouter } from "next/navigation";

const clients = ["Client A", "Client B", "Client C", "Client D"];

export default function PatientReferral() {
    const router = useRouter();

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
                    <Navbar.Brand style={{ color: "#e5e7eb", fontWeight: 600 }}>
                        Yoga Network
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link style={{ color: "#cbd5f5" }}>
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
                        className="p-4"
                        style={{
                            backgroundColor: "rgba(15,23,42,0.75)",
                            border: "1px solid #1e293b",
                            borderRadius: "1rem",
                        }}
                    >
                        {/* Header */}
                        <div className="mb-4">
                            <h3 className="text-light fw-semibold mb-1">
                                Referred clients
                            </h3>
                            <p className="text-secondary mb-0">
                                Patients you have referred for yoga therapy
                            </p>
                        </div>

                        {/* Client list */}
                        <ListGroup variant="flush" className="mb-4">
                            {clients.map((client) => (
                                <ListGroup.Item
                                    key={client}
                                    className="d-flex justify-content-between align-items-center"
                                    style={{
                                        backgroundColor: "#020617",
                                        borderBottom: "1px solid #1e293b",
                                        color: "#e5e7eb",
                                    }}
                                >
                                    <span>{client}</span>

                                    <Button
                                        size="sm"
                                        style={{
                                            backgroundColor: "#3b82f6",
                                            border: "none",
                                            borderRadius: "9999px",
                                            padding: "0.35rem 1.25rem",
                                        }}
                                        onClick={() =>
                                            router.push("/physician/patientNotes")
                                        }
                                    >
                                        View notes
                                    </Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>

                        {/* CTA */}
                        <div className="text-end">
                            <Button
                                style={{
                                    backgroundColor: "#3b82f6",
                                    border: "none",
                                    borderRadius: "9999px",
                                    padding: "0.6rem 2rem",
                                    boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                                }}
                                onClick={() =>
                                    router.push("/physician/instructorReferral")
                                }
                            >
                                + Refer new patient
                            </Button>
                        </div>
                    </Card>
                </Container>
            </main>
        </>
    );
}
