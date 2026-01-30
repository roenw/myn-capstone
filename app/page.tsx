"use client";

import { useRouter } from "next/navigation";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import {
    FaInstagram,
    FaFacebook,
    FaXTwitter,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa6";

export default function HomePage() {
    const router = useRouter();

    return (
        <>
            {/* Navbar */}
            <Navbar
                expand="lg"
                className="py-3"
                style={{
                    background: "linear-gradient(to right, #8ee7f1, #6bc9f5)",
                }}
            >
                <Container>
                    <Navbar.Brand
                        href="#"
                        className="fw-bold d-flex align-items-center"
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            color: "#0a0a0a",
                            fontSize: "1.4rem",
                        }}
                    >
                        <span className="me-2 fs-4">🧘‍♀️</span> Yoga Therapy
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-end align-items-center"
                    >
                        <Nav className="me-4 fw-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            <Nav.Link href="#" className="text-dark me-2">
                                About
                            </Nav.Link>
                            <Nav.Link href="#" className="text-dark me-2">
                                Services
                            </Nav.Link>
                            <Nav.Link href="#" className="text-dark">
                                Contact
                            </Nav.Link>
                        </Nav>

                        <div className="d-flex gap-2">
                            <Button
                                type="button"
                                className="rounded-pill fw-semibold px-4"
                                style={{
                                    backgroundColor: "white",
                                    border: "2px solid #6bc9f5",
                                    color: "#0a0a0a",
                                }}
                                onClick={() => router.push("/signup")}
                            >
                                Sign Up
                            </Button>
                            <Button
                                type="button"
                                className="rounded-pill fw-semibold px-4"
                                style={{
                                    backgroundColor: "#6bc9f5",
                                    border: "none",
                                    color: "white",
                                }}
                                onClick={() => router.push("/login")}
                            >
                                Log In
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            <section
                className="d-flex flex-column justify-content-center align-items-center text-center"
                style={{
                    background: "linear-gradient(to bottom right, #f8f9fa, #e3f6fb)",
                    minHeight: "85vh",
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <h1
                    className="fw-bold display-5 mb-3"
                    style={{
                        color: "#0a0a0a",
                        letterSpacing: "1px",
                    }}
                >
                    Welcome to <span style={{ color: "#6bc9f5" }}>Yoga Therapy</span>
                </h1>

                <p className="lead mb-4" style={{ maxWidth: "600px", color: "#333" }}>
                    Find balance, clarity, and strength through guided wellness practices.
                    Join our network of clients, instructors, and physicians working together
                    for holistic well-being.
                </p>

                <Button
                    type="button"
                    className="rounded-pill fw-semibold px-5 py-2"
                    style={{
                        backgroundColor: "#6bc9f5",
                        border: "none",
                        fontSize: "1.1rem",
                    }}
                    onClick={() => router.push("/signup")}
                >
                    Get Started →
                </Button>
            </section>

            {/* Footer */}
            <footer
                className="py-4"
                style={{
                    backgroundColor: "white",
                    borderTop: "2px solid #dbe9ee",
                }}
            >
                <Container className="d-flex justify-content-center gap-4">
                    <a href="#" style={{ color: "#0a0a0a" }}>
                        <FaInstagram size={22} />
                    </a>
                    <a href="#" style={{ color: "#0a0a0a" }}>
                        <FaFacebook size={22} />
                    </a>
                    <a href="#" style={{ color: "#0a0a0a" }}>
                        <FaXTwitter size={22} />
                    </a>
                    <a href="#" style={{ color: "#0a0a0a" }}>
                        <FaLinkedin size={22} />
                    </a>
                    <a href="#" style={{ color: "#0a0a0a" }}>
                        <FaYoutube size={22} />
                    </a>
                </Container>
            </footer>
        </>
    );
}