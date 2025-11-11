"use client";

import { Form, Button, Container, Card } from "react-bootstrap";
import { ClientFormData } from "./page";

interface Step4Props {
    nextStep: () => void;
    formData: ClientFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClientFormData>>;
}

export default function Step4({ nextStep, formData, setFormData }: Step4Props) {
    // helper to update textarea values
    const updateValue = (key: string, value: string) => {
        setFormData({ ...formData, [key]: value });
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

            {/* --- Question 1 --- */}
            <Card
                className="p-4 mb-4"
                style={{
                    maxWidth: "700px",
                    width: "100%",
                    borderRadius: "10px",
                    border: "1px solid #000",
                }}
            >
                <Card.Body>
                    <Form.Group>
                        <Form.Label
                            className="fw-normal"
                            style={{
                                fontSize: "0.95rem",
                                color: "black",
                            }}
                        >
                            Please specify what styles or experience level you have.
                        </Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={2}
                            className="mt-3"
                            style={{
                                border: "none",
                                borderBottom: "1px solid black",
                                borderRadius: "0",
                                resize: "none",
                                width: "80%",
                                margin: "0 auto",
                            }}
                            value={formData.yogaExperience || ""}
                            onChange={(e) => updateValue("yogaExperience", e.target.value)}
                        />
                    </Form.Group>
                </Card.Body>
            </Card>

            {/* --- Question 2 --- */}
            <Card
                className="p-4 mb-4"
                style={{
                    maxWidth: "700px",
                    width: "100%",
                    borderRadius: "10px",
                    border: "1px solid #000",
                }}
            >
                <Card.Body>
                    <Form.Group>
                        <Form.Label
                            className="fw-normal"
                            style={{
                                fontSize: "0.95rem",
                                color: "black",
                            }}
                        >
                            Please provide the information on the type of healthcare provider
                            you are currently under care of.{" "}
                            <span className="text-danger">
                                (e.g., Doctor, Therapist, Physiotherapist...)
                            </span>
                        </Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={2}
                            className="mt-3"
                            style={{
                                border: "none",
                                borderBottom: "1px solid black",
                                borderRadius: "0",
                                resize: "none",
                                width: "80%",
                                margin: "0 auto",
                            }}
                            value={formData.providerType || ""}
                            onChange={(e) => updateValue("providerType", e.target.value)}
                        />
                    </Form.Group>
                </Card.Body>
            </Card>

            {/* --- Question 3 --- */}
            <Card
                className="p-4 mb-4"
                style={{
                    maxWidth: "700px",
                    width: "100%",
                    borderRadius: "10px",
                    border: "1px solid #000",
                }}
            >
                <Card.Body>
                    <Form.Group>
                        <Form.Label
                            className="fw-normal"
                            style={{
                                fontSize: "0.95rem",
                                color: "black",
                            }}
                        >
                            Please specify the movements or positions which you have been told
                            to avoid.
                        </Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={2}
                            className="mt-3"
                            style={{
                                border: "none",
                                borderBottom: "1px solid black",
                                borderRadius: "0",
                                resize: "none",
                                width: "80%",
                                margin: "0 auto",
                            }}
                            value={formData.movementsToAvoid || ""}
                            onChange={(e) =>
                                updateValue("movementsToAvoid", e.target.value)
                            }
                        />
                    </Form.Group>
                </Card.Body>
            </Card>

            {/* --- Navigation Button --- */}
            <div>
                <Button variant="secondary" size="sm" onClick={nextStep}>
                    Next
                </Button>
            </div>
        </Container>
    );
}