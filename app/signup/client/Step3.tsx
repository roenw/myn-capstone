"use client";

import { Form, Button, Card, Container } from "react-bootstrap";
import { ClientFormData } from "./page";

interface Step3Props {
    nextStep: () => void;
    formData: ClientFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClientFormData>>;
}

export default function Step3({ nextStep, formData, setFormData }: Step3Props) {
    const updateValue = (key: string, value: string) =>
        setFormData({ ...formData, [key]: value });

    const toggleArrayValue = (key: string, value: string) => {
        const current = (formData[key] as string[]) || [];
        setFormData({
            ...formData,
            [key]: current.includes(value)
                ? current.filter((v: string) => v !== value)
                : [...current, value],
        });
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{
                background:
                    "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
            }}
        >
            <Container style={{ maxWidth: 960 }}>
                {/* Main Card */}
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
                                Let’s talk about your health
                            </h4>
                            <p className="text-muted small mb-2">
                                Step 3 of 6
                            </p>
                            <p
                                className="small text-muted"
                                style={{ maxWidth: 640, margin: "0 auto" }}
                            >
                                This information helps us match you with a therapist who can
                                support you safely.
                            </p>
                        </div>

                        <Form noValidate className="d-grid gap-4">

                            {/* SECTION 1 */}
                            <Section title="Healthcare support">
                                <p className="text-muted small mb-3">
                                    Are you currently under the care of a healthcare provider?
                                </p>
                                <PillRow
                                    value={formData.provider}
                                    onSelect={(v) => updateValue("provider", v)}
                                />
                            </Section>

                            {/* SECTION 2 */}
                            <Section title="Diagnosed conditions">
                                <p className="text-muted small mb-3">
                                    Select any conditions you’ve been diagnosed with.
                                </p>
                                <div className="d-flex flex-wrap gap-2">
                                    {[
                                        "Chronic Pain",
                                        "Arthritis",
                                        "Depression or Anxiety",
                                        "Autoimmune Disorders",
                                        "Neurological Conditions",
                                        "Cardiovascular Conditions",
                                        "Respiratory Conditions",
                                        "Musculoskeletal Injuries",
                                        "Cancer (current or remission)",
                                        "Pregnancy or Postnatal",
                                        "PTSD",
                                    ].map((label) => (
                                        <Pill
                                            key={label}
                                            active={(formData.conditions || []).includes(label)}
                                            onClick={() =>
                                                toggleArrayValue("conditions", label)
                                            }
                                        >
                                            {label}
                                        </Pill>
                                    ))}
                                </div>

                                <Form.Control
                                    size="sm"
                                    placeholder="Other condition (optional)"
                                    value={formData.otherCondition || ""}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            otherCondition: e.target.value,
                                        })
                                    }
                                    className="mt-3"
                                    style={{ ...inputStyle, maxWidth: 280 }}
                                />
                            </Section>

                            {/* SECTION 3 */}
                            <Section title="Current symptoms">
                                <p className="text-muted small mb-3">
                                    Do you have any current symptoms or physical limitations?
                                </p>
                                <PillRow
                                    value={formData.symptoms}
                                    onSelect={(v) => updateValue("symptoms", v)}
                                />
                            </Section>

                            {/* SECTION 4 */}
                            <Section title="Movement restrictions">
                                <p className="text-muted small mb-3">
                                    Have you been advised to avoid certain movements or positions?
                                </p>
                                <PillRow
                                    value={formData.avoid}
                                    onSelect={(v) => updateValue("avoid", v)}
                                />
                            </Section>

                            {/* SECTION 5 */}
                            <Section title="Insurance">
                                <p className="text-muted small mb-3">
                                    Are you currently insured?
                                </p>
                                <PillRow
                                    value={formData.insured}
                                    onSelect={(v) => updateValue("insured", v)}
                                />
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

/* ---------- Reusable UX Components ---------- */

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