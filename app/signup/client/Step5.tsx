"use client";

import { Form, Button, Container, Card } from "react-bootstrap";
import { ClientFormData } from "./page";

interface Step5Props {
    nextStep: () => void;
    formData: ClientFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClientFormData>>;
}

export default function Step5({ nextStep, formData, setFormData }: Step5Props) {
    // --- helpers ---
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

    const updateValue = (key: string, value: string) =>
        setFormData({ ...formData, [key]: value });

    return (
        <Container
            className="d-flex flex-column align-items-center justify-content-center vh-100"
            style={{ textAlign: "left", maxWidth: "900px" }}
        >
            <Card className="shadow-sm p-4 w-100" style={{ maxWidth: "800px" }}>
                <Card.Body>
                    {/* Title */}
                    <h5 className="fw-semibold text-center mb-4">
                        Client Instructor Preferences
                    </h5>

                    <Form noValidate>
                        {/* Instructor Gender Preference */}
                        <Form.Group className="mb-4">
                            <Form.Label className="fw-normal">
                                Do you prefer an instructor of a specific gender?
                            </Form.Label>
                            <div className="ms-4">
                                <div className="d-flex flex-wrap gap-4">
                                    {["Female", "Male", "Non binary", "No preference"].map(
                                        (label) => (
                                            <div
                                                key={label}
                                                className="d-flex align-items-center gap-2"
                                            >
                                                <span>{label}</span>
                                                <Form.Check
                                                    type="checkbox"
                                                    checked={(formData.genderPref || []).includes(label)}
                                                    onChange={() =>
                                                        toggleArrayValue("genderPref", label)
                                                    }
                                                    style={{ transform: "scale(1.2)" }}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </Form.Group>

                        {/* Instructor Experience */}
                        <Form.Group className="mb-4">
                            <Form.Label className="fw-normal">
                                Would you like an instructor with experience in healthcare or
                                clinical yoga therapy?
                            </Form.Label>
                            <div className="d-inline-flex align-items-center gap-4 ms-4">
                                {["Yes", "No"].map((option) => (
                                    <div key={option}>
                                        <span>{option}</span>{" "}
                                        <Form.Check
                                            type="radio"
                                            name="experience"
                                            inline
                                            checked={formData.experiencePref === option}
                                            onChange={() => updateValue("experiencePref", option)}
                                            style={{ transform: "scale(1.2)" }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Form.Group>

                        {/* Language Preferences */}
                        <Form.Group className="mb-4">
                            <Form.Label className="fw-normal">
                                What is your language preference?
                            </Form.Label>
                            <div className="ms-4">
                                <div className="d-flex flex-wrap gap-4">
                                    {["English", "French"].map((lang) => (
                                        <div
                                            key={lang}
                                            className="d-flex align-items-center gap-2"
                                        >
                                            <span>{lang}</span>
                                            <Form.Check
                                                type="checkbox"
                                                checked={(formData.languagePref || []).includes(lang)}
                                                onChange={() =>
                                                    toggleArrayValue("languagePref", lang)
                                                }
                                                style={{ transform: "scale(1.2)" }}
                                            />
                                        </div>
                                    ))}
                                    <div className="d-flex align-items-center gap-2">
                                        <span>Other</span>
                                        <Form.Control
                                            size="sm"
                                            type="text"
                                            placeholder=""
                                            style={{
                                                border: "none",
                                                borderBottom: "1px solid black",
                                                borderRadius: "0",
                                                width: "180px",
                                            }}
                                            value={formData.otherLanguage || ""}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    otherLanguage: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </Form.Group>

                        {/* Session Format */}
                        <Form.Group className="mb-4">
                            <Form.Label className="fw-normal">
                                What is your preferred session format?
                            </Form.Label>
                            <div className="ms-4">
                                <div className="d-flex flex-wrap gap-4">
                                    {["Online", "In-person", "Hybrid", "Chat-based", "Audio"].map(
                                        (format) => (
                                            <div
                                                key={format}
                                                className="d-flex align-items-center gap-2"
                                            >
                                                <span>{format}</span>
                                                <Form.Check
                                                    type="checkbox"
                                                    checked={(formData.sessionFormat || []).includes(
                                                        format
                                                    )}
                                                    onChange={() =>
                                                        toggleArrayValue("sessionFormat", format)
                                                    }
                                                    style={{ transform: "scale(1.2)" }}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </Form.Group>

                        {/* Availability */}
                        <Form.Group className="mb-5">
                            <Form.Label className="fw-normal">
                                What is the availability for session?
                            </Form.Label>
                            <div className="ms-4">
                                <div
                                    className="d-flex flex-column gap-3"
                                    style={{ maxWidth: "400px" }}
                                >
                                    {["Days", "Time", "Time zone"].map((label) => (
                                        <div
                                            key={label}
                                            className="d-flex align-items-center gap-2"
                                        >
                                            <span>{label}</span>
                                            <Form.Control
                                                size="sm"
                                                type="text"
                                                style={{
                                                    border: "none",
                                                    borderBottom: "1px solid black",
                                                    borderRadius: "0",
                                                    flex: 1,
                                                }}
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
                            </div>
                        </Form.Group>

                        {/* Navigation */}
                        <div className="text-center">
                            <Button variant="secondary" size="sm" onClick={nextStep}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}