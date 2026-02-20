"use client";

import { Form, Button, Card, Container } from "react-bootstrap";
import { ClientFormData } from "./page";

interface Step4Props {
    nextStep: () => void;
    formData: ClientFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClientFormData>>;
}

export default function Step4({ nextStep, formData, setFormData }: Step4Props) {
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
            <Container style={{ maxWidth: 920 }}>
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
                                A bit more detail
                            </h4>
                            <p className="text-muted small mb-2">
                                Step 4 of 6
                            </p>
                            <p
                                className="small text-muted"
                                style={{ maxWidth: 640, margin: "0 auto" }}
                            >
                                These details help your therapist better understand your
                                background and keep sessions safe and effective.
                            </p>
                        </div>

                        <Form noValidate className="d-grid gap-4">

                            {/* SECTION 1 */}
                            <Section title="Your yoga background">
                                <p className="text-muted small mb-2">
                                    Let us know your experience level or styles you’ve practiced.
                                </p>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Beginner, restorative yoga, Hatha, etc."
                                    value={formData.yogaExperience || ""}
                                    onChange={(e) =>
                                        updateValue("yogaExperience", e.target.value)
                                    }
                                    style={textareaStyle}
                                />
                            </Section>

                            {/* SECTION 2 */}
                            <Section title="Healthcare provider details">
                                <p className="text-muted small mb-2">
                                    If applicable, describe the type of healthcare provider you
                                    are currently under the care of.
                                </p>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Doctor, therapist, physiotherapist, etc."
                                    value={formData.providerType || ""}
                                    onChange={(e) =>
                                        updateValue("providerType", e.target.value)
                                    }
                                    style={textareaStyle}
                                />
                            </Section>

                            {/* SECTION 3 */}
                            <Section title="Movements to avoid">
                                <p className="text-muted small mb-2">
                                    Please list any movements or positions you’ve been advised to
                                    avoid.
                                </p>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Twisting, weight-bearing on wrists, etc."
                                    value={formData.movementsToAvoid || ""}
                                    onChange={(e) =>
                                        updateValue("movementsToAvoid", e.target.value)
                                    }
                                    style={textareaStyle}
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

/* ---------- UX helpers ---------- */

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

const textareaStyle = {
    borderRadius: "0.6rem",
    padding: "0.6rem",
    border: "1px solid #dee2e6",
    resize: "none" as const,
};