"use client";
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Modal, Card, Row, Col, Badge } from 'react-bootstrap';
import "../therapistStyles.css";

interface Request {
    id: number;
    name: string;
    email: string;
    phone: string;
    requestDate: string;
    message: string;
    preferredDays: string[];
    preferredTime: string;
    experience: string;
    status: "pending" | "accepted" | "declined";
}

export default function RequestsPage() {
    const [requests, setRequests] = useState<Request[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

    useEffect(() => {
        async function loadRequests() {
            try {
                const res = await fetch("/api/therapist-view/patient-requests");
                if (!res.ok) throw new Error("Failed to fetch requests");
                const data = await res.json();
                setRequests(data);
            } catch (error) {
                console.error("Error loading requests:", error);
            } finally {
                setLoading(false);
            }
        }

        loadRequests();
    }, []);

    const handleAccept = (id: number) => {
        setRequests(requests.filter(req => req.id !== id));
        setSelectedRequest(null); // closes the modal
    };

    const handleDecline = (id: number) => {
        setRequests(requests.filter(req => req.id !== id));
        setSelectedRequest(null); // closes the modal
    };

    return (
        <>
            <Navbar expand="lg" className="py-4 text-raleway" bg="light" data-bs-theme="light">
                <Container fluid className="mx-5">
                    <Navbar.Brand href="/therapistView">Yoga Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent" className="justify-content-end">
                        <Nav className="mb-lg-0 mt-1">
                            <Nav.Link href="/therapistView/patients">Patients</Nav.Link>
                            <Nav.Link href="/therapistView/requests" active>Requests</Nav.Link>
                            <Nav.Link href="/therapistView/calendar" className="me-5">Calendar</Nav.Link>
                        </Nav>
                        <Nav.Link href="#" className="">
                            <i className="bi bi-person-circle fs-3"></i>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid className="py-5" style={{ 
                maxWidth:"100vw", minHeight: "100vh", background: "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)"}}>
                <div className="text-center mb-4">
                    <h1 className="display-4 fw-semibold mb-2">New Patient Requests</h1>
                    <p className="fs-5 text-muted">
                        {requests.length} pending {requests.length === 1 ? 'request' : 'requests'}
                    </p>
                </div>

                <Row className="g-4" style={{maxWidth: "1400px", margin: "0 auto", padding: "0 1rem"}}>
                    {requests.map(request => (
                        <Col md={6} lg={4} key={request.id}>
                            <Card
                                className="h-100 border-0 shadow-sm"
                                style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                                    backdropFilter: "blur(10px)",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-5px)";
                                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "";
                                }}
                            >
                                <Card.Body className="p-4">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <Card.Title className="fw-bold mb-1">{request.name}</Card.Title>
                                            <small className="text-muted">
                                                <i className="bi bi-calendar3 me-1"></i>{request.requestDate}
                                            </small>
                                        </div>
                                        <Badge bg="warning" text="dark" className="px-3 py-2">New</Badge>
                                    </div>

                                    <div className="mb-3 small">
                                        <p><i className="bi bi-envelope me-2 text-muted"></i>{request.email}</p>
                                        <p><i className="bi bi-telephone me-2 text-muted"></i>{request.phone}</p>
                                    </div>

                                    <div className="mb-3 small">
                                        <p><strong>Experience:</strong> {request.experience}</p>
                                        <p><strong>Preferred Time:</strong> {request.preferredTime}</p>
                                        <p><strong>Days:</strong> {request.preferredDays.join(", ")}</p>
                                    </div>

                                    <div className="p-3 mb-3 rounded" style={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}>
                                        <p className="mb-0 small text-muted" style={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            display: "-webkit-box",
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: "vertical"
                                        }}>
                                            "{request.message}"
                                        </p>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <Button variant="outline-secondary" size="sm" className="flex-grow-1" onClick={() => handleDecline(request.id)}>
                                            Decline
                                        </Button>
                                        <Button variant="primary" size="sm" className="flex-grow-1" onClick={() => setSelectedRequest(request)}>
                                            View Details
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>


            <footer className="py-5 text-raleway mt-f" style={{ backgroundColor: "#ffffffff" }}>
                <Container className="text-dark text-center">
                    <p className="display-5 mb-3">Yoga Network</p>
                    <small className="text-dark-50">&copy; contact info</small>
                </Container>
            </footer>


            {/* Modal */}

            <Modal show={!!selectedRequest} onHide={() => setSelectedRequest(null)} centered size="lg">
                {selectedRequest && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedRequest.name}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <h6 className="fw-semibold mb-3">Contact Information</h6>
                            <p><strong>Email:</strong> {selectedRequest.email}</p>
                            <p><strong>Phone:</strong> {selectedRequest.phone}</p>

                            <h6 className="fw-semibold mt-4 mb-3">Preferences</h6>
                            <p><strong>Experience:</strong> {selectedRequest.experience}</p>
                            <p><strong>Preferred Time:</strong> {selectedRequest.preferredTime}</p>
                            <p><strong>Days:</strong> {selectedRequest.preferredDays.join(", ")}</p>

                            <h6 className="fw-semibold mt-4 mb-3">Message</h6>
                            <p>{selectedRequest.message}</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="outline-secondary" onClick={() => handleDecline(selectedRequest.id)}>
                                Decline
                            </Button>
                            <Button variant="success" onClick={() => handleAccept(selectedRequest.id)}>
                                <i className="bi bi-check-lg me-2"></i>Accept Request
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>


        </>
    )
}