"use client";

import { Form, Button, Card, Container } from "react-bootstrap";
import { ClientFormData } from "./page";

interface Step1Props {
    nextStep: () => void;
    formData: ClientFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClientFormData>>;
}

export default function Step1({ nextStep, formData, setFormData }: Step1Props) {
    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{ backgroundColor: "#020617" }} // slate-950
        >
            <Container style={{ maxWidth: 560 }}>
                <Card
                    className="border-0 shadow-lg"
                    style={{
                        backgroundColor: "rgba(15, 23, 42, 0.7)", // slate-900/70
                        borderRadius: "1rem",
                        border: "1px solid #1e293b", // slate-800
                    }}
                >
                    <Card.Body className="p-4">
                        {/* Header */}
                        <div className="text-center mb-4">
                            <h4 className="fw-semibold text-light mb-1">
                                Client General Information
                            </h4>
                            <p className="text-secondary small mb-0">
                                Step 1 of 6
                            </p>
                        </div>

                        <Form noValidate>
                            {/* ---------- General Info ---------- */}

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-secondary">
                                    First Name *
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    placeholder="Enter first name"
                                    value={formData.firstName || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, firstName: e.target.value })
                                    }
                                    className="border-0"
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-secondary">
                                    Last Name *
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    placeholder="Enter last name"
                                    value={formData.lastName || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, lastName: e.target.value })
                                    }
                                    className="border-0"
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-secondary">
                                    Preferred Name / Pronouns
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Preferred name or pronouns"
                                    value={formData.preferredName || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, preferredName: e.target.value })
                                    }
                                    className="border-0"
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-secondary">
                                    Date of Birth *
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    required
                                    value={formData.dob || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, dob: e.target.value })
                                    }
                                    className="border-0"
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-secondary">
                                    Contact Email *
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    required
                                    placeholder="Enter email address"
                                    value={formData.email || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="border-0"
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-secondary">
                                    Phone
                                </Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Enter phone number"
                                    value={formData.phone || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    className="border-0"
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="text-uppercase small text-secondary">
                                    Location
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City, Country, Time Zone"
                                    value={formData.location || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, location: e.target.value })
                                    }
                                    className="border-0"
                                    style={inputStyle}
                                />
                            </Form.Group>

                            {/* ---------- Navigation ---------- */}
                            <div className="d-flex justify-content-end">
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    style={{
                                        backgroundColor: "#3b82f6",
                                        border: "none",
                                        borderRadius: "9999px",
                                        padding: "0.6rem 2rem",
                                        boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                                    }}
                                >
                                    Next →
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

const inputStyle = {
    backgroundColor: "#020617",
    color: "#e5e7eb",
    borderRadius: "0.75rem",
    padding: "0.6rem 0.75rem",
};
