"use client";

import { Form, Button, Card, Container } from "react-bootstrap";
import { ClientFormData } from "./page";

interface Step1Props {
    nextStep: () => void;
    formData: ClientFormData;
    setFormData: React.Dispatch<React.SetStateAction<ClientFormData>>;
}

export default function Step1({ nextStep, formData, setFormData }: Step1Props) {
    return (
        <Container
            className="py-4 d-flex justify-content-center"
            style={{
                minHeight: "100vh",
                overflowY: "auto",
            }}
        >
            <Card
                className="shadow-sm my-4"
                style={{
                    maxWidth: 520,
                    width: "100%",
                }}
            >
                <Card.Body className="p-4">
                    <h5 className="mb-3 fw-semibold text-center">
                        Client's General Information
                    </h5>

                    <Form noValidate>
                        {/* --- General Information --- */}
                        <Form.Group className="mb-3">
                            <Form.Label>
                                First name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                size="sm"
                                required
                                value={formData.firstName || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, firstName: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Last name <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                size="sm"
                                required
                                value={formData.lastName || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, lastName: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Preferred Name / Pronouns</Form.Label>
                            <Form.Control
                                size="sm"
                                value={formData.preferredName || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, preferredName: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Date of Birth <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                size="sm"
                                type="date"
                                required
                                value={formData.dob || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, dob: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Contact Email <span className="text-danger">*</span>
                            </Form.Label>
                            <Form.Control
                                size="sm"
                                type="email"
                                required
                                value={formData.email || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                size="sm"
                                type="tel"
                                value={formData.phone || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Location{" "}
                                <span className="text-muted">(City, Country, Time Zone)</span>
                            </Form.Label>
                            <Form.Control
                                size="sm"
                                placeholder="City, Country, Time Zone"
                                value={formData.location || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, location: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Where did you hear about us?</Form.Label>
                            <Form.Control
                                size="sm"
                                value={formData.referral || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, referral: e.target.value })
                                }
                            />
                        </Form.Group>

                        {/* --- Divider --- */}
                        <hr className="my-4" />

                        {/* --- Create Login Section --- */}
                        <h6 className="fw-semibold text-center mb-3">Create a Login</h6>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter a username"
                                required
                                value={formData.username || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, username: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 text-start">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                required
                                value={formData.password || ""}
                                onChange={(e) =>
                                    setFormData({ ...formData, password: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group className="mb-4 text-start">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Re-enter password"
                                required
                                value={formData.confirmPassword || ""}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        confirmPassword: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>

                        {/* --- Navigation --- */}
                        <div className="d-flex justify-content-end mt-3">
                            <Button
                                type="button"
                                variant="secondary"
                                size="sm"
                                onClick={nextStep}
                            >
                                Next
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}
