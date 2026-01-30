"use client";

import { Form, Button, Card } from "react-bootstrap";
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
                    maxWidth: 850,
                    borderRadius: "20px",
                    backgroundColor: "white",
                    border: "none",
                }}
            >
                <h4 className="fw-bold text-center mb-4" style={{ color: "#0a0a0a" }}>
                    Client Instructor Preferences
                </h4>

                <Form noValidate className="px-3">
                    {/* Instructor Gender Preference */}
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold">
                            Do you prefer an instructor of a specific gender?
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            {["Female", "Male", "Non binary", "No preference"].map((label) => (
                                <Button
                                    key={label}
                                    className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        minWidth: "160px",
                                        backgroundColor: (formData.genderPref || []).includes(label)
                                            ? "#6bc9f5"
                                            : "#f7f7f7",
                                        color: (formData.genderPref || []).includes(label)
                                            ? "white"
                                            : "#333",
                                    }}
                                    onClick={() => toggleArrayValue("genderPref", label)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>
                    </Form.Group>

                    {/* Instructor Experience */}
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold">
                            Would you like an instructor with experience in healthcare or
                            clinical yoga therapy?
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            {["Yes", "No"].map((option) => (
                                <Button
                                    key={option}
                                    className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        minWidth: "100px",
                                        backgroundColor:
                                            formData.experiencePref === option ? "#6bc9f5" : "#f7f7f7",
                                        color:
                                            formData.experiencePref === option ? "white" : "#333",
                                    }}
                                    onClick={() => updateValue("experiencePref", option)}
                                >
                                    {option}
                                </Button>
                            ))}
                        </div>
                    </Form.Group>

                    {/* Language Preferences */}
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold">
                            What is your language preference?
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            {["English", "French"].map((lang) => (
                                <Button
                                    key={lang}
                                    className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        minWidth: "130px",
                                        backgroundColor: (formData.languagePref || []).includes(lang)
                                            ? "#6bc9f5"
                                            : "#f7f7f7",
                                        color: (formData.languagePref || []).includes(lang)
                                            ? "white"
                                            : "#333",
                                    }}
                                    onClick={() => toggleArrayValue("languagePref", lang)}
                                >
                                    {lang}
                                </Button>
                            ))}

                            {/* Other Language */}
                            <div className="d-flex align-items-center gap-2 mt-2">
                                <span className="fw-semibold">Other:</span>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Enter language"
                                    className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                    style={{ backgroundColor: "#f7f7f7", width: "180px" }}
                                    value={formData.otherLanguage || ""}
                                    onChange={(e) =>
                                        setFormData({ ...formData, otherLanguage: e.target.value })
                                    }
                                />
                            </div>
                        </div>
                    </Form.Group>

                    {/* Session Format */}
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold">
                            What is your preferred session format?
                        </Form.Label>
                        <div className="d-flex flex-wrap gap-3 mt-3">
                            {[
                                "Online",
                                "In-person",
                                "Hybrid",
                                "Chat-based",
                                "Audio",
                            ].map((format) => (
                                <Button
                                    key={format}
                                    className="rounded-pill px-4 py-2 fw-semibold shadow-sm"
                                    style={{
                                        border: "none",
                                        minWidth: "140px",
                                        backgroundColor: (formData.sessionFormat || []).includes(format)
                                            ? "#6bc9f5"
                                            : "#f7f7f7",
                                        color: (formData.sessionFormat || []).includes(format)
                                            ? "white"
                                            : "#333",
                                    }}
                                    onClick={() => toggleArrayValue("sessionFormat", format)}
                                >
                                    {format}
                                </Button>
                            ))}
                        </div>
                    </Form.Group>

                    {/* Availability */}
                    <Form.Group className="mb-5 text-start">
                        <Form.Label className="fw-semibold">
                            What is your availability for sessions?
                        </Form.Label>
                        <div
                            className="d-flex flex-column gap-3 mt-3"
                            style={{ maxWidth: "450px" }}
                        >
                            {["Days", "Time", "Time zone"].map((label) => (
                                <div
                                    key={label}
                                    className="d-flex align-items-center gap-3 justify-content-between"
                                >
                                    <span className="fw-semibold">{label}</span>
                                    <Form.Control
                                        size="sm"
                                        type="text"
                                        placeholder={`Enter ${label.toLowerCase()}`}
                                        className="rounded-pill px-3 py-2 border-0 shadow-sm"
                                        style={{ backgroundColor: "#f7f7f7", flex: 1 }}
                                        value={
                                            label === "Days"
                                                ? formData.availabilityDays || ""
                                                : label === "Time"
                                                    ? formData.availabilityTime || ""
                                                    : formData.availabilityZone || ""
                                        }
                                        onChange={(e) => {
                                            if (label === "Days")
                                                updateValue("availabilityDays", e.target.value);
                                            else if (label === "Time")
                                                updateValue("availabilityTime", e.target.value);
                                            else updateValue("availabilityZone", e.target.value);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </Form.Group>

                    {/* Submit Button */}
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
                            Submit →
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
}