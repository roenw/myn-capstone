"use client";

import { Button, Card } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();

    return (
        <div
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{
                background: "linear-gradient(to bottom right, #8ee7f1, #6bc9f5)",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <Card
                className="shadow-lg p-5 text-center"
                style={{
                    width: "100%",
                    maxWidth: 500,
                    borderRadius: "20px",
                    backgroundColor: "white",
                    border: "none",
                }}
            >
                <h2 className="fw-bold mb-4" style={{ color: "#0a0a0a" }}>
                    Select Your Account Type
                </h2>

                <div className="d-flex flex-column gap-3 mt-4">
                    <Button
                        type="button"
                        className="rounded-pill fw-semibold"
                        style={{
                            backgroundColor: "#6bc9f5",
                            border: "none",
                            padding: "12px 0",
                            fontSize: "1rem",
                        }}
                        onClick={() => router.push("/signup/client")}
                    >
                        Client
                    </Button>

                    <Button
                        type="button"
                        className="rounded-pill fw-semibold"
                        style={{
                            backgroundColor: "#6bc9f5",
                            border: "none",
                            padding: "12px 0",
                            fontSize: "1rem",
                        }}
                        onClick={() => router.push("/signup/instructor")}
                    >
                        Instructor
                    </Button>

                    <Button
                        type="button"
                        className="rounded-pill fw-semibold"
                        style={{
                            backgroundColor: "#6bc9f5",
                            border: "none",
                            padding: "12px 0",
                            fontSize: "1rem",
                        }}
                        onClick={() => router.push("/signup/physician")}
                    >
                        Physician
                    </Button>
                </div>
            </Card>
        </div>
    );
}