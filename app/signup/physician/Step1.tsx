"use client";

import { Card, Form, Button } from "react-bootstrap";
import { PhysicianFormData } from "./page";

interface Step1Props {
    nextStep: () => void;
    formData: PhysicianFormData;
    setFormData: React.Dispatch<React.SetStateAction<PhysicianFormData>>;
}

export default function Step1({ nextStep, formData, setFormData }: Step1Props) {
    const updateValue = (key: string, value: string) =>
        setFormData({ ...formData, [key]: value });

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
                    maxWidth: 550,
                    borderRadius: "20px",
                    backgroundColor: "white",
                    border: "none",
                }}
            >
                <h4 className="fw-bold text-center mb-4" style={{ color: "#0a0a0a" }}>
                    Physician’s Verification Information
                </h4>

                <Form noValidate className="px-2">
                    {/* --- Verification Information --- */}
                    <Form.Group className="mb-4 text-start">
                        <Form.Label className="fw-semibold">
                            Name <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                            size="sm"
                            required
                            placeholder="Full name"
                            className="rounded-pill px-3 py-2 border-0 shadow-sm"
                            style={{ backgroundColor: "#f7f7f7" }}
                            value={formData.name || ""}
                            onChange={(e) => updateValue("name", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 text-start">
                        <Form.Label className="fw-semibold">
                            Professional Email <span className="text-danger">*</span>
                        </Form.Label>
                        <Form.Control
                            size="sm"
                            type="email"
                            placeholder="example@hospital.org"
                            required
                            className="rounded-pill px-3 py-2 border-0 shadow-sm"
                            style={{ backgroundColor: "#f7f7f7" }}
                            value={formData.email || ""}
                            onChange={(e) => updateValue("email", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 text-start">
                        <Form.Label className="fw-semibold">
                            Medical License Number or Professional ID
                        </Form.Label>
                        <Form.Control
                            size="sm"
                            placeholder="e.g., 123456 or State ID"
                            className="rounded-pill px-3 py-2 border-0 shadow-sm"
                            style={{ backgroundColor: "#f7f7f7" }}
                            value={formData.license || ""}
                            onChange={(e) => updateValue("license", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 text-start">
                        <Form.Label className="fw-semibold">NPI (US)</Form.Label>
                        <Form.Control
                            size="sm"
                            placeholder="e.g., 9876543210"
                            className="rounded-pill px-3 py-2 border-0 shadow-sm"
                            style={{ backgroundColor: "#f7f7f7" }}
                            value={formData.npi || ""}
                            onChange={(e) => updateValue("npi", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold">
                            Organization or Clinic Affiliation
                        </Form.Label>
                        <Form.Control
                            size="sm"
                            placeholder="e.g., Mayo Clinic, UCLA Health"
                            className="rounded-pill px-3 py-2 border-0 shadow-sm"
                            style={{ backgroundColor: "#f7f7f7" }}
                            value={formData.organization || ""}
                            onChange={(e) => updateValue("organization", e.target.value)}
                        />
                    </Form.Group>

                    <hr className="my-4" />

                    <h6 className="fw-semibold text-center mb-3">Create a Login</h6>

                    <Form.Group className="mb-4 text-start">
                        <Form.Label className="fw-semibold">Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter a username"
                            required
                            className="rounded-pill px-3 py-2 border-0 shadow-sm"
                            style={{ backgroundColor: "#f7f7f7" }}
                            value={formData.username || ""}
                            onChange={(e) => updateValue("username", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 text-start">
                        <Form.Label className="fw-semibold">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            required
                            className="rounded-pill px-3 py-2 border-0 shadow-sm"
                            style={{ backgroundColor: "#f7f7f7" }}
                            value={formData.password || ""}
                            onChange={(e) => updateValue("password", e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold">Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Re-enter password"
                            required
                            className="rounded-pill px-3 py-2 border-0 shadow-sm"
                            style={{ backgroundColor: "#f7f7f7" }}
                            value={formData.confirmPassword || ""}
                            onChange={(e) => updateValue("confirmPassword", e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-flex justify-content-end">
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
                            Continue →
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}