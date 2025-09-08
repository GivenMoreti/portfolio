import React from "react";
import { Container, Typography, Grid, Box } from '@mui/material';
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      name: "Property Management API",
      description:
        "Web-Based ASP.NET API that enables landlords to manage their properties remotely. Includes oversight of performance, rentals, revenue, tenant complaints, and maintenance requests. Reduces on-site management needs and lowers operating costs.",
      image:
        "https://plus.unsplash.com/premium_vector-1724049481742-71860be4d15b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UHJvcGVydHklMjBtYW5hZ2VtZW50JTIwYXBwfGVufDB8fDB8fHww",
      framework: "ASP.NET Core, C#",
      link: "https://github.com/GivenMoreti/property_man_api_aspnet",
    },
    {
      name: "Neon Laser Game",
      description:
        "Collaborated on a vacation-work first-person shooter mobile game that allows team-based gameplay. On login, players are assigned to teams and earn points by shooting opponents.",
      image:
        "https://images.unsplash.com/vector-1744772732051-89e80c9f152f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFzZXIlMjBzaG9vdGluZyUyMGdhbWV8ZW58MHx8MHx8fDA%3D",
      framework: "Vanilla JavaScript, HTML & CSS",
      link: "https://github.com/GivenMoreti/Group-8-BBD",
    },
    {
      name: "Event Booking REST API",
      description:
        "Built a RESTful event booking system using Django and Django REST Framework. Supports user registration, event creation, bookings, and authentication via JWT. Designed for scalability and clean API design.",
      image:
        "https://plus.unsplash.com/premium_vector-1731796336259-24423471f612?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEV2ZW50JTIwQm9va2luZyUyMEFwcHxlbnwwfHwwfHx8MA%3D%3D",
      framework: "Django, Django REST Framework, Python",
      link: "https://github.com/GivenMoreti/event-booking-app-restful-apis",
    },
  ];

  return (
  <Box component="section" py={8} sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
  <Typography variant="h4" align="center" color="primary" fontWeight={700} gutterBottom sx={{ fontFamily: 'Poppins, Noto Sans JP, Comic Neue, cursive, sans-serif' }}>
          My Projects
        </Typography>
  <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5, maxWidth: 700, mx: 'auto', fontFamily: 'Poppins, Noto Sans JP, Comic Neue, cursive, sans-serif' }}>
          Explore some of my work — from full-stack APIs to interactive games. All open-source and built with passion.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((proj, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} display="flex">
              <ProjectCard project={proj} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}