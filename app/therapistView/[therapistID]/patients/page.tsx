"use client";
import Image from "next/image";
import { Container, Nav, Navbar, NavDropdown, Button, Card } from "react-bootstrap";
import "../../therapistStyles.css";
import { useParams } from "next/navigation";

export default function Patients() {
    const { therapistID } = useParams();
    return (
        <>
            <Navbar expand="lg" className="py-4 text-raleway" bg="light" data-bs-theme="light">
                <Container fluid className="mx-5">
                    <Navbar.Brand href={`/therapistView/${therapistID}`}>My Yoga Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent" className="justify-content-end">
                        <Nav className="mb-lg-0 mt-1">
                            <Nav.Link href={`/therapistView/${therapistID}/patients`}>Patients</Nav.Link>
                            <Nav.Link href={`/therapistView/${therapistID}/requests`}>Requests</Nav.Link>
                            <Nav.Link href={`/therapistView/${therapistID}/calendar`} className="me-5">Calendar</Nav.Link>
                        </Nav>
                        <Nav.Link href="#" className="">
                            <i className="bi bi-person-circle fs-3"></i>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main
                className="pt-5 mx-auto"
                style={{
                    minHeight: "100vh",

                    background: "linear-gradient(to bottom, #94f1f1ff, #5fc3fdff)",
                }}
            >
                <Container className="text-raleway fw-semibold display-4 mb-4">
                    Your Current Patients:
                </Container>

                <Container>
                    <div className="pretty-scroll d-flex gap-4 flex-row overflow-auto">
                        <Card
                            className="text-raleway flex-shrink-0"
                            style={{ width: "18rem" }}
                        >
                            <Image
                                src="/exDude1.jpg"
                                alt="profileimg"
                                width={288}
                                height={280}
                                className="card-img-top"
                                style={{ objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Title>George Yousefson</Card.Title>
                                <Card.Text>Current Yoga Plan</Card.Text>
                                <Card.Text>Next Meeting Date: 11/24/25</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            className="text-raleway flex-shrink-0"
                            style={{ width: "18rem" }}
                        >
                            <Image
                                src="/exDude2.jpg"
                                alt="profileimg"
                                width={288}
                                height={280}
                                className="card-img-top"
                                style={{ objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Title>Alicia Shells</Card.Title>
                                <Card.Text>Current Yoga Plan</Card.Text>
                                <Card.Text>Next Meeting Date: 12/24/25</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card
                            className="text-raleway flex-shrink-0"
                            style={{ width: "18rem" }}
                        >
                            <Image
                                src="/exDude3.jpg"
                                alt="profileimg"
                                width={288}
                                height={280}
                                className="card-img-top"
                                style={{ objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Title>Jennifer Bells</Card.Title>
                                <Card.Text>Current Yoga Plan</Card.Text>
                                <Card.Text>Next Meeting Date: 12/24/25</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </main>
            <footer
                className="py-5 text-raleway mt-f"
                style={{ backgroundColor: "#ffffffff" }}
            >
                <Container className="text-dark text-center">
                    <p className="display-5 mb-3">Yoga Network</p>
                    <small className="text-dark-50">&copy; contact info</small>
                </Container>
            </footer>
        </>
    );
}
