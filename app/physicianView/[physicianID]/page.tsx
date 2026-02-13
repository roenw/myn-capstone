"use client";
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Modal, Card, Row, Col, Badge } from 'react-bootstrap';
import { useParams, useRouter } from 'next/navigation';
import "../../physicianView/physicianStyles.css";

export default function PhysicianView() {
    //const { physicianID } = useParams<{physicianID: string}>();
    //const {physicianID} = "1"; // Placeholder until backend is connected
    return (
        <>
            <Navbar expand="lg" className="py-4 text-raleway" bg="light" data-bs-theme="light">
                <Container fluid className="mx-5">
                    <Navbar.Brand href="/physicianView">My Yoga Network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent" className="justify-content-end">
                        <Nav className="mb-lg-0 mt-1">
                            <Nav.Link href="/physicianView/patients">Messages</Nav.Link>
                            <Nav.Link href="/physicianView/requests"></Nav.Link>
                            <Nav.Link href="/physicianView/calendar" className="me-5"></Nav.Link>
                        </Nav>
                        <Nav.Link href="#" className="">
                            <i className="bi bi-person-circle fs-3"></i>
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <main className="" style={{
                minHeight: '100vh',
                maxWidth: "100vw",
                background: "linear-gradient(135deg, rgba(219, 237, 244) 0%, rgba(226, 238, 254) 100%)",
            }}>
                <Container className="py-4">
                    <Row className="align-items-center">
                        <h1 className="">Welcome Dr. Skylar</h1>
                        <p className="text-muted mb-0" style={{ fontSize: '1.1rem' }}>
                                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                    </Row>
                </Container>
                <Container className="text-railway">
                    <Row className="gx-3">
                        <Col className="">
                            <Card className="h-100" style={{ 
                                background: "rgba(73, 133, 225)",

                                boxShadow: '0 4px 10px rgba(102, 126, 234, 0.3)',
                            }}>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div>
                                    <p className="text-white">Active Patients</p>
                                    <h2 className="text-white">4</h2>
                                    </div>
                                    <div>
                                        <i className="bib bi-people-fill rounded-circle px-3 py-2.5 text-white" style={{
                                            fontSize: "2rem",
                                            border: "2px solid rgba(255, 255, 255, .4)",
                                        }}></i>
                                    </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="">
                            <Card className="h-100" style={{ 
                                background: "rgba(63, 137, 206)",

                                boxShadow: '0 4px 10px rgba(102, 126, 234, 0.3)',
                            }}>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div>
                                    <p className="text-white">Unreviewed Sessions</p>
                                    <h2 className="text-white">2</h2>
                                    </div>
                                    <div>
                                        <i className="bib bi-file-text-fill rounded-circle px-3 py-2.5 text-white" style={{
                                            fontSize: "2rem",
                                            border: "2px solid rgba(255, 255, 255, .4)",
                                        }}></i>
                                    </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="">
                            <Card className="h-100" style={{ 
                                background: "rgba(78, 101, 157)",

                                boxShadow: '0 4px 10px rgba(102, 126, 234, 0.3)',
                            }}>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center p-2">
                                        <div>
                                    <p className="text-white">New Messages</p>
                                    <h2 className="text-white">3</h2>
                                    </div>
                                    <div>
                                        <i className="bib bi-chat-square-text-fill rounded-circle px-3 py-2.5 text-white" style={{
                                            fontSize: "2rem",
                                            border: "2px solid rgba(255, 255, 255, .4)",
                                        }}></i>
                                    </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container className="px-1.5">
                    <SearchablePatientList />
                </Container>
            </main>
            <footer className="py-5 text-raleway mt-f" style={{ backgroundColor: '#ffffffff' }} >
                <Container className="text-dark text-center">
                    <p className="display-5 mb-3">Yoga Network</p>
                    <small className="text-dark-50">&copy; contact info</small>
                </Container>
            </footer>
        </>
    )
}

export function SearchablePatientList() {
    const [searchTerm, setSearchTerm] = useState('');
    const [patients, setPatients] = useState([
        { id: 1, name: 'John Doe', condition: 'Back Pain', lastSession: '2024-06-10', newSessionNotes: true },
        { id: 2, name: 'Jane Smith', condition: 'Neck Pain', lastSession: '2024-06-12', newSessionNotes: true },
        { id: 3, name: 'Alice Johnson', condition: 'Back Pain', lastSession: '2024-06-08', newSessionNotes: false },
        { id: 4, name: 'Bob Brown', condition: 'Sprain', lastSession: '2024-06-11', newSessionNotes: false },
    ]);
    const [sortBy, setSortBy] = useState("");
    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === "condition") {
                return a.condition.localeCompare(b.condition);
            } else if (sortBy === "lastSession") {
                return b.lastSession.localeCompare(a.lastSession);
            } else if (sortBy === "newSessionNotes") {
                return Number(b.newSessionNotes) - Number(a.newSessionNotes);
            }
            return 0;
        });
    ;
    const router = useRouter();
    const { physicianID } = useParams<{physicianID: string}>();

    return (
        <Container className="rounded-3 p-3 mt-3" style={{
            backgroundColor: "rgb(255, 255, 255)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
            minHeight: "500px",
        }}>
            
                <div>
                    <h2 className="" style={{fontWeight: "350"}}>Patient Directory</h2>
                    <p className="text-muted">Manage and review patient sessions</p>
                </div>
                <div className="d-flex flex-wrap">
                <div className="pe-2 flex-grow">
                <input type="text" className="form-control" id="searchInput" placeholder="Search patients..."
                        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}>
                </input>
</div>
                <div className="d-flex justify-content-end gap-2">
                    <div>
                        <button className={`btn ${sortBy === "condition" ? "btn-primary" : "btn-outline-secondary"}`}
                            onClick={() => setSortBy("condition")} style={{ whiteSpace: "nowrap" }}>
                            Condition
                        </button>
                    </div>
                    <div>
                        <button className={`btn ${sortBy === "lastSession" ? "btn-primary" : "btn-outline-secondary"}`}
                            onClick={() => setSortBy("lastSession")} style={{ whiteSpace: "nowrap" }}>
                            Last Session
                        </button>
                    </div>
                    <div>
                        <button className={`btn ${sortBy === "newSessionNotes" ? "btn-primary" : "btn-outline-secondary"}`}
                            onClick={() => setSortBy("newSessionNotes")} style={{ whiteSpace: "nowrap" }}>
                            New Session Notes
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-3 my-2 mt-3 py-1 rounded-2" style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.1)"}}>
                <Row className="p-1">
                    <Col className="ms-2" md={8}>Patient Name</Col>
                    <Col className="">Condition</Col>
                    <Col className="">Last Session</Col>
                </Row>
            </div>
            <div className="px-3">
                {filteredPatients.map((patient) => (
                    <Row key={patient.id} onClick={() => router.push(`/physicianView/${physicianID}/patients/${patient.id}`)} className=" p-2 mt-2 align-text-start justify-content-center patient-row">
                        <Col md={8} className="d-flex align-items-center text-center gap-3">
                            
                            {patient.newSessionNotes ? 
                            <span className="align-self-center"
                                        style={{
                                            width: "8px",
                                            height: "8px",
                                            backgroundColor: "#0d6efd",
                                            borderRadius: "50%",
                                            display: "inline-block",
                                        }}
                                    /> : 
                                    <span className="align-self-center"
                                        style={{
                                            width: "8px",
                                            height: "8px",
                                            borderColor: "#0d6efd",
                                            backgroundColor: "#ffffff",
                                            borderWidth: "1px",
                                            borderRadius: "50%",
                                            display: "inline-block",
                                        }}
                                    />}
                            
                            <p className="fw-normal mb-0"> {patient.name} </p>
                            
                        </Col>
                        <Col className="d-flex align-items-center">
                        <div className="">
                            <Badge bg="secondary" className="align-self-center">{patient.condition}</Badge>
                        </div>
                        </Col>
                        <Col className="d-flex align-items-center">
                            <p className="fw-normal mb-0">{new Date(patient.lastSession).toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric', 
                                                year: 'numeric' 
                                            })}</p>
                        </Col>
                    </Row>
                ))}
            </div>
        </Container>
    )
}