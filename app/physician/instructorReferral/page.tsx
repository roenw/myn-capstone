"use client";

import { Form, Button, Card, Container, Navbar, Nav } from "react-bootstrap";

export default function InstructorReferral() {
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
                                Refer a patient
                            </h3>
                            <p className="text-secondary mb-0">
                                Submit patient details for instructor referral
                            </p>
                        </div>

                        <Form>
                            <Form.Group className="mb-4">
                                <Form.Label className="text-secondary small">
                                    Patient full name
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    className="border-0"
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="text-secondary small">
                                    Patient email
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    className="border-0"
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="text-secondary small">
                                    Reason for referral or health condition
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    className="border-0"
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="text-secondary small">
                                    Clinical notes
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    className="border-0"
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <div className="text-end mt-4">
                                <Button
                                    type="submit"
                                    style={{
                                        backgroundColor: "#3b82f6",
                                        border: "none",
                                        borderRadius: "9999px",
                                        padding: "0.6rem 2.5rem",
                                        fontWeight: 500,
                                        boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                                    }}
                                >
                                    Send referral
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Container>
            </main>
        </>
    );
}

/* ---------- styles ---------- */

const inputStyle = {
    backgroundColor: "#020617",
    color: "#e5e7eb",
    borderRadius: "0.75rem",
    padding: "0.6rem 0.75rem",
    border: "1px solid #1e293b",
};
