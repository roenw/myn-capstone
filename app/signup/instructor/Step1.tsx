"use client";

import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
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
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{ backgroundColor: "#020617" }} // slate-950
        >
            <Container style={{ maxWidth: 1100 }}>
                <Card
                    className="border-0 shadow-lg"
                    style={{
                        backgroundColor: "rgba(15,23,42,0.75)", // slate-900/70
                        borderRadius: "1rem",
                        border: "1px solid #1e293b",
                    }}
                >
                    <Card.Body className="p-4">
                        {/* Header */}
                        <div className="text-center mb-4">
                            <h4 className="fw-semibold text-light mb-1">
                                Instructor information
                            </h4>
                            <p className="text-secondary small mb-0">
                                Step 1 of X
                            </p>
                            <p className="text-secondary small mt-1">
                                This helps clients and care teams understand your background and expertise.
                            </p>
                        </div>

                        <Form noValidate className="d-grid gap-4">

                            {/* SECTION 1 */}
                            <Section title="Professional details">
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Input
                                            label="Full name"
                                            value={formData.name}
                                            onChange={(v) => updateValue("name", v)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Specialty"
                                            value={formData.speciality}
                                            onChange={(v) => updateValue("speciality", v)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(v) => updateValue("email", v)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Location"
                                            value={formData.location}
                                            onChange={(v) => updateValue("location", v)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Session type"
                                            value={formData.sessionType}
                                            onChange={(v) => updateValue("sessionType", v)}
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <Input
                                            label="Years of experience"
                                            type="number"
                                            value={formData.yearsExperience}
                                            onChange={(v) => updateValue("yearsExperience", v)}
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <Input
                                            label="Pricing"
                                            value={formData.pricing}
                                            onChange={(v) => updateValue("pricing", v)}
                                        />
                                    </Col>
                                    <Col md={12}>
                                        <Input
                                            label="Availability"
                                            value={formData.availability}
                                            onChange={(v) => updateValue("availability", v)}
                                        />
                                    </Col>
                                </Row>
                            </Section>

                            {/* SECTION 2 */}
                            <Section title="Credentials & documents">
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Input
                                            label="Qualification"
                                            value={formData.qualification}
                                            onChange={(v) => updateValue("qualification", v)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            label="Certificates"
                                            value={formData.certificates}
                                            onChange={(v) => updateValue("certificates", v)}
                                        />
                                    </Col>
                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label className="text-secondary small">
                                                Upload supporting documents
                                            </Form.Label>
                                            <Form.Control
                                                type="file"
                                                multiple
                                                className="border-0"
                                                style={inputStyle}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Section>

                            {/* Navigation */}
                            <div className="d-flex justify-content-end">
                                <Button
                                    onClick={nextStep}
                                    style={{
                                        backgroundColor: "#3b82f6",
                                        border: "none",
                                        borderRadius: "9999px",
                                        padding: "0.6rem 2.5rem",
                                        boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                                    }}
                                >
                                    Continue →
                                </Button>
                            </div>

                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

/* ---------- Shared components ---------- */

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                backgroundColor: "rgba(2,6,23,0.85)",
                border: "1px solid #1e293b",
                borderRadius: "0.75rem",
                padding: "1rem",
            }}
        >
            <h6 className="text-light fw-semibold mb-3">{title}</h6>
            {children}
        </div>
    );
}

function Input({
    label,
    value,
    onChange,
    type = "text",
}: {
    label: string;
    value?: any;
    onChange: (v: string) => void;
    type?: string;
}) {
    return (
        <Form.Group>
            <Form.Label className="text-secondary small">{label}</Form.Label>
            <Form.Control
                type={type}
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                className="border-0"
                style={inputStyle}
            />
        </Form.Group>
    );
}

const inputStyle = {
    backgroundColor: "#020617",
    color: "#e5e7eb",
    borderRadius: "0.6rem",
    padding: "0.45rem 0.6rem",
};