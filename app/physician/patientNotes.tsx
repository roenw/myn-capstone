'use client'

import React, { useState } from "react";
import { Button } from 'react-bootstrap';

// Placeholder dates
class PatientMeeting {

    meetingDate: Date;
    notesViewed: boolean;

    constructor(meetingDate: Date, notesViewed: boolean = false) {
        this.meetingDate = meetingDate;
        this.notesViewed = notesViewed;
    }

    markNotesViewed() {
        this.notesViewed = true;
    }
}

export default function PatientNotes() {
    const [meetings, setMeetings] = useState([
        new PatientMeeting(new Date("2025-06-12"), true),
        new PatientMeeting(new Date("2025-06-22"), false),
        new PatientMeeting(new Date("2025-07-02"), true),
        new PatientMeeting(new Date("2025-07-22"), false),
    ]);

    interface HandleToggleNotes {
        (index: number): void;
    }

    const handleToggleNotes: HandleToggleNotes = (index) => {
        setMeetings((prevMeetings) => {
            // Create a new array copy to avoid mutating state directly
            const updated = prevMeetings.map((meeting, i) => {
                if (i === index && !meeting.notesViewed) {
                    // Return new PatientMeeting with notesViewed set to true
                    return new PatientMeeting(meeting.meetingDate, true);
                }
                return meeting; 
            });
            return updated;
        });
    };

    return (
        <div className="border border-dark min-vh-100 position-relative d-flex align-items-center justify-content-center bg-light">
            {/* Profile icon top right */}
            <button
                type="button"
                className="position-absolute top-0 end-0 mt-3 me-4 bg-secondary rounded-circle d-flex align-items-center justify-content-center fw-bold"
                style={{ width: 40, height: 40 }}
                onClick={() => {
                    // Navigate to Profile
                }}
            >
                User
            </button>

            <div
                className="d-flex position-relative w-100"
                style={{ maxWidth: 1200, height: 700}}
            >
                {/* Centered content */}
                <div
                    className="position-absolute top-10 start-50 translate-middle-x d-flex flex-column align-items-center text-center"      
                    style={{
                        width: "100%",
                        color: "#171716",
                        fontWeight: "700",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "24px",
                        pointerEvents: "none"
                    }}
                >
                    <div>
                        Patient A
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, marginTop: 50, pointerEvents: "auto" }}>
                        {meetings.map((meeting, index) => (
                            <li
                                key={index}
                                style={{ marginBottom: 50, display: "flex", alignItems: "center", gap: "20px" }}
                                >
                                {/* Dates */}
                                <Button
                                    variant="light"
                                    className="rounded-pill"
                                    style={{
                                    fontSize: "1.25rem",
                                    padding: "12px 36px",
                                    borderWidth: 2,
                                    borderColor: "#f0f0f0",
                                    pointerEvents: "none"
                                    }}
                                    disabled
                                >
                                    {meeting.meetingDate.toLocaleDateString(undefined, {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit",
                                    })}
                                </Button>

                                {/* Toggle Button for Notes */}
                                <Button
                                    type="button"
                                    className="rounded-pill"
                                    style={{
                                    fontSize: "1.25rem",
                                    padding: "12px 36px",
                                    minWidth: "200px",
                                    textAlign: "center",
                                    color: "#171716",
                                    borderWidth: 2,
                                    borderColor: "#f0f0f0",
                                    backgroundColor: meeting.notesViewed ? "#a4a3a3" : "white",
                                    cursor: meeting.notesViewed ? "default" : "pointer"
                                    }}
                                    onClick={() => handleToggleNotes(index)}
                                    disabled={meeting.notesViewed}
                                    variant={meeting.notesViewed ? "secondary" : "outline-secondary"}
                                >
                                    {meeting.notesViewed ? "Viewed" : "View Notes"}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
  );
}
