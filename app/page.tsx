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
                    backgroundColor: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid #dee2e6",
                }}
            >
                <Container>
                    <Navbar.Brand
                        className="fw-semibold"
                        style={{
                            color: "#212529",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        Yoga Network
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-4">
                            <Nav.Link className="text-muted">About</Nav.Link>
                            <Nav.Link className="text-muted">Services</Nav.Link>
                            <Nav.Link className="text-muted">Contact</Nav.Link>
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
                                                boxShadow: "0 4px 14px rgba(59,130,246,0.2)",
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
                        "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
                    fontFamily: "'Poppins', sans-serif",
                }}
            >
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 className="fw-bold mb-3">
                                A calmer way to heal,
                                <br />
                                <span style={{ color: "#3b82f6" }}>
                                    guided by professionals
                                </span>
                            </h1>

                            <p className="text-muted mb-4" style={{ maxWidth: 520 }}>
                                Yoga Network connects clients, therapists, and physicians in one
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
                                className="border-0 shadow-sm"
                                style={{
                                    backgroundColor: "rgba(255,255,255,0.85)",
                                    backdropFilter: "blur(12px)",
                                    borderRadius: "1rem",
                                    border: "none",
                                    boxShadow:
                                        "0 8px 20px rgba(0,0,0,0.08)",
                                }}
                            >
                                <Card.Body className="p-4">
                                    <h5 className="mb-3">
                                        Why Yoga Network?
                                    </h5>
                                    <ul className="text-muted small ps-3 mb-0">
                                        <li className="mb-2">
                                            Secure collaboration between physicians & therapists
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
                    backgroundColor: "rgba(255,255,255,0.9)",
                    borderTop: "1px solid #dee2e6",
                }}
            >
                <Container className="d-flex flex-column align-items-center gap-3">
                    <div className="d-flex gap-4">
                        <FaInstagram color="#6c757d" />
                        <FaFacebook color="#6c757d" />
                        <FaXTwitter color="#6c757d" />
                        <FaLinkedin color="#6c757d" />
                        <FaYoutube color="#6c757d" />
                    </div>
                    <small className="text-muted">
                        © Yoga Network — All rights reserved
                    </small>
                </Container>
            </footer>
        </>
    );
}