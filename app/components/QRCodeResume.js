'use client';
import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const QRCodeResume = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const response = await fetch('/api/resume');
                if (!response.ok) {
                    throw new Error('Failed to fetch pre-signed URL');
                }
                const data = await response.json();
                setUrl(data.url);
            } catch (err) {
                console.error('Error fetching pre-signed URL:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUrl();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div>
            <Typography variant="h2" className="mb-4">QR Code to Resume</Typography>
            <QRCode value={url} />
        </div>
    );
};

export default QRCodeResume;
