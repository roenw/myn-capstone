"use client";

import { useEffect, useState } from "react";
import { Button, Card, Container, Navbar, Nav, NavDropdown, Spinner, Table } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function ClientPage() {
    const router = useRouter();
    const [clientData, setClientData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const response = await fetch('/api/user/profile');
                if (response.ok) {
                    const data = await response.json();
                    setClientData(data);
                } else {
                    // Not authenticated, redirect to login
                    window.location.href = '/auth/login';
                }
            } catch (error) {
                console.error('Error fetching client data:', error);
                window.location.href = '/auth/login';
            } finally {
                setLoading(false);
            }
        };

        fetchClientData();
    }, [router]);

    const handleLogout = () => {
        window.location.href = '/auth/logout';
    };

    if (loading) {
        return (
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh", backgroundColor: "#020617" }}
            >
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

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
                    <Navbar.Brand
                        style={{ color: "#e5e7eb", fontWeight: 600 }}
                    >
                        Yoga Network
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end">
                        <NavDropdown
                            title={
                                <span style={{ color: "#e5e7eb" }}>
                                    {clientData?.firstName} {clientData?.lastName}
                                </span>
                            }
                            id="client-dropdown"
                            align="end"
                        >
                            <NavDropdown.Item onClick={() => router.push("/client/profile")}>
                                <i className="bi bi-person-circle me-2" />
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout}>
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
                style={{ minHeight: "100vh", backgroundColor: "#020617" }}
            >
                <Container style={{ maxWidth: "1200px" }}>
                    <Card
                        className="border-0 mb-4"
                        style={{
                            backgroundColor: "rgba(15, 23, 42, 0.75)",
                            border: "1px solid #1e293b",
                            borderRadius: "0.75rem",
                        }}
                    >
                        <Card.Body className="p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div>
                                    <h2 className="text-light fw-semibold mb-2">
                                        Welcome, {clientData?.firstName} {clientData?.lastName}
                                    </h2>
                                    <p className="text-secondary mb-0">
                                        Client Dashboard - Debug View
                                    </p>
                                </div>
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: "50%",
                                        backgroundColor: "rgba(59,130,246,0.15)",
                                        color: "#3b82f6",
                                        fontSize: "1.25rem",
                                        fontWeight: 600,
                                    }}
                                >
                                    {clientData?.firstName?.[0]}{clientData?.lastName?.[0]}
                                </div>
                            </div>

                            <div
                                className="alert mb-0"
                                style={{
                                    backgroundColor: "rgba(59,130,246,0.1)",
                                    border: "1px solid rgba(59,130,246,0.3)",
                                    borderRadius: "0.5rem",
                                    color: "#93c5fd",
                                }}
                            >
                                <i className="bi bi-info-circle me-2" />
                                This is a debug/demo view showing all your profile data from the database.
                            </div>
                        </Card.Body>
                    </Card>

                    <Card
                        className="border-0"
                        style={{
                            backgroundColor: "rgba(15, 23, 42, 0.75)",
                            border: "1px solid #1e293b",
                            borderRadius: "0.75rem",
                        }}
                    >
                        <Card.Body className="p-4">
                            <h4 className="text-light fw-semibold mb-4">
                                Complete Profile Data
                            </h4>

                            <div className="table-responsive">
                                <Table
                                    bordered
                                    hover
                                    variant="dark"
                                    style={{
                                        backgroundColor: "transparent",
                                        color: "#e5e7eb",
                                    }}
                                >
                                    <thead>
                                        <tr>
                                            <th style={{ width: "30%", backgroundColor: "#1e293b" }}>Field</th>
                                            <th style={{ backgroundColor: "#1e293b" }}>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {clientData && Object.entries(clientData).map(([key, value]) => (
                                            <tr key={key}>
                                                <td className="text-secondary fw-semibold">
                                                    {key}
                                                </td>
                                                <td className="text-light font-monospace">
                                                    {typeof value === 'object' && value !== null
                                                        ? JSON.stringify(value, null, 2)
                                                        : String(value ?? 'N/A')}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>

                            <div className="mt-4">
                                <h5 className="text-light mb-3">Raw JSON Data</h5>
                                <pre
                                    className="p-3"
                                    style={{
                                        backgroundColor: "#020617",
                                        border: "1px solid #1e293b",
                                        borderRadius: "0.5rem",
                                        color: "#94a3b8",
                                        maxHeight: "400px",
                                        overflow: "auto",
                                        fontSize: "0.875rem",
                                    }}
                                >
                                    {JSON.stringify(clientData, null, 2)}
                                </pre>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </main>
        </>
    );
}
