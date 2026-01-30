"use client";

import { Form, Button, Card } from "react-bootstrap";
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

    const updateValue = (key: string, value: string) => {
        setFormData({ ...formData, [key]: value });
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{
                background: "linear-gradient(to bottom right, #8ee7f1, #6bc9f5)",
                fontFamily: "'Poppins', sans-serif",
                overflowY: "auto",
                padding: "2rem 0",
            }}
        >
            <Card
                className="shadow-lg p-4"
                style={{
                    width: "100%",
                    maxWidth: 800,
                    borderRadius: "20px",
                    backgroundColor: "white",
                    border: "none",
                }}
            >
                <h4 className="fw-bold text-center mb-4" style={{ color: "#0a0a0a" }}>
                    Wellness and Lifestyle
                </h4>

                <Form noValidate className="px-2">
                    {/* --- Interest in Yoga Therapy --- */}
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold">
                            Why are you interested in yoga therapy?{" "}
                            <span className="text-muted">(Select all that apply)</span>
                        </Form.Label>

                        <div className="d-flex flex-wrap gap-3 mt-3">
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
                                    className="rounded-pill px-3 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        minWidth: "180px",
                                        backgroundColor: (formData.interests || []).includes(label)
                                            ? "#6bc9f5"
                                            : "#f7f7f7",
                                        color: (formData.interests || []).includes(label)
                                            ? "white"
                                            : "#333",
                                    }}
                                    onClick={() => toggleArrayValue("interests", label)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>

                        <div className="d-flex align-items-center gap-2 mt-4">
                            <span className="fw-semibold">Other:</span>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Enter custom reason"
                                className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                style={{
                                    backgroundColor: "#f7f7f7",
                                    width: "220px",
                                }}
                                value={formData.otherInterest || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, otherInterest: e.target.value })
                                }
                            />
                        </div>
                    </Form.Group>

                    {/* --- Practiced Yoga Before --- */}
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold mb-3">
                            Have you practiced yoga before?
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-3">
                            {["Yes", "No"].map((option) => (
                                <Button
                                    key={option}
                                    className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        backgroundColor:
                                            formData.yogaBefore === option ? "#6bc9f5" : "#f7f7f7",
                                        color: formData.yogaBefore === option ? "white" : "#333",
                                        minWidth: "100px",
                                    }}
                                    onClick={() => updateValue("yogaBefore", option)}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </Form.Group>

                    {/* --- Frequency --- */}
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold mb-3">
                            How often would you like to practice?
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-3">
                            {["Once a week", "2-3 times/week", "Daily", "Occasionally"].map(
                                (label) => (
                                    <Button
                                        key={label}
                                        className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                        style={{
                                            border: "none",
                                            minWidth: "160px",
                                            backgroundColor:
                                                formData.practiceFrequency === label
                                                    ? "#6bc9f5"
                                                    : "#f7f7f7",
                                            color:
                                                formData.practiceFrequency === label ? "white" : "#333",
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
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold mb-3">
                            Preferred session type
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-3">
                            {[
                                "One-on-one",
                                "Small group",
                                "Pre-recorded/self-paced",
                                "No preference",
                            ].map((label) => (
                                <Button
                                    key={label}
                                    className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        minWidth: "180px",
                                        backgroundColor:
                                            formData.sessionType === label ? "#6bc9f5" : "#f7f7f7",
                                        color: formData.sessionType === label ? "white" : "#333",
                                    }}
                                    onClick={() => updateValue("sessionType", label)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>
                    </Form.Group>

                    {/* --- Navigation Button --- */}
                    <div className="d-flex justify-content-end mt-4">
                        <Button
                            type="button"
                            className="rounded-pill fw-semibold"
                            style={{
                                backgroundColor: "#6bc9f5",
                                border: "none",
                                padding: "10px 32px",
                            }}
                            onClick={nextStep}
                        >
                            Next →
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}