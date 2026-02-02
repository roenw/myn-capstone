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
            style={{ backgroundColor: "#020617" }} // slate-950
        >
            <Container style={{ maxWidth: 900 }}>
                <Card
                    className="border-0 shadow-lg"
                    style={{
                        backgroundColor: "rgba(15, 23, 42, 0.7)", // slate-900/70
                        borderRadius: "1rem",
                        border: "1px solid #1e293b",
                    }}
                >
                    <Card.Body className="p-4">
                        {/* Header */}
                        <div className="text-center mb-4">
                            <h4 className="fw-semibold text-light mb-1">
                                Wellness & Lifestyle
                            </h4>
                            <p className="text-secondary small mb-1">
                                Step 2 of 6
                            </p>
                            <p
                                className="text-secondary small"
                                style={{ maxWidth: 560, margin: "0 auto" }}
                            >
                                This helps us understand your goals and preferences so we can
                                tailor your experience.
                            </p>
                        </div>

                        <Form noValidate className="d-grid gap-4">

                            {/* SECTION 1 */}
                            <Section title="Your goals">
                                <p className="text-secondary small mb-3">
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
                                    className="border-0 mt-3"
                                    style={{ ...inputStyle, maxWidth: 260 }}
                                />
                            </Section>

                            {/* SECTION 2 */}
                            <Section title="Yoga experience">
                                <p className="text-secondary small mb-3">
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
                                <p className="text-secondary small mb-3">
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
                                <p className="text-secondary small mb-3">
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
                                        backgroundColor: "#3b82f6",
                                        border: "none",
                                        borderRadius: "9999px",
                                        padding: "0.6rem 2rem",
                                        boxShadow: "0 0 20px rgba(59,130,246,0.3)",
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
                backgroundColor: "rgba(2,6,23,0.85)",
                border: "1px solid #1e293b",
                borderRadius: "0.75rem",
                padding: "1rem",
            }}
        >
            <h6 className="text-light fw-semibold mb-2">
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
                backgroundColor: active ? "#3b82f6" : "#020617",
                color: active ? "white" : "#cbd5f5",
                border: active
                    ? "1px solid #3b82f6"
                    : "1px solid #1e293b",
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
    backgroundColor: "#020617",
    color: "#e5e7eb",
    borderRadius: "0.6rem",
    padding: "0.4rem 0.6rem",
};