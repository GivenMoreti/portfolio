import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function Skills() {
  return (
  <Box component="section" py={8} sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
  <Typography variant="h4" align="center" color="primary" fontWeight={700} gutterBottom sx={{ fontFamily: 'Poppins, Noto Sans JP, Comic Neue, cursive, sans-serif' }}>
          Skills
        </Typography>
  <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5, maxWidth: 700, mx: 'auto', fontFamily: 'Poppins, Noto Sans JP, Comic Neue, cursive, sans-serif' }}>
          I specialize in freelance backend API development and integration using .NET Core and Entity Framework Core for robust database connectivity. I work with relational databases such as PostgreSQL and Microsoft SQL Server (MSSQL), and leverage Docker and Kubernetes for containerization and orchestration. For secure authentication and authorization, I implement Microsoft Identity and other modern security practices. I use Serilog for structured in-app logging and deploy projects to platforms like Render and Netlify.
        </Typography>
      </Container>
    </Box>
  );
}
