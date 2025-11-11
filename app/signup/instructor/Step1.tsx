"use client";

import { useRouter } from "next/navigation";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { InstructorFormData } from "./page";

interface Step1Props {
    nextStep: () => void;
    formData: InstructorFormData;
    setFormData: React.Dispatch<React.SetStateAction<InstructorFormData>>;
}

export default function Step1({ nextStep, formData, setFormData }: Step1Props) {
    const updateValue = (key: string, value: string) =>
        setFormData({ ...formData, [key]: value });

    return (
        <Container className="py-4 d-flex justify-content-center">
            <Card className="shadow-sm" style={{ maxWidth: 700, width: "100%" }}>
                <Card.Body className="p-4">
                    <h5 className="mb-4 fw-semibold text-center">
                        Instructor's General Information
                    </h5>

                    <Form noValidate>
                        <Row>
                            {/* LEFT COLUMN */}
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        size="sm"
                                        required
                                        value={formData.name || ""}
                                        onChange={(e) => updateValue("name", e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Speciality</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        value={formData.speciality || ""}
                                        onChange={(e) => updateValue("speciality", e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="email"
                                        required
                                        value={formData.email || ""}
                                        onChange={(e) => updateValue("email", e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        placeholder="City, Country, Time Zone"
                                        value={formData.location || ""}
                                        onChange={(e) => updateValue("location", e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Session Type</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        placeholder="e.g., Online, In-person"
                                        value={formData.sessionType || ""}
                                        onChange={(e) => updateValue("sessionType", e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Years of Experience</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        type="number"
                                        min="0"
                                        value={formData.yearsExperience || ""}
                                        onChange={(e) => updateValue("yearsExperience", e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Availability</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        placeholder="Days / Hours available"
                                        value={formData.availability || ""}
                                        onChange={(e) => updateValue("availability", e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Pricing</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        placeholder="e.g., $50/hr"
                                        value={formData.pricing || ""}
                                        onChange={(e) => updateValue("pricing", e.target.value)}
                                    />
                                </Form.Group>
                            </Col>

                            {/* RIGHT COLUMN */}
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Upload Documents</Form.Label>
                                    <Form.Control size="sm" type="file" multiple />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Qualification</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        placeholder="e.g., Certified Yoga Instructor"
                                        value={formData.qualification || ""}
                                        onChange={(e) => updateValue("qualification", e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Certificates</Form.Label>
                                    <Form.Control
                                        size="sm"
                                        placeholder="List any relevant certifications"
                                        value={formData.certificates || ""}
                                        onChange={(e) => updateValue("certificates", e.target.value)}
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
                                        onChange={(e) =>
                                            updateValue("confirmPassword", e.target.value)
                                        }
                                    />
                                </Form.Group>

                                <div className="d-flex justify-content-center mt-4">
                                    <Button
                                        variant="secondary"
                                        className="fw-semibold px-4"
                                        onClick={nextStep}
                                    >
                                        Continue
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}