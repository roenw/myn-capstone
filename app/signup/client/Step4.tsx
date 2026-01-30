"use client";

import { Form, Button, Card } from "react-bootstrap";
import { ClientFormData } from "./page";

interface Step4Props {
    nextStep: () => void;
    formData: ClientFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClientFormData>>;
}

export default function Step4({ nextStep, formData, setFormData }: Step4Props) {
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
                    maxWidth: 750,
                    borderRadius: "20px",
                    backgroundColor: "white",
                    border: "none",
                }}
            >
                {/* --- Title --- */}
                <h4 className="fw-bold text-center mb-3" style={{ color: "#0a0a0a" }}>
                    Client’s Health & Medical Information
                </h4>

                {/* --- Disclaimer --- */}
                <p
                    className="text-danger small text-center mb-5"
                    style={{ maxWidth: "600px", margin: "0 auto" }}
                >
                    Disclaimer: This information is confidential and helps us match you with
                    an instructor experienced in your needs. It is not a substitute for
                    medical advice.
                </p>

                <Form noValidate className="px-3">
                    {/* --- Question 1 --- */}
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold" style={{ color: "#0a0a0a" }}>
                            Please specify what styles or experience level you have.
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="e.g., beginner, restorative yoga, Hatha..."
                            className="rounded-4 mt-3 px-3 py-2 border-0 shadow-sm"
                            style={{
                                backgroundColor: "#f7f7f7",
                                resize: "none",
                            }}
                            value={formData.yogaExperience || ""}
                            onChange={(e) => updateValue("yogaExperience", e.target.value)}
                        />
                    </Form.Group>

                    {/* --- Question 2 --- */}
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold" style={{ color: "#0a0a0a" }}>
                            Please provide the information on the type of healthcare provider you
                            are currently under care of.{" "}
                            <span className="text-danger">
                                (e.g., Doctor, Therapist, Physiotherapist...)
                            </span>
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="List provider types or names"
                            className="rounded-4 mt-3 px-3 py-2 border-0 shadow-sm"
                            style={{
                                backgroundColor: "#f7f7f7",
                                resize: "none",
                            }}
                            value={formData.providerType || ""}
                            onChange={(e) => updateValue("providerType", e.target.value)}
                        />
                    </Form.Group>

                    {/* --- Question 3 --- */}
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold" style={{ color: "#0a0a0a" }}>
                            Please specify the movements or positions which you have been told to
                            avoid.
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="List movements or positions to avoid"
                            className="rounded-4 mt-3 px-3 py-2 border-0 shadow-sm"
                            style={{
                                backgroundColor: "#f7f7f7",
                                resize: "none",
                            }}
                            value={formData.movementsToAvoid || ""}
                            onChange={(e) =>
                                updateValue("movementsToAvoid", e.target.value)
                            }
                        />
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