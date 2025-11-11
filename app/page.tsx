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
            <Navbar expand="lg" bg="light" className="py-3 border-bottom">
                <Container>
                    <Navbar.Brand href="#" className="fw-bold d-flex align-items-center">
                        <span className="me-2 fs-4">🧘</span> Yoga Therapy
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-3">
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Services</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                        <div className="d-flex gap-2">
                            <Button
                                variant="outline-secondary"
                                onClick={() => router.push("/signup")}
                            >
                                Sign up
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => router.push("/login")}
                            >
                                Log in
                            </Button>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            <section className="bg-light position-relative py-5">
                <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <div className="text-center text-md-start mb-5 mb-md-0">
                        <h1 className="fw-bold display-5">YOGA THERAPY</h1>
                        <p className="lead mt-3 mb-4">
                            Your journey to balance continues...
                        </p>
                        <Button variant="secondary" size="lg">
                            Learn More
                        </Button>
                    </div>

                    {/* Placeholder for Image / Visuals 
                    <div className="position-relative">
                        <div
                            className="bg-secondary opacity-25 position-absolute"
                            style={{
                                width: "400px",
                                height: "350px",
                                top: "50px",
                                left: "-100px",
                            }}
                        ></div>
                        <div
                            className="bg-dark opacity-50"
                            style={{ width: "300px", height: "400px" }}
                        ></div>
                    </div>
                    */}
                </Container>
            </section>

            {/* Footer */}
            <footer className="bg-light border-top py-4 mt-5">
                <Container className="d-flex justify-content-end gap-4">
                    <a href="#" style={{ color: "black" }}>
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" style={{ color: "black" }}>
                        <FaFacebook size={24} />
                    </a>
                    <a href="#" style={{ color: "black" }}>
                        <FaXTwitter size={24} />
                    </a>
                    <a href="#" style={{ color: "black" }}>
                        <FaLinkedin size={24} />
                    </a>
                    <a href="#" style={{ color: "black" }}>
                        <FaYoutube size={24} />
                    </a>
                </Container>
            </footer>
        </>
    );
}
