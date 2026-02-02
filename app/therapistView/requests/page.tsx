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
                    <Row className="g-4">
                        {requests.map((request) => (
                            <Col md={6} lg={4} key={request.id}>
                                <Card
                                    className="h-100"
                                    style={cardStyle}
                                >
                                    <Card.Body className="p-4 d-flex flex-column">
                                        <div className="d-flex justify-content-between mb-3">
                                            <div>
                                                <Card.Title className="text-light fs-6 mb-1">
                                                    {request.name}
                                                </Card.Title>
                                                <small className="text-secondary">
                                                    {request.requestDate}
                                                </small>
                                            </div>

                                            <Badge bg="primary">New</Badge>
                                        </div>

                                        <div className="text-secondary small mb-3">
                                            <div>{request.email}</div>
                                            <div>{request.phone}</div>
                                        </div>

                                        <div className="small text-secondary mb-3">
                                            <div>
                                                <strong>Experience:</strong> {request.experience}
                                            </div>
                                            <div>
                                                <strong>Time:</strong> {request.preferredTime}
                                            </div>
                                            <div>
                                                <strong>Days:</strong>{" "}
                                                {request.preferredDays.join(", ")}
                                            </div>
                                        </div>

                                        <div
                                            className="p-3 mb-4 rounded"
                                            style={{
                                                backgroundColor: "#020617",
                                                border: "1px solid #1e293b",
                                                flexGrow: 1,
                                            }}
                                        >
                                            <p className="small text-secondary mb-0">
                                                {request.message}
                                            </p>
                                        </div>

                                        <div className="d-flex gap-2">
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                className="flex-grow-1"
                                                onClick={() => handleDecline(request.id)}
                                            >
                                                Decline
                                            </Button>

                                            <Button
                                                size="sm"
                                                className="flex-grow-1"
                                                style={primaryBtn}
                                                onClick={() => setSelectedRequest(request)}
                                            >
                                                View
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
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