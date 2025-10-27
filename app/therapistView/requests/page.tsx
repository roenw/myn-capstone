"use client";
import React, { useState } from 'react';
import "../therapistStyles.css";
import { Modal } from 'bootstrap';

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
}

export default function RequestsPage() {
    const [requests, setRequests] = useState<Request[]>([
        {
            id: 1,
            name: "Lily Shwartz",
            email: "lily.shwartz@email.com",
            phone: "(555) 123-4567",
            requestDate: "10/12/2025",
            message:
                "Hi! I'm interested in starting yoga therapy for anxiety and stress management. I've tried yoga before but would love guidance from a professional.",
            preferredDays: ["Monday", "Wednesday"],
            preferredTime: "Evening (5-7pm)",
            experience: "Beginner",
        },
        {
            id: 2,
            name: "Marcus Thompson",
            email: "m.thompson@email.com",
            phone: "(555) 234-5678",
            requestDate: "10/13/2025",
            message:
                "Looking for yoga therapy to help with lower back pain. My doctor recommended it as part of my recovery plan.",
            preferredDays: ["Tuesday", "Thursday"],
            preferredTime: "Morning (9-11am)",
            experience: "Intermediate",
        },
        {
            id: 3,
            name: "Sarah Chen",
            email: "sarah.chen@email.com",
            phone: "(555) 345-6789",
            requestDate: "10/14/2025",
            message:
                "I'm dealing with postpartum depression and heard yoga therapy could help. Would love to connect and discuss options.",
            preferredDays: ["Friday"],
            preferredTime: "Afternoon (2-4pm)",
            experience: "Beginner",
        },
        {
            id: 4,
            name: "David Rodriguez",
            email: "d.rodriguez@email.com",
            phone: "(555) 456-7890",
            requestDate: "10/14/2025",
            message:
                "Interested in yoga therapy for PTSD management. I'm a veteran looking for holistic approaches to healing.",
            preferredDays: ["Monday", "Friday"],
            preferredTime: "Morning (10am-12pm)",
            experience: "No experience",
        },
    ]);

    const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);

    const handleAccept = (id: number) => {
        setRequests(requests.filter(req => req.id !== id));
        // Close modal
        const modalElement = document.getElementById('requestModal');
        if (modalElement && window.bootstrap?.Modal) {
            const modal = window.bootstrap.Modal.getInstance(modalElement);
            if (modal) modal.hide();
        }
    };

    const handleDecline = (id: number) => {
        setRequests(requests.filter(req => req.id !== id));
        const modalElement = document.getElementById('requestModal');
        if (modalElement && window.bootstrap?.Modal) {
            const modal = window.bootstrap.Modal.getInstance(modalElement);
            if (modal) modal.hide();
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg py-4 text-raleway" style={{ backgroundColor: "#ffffffff" }} data-bs-theme="light">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand" href="/therapistView">Yoga Network</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-lg-0 mt-1">
                            <li className="nav-item">
                                <a className="nav-link" href="/therapistView/patients">Patients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/therapistView/requests">Requests</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/therapistView/calendar">Calendar</a>
                            </li>

                        </ul>

                        <a className="nav-link ms-auto" href="#">
                            <i className="bi bi-person-circle fs-3"></i>
                        </a>
                    </div>
                </div>
            </nav>
            <main className="pt-5 pb-5" style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #94f1f1ff, #5fc3fdff)" }}>
                <div className="container text-raleway">
                    {/* Header */}
                    <div className="text-center mb-4">
                        <h1 className="display-4 fw-semibold mb-2">New Patient Requests</h1>
                        <p className="fs-5 text-muted">
                            {requests.length} pending {requests.length === 1 ? 'request' : 'requests'}
                        </p>
                    </div>

                    {/* Requests Grid */}
                    <div className="row g-4">
                        {requests.map(request => (
                            <div key={request.id} className="col-md-6 col-lg-4">
                                <div
                                    className="card h-100 border-0 shadow-sm"
                                    style={{
                                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                                        backdropFilter: "blur(10px)",
                                        transition: "transform 0.2s, box-shadow 0.2s",
                                        cursor: "pointer"
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
                                    <div className="card-body p-4">
                                        {/* Header */}
                                        <div className="d-flex justify-content-between align-items-start mb-3">
                                            <div>
                                                <h5 className="card-title mb-1 fw-bold">{request.name}</h5>
                                                <small className="text-muted">
                                                    <i className="bi bi-calendar3 me-1"></i>
                                                    {request.requestDate}
                                                </small>
                                            </div>
                                            <span
                                                className="badge rounded-pill px-3 py-2"
                                                style={{
                                                    backgroundColor: "rgba(255, 193, 7, 0.2)",
                                                    color: "#856404",
                                                    fontSize: "0.75rem"
                                                }}
                                            >
                                                New
                                            </span>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="mb-3">
                                            <p className="mb-1 small">
                                                <i className="bi bi-envelope me-2 text-muted"></i>
                                                {request.email}
                                            </p>
                                            <p className="mb-0 small">
                                                <i className="bi bi-telephone me-2 text-muted"></i>
                                                {request.phone}
                                            </p>
                                        </div>

                                        {/* Details */}
                                        <div className="mb-3">
                                            <p className="mb-2 small">
                                                <strong>Experience:</strong> {request.experience}
                                            </p>
                                            <p className="mb-2 small">
                                                <strong>Preferred Time:</strong> {request.preferredTime}
                                            </p>
                                            <p className="mb-0 small">
                                                <strong>Days:</strong> {request.preferredDays.join(", ")}
                                            </p>
                                        </div>

                                        {/* Message Preview */}
                                        <div
                                            className="p-3 mb-3 rounded"
                                            style={{ backgroundColor: "rgba(0, 0, 0, 0.03)" }}
                                        >
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

                                        {/* Action Buttons */}
                                        <div className="d-flex gap-2">
                                            <button
                                                className="btn btn-outline-secondary btn-sm flex-grow-1"
                                                onClick={() => handleDecline(request.id)}
                                            >
                                                Decline
                                            </button>
                                            <button
                                                className="btn btn-primary btn-sm flex-grow-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#requestModal"
                                                onClick={() => setSelectedRequest(request)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {requests.length === 0 && (
                        <div
                            className="text-center py-5 rounded-4"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.7)",
                                backdropFilter: "blur(10px)"
                            }}
                        >
                            <i className="bi bi-inbox fs-1 text-muted mb-3 d-block"></i>
                            <h3 className="mb-2">All caught up!</h3>
                            <p className="text-muted">No pending requests at the moment.</p>
                        </div>
                    )}
                </div>
            </main>

            <footer className="py-5 text-raleway mt-f" style={{ backgroundColor: "#ffffffff" }}>
                <div className="container text-dark text-center">
                    <p className="display-5 mb-3">Yoga Network</p>
                    <small className="text-dark-50">&copy; contact info</small>
                </div>
            </footer>

            {/* Modal */}
            {selectedRequest && (
                <div className="modal fade text-raleway" id="requestModal" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content border-0 shadow">
                            <div className="modal-header border-0 pb-0">
                                <div>
                                    <h1 className="modal-title fs-4 fw-bold mb-1">{selectedRequest.name}</h1>
                                    <small className="text-muted">Received on {selectedRequest.requestDate}</small>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>

                            <div className="modal-body pt-3">
                                {/* Contact Information */}
                                <div className="mb-4">
                                    <h6 className="fw-semibold mb-3">Contact Information</h6>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="p-3 rounded" style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
                                                <small className="text-muted d-block mb-1">Email</small>
                                                <div>{selectedRequest.email}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="p-3 rounded" style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
                                                <small className="text-muted d-block mb-1">Phone</small>
                                                <div>{selectedRequest.phone}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Session Preferences */}
                                <div className="mb-4">
                                    <h6 className="fw-semibold mb-3">Session Preferences</h6>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <div className="p-3 rounded" style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
                                                <small className="text-muted d-block mb-1">Experience Level</small>
                                                <div>{selectedRequest.experience}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="p-3 rounded" style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
                                                <small className="text-muted d-block mb-1">Preferred Time</small>
                                                <div>{selectedRequest.preferredTime}</div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="p-3 rounded" style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
                                                <small className="text-muted d-block mb-1">Preferred Days</small>
                                                <div>{selectedRequest.preferredDays.join(", ")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="mb-4">
                                    <h6 className="fw-semibold mb-3">Message</h6>
                                    <div className="p-4 rounded" style={{ backgroundColor: "rgba(0, 0, 0, 0.02)" }}>
                                        <p className="mb-0">{selectedRequest.message}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer border-0 pt-0">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary px-4"
                                    onClick={() => handleDecline(selectedRequest.id)}
                                    data-bs-dismiss="modal"
                                >
                                    Decline
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-success px-4"
                                    onClick={() => handleAccept(selectedRequest.id)}
                                    data-bs-dismiss="modal"
                                >
                                    <i className="bi bi-check-lg me-2"></i>
                                    Accept Request
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}