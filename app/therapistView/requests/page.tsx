"use client";

import { useState, useEffect } from "react";
import {
    Navbar,
    Nav,
    Container,
    Button,
    Modal,
    Card,
    Row,
    Col,
    Badge,
} from "react-bootstrap";

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
    const [selectedRequest, setSelectedRequest] =
        useState<Request | null>(null);

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
        setRequests(requests.filter((r) => r.id !== id));
        setSelectedRequest(null);
    };

    const handleDecline = (id: number) => {
        setRequests(requests.filter((r) => r.id !== id));
        setSelectedRequest(null);
    };

    return (
        <>
            {/* Navbar */}
            <Navbar
                expand="lg"
                className="border-bottom"
                style={{
                    backgroundColor: "#020617",
                    borderColor: "#1e293b",
                }}
            >
                <Container fluid className="px-5">
                    <Navbar.Brand style={{ color: "#e5e7eb", fontWeight: 600 }}>
                        Yoga Network
                    </Navbar.Brand>

                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="gap-4">
                            <Nav.Link href="/therapistView/patients" style={navLink}>
                                Patients
                            </Nav.Link>
                            <Nav.Link
                                href="/therapistView/requests"
                                style={{ ...navLink, color: "#3b82f6" }}
                            >
                                Requests
                            </Nav.Link>
                            <Nav.Link href="/therapistView/calendar" style={navLink}>
                                Calendar
                            </Nav.Link>
                        </Nav>

                        <Nav.Link className="ms-4" style={{ color: "#cbd5f5" }}>
                            <i className="bi bi-person-circle fs-4" />
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Main */}
            <main
                className="py-5"
                style={{ minHeight: "100vh", backgroundColor: "#020617" }}
            >
                <Container style={{ maxWidth: "1200px" }}>
                    {/* Header */}
                    <div className="text-center mb-5">
                        <h1 className="text-light fw-semibold mb-2">
                            Patient requests
                        </h1>
                        <p className="text-secondary">
                            {requests.length} pending{" "}
                            {requests.length === 1 ? "request" : "requests"}
                        </p>
                    </div>

                    {/* Requests grid */}
                    {/* Requests list */}
                    <div className="d-flex flex-column gap-3">
                        {requests.map((request) => (
                            <Card
                                key={request.id}
                                style={{
                                    backgroundColor: "rgba(15,23,42,0.75)",
                                    border: "1px solid #1e293b",
                                    borderRadius: "1rem",
                                }}
                            >
                                <Card.Body className="px-4 py-3">
                                    <Row className="align-items-center g-3">
                                        {/* Name + date */}
                                        <Col md={3}>
                                            <div className="text-light fw-semibold">
                                                {request.name}
                                            </div>
                                            <div className="text-secondary small">
                                                {request.requestDate}
                                            </div>
                                        </Col>

                                        {/* Contact */}
                                        <Col md={3} className="small text-secondary">
                                            <div>{request.email}</div>
                                            <div>{request.phone}</div>
                                        </Col>

                                        {/* Preferences */}
                                        <Col md={3} className="small text-secondary">
                                            <div>
                                                <strong>Exp:</strong> {request.experience}
                                            </div>
                                            <div>
                                                <strong>Time:</strong> {request.preferredTime}
                                            </div>
                                            <div>
                                                <strong>Days:</strong>{" "}
                                                {request.preferredDays.join(", ")}
                                            </div>
                                        </Col>

                                        {/* Status */}
                                        <Col md={1} className="text-center">
                                            <Badge bg="primary">New</Badge>
                                        </Col>

                                        {/* Actions */}
                                        <Col md={2} className="d-flex gap-2">
                                            <Button
                                                size="sm"
                                                variant="outline-secondary"
                                                className="w-100"
                                                onClick={() => handleDecline(request.id)}
                                            >
                                                Decline
                                            </Button>
                                            <Button
                                                size="sm"
                                                className="w-100"
                                                style={primaryBtn}
                                                onClick={() => setSelectedRequest(request)}
                                            >
                                                View
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </main>

            {/* Modal */}
            <Modal
                show={!!selectedRequest}
                onHide={() => setSelectedRequest(null)}
                centered
                size="lg"
            >
                {selectedRequest && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedRequest.name}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p><strong>Email:</strong> {selectedRequest.email}</p>
                            <p><strong>Phone:</strong> {selectedRequest.phone}</p>

                            <hr />

                            <p><strong>Experience:</strong> {selectedRequest.experience}</p>
                            <p><strong>Time:</strong> {selectedRequest.preferredTime}</p>
                            <p><strong>Days:</strong> {selectedRequest.preferredDays.join(", ")}</p>

                            <hr />

                            <p>{selectedRequest.message}</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button
                                variant="outline-secondary"
                                onClick={() => handleDecline(selectedRequest.id)}
                            >
                                Decline
                            </Button>

                            <Button
                                style={primaryBtn}
                                onClick={() => handleAccept(selectedRequest.id)}
                            >
                                Accept
                            </Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </>
    );
}

/* ---------- styles ---------- */

const navLink = {
    color: "#cbd5f5",
};

const cardStyle = {
    backgroundColor: "rgba(15,23,42,0.75)",
    border: "1px solid #1e293b",
};

const primaryBtn = {
    backgroundColor: "#3b82f6",
    border: "none",
};