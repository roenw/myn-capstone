"use client";

import { Form, Button, Container } from "react-bootstrap";
import { ClientFormData } from "./page";

interface Step3Props {
    nextStep: () => void;
    formData: ClientFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClientFormData>>;
}

export default function Step3({ nextStep, formData, setFormData }: Step3Props) {
    // helper to update simple key/value fields
    const updateValue = (key: string, value: string) =>
        setFormData({ ...formData, [key]: value });

    // helper for checkboxes
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

    return (
        <Container
            className="d-flex flex-column align-items-center justify-content-start py-5"
            style={{ textAlign: "center", minHeight: "100vh" }}
        >
            {/* Title */}
            <h5 className="fw-semibold mb-3">
                Client's Health & Medical Information
            </h5>

            {/* Disclaimer */}
            <p className="text-danger small mb-5" style={{ maxWidth: "600px" }}>
                Disclaimer: This information is confidential and helps us match you with
                an instructor experienced in your needs. It is not a substitute for
                medical advice.
            </p>

            <Form noValidate style={{ maxWidth: "900px", width: "100%" }}>
                {/* Question 1 */}
                <Form.Group className="mb-4">
                    <Form.Label className="fw-normal">
                        Are you currently under the care of a healthcare provider?
                    </Form.Label>
                    <div className="d-inline-flex align-items-center gap-4 ms-3">
                        {["Yes", "No"].map((option) => (
                            <div key={option}>
                                <span>{option}</span>{" "}
                                <Form.Check
                                    type="radio"
                                    name="provider"
                                    inline
                                    checked={formData.provider === option}
                                    onChange={() => updateValue("provider", option)}
                                    style={{ transform: "scale(1.2)" }}
                                />
                            </div>
                        ))}
                    </div>
                </Form.Group>

                {/* Question 2 */}
                <Form.Group className="mb-4">
                    <Form.Label className="fw-normal">
                        Do you have any diagnosed medical conditions?{" "}
                        <span className="text-muted" style={{ fontStyle: "italic" }}>
                            (Choose from the given boxes; if others, please specify)
                        </span>
                    </Form.Label>

                    <div
                        className="d-flex flex-wrap justify-content-center gap-4 mt-3"
                        style={{ lineHeight: "2rem" }}
                    >
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
                            <div key={label} className="d-flex align-items-center gap-1">
                                <Form.Check
                                    type="checkbox"
                                    checked={(formData.conditions || []).includes(label)}
                                    onChange={() => toggleArrayValue("conditions", label)}
                                />
                                <span>{label}</span>
                            </div>
                        ))}

                        <div className="d-flex align-items-center gap-2 mt-2">
                            <span>Others:</span>
                            <Form.Control
                                size="sm"
                                type="text"
                                style={{
                                    border: "1px solid black",
                                    borderRadius: "6px",
                                    width: "220px",
                                }}
                                value={formData.otherCondition || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, otherCondition: e.target.value })
                                }
                            />
                        </div>
                    </div>
                </Form.Group>

                {/* Question 3 */}
                <Form.Group className="mb-4">
                    <Form.Label className="fw-normal">
                        Do you have any current symptoms or physical limitations?{" "}
                        <span className="text-muted" style={{ fontStyle: "italic" }}>
                            (e.g., difficulty standing, joint pain, fatigue, dizziness, etc.)
                        </span>
                    </Form.Label>
                    <div className="d-inline-flex align-items-center gap-4 ms-3">
                        {["Yes", "No"].map((option) => (
                            <div key={option}>
                                <span>{option}</span>{" "}
                                <Form.Check
                                    type="radio"
                                    name="symptoms"
                                    inline
                                    checked={formData.symptoms === option}
                                    onChange={() => updateValue("symptoms", option)}
                                    style={{ transform: "scale(1.2)" }}
                                />
                            </div>
                        ))}
                    </div>
                </Form.Group>

                {/* Question 4 */}
                <Form.Group className="mb-4">
                    <Form.Label className="fw-normal">
                        Are there any movements or positions you've been told to avoid?
                    </Form.Label>
                    <div className="d-inline-flex align-items-center gap-4 ms-3">
                        {["Yes", "No"].map((option) => (
                            <div key={option}>
                                <span>{option}</span>{" "}
                                <Form.Check
                                    type="radio"
                                    name="avoid"
                                    inline
                                    checked={formData.avoid === option}
                                    onChange={() => updateValue("avoid", option)}
                                    style={{ transform: "scale(1.2)" }}
                                />
                            </div>
                        ))}
                    </div>
                </Form.Group>

                {/* Question 5 */}
                <Form.Group className="mb-5">
                    <Form.Label className="fw-normal">
                        Are you currently insured?
                    </Form.Label>
                    <div className="d-inline-flex align-items-center gap-4 ms-3">
                        {["Yes", "No"].map((option) => (
                            <div key={option}>
                                <span>{option}</span>{" "}
                                <Form.Check
                                    type="radio"
                                    name="insured"
                                    inline
                                    checked={formData.insured === option}
                                    onChange={() => updateValue("insured", option)}
                                    style={{ transform: "scale(1.2)" }}
                                />
                            </div>
                        ))}
                    </div>
                </Form.Group>

                {/* Navigation */}
                <div className="mt-4">
                    <Button variant="secondary" size="sm" onClick={nextStep}>
                        Next
                    </Button>
                </div>
            </Form>
        </Container>
    );
}