"use client";

import { useRouter } from "next/navigation";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { InstructorFormData } from "./page";

interface Step1Props {
    nextStep: () => void;
    formData: InstructorFormData;
    setFormData: React.Dispatch<React.SetStateAction<InstructorFormData>>;
}

export default function Step1({ nextStep, formData, setFormData }: Step1Props) {
    const router = useRouter();

    const updateValue = (key: string, value: string) =>
        setFormData({ ...formData, [key]: value });

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
                    maxWidth: 900,
                    borderRadius: "20px",
                    backgroundColor: "white",
                    border: "none",
                }}
            >
                <h4 className="fw-bold text-center mb-4" style={{ color: "#0a0a0a" }}>
                    Instructor’s General Information
                </h4>

                <Form noValidate className="px-2">
                    <Row>
                        {/* LEFT COLUMN */}
                        <Col md={6}>
                            <Form.Group className="mb-4 text-start">
                                <Form.Label className="fw-semibold">
                                    Name <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                    size="sm"
                                    placeholder="Enter full name"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7" }}
                                    value={formData.name || ""}
                                    onChange={(e) => updateValue("name", e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4 text-start">
                                <Form.Label className="fw-semibold">Speciality</Form.Label>
                                <Form.Control
                                    size="sm"
                                    placeholder="e.g., Yoga Therapy, Mindfulness"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7" }}
                                    value={formData.speciality || ""}
                                    onChange={(e) => updateValue("speciality", e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4 text-start">
                                <Form.Label className="fw-semibold">
                                    Email <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="email"
                                    placeholder="Enter email address"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7" }}
                                    value={formData.email || ""}
                                    onChange={(e) => updateValue("email", e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4 text-start">
                                <Form.Label className="fw-semibold">Location</Form.Label>
                                <Form.Control
                                    size="sm"
                                    placeholder="City, Country, Time Zone"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7" }}
                                    value={formData.location || ""}
                                    onChange={(e) => updateValue("location", e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4 text-start">
                                <Form.Label className="fw-semibold">Session Type</Form.Label>
                                <Form.Control
                                    size="sm"
                                    placeholder="e.g., Online, In-person"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7" }}
                                    value={formData.sessionType || ""}
                                    onChange={(e) => updateValue("sessionType", e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4 text-start">
                                <Form.Label className="fw-semibold">Years of Experience</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="number"
                                    min="0"
                                    placeholder="e.g., 5"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7" }}
                                    value={formData.yearsExperience || ""}
                                    onChange={(e) => updateValue("yearsExperience", e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4 text-start">
                                <Form.Label className="fw-semibold">Availability</Form.Label>
                                <Form.Control
                                    size="sm"
                                    placeholder="Days / Hours available"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7" }}
                                    value={formData.availability || ""}
                                    onChange={(e) => updateValue("availability", e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4 text-start">
                                <Form.Label className="fw-semibold">Pricing</Form.Label>
                                <Form.Control
                                    size="sm"
                                    placeholder="e.g., $50/hr"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7" }}
                                    value={formData.pricing || ""}
                                    onChange={(e) => updateValue("pricing", e.target.value)}
                                />
                            </Form.Group>
                        </Col>

                        {/* RIGHT COLUMN */}
                        <Col md={6}>
                            <Form.Group className="mb-4 text-start">
                                <Form.Label className="fw-semibold">Upload Documents</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="file"
                                    multiple
                                    className="form-control rounded-pill px-3 py-2 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7", border: "none" }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4 text-start">
                                <Form.Label className="fw-semibold">Qualification</Form.Label>
                                <Form.Control
                                    size="sm"
                                    placeholder="e.g., Certified Yoga Instructor"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7" }}
                                    value={formData.qualification || ""}
                                    onChange={(e) => updateValue("qualification", e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-4 text-start">
                                <Form.Label className="fw-semibold">Certificates</Form.Label>
                                <Form.Control
                                    size="sm"
                                    placeholder="List any relevant certifications"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7" }}
                                    value={formData.certificates || ""}
                                    onChange={(e) => updateValue("certificates", e.target.value)}
                                />
                            </Form.Group>

                            <hr className="my-4" />

                            <h6 className="fw-semibold text-center mb-3">Create a Login</h6>

                            <Form.Group className="mb-3 text-start">
                                <Form.Label className="fw-semibold">Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter a username"
                                    required
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7" }}
                                    value={formData.username || ""}
                                    onChange={(e) => updateValue("username", e.target.value)}
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
                                    onChange={(e) => updateValue("password", e.target.value)}
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
                                    onChange={(e) => updateValue("confirmPassword", e.target.value)}
                                />
                            </Form.Group>

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
                                    Continue →
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
    );
}