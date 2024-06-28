'use client';
import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import CircularProgress from '@mui/material/CircularProgress';

const QRCodeResume = ({ size }) => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUrl = async () => {
            setLoading(true); // Ensure loading is true at the start of the fetch
            try {
                const response = await fetch('/api/resume');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.text(); // Assuming the URL is returned as plain text
                setUrl(data);
            } catch (err) {
                console.error('Error fetching URL:', err);
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
        <div className="p-2">
            <QRCode value={url} size={size} /> {/* Use the size prop */}
        </div>
    );
};

export default QRCodeResume;