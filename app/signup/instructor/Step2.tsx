"use client";

import { useRouter } from "next/navigation";
import { Button, Container } from "react-bootstrap";

export default function Step2() {
    const router = useRouter();

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <h3 className="fw-semibold mb-4" style={{ color: "red" }}>
                Congratulations
            </h3>

            <p className="text-muted mb-5" style={{ fontSize: "1.1rem" }}>
                All the information has been received and will be shared with you via email.
            </p>

            <Button
                variant="secondary"
                size="lg"
                className="px-5 py-2"
                onClick={() => router.push("/")}
            >
                Dashboard
            </Button>
        </Container>
    );
}