'use client';

import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

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
            <List>
                {jobs.map((job) => (
                    <ListItem key={job.date} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={job.company} src={`/images/${job.company.toLowerCase()}.png`} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography variant="h6">
                                    {job.title} at {job.company}
                                </Typography>
                            }
                            secondary={
                                <>
                                    <Typography component="span" variant="body2" color="text.primary">
                                        {job.duration}
                                    </Typography>
                                    <br />
                                    <Typography component="span" variant="body2" color="text.secondary">
                                        {job.details.split(',').map(detail => (
                                            <li key={detail.trim()}>{detail.trim()}</li>
                                        ))}
                                    </Typography>
                                </>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default JobList;
