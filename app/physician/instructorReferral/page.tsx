'use client';

import { Form, Button } from "react-bootstrap";

export default function InstructorReferral() {
  return (
    <div 
      className="border border-dark min-vh-100 position-relative d-flex align-items-center justify-content-center bg-light"
    >
      {/* Profile icon top right */}
      <button
        type="button"
        className="position-absolute top-0 end-0 mt-3 me-4 bg-secondary rounded-circle d-flex align-items-center justify-content-center fw-bold"
        style={{ width: 40, height: 40 }}
        onClick={() => {
          // Navigate to Profile
          console.log("Profile Navigation");
        }}
      >
        User
      </button>

      <div
        className="d-flex position-relative w-100"
        style={{ maxWidth: 1200, height: 700 }}
      >
        {/* Main Container */}
        <div
          className="position-absolute top-50 start-50 translate-middle bg-white border p-4"
          style={{
            width: "75%",
            boxShadow: "0 0 10px rgba(0,0,0,0.05)"
          }}
        >
          <div className="mb-4 d-flex flex-column align-items-center">
            <div 
              className="border border-dark px-3 py-1 mb-3"
              style={{ fontWeight: 500, fontSize: "20px", display: "inline-block" }}
            >
              REFER A PATIENT
            </div>
          </div>
          <Form>
            <Form.Group className="mb-4 d-flex align-items-center" controlId="patientFullName">
              <Form.Label className="me-2 mb-0" style={{width: '180px', textAlign: 'right'}}>Patient full name :</Form.Label>
              <Form.Control type="text" style={{ flex: 1, borderTop: 0, borderRight: 0, borderLeft: 0, borderRadius: 0, background:"transparent" }} />
            </Form.Group>
            <Form.Group className="mb-4 d-flex align-items-center" controlId="patientEmail">
              <Form.Label className="me-2 mb-0" style={{width: '180px', textAlign: 'right'}}>Patient email :</Form.Label>
              <Form.Control type="email" style={{ flex: 1, borderTop: 0, borderRight: 0, borderLeft: 0, borderRadius: 0, background:"transparent" }} />
            </Form.Group>
            <Form.Group className="mb-4 d-flex align-items-center" controlId="reasonForReferral">
              <Form.Label className="me-2 mb-0" style={{width: '180px', textAlign: 'right'}}>Reason for referral/ <br />health condition :</Form.Label>
              <Form.Control as="textarea" rows={1} style={{ flex: 1, borderTop: 0, borderRight: 0, borderLeft: 0, borderRadius: 0, background:"transparent" }} />
            </Form.Group>
            <Form.Group className="mb-4 d-flex align-items-center" controlId="clinicalNotes">
              <Form.Label className="me-2 mb-0" style={{width: '180px', textAlign: 'right'}}>Clinical notes:</Form.Label>
              <Form.Control as="textarea" rows={1} style={{ flex: 1, borderTop: 0, borderRight: 0, borderLeft: 0, borderRadius: 0, background:"transparent" }} />
            </Form.Group>
            <div className="text-center mt-4">
              <Button 
                type="submit" 
                style={{ background: "#40e252", borderColor: "#40e252", color: "#171716", width: "120px", fontWeight: 500, fontSize: "18px" }}
              >
                SEND
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
