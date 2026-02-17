"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Navbar, Nav, NavDropdown, Button, Row, Col, Card } from "react-bootstrap";
import {
    FaInstagram,
    FaFacebook,
    FaXTwitter,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa6";

export default function HomePage() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in
        fetch('/api/user/profile')
            .then(res => {
                if (res.ok) return res.json();
                throw new Error('Not authenticated');
            })
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(() => {
                setUser(null);
                setLoading(false);
            });
    }, []);

    return (
        <>
            {/* ---------- NAVBAR ---------- */}
            <Navbar
                expand="lg"
                className="py-3"
                style={{
                    backgroundColor: "#020617", // slate-950
                    borderBottom: "1px solid #1e293b",
                }}
            >
                <Container>
                    <Navbar.Brand
                        className="fw-semibold"
                        style={{
                            color: "#e5e7eb",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        Yoga Network
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-4">
                            <Nav.Link className="text-secondary">About</Nav.Link>
                            <Nav.Link className="text-secondary">Services</Nav.Link>
                            <Nav.Link className="text-secondary">Contact</Nav.Link>
                        </Nav>

                        {!loading && (
                            <>
                                {user ? (
                                    // Show user dropdown when logged in
                                    <div className="d-flex gap-2 align-items-center">
                                        <Button
                                            className="rounded-pill px-4"
                                            style={{
                                                backgroundColor: "#3b82f6",
                                                border: "none",
                                            }}
                                            onClick={() => router.push("/auth/determine-route")}
                                        >
                                            Dashboard
                                        </Button>
                                        <NavDropdown
                                            title={
                                                <span style={{ color: "#e5e7eb" }}>
                                                    {user.firstName} {user.lastName}
                                                </span>
                                            }
                                            id="user-dropdown"
                                            align="end"
                                        >
                                            <NavDropdown.Item href="/auth/logout">
                                                Log Out
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </div>
                                ) : (
                                    // Show login/signup buttons when not logged in
                                    <div className="d-flex gap-2">
                                        <Button
                                            variant="outline-secondary"
                                            className="rounded-pill px-4"
                                            onClick={() => window.location.href = '/auth/login'}
                                        >
                                            Log In
                                        </Button>
                                        <Button
                                            className="rounded-pill px-4"
                                            style={{
                                                backgroundColor: "#3b82f6",
                                                border: "none",
                                            }}
                                            onClick={() => router.push("/signup")}
                                        >
                                            Get Started
                                        </Button>
                                    </div>
                                )}
                            </>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ---------- HERO ---------- */}
            <section
                className="d-flex align-items-center"
                style={{
                    minHeight: "85vh",
                    background:
                        "radial-gradient(circle at top, #020617 40%, #020617 100%)",
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="fw-bold mb-3 text-light">
                                A calmer way to heal,
                                <br />
                                <span style={{ color: "#3b82f6" }}>
                                    guided by professionals
                                </span>
                            </h1>

                            <p className="text-secondary mb-4" style={{ maxWidth: 520 }}>
                                Yoga Network connects clients, instructors, and physicians in one
                                secure, collaborative wellness platform designed for real care.
                            </p>

                            {!loading && (
                                <div className="d-flex gap-3">
                                    {user ? (
                                        // Show dashboard button when logged in
                                        <Button
                                            className="rounded-pill px-5"
                                            style={{
                                                backgroundColor: "#3b82f6",
                                                border: "none",
                                                boxShadow: "0 0 20px rgba(59,130,246,0.35)",
                                            }}
                                            onClick={() => router.push("/auth/determine-route")}
                                        >
                                            Go to Dashboard →
                                        </Button>
                                    ) : (
                                        // Show signup/login when not logged in
                                        <>
                                            <Button
                                                className="rounded-pill px-5"
                                                style={{
                                                    backgroundColor: "#3b82f6",
                                                    border: "none",
                                                    boxShadow: "0 0 20px rgba(59,130,246,0.35)",
                                                }}
                                                onClick={() => router.push("/signup")}
                                            >
                                                Create Account →
                                            </Button>
                                            <Button
                                                variant="outline-secondary"
                                                className="rounded-pill px-4"
                                                onClick={() => window.location.href = '/auth/login'}
                                            >
                                                Log In
                                            </Button>
                                        </>
                                    )}
                                </div>
                            )}
                        </Col>

                        {/* Right Side Feature Card */}
                        <Col md={6} className="mt-5 mt-md-0">
                            <Card
                                className="border-0 shadow-lg"
                                style={{
                                    backgroundColor: "rgba(15, 23, 42, 0.7)",
                                    backdropFilter: "blur(12px)",
                                    borderRadius: "1rem",
                                    border: "1px solid #1e293b",
                                }}
                            >
                                <Card.Body className="p-4">
                                    <h5 className="text-light mb-3">
                                        Why Yoga Network?
                                    </h5>
                                    <ul className="text-secondary small ps-3 mb-0">
                                        <li className="mb-2">
                                            Secure collaboration between physicians & instructors
                                        </li>
                                        <li className="mb-2">
                                            Personalized therapy-focused yoga plans
                                        </li>
                                        <li className="mb-2">
                                            Designed for long-term wellness, not trends
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* ---------- FOOTER ---------- */}
            <footer
                className="py-4"
                style={{
                    backgroundColor: "#020617",
                    borderTop: "1px solid #1e293b",
                }}
            >
                <Container className="d-flex flex-column align-items-center gap-3">
                    <div className="d-flex gap-4">
                        <FaInstagram color="#94a3b8" />
                        <FaFacebook color="#94a3b8" />
                        <FaXTwitter color="#94a3b8" />
                        <FaLinkedin color="#94a3b8" />
                        <FaYoutube color="#94a3b8" />
                    </div>
                    <small className="text-secondary">
                        © Yoga Network — All rights reserved
                    </small>
                </Container>
            </footer>
        </>
    );
}