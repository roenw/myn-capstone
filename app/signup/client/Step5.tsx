"use client";

import { Form, Button, Card, Container } from "react-bootstrap";
import { ClientFormData } from "./page";

interface Step5Props {
    nextStep: () => void;
    formData: ClientFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClientFormData>>;
}

export default function Step5({ nextStep, formData, setFormData }: Step5Props) {
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
            <Container style={{ maxWidth: 960 }}>
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
                                Therapist preferences
                            </h4>
                            <p className="text-muted small mb-2">
                                Step 5 of 6
                            </p>
                            <p
                                className="small text-muted"
                                style={{ maxWidth: 640, margin: "0 auto" }}
                            >
                                These preferences help us match you with a therapist who fits
                                your comfort, availability, and communication style.
                            </p>
                        </div>

                        <Form noValidate className="d-grid gap-4">

                            {/* SECTION 1 */}
                            <Section title="Therapist gender preference">
                                <div className="d-flex flex-wrap gap-2">
                                    {["Female", "Male", "Non-binary", "No preference"].map((label) => (
                                        <Pill
                                            key={label}
                                            active={(formData.genderPref || []).includes(label)}
                                            onClick={() => toggleArrayValue("genderPref", label)}
                                        >
                                            {label}
                                        </Pill>
                                    ))}
                                </div>
                            </Section>

                            {/* SECTION 2 */}
                            <Section title="Clinical or healthcare experience">
                                <p className="text-muted small mb-3">
                                    Would you prefer a therapist with healthcare or clinical yoga experience?
                                </p>
                                <PillRow
                                    value={formData.experiencePref}
                                    onSelect={(v) => updateValue("experiencePref", v)}
                                />
                            </Section>

                            {/* SECTION 3 */}
                            <Section title="Language preference">
                                <div className="d-flex flex-wrap gap-2">
                                    {["English", "French"].map((lang) => (
                                        <Pill
                                            key={lang}
                                            active={(formData.languagePref || []).includes(lang)}
                                            onClick={() => toggleArrayValue("languagePref", lang)}
                                        >
                                            {lang}
                                        </Pill>
                                    ))}
                                </div>

                                <Form.Control
                                    size="sm"
                                    placeholder="Other language (optional)"
                                    value={formData.otherLanguage || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, otherLanguage: e.target.value })
                                    }
                                    className="mt-3"
                                    style={{ ...inputStyle, maxWidth: 240 }}
                                />
                            </Section>

                            {/* SECTION 4 */}
                            <Section title="Preferred session format">
                                <div className="d-flex flex-wrap gap-2">
                                    {["Online", "In-person", "Hybrid", "Chat-based", "Audio"].map(
                                        (format) => (
                                            <Pill
                                                key={format}
                                                active={(formData.sessionFormat || []).includes(format)}
                                                onClick={() =>
                                                    toggleArrayValue("sessionFormat", format)
                                                }
                                            >
                                                {format}
                                            </Pill>
                                        )
                                    )}
                                </div>
                            </Section>

                            {/* SECTION 5 */}
                            <Section title="Availability">
                                <div className="d-grid gap-3" style={{ maxWidth: 460 }}>
                                    <Form.Control
                                        size="sm"
                                        placeholder="Available days (e.g., Mon–Wed)"
                                        value={formData.availabilityDays || ""}
                                        onChange={(e) =>
                                            updateValue("availabilityDays", e.target.value)
                                        }
                                        style={inputStyle}
                                    />
                                    <Form.Control
                                        size="sm"
                                        placeholder="Preferred time (e.g., evenings)"
                                        value={formData.availabilityTime || ""}
                                        onChange={(e) =>
                                            updateValue("availabilityTime", e.target.value)
                                        }
                                        style={inputStyle}
                                    />
                                    <Form.Control
                                        size="sm"
                                        placeholder="Time zone"
                                        value={formData.availabilityZone || ""}
                                        onChange={(e) =>
                                            updateValue("availabilityZone", e.target.value)
                                        }
                                        style={inputStyle}
                                    />
                                </div>
                            </Section>

                            {/* Navigation */}
                            <div className="d-flex justify-content-end pt-2">
                                <Button
                                    onClick={nextStep}
                                    style={{
                                        borderRadius: "9999px",
                                        padding: "0.6rem 2rem",
                                        boxShadow:
                                            "0 4px 14px rgba(59,130,246,0.2)",
                                    }}
                                >
                                    Submit →
                                </Button>
                            </div>

                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

/* ---------- Reusable UX helpers ---------- */

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

function PillRow({
    value,
    onSelect,
}: {
    value?: string;
    onSelect: (v: string) => void;
}) {
    return (
        <div className="d-flex gap-3">
            {["Yes", "No"].map((opt) => (
                <Pill
                    key={opt}
                    active={value === opt}
                    onClick={() => onSelect(opt)}
                >
                    {opt}
                </Pill>
            ))}
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
                padding: "0.4rem 1rem",
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