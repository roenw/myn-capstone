"use client";

import { Container, Card, Form, Button } from "react-bootstrap";
import { PhysicianFormData } from "./page";

interface Step1Props {
    nextStep: () => void;
    formData: PhysicianFormData;
    setFormData: React.Dispatch<React.SetStateAction<PhysicianFormData>>;
}

export default function Step1({ nextStep, formData, setFormData }: Step1Props) {
    const updateValue = (key: string, value: string) =>
        setFormData({ ...formData, [key]: value });

    return (
        <Container
            className="py-4 d-flex justify-content-center"
            style={{
                minHeight: "100vh",
                overflowY: "auto",
            }}
        >
            <Card className="shadow-sm" style={{ maxWidth: 520, width: "100%" }}>
                <Card.Body className="p-4">
                    <h5 className="mb-4 fw-semibold text-center">
                        Physician's Verification Information
                    </h5>

                    <Form noValidate>
                        {/* --- Verification Information --- */}
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                size="sm"
                                required
                                placeholder="Full name"
                                value={formData.name || ""}
                                onChange={(e) => updateValue("name", e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Professional Email <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                size="sm"
                                type="email"
                                placeholder="example@hospital.org"
                                required
                                value={formData.email || ""}
                                onChange={(e) => updateValue("email", e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Medical License Number or Professional ID
                            </Form.Label>
                            <Form.Control
                                size="sm"
                                placeholder="e.g., 123456 or State ID"
                                value={formData.license || ""}
                                onChange={(e) => updateValue("license", e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>NPI (US)</Form.Label>
                            <Form.Control
                                size="sm"
                                placeholder="e.g., 9876543210"
                                value={formData.npi || ""}
                                onChange={(e) => updateValue("npi", e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Organization or Clinic Affiliation</Form.Label>
                            <Form.Control
                                size="sm"
                                placeholder="e.g., Mayo Clinic, UCLA Health"
                                value={formData.organization || ""}
                                onChange={(e) => updateValue("organization", e.target.value)}
                            />
                        </Form.Group>

                        <hr className="my-4" />

                        <h6 className="fw-semibold text-center mb-3">Create a Login</h6>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter a username"
                                required
                                value={formData.username || ""}
                                onChange={(e) => updateValue("username", e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                required
                                value={formData.password || ""}
                                onChange={(e) => updateValue("password", e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4 text-start">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Re-enter password"
                                required
                                value={formData.confirmPassword || ""}
                                onChange={(e) => updateValue("confirmPassword", e.target.value)}
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <Button
                                variant="secondary"
                                className="px-4 fw-semibold"
                                onClick={nextStep}
                            >
                                Continue
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}