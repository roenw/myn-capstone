"use client";

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Modal, Card, Row, Col, Badge } from 'react-bootstrap';
import { useParams, useRouter } from 'next/navigation';
import "../../../../physicianView/physicianStyles.css";

interface Patients {
    id: string;
    name: string;
    dob: string;
    img: string;
    symptoms: string;
    conditions: string;
    nextMeetingDate: string;
    CurrentYogaPlan: string;
}

export default function physiciansPatientView() {
    const [patients, setPatients] = useState<Patients[]>([
        { id: "1", name: 'John Doe', dob: '01/01/1980', symptoms: 'Back pain', conditions: 'Arthritis', img: '/exDude1.jpg', nextMeetingDate: '11/24/25', CurrentYogaPlan: 'Plan A' },
        { id: "2", name: 'Jane Smith', dob: '02/02/1990', symptoms: 'Neck pain', conditions: 'Migraine', img: '/exDude2.jpg', nextMeetingDate: '12/24/25', CurrentYogaPlan: 'Plan B' },
        { id: "3", name: 'Alice Johnson', dob: '03/03/1975', symptoms: 'Hip pain', conditions: 'Osteoporosis', img: '/exDude3.jpg', nextMeetingDate: '12/24/25', CurrentYogaPlan: 'Plan C' },
    ]);
    const router = useRouter();
    const { physicianID, patientID } = useParams();
    const patient = patients.find(p => p.id === patientID);
    return (
        <>
            <Navbar expand="lg" className="py-4 text-raleway" bg="light" data-bs-theme="light">
                <Container fluid className="mx-5">
                    <Navbar.Brand href={`/physicianView/${physicianID}`}>My Yoga Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent" className="justify-content-end">
                        <Nav className="mb-lg-0 mt-1">
                            <Nav.Link href="/physicianView/patients">Messages</Nav.Link>
                            <Nav.Link href="/physicianView/requests"></Nav.Link>
                            <Nav.Link href="/physicianView/calendar" className="me-5"></Nav.Link>
                        </Nav>
                        <Nav.Link href="#" className="">
                            <i className="bi bi-person-circle fs-3"></i>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main className="" style={{
                minHeight: '100vh',
                maxWidth: "100vw",
                background: "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
            }}>
                <Container className="py-4">
                    <h1 className="">Patient Details</h1>
                </Container>
                <Container className="text-railway">
                    <Row className="">
                        <Col md={3} className="d-flex flex-column">
                            <Card className="rounded-3" style={{
                                backgroundColor: "rgba(255,255,255,1)",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            }}>
                                <Card.Body>
                                    
                                    <Card.Title className="py-2">{patient?.name}</Card.Title>
                                    <Card.Text>DOB: {patient?.dob}</Card.Text>
                                    <Card.Text>Symptoms: {patient?.symptoms}</Card.Text>
                                    <Card.Text>Conditions: {patient?.conditions}</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="rounded-3 mt-3 flex-grow-1" style={{
                                backgroundColor: "rgba(255,255,255,1)",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            }}>
                                <Card.Body>
                                    <Card.Title>Current Therapist</Card.Title>
                                    <Card.Text>Elaine Smith</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <SessionList />
                        </Col>
                    </Row>
                </Container>

            </main>
            <footer className="py-5 text-raleway mt-f" style={{ backgroundColor: '#ffffffff' }} >
                <Container className="text-dark text-center">
                    <p className="display-5 mb-3">Yoga Network</p>
                    <small className="text-dark-50">&copy; contact info</small>
                </Container>
            </footer>
        </>
    )
}

export function SessionList() {
    const [sessions, setSessions] = useState([
        { id: 1, date: '11/16/2025', therapist: 'Elaine Smith', notes: 'Patient reported improvement in back pain after yoga sessions. Increased flexibility observed.', viewed: false },
        { id: 2, date: '11/11/2025', therapist: 'Jackie Robbins', notes: 'Patient mentioned mild neck discomfort after trying new poses. Advised to modify routine.', viewed: false },
        { id: 3, date: '11/09/2025', therapist: 'Jackie Robbins', notes: 'Patient reported improvement in flexibility and reduced back pain.', viewed: true },
        { id: 4, date: '11/05/2025', therapist: 'Jackie Robbins', notes: 'Patient showed significant improvement in posture and reduced pain levels.', viewed: true },
    ]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedSession, setSelectedSession] = useState(sessions[0]);

    return (
        <Container className="rounded-2 p-3 h-100" style={{
            backgroundColor: "rgba(255,255,255,1)",
            border: "1px solid rgba(0, 0, 0, 0.15)",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}>
            <h4 className="fs-3">Sessions</h4> 
            <div className="fs-6 text-muted">Review patient sessions</div>

            <div className="px-1 my-2 mt-3 py-1 rounded-2" style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.1)"}}>
                <Row className="px-3">
                    <Col md={8} className="">Session Date</Col>
                    <Col className="">Therapist</Col>
                </Row>
            </div>
            <div className="px-3">
                {sessions.map(session => (
                    <div key={session.id}>
                        {session.viewed ?
                            <Row className="py-2 patient-row rounded-3" onClick={() => { setSelectedSession(session); handleShow(); }}>
                                <Col md={8} className="d-flex gap-3">
                                    <span className="align-self-center"
                                        style={{
                                            width: "8px",
                                            height: "8px",
                                            borderColor: "#0d6efd",
                                            backgroundColor: "#ffffff",
                                            borderWidth: "1px",
                                            borderRadius: "50%",
                                            display: "inline-block",
                                        }}
                                    />
                                    <p className="fw-normal mb-0">{new Date(session.date).toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric', 
                                                year: 'numeric' 
                                            })}</p>
                                </Col>
                                <Col className="d-flex gap-3">
                                    <div className="rounded-5 text-nowrap">
                                        {session.therapist}
                                    </div>
                                </Col>
                            </Row>
                            :
                            <Row className="py-2 patient-row rounded-3" onClick={() => { setSelectedSession(session); handleShow(); }}>
                                <Col md={8} className="d-flex gap-3">
                                    <span className="align-self-center"
                                        style={{
                                            width: "8px",
                                            height: "8px",
                                            backgroundColor: "#0d6efd",
                                            borderRadius: "50%",
                                            display: "inline-block",
                                        }}
                                    />
                                    <p className="fw-normal mb-0">{new Date(session.date).toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric', 
                                                year: 'numeric' 
                                            })}</p>
                                </Col>
                                <Col className="d-flex text-nowrap">
                                    <div className="">
                                        {session.therapist}
                                    </div>
                                </Col>
                            </Row>
                        }

                    </div>
                ))}
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <div className="d-flex gap-3 justify-content-between">
                        <Modal.Title>Session Notes</Modal.Title>
                        {!selectedSession.viewed && <Badge bg="warning align-self-center">New</Badge>}
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <p>{selectedSession.notes}</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-between">
                    <Button variant="primary">Message Therapist</Button>
                    <Button variant="secondary" onClick={() => {
                        handleClose(); 
                        setSessions(prev => 
                            prev.map(s => s.id === selectedSession.id
                                ? { ...s, viewed: true}
                                : s
                            )); }}
                        >Mark Viewed</Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}