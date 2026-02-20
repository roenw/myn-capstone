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
            style={{
                background:
                    "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
            }}
        >
            <Container style={{ maxWidth: 560 }}>
                <Card
                    className="border-0 shadow-sm"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "1rem",
                        border: "none",
                        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                    }}
                >
                    <Card.Body className="p-4">
                        {/* Header */}
                        <div className="text-center mb-4">
                            <h4 className="fw-semibold mb-1">
                                Client General Information
                            </h4>
                            <p className="text-muted small mb-0">
                                Step 1 of 6
                            </p>
                        </div>

                        <Form noValidate>

                            {/* ---------- General Info ---------- */}

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-muted">
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
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-muted">
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
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-muted">
                                    Preferred Name / Pronouns
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Preferred name or pronouns"
                                    value={formData.preferredName || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, preferredName: e.target.value })
                                    }
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-muted">
                                    Date of Birth *
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    required
                                    value={formData.dob || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, dob: e.target.value })
                                    }
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-muted">
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
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label className="text-uppercase small text-muted">
                                    Phone
                                </Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Enter phone number"
                                    value={formData.phone || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    style={inputStyle}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="text-uppercase small text-muted">
                                    Location
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City, Country, Time Zone"
                                    value={formData.location || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, location: e.target.value })
                                    }
                                    style={inputStyle}
                                />
                            </Form.Group>

                            {/* ---------- Navigation ---------- */}
                            <div className="d-flex justify-content-end">
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    style={{
                                        borderRadius: "9999px",
                                        padding: "0.6rem 2rem",
                                        boxShadow:
                                            "0 4px 14px rgba(59,130,246,0.2)",
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
    borderRadius: "0.75rem",
    padding: "0.6rem 0.75rem",
    border: "1px solid #dee2e6",
};
