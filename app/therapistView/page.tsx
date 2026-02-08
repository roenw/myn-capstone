'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import "./therapistStyles.css";

export default function TherapistView() {
  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="py-4 text-raleway" bg="light" data-bs-theme="light">
        <Container fluid className="mx-5">
          <Navbar.Brand href="/therapistView">My Yoga Network</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent" className="justify-content-end">
            <Nav className="mb-lg-0 mt-1">
              <Nav.Link href="/therapistView/patients">Patients</Nav.Link>
              <Nav.Link href="/therapistView/requests">Requests</Nav.Link>
              <Nav.Link href="/therapistView/calendar" className="me-5">Calendar</Nav.Link>
            </Nav>
            <Nav.Link href="#" className="">
              <i className="bi bi-person-circle fs-3"></i>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main
        className="py-5 mx-auto"
        style={{
          minHeight: '100vh',
          maxWidth: "100vw",
          background: 'linear-gradient(135deg, #daedf3 0%, #90A4AE 100%)',
        }}
      >
        {/* Top Section */}
        <Container style={{ backgroundColor: 'transparent' }}>
          <Row className="align-items-start align-items-stretch g-4">
            {/* Left side - WelcomeCard */}
            <Col md={4} className="d-flex alighn-items-center">
              <WelcomeCard therapistName="Alice" />
            </Col>

            {/* Right side - Meetings and Requests */}
            <Col md={4} className="d-flex flex-column align-items-center gap-3">
              {/* Upcoming Meetings */}
              <UpcomingMeetings />
            </Col>
            <Col md={4} className="d-flex flex-column gap-3">
              {/* New Requests */}
              <PatientRequests />
            </Col>
          </Row>
        </Container>

        {/* Patients Section */}
        <Container className="px-1.5">
          <CurrentPatients />
        </Container>
      </main>

      <footer className="py-5 text-raleway mt-f" style={{ backgroundColor: '#ffffffff' }} >
        <Container className="text-dark text-center">
          <p className="display-5 mb-3">Yoga Network</p>
          <small className="text-dark-50">&copy; contact info</small>
        </Container>
      </footer>
    </>
  );
}

interface WelcomeCard {
  therapistName: string;
}

export function WelcomeCard({ therapistName }: WelcomeCard) {
  return (
    <div className="text-wrap text-raleway rounded-3 p-5 my-3" style={{
      width: "100%",
      minHeight: "300px",
      backgroundColor: "rgba(255, 255, 255, 1)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      //alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 className="fw-semibold mb-0" style={{fontSize: 'clamp(1.5rem, 3vw, 3rem)'}}>
        Welcome <br />
        To Your 
      </h1>
      <h1 className="fw-semibold gradient-text mt-0 mb-0 text-wrap" style={{fontSize: 'clamp(1.5rem, 3vw, 3rem)'}}>Yoga Network</h1>
      <h1 className="display-5 fw-semibold mt-0">
        {therapistName}
      </h1>
    </div>
  );
}

interface NextMeetings {
  id: number;
  patientName: string;
  meetingTime: string;
}

export function UpcomingMeetings() {
  const [meetings, setMeetings] = useState<NextMeetings[]>([
    { id: 1, patientName: "George Yousefson", meetingTime: "4:00 pm" },
    { id: 2, patientName: "Alicia Shells", meetingTime: "6:30 pm" },
  ]);
  return (
    <div className="rounded-3 p-4 my-3 border-top h-100" style={{ 
      width: "100%",
      minHeight: "300px",
      backgroundColor: "rgba(255, 255, 255, 1)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      //alignItems: "center",
      }}>
        <div className="fs-4 text-center" style={{
          borderBottom: "1px solid rgba(0,0,0,.3)",
          marginBottom: "15px",
          padding: "5px"
        }}>Upcoming Meetings</div>
        {meetings.map((meeting) => (
          <div
          key={meeting.id}
          className="d-flex justify-content-between mb-2 align-items-center gap-2 px-3 py-2 rounded-3"
                  style={{
                    backgroundColor: 'rgba(205, 209, 219, 0.13)',
                    border: '1px solid rgba(29, 2, 92, 0.1)'
                  }}
          >
          <span className="fw-semibold">{meeting.meetingTime}</span>
          <span className="fw-normal">{meeting.patientName}</span>
          </div>

        ))}
    </div>
  );
}

interface PatientRequests {
  id: number;
  name: string;
}
export function PatientRequests() {
  const [requests, setRequests] =useState<PatientRequests[]>([]);

  useEffect(() => {
    // Fetch requests from API
    async function fetchRequests() {
      try {
                const res = await fetch("/api/therapist-view/patient-requests");
                if (!res.ok) throw new Error("Failed to fetch requests");
                const data = await res.json();
                setRequests(data);
            } catch (error) {
                console.error("Error loading requests:", error);
            }
    }
    fetchRequests();
  }, []);

  return (
    <div className="rounded-3 p-4 my-3 border-top h-100" style={{ 
      width: "100%",
      minHeight: "300px",
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(10px)",
      display: "flex",
      flexDirection: "column",
      //alignItems: "center",
      }}>
        <div className="fs-4 text-center" style={{
          borderBottom: "1px solid rgba(0,0,0,.3)",
          marginBottom: "15px",
          padding: "5px"
        }}>New Patient Messages</div>
        {requests.map((request) => (
          <div
            key={request.id}
            className="fw-normal px-2 mb-2 d-flex justify-content-between" style={{
              backgroundColor: "rgb(226, 226, 226, .1)",
              borderBottom: "1px solid rgb(29, 2, 92, 0)",
            }}
          >
            <span className="fw-semibold mt-2" style={{color:"#000000"}}>{request.name}</span>
            <Button variant="outline-primary"data-bs-toggle="modal" data-bs-target="#requestModal" style={{cursor: "pointer"}}>View Message</Button>
          </div>
        ))}
      </div>
  )
}

interface Patients {
  id: number;
  name: string;
  img: string;
  nextMeetingDate: string;
  CurrentYogaPlan: string;
}
export function CurrentPatients() {
  const [patients, setPatients] = useState<Patients[]>([
    { id: 1, name: 'George Yousefson', img: '/exDude1.jpg', nextMeetingDate: '11/24/25', CurrentYogaPlan: 'Plan A' },
    { id: 2, name: 'Alicia Shells', img: '/exDude2.jpg', nextMeetingDate: '12/24/25', CurrentYogaPlan: 'Plan B' },
    { id: 3, name: 'Jennifer Bells', img: '/exDude3.jpg', nextMeetingDate: '12/24/25', CurrentYogaPlan: 'Plan C' },
  ]);
    return (
    <Container
      className="rounded-3 my-2 p-4"
      style={{
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        
      }}
    >
      <div 
        className="display-5 pb-1" 
        style={{
          fontWeight: "375",
        }}
      >
        Your Current Patients
      </div>
      <div>
        <p className="text-muted pb-3" style={{
          borderBottom: "1px solid rgba(0,0,0,.3)",}}>
            Manage your patients and view their profiles</p>
      </div>

      <div className="pretty-scroll d-flex gap-4 py-3">
        {patients.map((patient) => (
          <Card
            key={patient.id}
            className="p-3 border-0 shadow"
            style={{ 
              width: '18rem', 
              flexShrink: 0,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(29, 2, 92, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            
              <Card.Img
                src={patient.img}
                alt={patient.name}
                className="card-img-top"
                style={{
                  objectFit: 'cover',
                  height: "250px"
                }}
              />
              

            <Card.Body className="p-4">
              <Card.Title 
                className="fw-semibold mb-3"
                style={{ 
                  fontSize: '1.25rem'
                }}
              >
                {patient.name}
              </Card.Title>

              <div className="d-flex flex-column gap-2">
                <div 
                  className="d-flex align-items-center gap-2 px-3 py-2 rounded-3"
                  style={{
                    backgroundColor: 'rgba(159, 181, 253, 0.13)',
                    border: '1px solid rgba(29, 2, 92, 0.1)'
                  }}
                >
                  <i 
                    className="bi bi-clipboard-heart-fill" 
                    style={{ color: 'rgb(0, 0, 0)' }}
                  ></i>
                  <span className="small fw-medium">{patient.CurrentYogaPlan}</span>
                </div>

                <div 
                  className="d-flex align-items-center gap-2 px-3 py-2 rounded-3"
                  style={{
                    backgroundColor: 'rgba(159, 181, 253, 0.13)',
                    border: '1px solid rgba(29, 2, 92, 0.1)'
                  }}
                >
                  <i 
                    className="bi bi-calendar3" 
                    style={{ color: 'rgb(0, 0, 0)' }}
                  ></i>
                  <span className="small fw-medium">{patient.nextMeetingDate}</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-top">
                <a 
                  href="#"
                  className="text-decoration-none d-flex align-items-center justify-content-center gap-2 fw-semibold"
                  style={{ 
                    color: 'rgb(3, 6, 15)',
                    fontSize: '0.9rem'
                  }}
                >
                  View Profile
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );

}

// Still working on this