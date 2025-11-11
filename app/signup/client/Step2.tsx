"use client";

import { Form, Button, Container } from "react-bootstrap";
import React from "react";

// --- Define the shape of your form data ---
type ClientFormData = {
    interests?: string[];
    otherInterest?: string;
    yogaBefore?: string;
    practiceFrequency?: string;
    sessionType?: string;
    [key: string]: any; // allows extra fields from other steps
};

// --- Define props for this component ---
interface Step2Props {
    nextStep: () => void;
    formData: ClientFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClientFormData>>;
}

export default function Step2({ nextStep, formData, setFormData }: Step2Props) {
    // Toggle a value inside an array (for buttons like interests)
    const toggleArrayValue = (key: string, value: string) => {
        const current = (formData[key] as string[]) || [];
        if (current.includes(value)) {
            setFormData({
                ...formData,
                [key]: current.filter((v: string) => v !== value),
            });
        } else {
            setFormData({ ...formData, [key]: [...current, value] });
        }
    };

    // Update single-value fields
    const updateValue = (key: string, value: string) => {
        setFormData({ ...formData, [key]: value });
    };

    return (
        <Container
            className="d-flex flex-column align-items-center justify-content-start py-5"
            style={{ textAlign: "center", minHeight: "100vh" }}
        >
            {/* Title */}
            <h5 className="fw-semibold mb-4">Wellness and Lifestyle</h5>

            <Form noValidate style={{ maxWidth: "800px", width: "100%" }}>
                {/* --- Interest in Yoga Therapy --- */}
                <Form.Group className="mb-5">
                    <Form.Label className="fw-normal">
                        Why are you interested in yoga therapy?{" "}
                        <span className="text-muted">(Select all that apply)</span>
                    </Form.Label>

                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                        {[
                            "Stress relief",
                            "Pain Management",
                            "Improving flexibility or strength",
                            "Better Sleep",
                            "Mental Health Support",
                            "Recovery or Rehabilitation",
                            "Spiritual growth or mindfulness",
                        ].map((label) => (
                            <Button
                                key={label}
                                variant={
                                    (formData.interests || []).includes(label)
                                        ? "dark"
                                        : "outline-dark"
                                }
                                size="sm"
                                className="rounded-pill px-3 py-2"
                                style={{
                                    backgroundColor: "transparent",
                                    borderWidth: "1px",
                                    minWidth: "180px",
                                }}
                                onClick={() => toggleArrayValue("interests", label)}
                            >
                                {label}
                            </Button>
                        ))}

                        <div className="d-flex align-items-center gap-2 mt-2">
                            <span>Others:</span>
                            <Form.Control
                                size="sm"
                                type="text"
                                style={{
                                    border: "none",
                                    borderBottom: "1px solid black",
                                    borderRadius: "0",
                                    width: "200px",
                                    display: "inline-block",
                                }}
                                value={formData.otherInterest || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, otherInterest: e.target.value })
                                }
                            />
                        </div>
                    </div>
                </Form.Group>

                {/* --- Practiced Yoga Before --- */}
                <Form.Group className="mb-4">
                    <Form.Label className="fw-normal me-2">
                        Have you practiced yoga before?
                    </Form.Label>
                    <div className="d-inline-flex align-items-center gap-3">
                        {["No", "Yes"].map((option) => (
                            <div key={option}>
                                <span>{option}</span>{" "}
                                <Form.Check
                                    type="radio"
                                    name="yogaBefore"
                                    inline
                                    checked={formData.yogaBefore === option}
                                    onChange={() => updateValue("yogaBefore", option)}
                                    style={{ transform: "scale(1.2)" }}
                                />
                            </div>
                        ))}
                    </div>
                </Form.Group>

                {/* --- Frequency --- */}
                <Form.Group className="mb-5">
                    <Form.Label className="fw-normal">
                        How often would you like to practice?
                    </Form.Label>
                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                        {["Once a week", "2-3 times/week", "Daily", "Occasionally"].map(
                            (label) => (
                                <Button
                                    key={label}
                                    variant={
                                        formData.practiceFrequency === label
                                            ? "dark"
                                            : "outline-dark"
                                    }
                                    size="sm"
                                    className="rounded-pill px-3 py-2"
                                    style={{
                                        backgroundColor: "transparent",
                                        borderWidth: "1px",
                                        minWidth: "150px",
                                    }}
                                    onClick={() => updateValue("practiceFrequency", label)}
                                >
                                    {label}
                                </Button>
                            )
                        )}
                    </div>
                </Form.Group>

                {/* --- Preferred Session Type --- */}
                <Form.Group className="mb-4">
                    <Form.Label className="fw-normal">Preferred session type</Form.Label>
                    <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                        {[
                            "One-on-one",
                            "Small group",
                            "Pre-recorded/self-paced",
                            "No preference",
                        ].map((label) => (
                            <Button
                                key={label}
                                variant={
                                    formData.sessionType === label ? "dark" : "outline-dark"
                                }
                                size="sm"
                                className="rounded-pill px-3 py-2"
                                style={{
                                    backgroundColor: "transparent",
                                    borderWidth: "1px",
                                    minWidth: "170px",
                                }}
                                onClick={() => updateValue("sessionType", label)}
                            >
                                {label}
                            </Button>
                        ))}
                    </div>
                </Form.Group>

                {/* --- Navigation Button --- */}
                <div className="mt-5">
                    <Button variant="secondary" size="sm" onClick={nextStep}>
                        Next
                    </Button>
                </div>
            </Form>
        </Container>
    );
}