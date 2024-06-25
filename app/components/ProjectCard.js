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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from '@mui/material/Link';

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
    <Card sx={{ maxWidth: 345, minHeight: 400, display: 'flex', flexDirection: 'column' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red[500]' }} aria-label="project">
            {project.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Link href={project.url} target="_blank" rel="noopener noreferrer" underline="hover">{project.name}</Link>}
        subheader={new Date(project.updated_at).toLocaleDateString()}
      />
      {project.image && (
        <CardMedia
          component="img"
          height="194"
          image={project.image}
          alt={project.name}
        />
      )}
      <CardContent id={`card-content-${project.name}`}>
        <Typography variant="body2" color="text.secondary">
          {project.description || "No description available"}
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
      {needsExpansion && (
        <CardActions disableSpacing>
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
          <Typography paragraph>
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
  );
};

export default ProjectCard;
