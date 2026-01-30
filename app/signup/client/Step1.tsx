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
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{
                background: "linear-gradient(to bottom right, #8ee7f1, #6bc9f5)",
                fontFamily: "'Poppins', sans-serif",
                overflowY: "auto",
                padding: "2rem 0",
            }}
        >
            <Card
                className="shadow-lg p-4"
                style={{
                    width: "100%",
                    maxWidth: 520,
                    borderRadius: "20px",
                    backgroundColor: "white",
                    border: "none",
                }}
            >
                <Card.Body>
                    <h4 className="fw-bold text-center mb-4" style={{ color: "#0a0a0a" }}>
                        Client's General Information
                    </h4>

                    <Form noValidate>
                        {/* --- General Information --- */}
                        <Form.Group className="mb-3 text-start">
                            <Form.Label className="fw-semibold">
                                First Name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first name"
                                required
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{ backgroundColor: "#f7f7f7" }}
                                value={formData.firstName || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, firstName: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label className="fw-semibold">
                                Last Name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter last name"
                                required
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{ backgroundColor: "#f7f7f7" }}
                                value={formData.lastName || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, lastName: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label className="fw-semibold">Preferred Name / Pronouns</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Preferred name or pronouns"
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{ backgroundColor: "#f7f7f7" }}
                                value={formData.preferredName || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, preferredName: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label className="fw-semibold">
                                Date of Birth <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="date"
                                required
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{ backgroundColor: "#f7f7f7" }}
                                value={formData.dob || ""}
                                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label className="fw-semibold">
                                Contact Email <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email address"
                                required
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{ backgroundColor: "#f7f7f7" }}
                                value={formData.email || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label className="fw-semibold">Phone</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Enter phone number"
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{ backgroundColor: "#f7f7f7" }}
                                value={formData.phone || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label className="fw-semibold">
                                Location{" "}
                                <span className="text-muted">(City, Country, Time Zone)</span>
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City, Country, Time Zone"
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{ backgroundColor: "#f7f7f7" }}
                                value={formData.location || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, location: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-4 text-start">
                            <Form.Label className="fw-semibold">
                                Where did you hear about us?
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g., Friend, Website, Ad"
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{ backgroundColor: "#f7f7f7" }}
                                value={formData.referral || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, referral: e.target.value })
                                }
                            />
                        </Form.Group>

                        {/* --- Divider --- */}
                        <hr className="my-4" />

                        {/* --- Create Login Section --- */}
                        <h5 className="fw-bold text-center mb-4">Create a Login</h5>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label className="fw-semibold">Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter a username"
                                required
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{ backgroundColor: "#f7f7f7" }}
                                value={formData.username || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, username: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label className="fw-semibold">Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                required
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{ backgroundColor: "#f7f7f7" }}
                                value={formData.password || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-4 text-start">
                            <Form.Label className="fw-semibold">Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Re-enter password"
                                required
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{ backgroundColor: "#f7f7f7" }}
                                value={formData.confirmPassword || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, confirmPassword: e.target.value })
                                }
                            />
                        </Form.Group>

                        {/* --- Navigation --- */}
                        <div className="d-flex justify-content-end mt-4">
                            <Button
                                type="button"
                                className="rounded-pill fw-semibold"
                                style={{
                                    backgroundColor: "#6bc9f5",
                                    border: "none",
                                    padding: "10px 32px",
                                }}
                                onClick={nextStep}
                            >
                                Next →
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
