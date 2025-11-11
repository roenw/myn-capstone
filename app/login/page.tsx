"use client";
import { Container, Card, Form, Button } from "react-bootstrap";

export default function LoginPage() {
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card className="p-4 shadow-sm" style={{ width: 400 }}>
                <h3 className="text-center mb-4">Log in</h3>

                <Form>
                    {/* User Type Dropdown */}
                    <Form.Group className="mb-3">
                        <Form.Label>User Type</Form.Label>
                        <Form.Select>
                            <option value="client">Client</option>
                            <option value="instructor">Instructor</option>
                            <option value="physician">Physician</option>
                            <option value="admin">Admin</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Username Field */}
                    <Form.Group className="mb-3">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="username" />
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" />
                    </Form.Group>

                    {/* Grey Login Button */}
                    <Button variant="secondary" className="w-100">
                        Login
                    </Button>
                </Form>
            </Card>
        </Container>
    );
}