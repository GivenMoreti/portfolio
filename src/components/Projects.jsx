import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';

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
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom textAlign="center">
        My Projects
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 4,
          overflowX: 'auto',
          py: 2,  
          scrollbarWidth: 'none',
     
        }}
      >
        {projects.map((proj, index) => (
          <Box
            key={index}
            sx={{
              minWidth: { xs: '280px', sm: '320px' }, // Consistent card width
              flex: '0 0 auto', // Prevent shrinking
            }}
          >
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: 8,
                },
              }}
            >
              <CardMedia
                component="img"
                height="180"
                width="120"
                image={proj.image}
                alt={proj.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1,maxWidth:320}}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {proj.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {proj.description.substring(0, 120)}...
                </Typography>
                <Box mt="auto">
                  <Typography
                    variant="caption"
                    sx={{
                      display: 'inline-block',
                      bgcolor: 'gray',
                      color: 'white',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {proj.framework}
                  </Typography>
                </Box>
              </CardContent>
              <Box p={2} pt={0}>
                <Button
                  size="small"
                  variant="outlined"
                  color="gray"
                  href={proj.link}
                  target="_blank"
                >
                  <GitHubIcon  />
                  <span>View on GitHub</span>
      
                </Button>
              </Box>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
}