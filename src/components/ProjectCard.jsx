import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 3,
      boxShadow: 3,
      height: '100%',
      minWidth: 280,
      maxWidth: 350,
      margin: '0 auto',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-8px) scale(1.03)',
        boxShadow: 6,
      },
    }}>
      <CardMedia
        component="img"
        height="180"
        image={project.image}
        alt={project.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6" color="primary" fontWeight={700} gutterBottom noWrap>
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ minHeight: 60 }}>
          {project.description.length > 130
            ? `${project.description.substring(0, 130)}...`
            : project.description}
        </Typography>
        <Chip label={project.framework} color="secondary" size="small" sx={{ fontWeight: 'bold', mb: 1 }} />
        <Box mt={2}>
          <Button
            href={project.link.trim()}
            target="_blank"
            variant="outlined"
            color="primary"
            startIcon={<FaGithub />}
            fullWidth
            sx={{ fontWeight: 600 }}
          >
            View on GitHub
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}