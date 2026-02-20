"use client";

import { Form, Button, Card, Container } from "react-bootstrap";
import React from "react";

type ClientFormData = {
    interests?: string[];
    otherInterest?: string;
    yogaBefore?: string;
    practiceFrequency?: string;
    sessionType?: string;
    [key: string]: any;
};

interface Step2Props {
    nextStep: () => void;
    formData: ClientFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClientFormData>>;
}

export default function Step2({ nextStep, formData, setFormData }: Step2Props) {
    const toggleArrayValue = (key: string, value: string) => {
        const current = (formData[key] as string[]) || [];
        setFormData({
            ...formData,
            [key]: current.includes(value)
                ? current.filter((v: string) => v !== value)
                : [...current, value],
        });
    };

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
            <Container style={{ maxWidth: 900 }}>
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
                                Wellness & Lifestyle
                            </h4>
                            <p className="text-muted small mb-1">
                                Step 2 of 6
                            </p>
                            <p
                                className="text-muted small"
                                style={{ maxWidth: 560, margin: "0 auto" }}
                            >
                                This helps us understand your goals and preferences so we can
                                tailor your experience.
                            </p>
                        </div>

                        <Form noValidate className="d-grid gap-4">

                            {/* SECTION 1 */}
                            <Section title="Your goals">
                                <p className="text-muted small mb-3">
                                    What’s motivating you to explore yoga therapy?
                                </p>

                                <div className="d-flex flex-wrap gap-2">
                                    {[
                                        "Stress relief",
                                        "Pain Management",
                                        "Improving flexibility or strength",
                                        "Better Sleep",
                                        "Mental Health Support",
                                        "Recovery or Rehabilitation",
                                        "Spiritual growth or mindfulness",
                                    ].map((label) => {
                                        const active = (formData.interests || []).includes(label);
                                        return (
                                            <Pill
                                                key={label}
                                                active={active}
                                                onClick={() => toggleArrayValue("interests", label)}
                                            >
                                                {label}
                                            </Pill>
                                        );
                                    })}
                                </div>

                                <Form.Control
                                    size="sm"
                                    placeholder="Other reason (optional)"
                                    value={formData.otherInterest || ""}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            otherInterest: e.target.value,
                                        })
                                    }
                                    className="mt-3"
                                    style={{ ...inputStyle, maxWidth: 260 }}
                                />
                            </Section>

                            {/* SECTION 2 */}
                            <Section title="Yoga experience">
                                <p className="text-muted small mb-3">
                                    Have you practiced yoga before?
                                </p>

                                <div className="d-flex gap-3">
                                    {["Yes", "No"].map((option) => (
                                        <Pill
                                            key={option}
                                            active={formData.yogaBefore === option}
                                            onClick={() =>
                                                updateValue("yogaBefore", option)
                                            }
                                        >
                                            {option}
                                        </Pill>
                                    ))}
                                </div>
                            </Section>

                            {/* SECTION 3 */}
                            <Section title="Practice frequency">
                                <p className="text-muted small mb-3">
                                    How often would you ideally like to practice?
                                </p>

                                <div className="d-flex flex-wrap gap-2">
                                    {[
                                        "Once a week",
                                        "2–3 times/week",
                                        "Daily",
                                        "Occasionally",
                                    ].map((label) => (
                                        <Pill
                                            key={label}
                                            active={formData.practiceFrequency === label}
                                            onClick={() =>
                                                updateValue("practiceFrequency", label)
                                            }
                                        >
                                            {label}
                                        </Pill>
                                    ))}
                                </div>
                            </Section>

                            {/* SECTION 4 */}
                            <Section title="Session preference">
                                <p className="text-muted small mb-3">
                                    What type of sessions feel right for you?
                                </p>

                                <div className="d-flex flex-wrap gap-2">
                                    {[
                                        "One-on-one",
                                        "Small group",
                                        "Pre-recorded/self-paced",
                                        "No preference",
                                    ].map((label) => (
                                        <Pill
                                            key={label}
                                            active={formData.sessionType === label}
                                            onClick={() =>
                                                updateValue("sessionType", label)
                                            }
                                        >
                                            {label}
                                        </Pill>
                                    ))}
                                </div>
                            </Section>

                            {/* Navigation */}
                            <div className="d-flex justify-content-end pt-2">
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

/* ---------- Shared UX helpers ---------- */

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
            <h6 className="fw-semibold mb-2">
                {title}
            </h6>
            {children}
        </div>
    );
}

function Pill({
    active,
    children,
    onClick,
}: {
    active: boolean;
    children: React.ReactNode;
    onClick: () => void;
}) {
    return (
        <Button
            onClick={onClick}
            style={{
                backgroundColor: active ? "#3b82f6" : "white",
                color: active ? "white" : "#495057",
                border: active
                    ? "1px solid #3b82f6"
                    : "1px solid #dee2e6",
                borderRadius: "9999px",
                padding: "0.45rem 1rem",
                fontWeight: 500,
            }}
        >
            {children}
        </Button>
    );
}

const inputStyle = {
    borderRadius: "0.6rem",
    padding: "0.4rem 0.6rem",
    border: "1px solid #dee2e6",
};