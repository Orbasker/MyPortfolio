'use client';
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [needsExpansion, setNeedsExpansion] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    // Logic to determine if the content is too long and needs expansion
    const cardContent = document.getElementById(`card-content-${project.name}`);
    if (cardContent && cardContent.scrollHeight > cardContent.clientHeight) {
      setNeedsExpansion(true);
    }
  }, [project.name]);

  return (
    <Grid item xs={12} sm={8} md={10} lg={16} className="p-4">
      <Card className="flex flex-col justify-between max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'red[500]' }} aria-label="project">
              {project.name.charAt(0)}
            </Avatar>
          }

          title={<Link href={project.url} target="_blank" rel="noopener noreferrer" underline="hover" className="text-blue-600">{project.name}</Link>}
          subheader={<Typography className="text-gray-500">{new Date(project.updated_at).toLocaleDateString()}</Typography>}
        />
        {project.image && (
          <CardMedia
            component="img"
            height="140"
            image={project.image}
            alt={project.name}
            className="object-cover"
          />
        )}
        <CardContent
          id={`card-content-${project.name}`}
          className={`overflow-hidden text-ellipsis ${expanded ? 'h-auto' : 'h-24'} transition-height duration-300`}
        >
          <Typography variant="body2" className="text-gray-700">
            {project.description || "No description available"}
          </Typography>
          {project.language && (
            <Typography paragraph className="text-gray-700">
              Language: {project.language}
            </Typography>
          )}
          <Typography className="text-gray-700">
            Created at: {new Date(project.created_at).toLocaleDateString()}
          </Typography>
        </CardContent>
        {needsExpansion && (
          <CardActions disableSpacing className="justify-end">
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
        )}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph className="break-words whitespace-pre-wrap">
              {project.description}
            </Typography>
            {project.language && (
              <Typography paragraph>
                Language: {project.language}
              </Typography>
            )}
            <Typography>
              Created at: {new Date(project.created_at).toLocaleDateString()}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
