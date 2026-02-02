'use client';

import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

/* ---------- Data Model (unchanged) ---------- */
class PatientMeeting {
    meetingDate: Date;
    notesViewed: boolean;

    constructor(meetingDate: Date, notesViewed: boolean = false) {
        this.meetingDate = meetingDate;
        this.notesViewed = notesViewed;
    }
}

export default function PatientNotes() {
    const [meetings, setMeetings] = useState([
        new PatientMeeting(new Date("2025-06-12"), true),
        new PatientMeeting(new Date("2025-06-22"), false),
        new PatientMeeting(new Date("2025-07-02"), true),
        new PatientMeeting(new Date("2025-07-22"), false),
    ]);

    const handleToggleNotes = (index: number) => {
        setMeetings(prev =>
            prev.map((m, i) =>
                i === index && !m.notesViewed
                    ? new PatientMeeting(m.meetingDate, true)
                    : m
            )
        );
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center min-vh-100"
            style={{
                backgroundColor: "#020617", // slate-950
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            {/* Profile Icon */}
            <button
                className="position-absolute top-0 end-0 mt-4 me-4 rounded-circle border-0"
                style={{
                    width: 42,
                    height: 42,
                    backgroundColor: "#020617",
                    color: "#cbd5f5",
                    border: "1px solid #1e293b",
                }}
            >
                <i className="bi bi-person" />
            </button>

            <Container style={{ maxWidth: 720 }}>
                <Card
                    className="border-0 shadow-lg"
                    style={{
                        backgroundColor: "rgba(15,23,42,0.75)", // slate-900/75
                        borderRadius: "1rem",
                        border: "1px solid #1e293b",
                    }}
                >
                    <Card.Body className="p-5">
                        {/* Header */}
                        <div className="text-center mb-5">
                            <h3 className="fw-semibold text-light mb-1">
                                Patient A
                            </h3>
                            <p className="text-secondary small mb-0">
                                Session Notes History
                            </p>
                        </div>

                        {/* Meetings */}
                        <div className="d-flex flex-column gap-4">
                            {meetings.map((meeting, index) => (
                                <div
                                    key={index}
                                    className="d-flex justify-content-between align-items-center"
                                >
                                    {/* Date */}
                                    <span className="text-secondary fw-medium">
                                        {meeting.meetingDate.toLocaleDateString(undefined, {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </span>

                                    {/* Action Button */}
                                    <Button
                                        onClick={() => handleToggleNotes(index)}
                                        disabled={meeting.notesViewed}
                                        style={{
                                            borderRadius: "9999px",
                                            padding: "0.45rem 1.5rem",
                                            fontWeight: 500,
                                            border: meeting.notesViewed
                                                ? "1px solid #334155"
                                                : "1px solid #3b82f6",
                                            backgroundColor: meeting.notesViewed
                                                ? "#020617"
                                                : "#3b82f6",
                                            color: meeting.notesViewed
                                                ? "#64748b"
                                                : "white",
                                            boxShadow: meeting.notesViewed
                                                ? "none"
                                                : "0 0 18px rgba(59,130,246,0.35)",
                                            cursor: meeting.notesViewed
                                                ? "default"
                                                : "pointer",
                                        }}
                                    >
                                        {meeting.notesViewed ? "Viewed" : "View Notes"}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}