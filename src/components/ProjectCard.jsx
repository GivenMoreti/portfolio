import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

export default function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 2,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={project.image}
        alt={project.name}
        sx={{
          objectFit: "cover",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        }}
      />
      <CardContent sx={{ flexGrow: 1, pt: 2, px: 2 }}>
        <Typography variant="h6" component="h3" gutterBottom fontWeight={600}>
          {project.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        
          sx={{ minHeight: 60 }}
        >
          {project.description.length > 130
            ? `${project.description.substring(0, 130)}...`
            : project.description}
        </Typography>
        <Box>
          <Typography
            variant="caption"
            sx={{
              bgcolor: "primary.main",
              color: "white",
              px: 1.5,
              py: 0.5,
              borderRadius: 8,
              fontSize: "0.75rem",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            {project.framework}
          </Typography>
        </Box>
      </CardContent>
      <Box px={2} pb={2} pt={0}>
        <Button
          variant="outlined"
          color="primary"
          href={project.link.trim()}
          target="_blank"
          startIcon={<GitHubIcon fontSize="small" />}
          sx={{
            textTransform: "none",
            fontWeight: 500,
            borderColor: "primary.main",
            "&:hover": {
              borderColor: "primary.dark",
              bgcolor: "action.hover",
            },
          }}
        >
          View on GitHub
        </Button>
      </Box>
    </Card>
  );
}