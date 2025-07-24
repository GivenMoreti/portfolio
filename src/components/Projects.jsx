import React from "react";
import { Container, Box, Typography } from "@mui/material";
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
    <Container sx={{ py: { xs: 6, md: 8 } }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        textAlign="center"
        fontWeight={700}
        sx={{ mb: 2 }}
      >
        My Projects
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        sx={{ mb: 5, maxWidth: "700px", mx: "auto" }}
      >
        Explore some of my work — from full-stack APIs to interactive games. All
        open-source and built with passion.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 3, sm: 4 },
          overflowX: { xs: "auto", sm: "unset" },
          py: { xs: 1, sm: 0 },
          px: { xs: 2, sm: 0 },
          pb: 4,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none", 
          alignItems: "stretch",
        }}
      >
        {projects.map((proj, index) => (
          <Box
            key={index}
            sx={{
              minWidth: { xs: "300px", sm: "320px" },
              flex: { xs: "0 0 auto", sm: "1" },
              maxWidth: { sm: "350px" },
            }}
          >
            <ProjectCard project={proj} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}