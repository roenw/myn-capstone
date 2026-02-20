"use client";

import {
    Button,
    Card,
    Container,
    Navbar,
    Nav,
} from "react-bootstrap";
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
                className="py-5"
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#020617",
                }}
            >
                <Container style={{ maxWidth: 900 }}>
                    {/* Header */}
                    <div className="mb-5">
                        <h2 className="text-light fw-semibold mb-1">
                            Referred clients
                        </h2>
                        <p className="text-secondary mb-0">
                            Patients you have referred for yoga therapy
                        </p>
                    </div>

                    {/* Client rows */}
                    <div className="d-flex flex-column gap-3">
                        {clients.map((client) => (
                            <Card
                                key={client}
                                style={{
                                    backgroundColor: "rgba(15,23,42,0.75)",
                                    border: "1px solid #1e293b",
                                    borderRadius: "0.75rem",
                                }}
                            >
                                <Card.Body className="d-flex align-items-center justify-content-between">
                                    {/* Left */}
                                    <div>
                                        <div className="text-light fw-semibold">
                                            {client}
                                        </div>
                                        <div className="text-secondary small">
                                            Referral active
                                        </div>
                                    </div>

                                    {/* Right */}
                                    <Button
                                        size="sm"
                                        style={{
                                            backgroundColor: "#3b82f6",
                                            border: "none",
                                            borderRadius: "9999px",
                                            padding: "0.45rem 1.5rem",
                                        }}
                                        onClick={() =>
                                            router.push("/physician/patientNotes")
                                        }
                                    >
                                        View notes
                                    </Button>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>

                    {/* Footer CTA */}
                    <div className="d-flex justify-content-end mt-5">
                        <Button
                            style={{
                                backgroundColor: "#3b82f6",
                                border: "none",
                                borderRadius: "9999px",
                                padding: "0.65rem 2.2rem",
                                boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                            }}
                            onClick={() =>
                                router.push("/physician/instructorReferral")
                            }
                        >
                            + Refer new patient
                        </Button>
                    </div>
                </Container>
            </main>
        </>
    );
}