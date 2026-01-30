'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Card, Form, Button } from 'react-bootstrap';

export default function LoginPage() {
    const [userType, setUserType] = useState('client');
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        switch (userType) {
            case 'physician':
                router.push('/physician');
                break;
            case 'instructor':
                router.push('/therapistView');
                break;
            case 'admin':
                router.push('/admin');
                break;
            default:
                router.push('/client');
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                background: 'linear-gradient(to bottom right, #8ee7f1, #6bc9f5)',
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <Card
                className="shadow-lg p-5 text-center"
                style={{
                    width: '400px',
                    borderRadius: '20px',
                    backgroundColor: 'white',
                    border: 'none',
                }}
            >
                <h2 className="fw-bold mb-4" style={{ color: '#0a0a0a' }}>
                    Welcome Back
                </h2>
                <p className="text-muted mb-4">Sign in to your account</p>

                <Form onSubmit={handleLogin}>
                    {/* User Type Dropdown */}
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="fw-semibold">User Type</Form.Label>
                        <Form.Select
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            className="rounded-pill px-3 py-2 border-0 shadow-sm"
                            style={{ backgroundColor: '#f7f7f7' }}
                        >
                            <option value="client">Client</option>
                            <option value="instructor">Instructor</option>
                            <option value="physician">Physician</option>
                            <option value="admin">Admin</option>
                        </Form.Select>
                    </Form.Group>

                    {/* Username Field */}
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="fw-semibold">Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            className="rounded-pill px-3 py-2 border-0 shadow-sm"
                            style={{ backgroundColor: '#f7f7f7' }}
                        />
                    </Form.Group>

                    {/* Password Field */}
                    <Form.Group className="mb-4 text-start">
                        <Form.Label className="fw-semibold">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            className="rounded-pill px-3 py-2 border-0 shadow-sm"
                            style={{ backgroundColor: '#f7f7f7' }}
                        />
                    </Form.Group>

                    {/* Login Button */}
                    <Button
                        type="submit"
                        className="w-100 rounded-pill fw-semibold"
                        style={{
                            backgroundColor: '#6bc9f5',
                            border: 'none',
                            padding: '10px 0',
                            fontSize: '1rem',
                        }}
                    >
                        Log In
                    </Button>
                </Form>
            </Card>
        </div>
    );
}