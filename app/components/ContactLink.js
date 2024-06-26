'use client';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DOMPurify from 'dompurify';

const ContactLink = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus('Sending...');

        // Sanitize inputs
        const sanitizedEmail = DOMPurify.sanitize(email);
        const sanitizedSubject = DOMPurify.sanitize(subject);
        const sanitizedMessage = DOMPurify.sanitize(message);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: sanitizedEmail, subject: sanitizedSubject, message: sanitizedMessage }),
            });

            if (response.ok) {
                setStatus('Email sent successfully!');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setStatus('Failed to send email.');
            }
        } catch (error) {
            setStatus('An error occurred.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Contact
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        fullWidth
                    >
                        Send Email
                    </Button>
                </form>
                {status && (
                    <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
                        {status}
                    </Typography>
                )}
            </Box>
        </Container>
    );
};

export default ContactLink;
