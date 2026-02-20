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
            style={{
                background:
                    "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
            }}
        >
            <Container style={{ maxWidth: 1100 }}>
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
                                Instructor information
                            </h4>
                            <p className="text-muted small mb-0">
                                Step 1 of X
                            </p>
                            <p className="text-muted small mt-1">
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
                                            <Form.Label className="text-muted small">
                                                Upload supporting documents
                                            </Form.Label>
                                            <Form.Control
                                                type="file"
                                                multiple
                                                style={inputStyle}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Section>

                            {/* SECTION 3 */}
                            <Section title="Create your login">
                                <Row className="g-3">
                                    <Col md={4}>
                                        <Input
                                            label="Username"
                                            value={formData.username}
                                            onChange={(v) => updateValue("username", v)}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Input
                                            label="Password"
                                            type="password"
                                            value={formData.password}
                                            onChange={(v) => updateValue("password", v)}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Input
                                            label="Confirm password"
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={(v) => updateValue("confirmPassword", v)}
                                        />
                                    </Col>
                                </Row>
                            </Section>

                            {/* Navigation */}
                            <div className="d-flex justify-content-end">
                                <Button
                                    onClick={nextStep}
                                    style={{
                                        borderRadius: "9999px",
                                        padding: "0.6rem 2.5rem",
                                        boxShadow:
                                            "0 4px 14px rgba(59,130,246,0.2)",
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
                backgroundColor: "rgba(255,255,255,0.9)",
                border: "1px solid #dee2e6",
                borderRadius: "0.75rem",
                padding: "1rem",
            }}
        >
            <h6 className="fw-semibold mb-3">{title}</h6>
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
            <Form.Label className="text-muted small">{label}</Form.Label>
            <Form.Control
                type={type}
                value={value || ""}
                onChange={(e) => onChange(e.target.value)}
                style={inputStyle}
            />
        </Form.Group>
    );
}

const inputStyle = {
    borderRadius: "0.6rem",
    padding: "0.45rem 0.6rem",
    border: "1px solid #dee2e6",
};