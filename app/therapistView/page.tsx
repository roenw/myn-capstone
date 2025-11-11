'use client';
import Image from "next/image";
import { Navbar, Container, Nav, Row, Col, Card, Button } from 'react-bootstrap';
import "./therapistStyles.css";

export default function TherapistView() {
  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="py-4 text-raleway" bg="light" data-bs-theme="light">
        <Container fluid className="mx-5">
          <Navbar.Brand href="/therapistView">Yoga Network</Navbar.Brand>
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
          maxWidth: "70vw",
          background: 'linear-gradient(to bottom, #94f1f1ff, #5fc3fdff)',
        }}
      >
        {/* Top Section */}
        <Container style={{ backgroundColor: 'transparent' }}>
          <Row className="align-items-start">
            {/* Left side - WelcomeCard */}
            <Col md={7} className="d-flex justify-content-center align-items-center">
              <WelcomeCard therapistName="name" />
            </Col>

            {/* Right side - Meetings and Requests */}
            <Col md={5} className="d-flex flex-column gap-3">
              {/* Upcoming Meetings */}
              <div className="text-center text-raleway fs-5">
                <div
                  className="rounded-top-3 py-2"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  Upcoming Meetings
                </div>
                <div
                  className="border-top py-2"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  George Yousefson @ Monday, 5:30pm
                </div>
                <div
                  className="border-top rounded-bottom-3 py-2"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  Alicia Shells @ Wednesday, 4:00pm
                </div>
              </div>

              {/* New Requests */}
              <div className="text-center text-raleway fs-5">
                <div
                  className="rounded-top-3 py-2"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  New Requests
                </div>
                <div
                  className="border-top py-2 px-4 d-flex justify-content-between align-items-center"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span>Lily Shwartz</span>
                  <Button variant="light" size="sm" data-bs-toggle="modal" data-bs-target="#requestModal">
                    View
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Patients Section */}
        <Container
          className="rounded-5 my-5 py-3 mx-5 mx-auto"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 1)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="text-raleway display-4 my-3">Your Current Patients:</div>

          <div className="pretty-scroll d-flex gap-4">
            {[
              { name: 'George Yousefson', img: '/exDude1.jpg', date: '11/24/25' },
              { name: 'Alicia Shells', img: '/exDude2.jpg', date: '12/24/25' },
              { name: 'Jennifer Bells', img: '/exDude3.jpg', date: '12/24/25' },
            ].map((p) => (
              <Card
                key={p.name}
                className="text-raleway"
                style={{ width: '18rem', flexShrink: 0 }}
              >
                <Image
                  src={p.img}
                  alt="profileimg"
                  width={288}
                  height={280}
                  className="card-img-top"
                  style={{
                    objectFit: 'cover',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                  }}
                />
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>Current Yoga Plan</Card.Text>
                  <Card.Text>Next Meeting Date: {p.date}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </main>

      <div className="modal fade " id="requestModal" tabIndex={-1} aria-labelledby="requestModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Lily Shwartz</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Info about Patient
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
      </div>

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
    <div className="text-raleway rounded-5 p-5 my-3" style={{
      width: "100%",
      minHeight: "300px",
      backgroundColor: "rgba(255, 255, 255, 1)",
      backdropFilter: "blur(10px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 className="display-5 fw-semibold">
        Welcome back {therapistName}!
      </h1>
    </div>
  );
}

interface NextMeetings {
  patientName: string;
  meetingDate: string;
}

export function NextMeeting({ patient }: { patient: NextMeetings }) {
  return (
    <div className="border-top py-2" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)", backdropFilter: "blur(10px)" }}>
      {patient.patientName} : {patient.meetingDate}
    </div>
  );
}

// Still working on this