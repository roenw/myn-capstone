"use client";

import { Form, Button, Card } from "react-bootstrap";
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
                    maxWidth: 900,
                    borderRadius: "20px",
                    backgroundColor: "white",
                    border: "none",
                }}
            >
                <h4 className="fw-bold text-center mb-3" style={{ color: "#0a0a0a" }}>
                    Client’s Health & Medical Information
                </h4>

                <p
                    className="text-danger small text-center mb-5"
                    style={{ maxWidth: "600px", margin: "0 auto" }}
                >
                    Disclaimer: This information is confidential and helps us match you with
                    an instructor experienced in your needs. It is not a substitute for
                    medical advice.
                </p>

                <Form noValidate className="px-3 text-start">
                    {/* Question 1 */}
                    <Form.Group className="mb-5">
                        <Form.Label className="fw-semibold">
                            Are you currently under the care of a healthcare provider?
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            {["Yes", "No"].map((option) => (
                                <Button
                                    key={option}
                                    className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        backgroundColor:
                                            formData.provider === option ? "#6bc9f5" : "#f7f7f7",
                                        color: formData.provider === option ? "white" : "#333",
                                        minWidth: "100px",
                                    }}
                                    onClick={() => updateValue("provider", option)}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </Form.Group>

                    {/* Question 2 */}
                    <Form.Group className="mb-5">
                        <Form.Label className="fw-semibold">
                            Do you have any diagnosed medical conditions?{" "}
                            <span className="text-muted fst-italic">
                                (Choose from the given boxes; if others, please specify)
                            </span>
                        </Form.Label>

                        <div className="d-flex flex-wrap gap-3 mt-3">
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
                                <Button
                                    key={label}
                                    className="rounded-pill px-3 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        minWidth: "200px",
                                        backgroundColor: (formData.conditions || []).includes(label)
                                            ? "#6bc9f5"
                                            : "#f7f7f7",
                                        color: (formData.conditions || []).includes(label)
                                            ? "white"
                                            : "#333",
                                    }}
                                    onClick={() => toggleArrayValue("conditions", label)}
                                >
                                    {label}
                                </Button>
                            ))}

                            <div className="d-flex align-items-center gap-2 mt-3">
                                <span className="fw-semibold">Other:</span>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Specify condition"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7", width: "220px" }}
                                    value={formData.otherCondition || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, otherCondition: e.target.value })
                                    }
                                />
                            </div>
                        </div>
                    </Form.Group>

                    {/* Question 3 */}
                    <Form.Group className="mb-5">
                        <Form.Label className="fw-semibold">
                            Do you have any current symptoms or physical limitations?{" "}
                            <span className="text-muted fst-italic">
                                (e.g., difficulty standing, joint pain, fatigue, dizziness, etc.)
                            </span>
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            {["Yes", "No"].map((option) => (
                                <Button
                                    key={option}
                                    className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        backgroundColor:
                                            formData.symptoms === option ? "#6bc9f5" : "#f7f7f7",
                                        color: formData.symptoms === option ? "white" : "#333",
                                        minWidth: "100px",
                                    }}
                                    onClick={() => updateValue("symptoms", option)}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </Form.Group>

                    {/* Question 4 */}
                    <Form.Group className="mb-5">
                        <Form.Label className="fw-semibold">
                            Are there any movements or positions you’ve been told to avoid?
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            {["Yes", "No"].map((option) => (
                                <Button
                                    key={option}
                                    className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        backgroundColor:
                                            formData.avoid === option ? "#6bc9f5" : "#f7f7f7",
                                        color: formData.avoid === option ? "white" : "#333",
                                        minWidth: "100px",
                                    }}
                                    onClick={() => updateValue("avoid", option)}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </Form.Group>

                    {/* Question 5 */}
                    <Form.Group className="mb-5">
                        <Form.Label className="fw-semibold">
                            Are you currently insured?
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            {["Yes", "No"].map((option) => (
                                <Button
                                    key={option}
                                    className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        backgroundColor:
                                            formData.insured === option ? "#6bc9f5" : "#f7f7f7",
                                        color: formData.insured === option ? "white" : "#333",
                                        minWidth: "100px",
                                    }}
                                    onClick={() => updateValue("insured", option)}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </Form.Group>

                    {/* Navigation */}
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