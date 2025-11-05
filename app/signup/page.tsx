"use client";

import { Container, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h2 className="mb-5 text-center">Select Your Account Type</h2>

            <div className="d-flex flex-column gap-3 w-100" style={{ maxWidth: "300px" }}>
                <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => router.push("/signup/client")}
                >
                    Client
                </Button>

                <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => router.push("/signup/instructor")}
                >
                    Instructor
                </Button>

                <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => router.push("/signup/physician")}
                >
                    Physician
                </Button>
            </div>
        </Container>
    );
}