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
            style={{ backgroundColor: "#020617" }} // slate-950
        >
            <Container style={{ maxWidth: 620 }}>
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
                                Physician Verification
                            </h4>
                            <p className="text-secondary small mb-0">
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
                                        backgroundColor: "#3b82f6",
                                        border: "none",
                                        borderRadius: "9999px",
                                        padding: "0.6rem 2.5rem",
                                        boxShadow: "0 0 20px rgba(59,130,246,0.3)",
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
            <p className="text-uppercase small text-secondary mb-3">{title}</p>
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
            <Form.Label className="small text-secondary">
                {label} {required && <span className="text-danger">*</span>}
            </Form.Label>
            <Form.Control
                {...props}
                size="sm"
                className="border-0"
                style={{
                    backgroundColor: "#020617",
                    color: "#e5e7eb",
                    borderRadius: "0.75rem",
                    padding: "0.45rem 0.75rem",
                    border: "1px solid #1e293b",
                }}
            />
        </Form.Group>
    );
}