'use client';
import "../../therapistStyles.css";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useParams } from "next/navigation";

export default function Calendar() {
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

            <main>
                <div className="text-raleway py-5">
                    Maybe use react big calendar.
                </div>
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
    )
}