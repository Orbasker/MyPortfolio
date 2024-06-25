'use client';

import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import AccordionItem from '@/app/components/Accordion';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchJobs = async () => {
        try {
            const response = await fetch('/api/jobs');
            if (!response.ok) {
                throw new Error('Failed to fetch jobs');
            }
            const data = await response.json();
            setJobs(data.jobs);
        } catch (err) {
            if (err instanceof Error) {
                console.error('Error fetching jobs:', err);
                setError(err.message);
            } else {
                console.error('Unexpected error:', err);
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
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
            <Typography variant="h2" className="mb-4">Job History</Typography>
            <div id="accordion-open" data-accordion="open">
                {jobs.map((job, index) => (
                    <AccordionItem
                        key={index}
                        title={`${job.title} at ${job.company}`}
                        content={
                            <div>
                                <Typography component="span" variant="body2" color="text.primary">
                                    {job.duration}
                                </Typography>
                                <br />
                                <Typography component="span" variant="body2" color="text.secondary">
                                    <ul>
                                        {job.details.split(',').map(detail => (
                                            <li key={detail.trim()}>{detail.trim()}</li>
                                        ))}
                                    </ul>
                                </Typography>
                            </div>
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default JobList;
