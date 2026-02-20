"use client";

import { Card, Form, Button, Container } from "react-bootstrap";
import { PhysicianFormData } from "./page";
import type { ChangeEvent } from "react";

interface Step1Props {
    nextStep: () => void;
    formData: PhysicianFormData;
    setFormData: React.Dispatch<React.SetStateAction<PhysicianFormData>>;
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
            <Container style={{ maxWidth: 620 }}>
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
                                Physician Verification
                            </h4>
                            <p className="text-muted small mb-0">
                                Step 1 of 1 · Secure credential review
                            </p>
                        </div>

                        <Form noValidate>

                            {/* --- Identity --- */}
                            <Section title="Professional Identity">
                                <Input
                                    label="Full name"
                                    required
                                    value={formData.name || ""}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue("name", e.target.value)}
                                />

                                <Input
                                    label="Professional email"
                                    type="email"
                                    placeholder="example@hospital.org"
                                    required
                                    value={formData.email || ""}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue("email", e.target.value)}
                                />
                            </Section>

                            {/* --- Credentials --- */}
                            <Section title="Credentials">
                                <Input
                                    label="Medical license number or professional ID"
                                    value={formData.license || ""}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue("license", e.target.value)}
                                />

                                <Input
                                    label="NPI (US)"
                                    placeholder="10-digit NPI"
                                    value={formData.npi || ""}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue("npi", e.target.value)}
                                />

                                <Input
                                    label="Organization or clinic affiliation"
                                    placeholder="e.g. Mayo Clinic"
                                    value={formData.organization || ""}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateValue("organization", e.target.value)}
                                />
                            </Section>

                            {/* CTA */}
                            <div className="d-flex justify-content-end mt-4">
                                <Button
                                    type="button"
                                    onClick={nextStep}
                                    style={{
                                        borderRadius: "9999px",
                                        padding: "0.6rem 2.5rem",
                                        boxShadow:
                                            "0 4px 14px rgba(59,130,246,0.2)",
                                        fontWeight: 500,
                                    }}
                                >
                                    Submit for review →
                                </Button>
                            </div>

                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

/* ---------------- helpers ---------------- */

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mb-4">
            <p className="text-uppercase small text-muted mb-3">{title}</p>
            {children}
        </div>
    );
}

function Input({
    label,
    required,
    ...props
}: {
    label: string;
    required?: boolean;
    [key: string]: any;
}) {
    return (
        <Form.Group className="mb-3">
            <Form.Label className="small text-muted">
                {label} {required && <span className="text-danger">*</span>}
            </Form.Label>
            <Form.Control
                {...props}
                size="sm"
                style={{
                    borderRadius: "0.75rem",
                    padding: "0.45rem 0.75rem",
                    border: "1px solid #dee2e6",
                }}
            />
        </Form.Group>
    );
}