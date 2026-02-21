'use client';

import { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Row,
  Col,
  Card,
  Button,
  Spinner,
} from 'react-bootstrap';

export default function ClientView() {
  const [clientData, setClientData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/user/profile');
        if (res.ok) {
          const data = await res.json();
          setClientData(data);
        } else {
          window.location.href = '/auth/login';
        }
      } catch {
        window.location.href = '/auth/login';
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: '100vh',
          background:
            'linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)',
        }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const firstName = clientData?.firstName ?? 'Patient';

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="py-4" bg="light" data-bs-theme="light">
        <Container fluid className="mx-5">
          <Navbar.Brand href="/clientView">My Yoga Network</Navbar.Brand>
          <Navbar.Toggle aria-controls="clientNav" />
          <Navbar.Collapse id="clientNav" className="justify-content-end">
            <Nav className="mb-lg-0 mt-1">
              <Nav.Link href="/clientView">Home</Nav.Link>
              <Nav.Link href="/clientView/sessions" className="me-5">
                My Sessions
              </Nav.Link>
            </Nav>
            <NavDropdown
              title={<i className="bi bi-person-circle fs-3" />}
              id="client-dropdown"
              align="end"
            >
              <NavDropdown.Item href="/clientView">
                <i className="bi bi-house me-2" />
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="/client_debug">
                <i className="bi bi-bug me-2" />
                Debug View
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/auth/logout">
                <i className="bi bi-box-arrow-right me-2" />
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main */}
      <main
        className="py-5"
        style={{
          minHeight: '100vh',
          maxWidth: '100vw',
          background:
            'linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)',
        }}
      >
        {/* Top row */}
        <Container style={{ backgroundColor: 'transparent' }}>
          <Row className="align-items-stretch g-4">
            {/* Welcome card */}
            <Col md={4} className="d-flex">
              <div
                className="rounded-3 p-5 my-3 w-100"
                style={{
                  minHeight: '300px',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <h1
                  className="fw-semibold mb-0"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)' }}
                >
                  Welcome Back,
                </h1>
                <h1
                  className="fw-semibold mt-0 mb-0"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 3rem)',
                    background: 'linear-gradient(to right, #115bcb, #2575fc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {firstName}!
                </h1>
                <p className="text-muted mt-3 mb-0" style={{ fontSize: '1rem' }}>
                  {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </Col>

            {/* Upcoming sessions */}
            <Col md={4} className="d-flex">
              <div
                className="rounded-3 p-4 my-3 w-100"
                style={{
                  minHeight: '300px',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  className="fs-4 text-center"
                  style={{
                    borderBottom: '1px solid rgba(0,0,0,.3)',
                    marginBottom: '15px',
                    padding: '5px',
                  }}
                >
                  Upcoming Sessions
                </div>
                {[
                  { id: 1, therapist: 'Dr. Alice Smith', time: 'Mon, Feb 24 · 4:00 PM' },
                  { id: 2, therapist: 'Dr. Alice Smith', time: 'Mon, Mar 3 · 4:00 PM' },
                ].map((session) => (
                  <div
                    key={session.id}
                    className="d-flex justify-content-between mb-2 align-items-center gap-2 px-3 py-2 rounded-3"
                    style={{
                      backgroundColor: 'rgba(205, 209, 219, 0.13)',
                      border: '1px solid rgba(29, 2, 92, 0.1)',
                    }}
                  >
                    <span className="fw-semibold small">{session.time}</span>
                    <span className="fw-normal small text-muted">{session.therapist}</span>
                  </div>
                ))}
              </div>
            </Col>

            {/* Care team */}
            <Col md={4} className="d-flex">
              <div
                className="rounded-3 p-4 my-3 w-100"
                style={{
                  minHeight: '300px',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  className="fs-4 text-center"
                  style={{
                    borderBottom: '1px solid rgba(0,0,0,.3)',
                    marginBottom: '15px',
                    padding: '5px',
                  }}
                >
                  My Care Team
                </div>
                {[
                  {
                    role: 'Therapist',
                    name: clientData?.therapistName ?? 'Not assigned',
                    icon: 'bi-person-heart',
                  },
                  {
                    role: 'Physician',
                    name: clientData?.physicianName ?? 'Not assigned',
                    icon: 'bi-hospital',
                  },
                ].map((member) => (
                  <div
                    key={member.role}
                    className="d-flex align-items-center gap-3 px-3 py-2 mb-2 rounded-3"
                    style={{
                      backgroundColor: 'rgba(159, 181, 253, 0.13)',
                      border: '1px solid rgba(29, 2, 92, 0.1)',
                    }}
                  >
                    <i
                      className={`bi ${member.icon}`}
                      style={{ fontSize: '1.25rem' }}
                    />
                    <div>
                      <div className="small text-muted">{member.role}</div>
                      <div className="fw-semibold small">{member.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        {/* Wearables section */}
        <Container className="mt-2">
          <div
            className="rounded-3 p-4"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="display-5 pb-1" style={{ fontWeight: '375' }}>
              Wearables
            </div>
            <p
              className="text-muted pb-3"
              style={{ borderBottom: '1px solid rgba(0,0,0,.3)' }}
            >
              Connect your wearable devices to share health data with your care team
            </p>

            <Row className="g-3 mt-1">
              {/* Fitbit */}
              <Col md={6} lg={4}>
                <Card
                  className="border-0 h-100"
                  style={{
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.08)',
                    borderRadius: '0.75rem',
                  }}
                >
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3"
                        style={{
                          width: 48,
                          height: 48,
                          backgroundColor: 'rgba(0, 176, 176, 0.12)',
                        }}
                      >
                        <i
                          className="bi bi-smartwatch"
                          style={{ fontSize: '1.4rem', color: '#00b0b0' }}
                        />
                      </div>
                      <div>
                        <Card.Title className="mb-0 fw-semibold">Fitbit</Card.Title>
                        <small className="text-muted">Health &amp; fitness tracker</small>
                      </div>
                    </div>
                    <p className="text-muted small mb-4">
                      Share your steps, heart rate, sleep, and activity data with your
                      care team.
                    </p>
                    <Button variant="outline-primary" className="mt-auto rounded-pill">
                      <i className="bi bi-link-45deg me-1" />
                      Connect Fitbit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>

              {/* Oura */}
              <Col md={6} lg={4}>
                <Card
                  className="border-0 h-100"
                  style={{
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.08)',
                    borderRadius: '0.75rem',
                  }}
                >
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3"
                        style={{
                          width: 48,
                          height: 48,
                          backgroundColor: 'rgba(99, 60, 180, 0.12)',
                        }}
                      >
                        <i
                          className="bi bi-activity"
                          style={{ fontSize: '1.4rem', color: '#633cb4' }}
                        />
                      </div>
                      <div>
                        <Card.Title className="mb-0 fw-semibold">Oura Ring</Card.Title>
                        <small className="text-muted">Sleep &amp; recovery tracker</small>
                      </div>
                    </div>
                    <p className="text-muted small mb-4">
                      Share your sleep scores, readiness, and HRV data with your care
                      team.
                    </p>
                    <Button variant="outline-primary" className="mt-auto rounded-pill">
                      <i className="bi bi-link-45deg me-1" />
                      Connect Oura
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <footer className="py-5" style={{ backgroundColor: '#ffffff' }}>
        <Container className="text-dark text-center">
          <p className="display-5 mb-3">Yoga Network</p>
          <small className="text-dark-50">&copy; contact info</small>
        </Container>
      </footer>
    </>
  );
}
