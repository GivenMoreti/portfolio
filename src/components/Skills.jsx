import { Container, Typography } from '@mui/material'
import React from 'react'

export default function Skills() {
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
                  Skills
          </Typography>
            <Typography
                  variant="body1"
                  color="text.secondary"
                  textAlign="center"
                  sx={{ mb: 5, maxWidth: "700px", mx: "auto" }}
                >
              I specialize in freelance backend API development and integration using .NET Core and Entity Framework Core for robust database connectivity. I work with relational databases such as PostgreSQL and Microsoft SQL Server (MSSQL), and leverage Docker and Kubernetes for containerization and orchestration. For secure authentication and authorization, I implement Microsoft Identity and other modern security practices. I use Serilog for structured in-app logging and deploy projects to platforms like Render and Netlify.
          </Typography>
      </Container>
  )
}
