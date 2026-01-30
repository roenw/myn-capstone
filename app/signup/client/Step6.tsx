"use client";

import { Button, Card } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function Step6() {
    const router = useRouter();

    return (
        <div
            className="d-flex justify-content-center align-items-center min-vh-100 text-center"
            style={{
                background: "linear-gradient(to bottom right, #8ee7f1, #6bc9f5)",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <Card
                className="shadow-lg p-5"
                style={{
                    width: "100%",
                    maxWidth: 600,
                    borderRadius: "20px",
                    backgroundColor: "white",
                    border: "none",
                }}
            >
                {/* Heading */}
                <h2 className="fw-bold mb-3" style={{ color: "#0a0a0a" }}>
                    Congratulations!
                </h2>

                {/* Subtext */}
                <p
                    className="text-muted mb-5"
                    style={{ fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto" }}
                >
                    All your information has been successfully received.
                    A confirmation will be sent to your email shortly.
                </p>

                {/* Go to Dashboard button */}
                <Button
                    type="button"
                    className="rounded-pill fw-semibold"
                    style={{
                        backgroundColor: "#6bc9f5",
                        border: "none",
                        padding: "12px 36px",
                        fontSize: "1rem",
                    }}
                    onClick={() => router.push("/")}
                >
                    Go to Dashboard →
                </Button>
            </Card>
        </div>
    );
}