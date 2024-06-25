'use client';

import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/github/projects');
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      const sortedProjects = data.projects.sort(
        (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
      setProjects(sortedProjects);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error fetching projects:', err);
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
    fetchProjects();
  }, []);

  const loadMoreProjects = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
      setLoadingMore(false);
    }, 500);
  };

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
      <h2 className="text-2xl font-bold mb-4">Latest Projects</h2>
      <Grid container spacing={4}>
        {projects.slice(0, visibleProjects).map((project) => (
          <Grid item key={project.name} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
      {visibleProjects < projects.length && (
        <div className="flex justify-center mt-4">
          <Button variant="contained" color="primary" onClick={loadMoreProjects}>
            Load More
          </Button>
        </div>
      )}
      {loadingMore && (
        <div className="flex justify-center mt-4">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default ProjectList;
