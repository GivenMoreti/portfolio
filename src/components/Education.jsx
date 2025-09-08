import React from 'react';
import { Container, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Box } from '@mui/material';

export default function Education() {
  const educationData = [
    {
      school: "University of Johannesburg",
      course: "Mining Engineering",
      years: "2018–2020",
      status: "Graduated"
    },
    {
      school: "North-West University",
      course: "BSc Information Technology",
      years: "2023–2025",
      status: "In Progress"
    }
  ];

  return (
  <Box component="section" py={8} sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="md">
  <Typography variant="h4" align="center" color="primary" fontWeight={700} gutterBottom sx={{ fontFamily: 'Poppins, Noto Sans JP, Comic Neue, cursive, sans-serif' }}>
          Education
        </Typography>
        <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3, mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>School</strong></TableCell>
                <TableCell><strong>Course</strong></TableCell>
                <TableCell><strong>Years</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {educationData.map((ed, index) => (
                <TableRow key={index}>
                  <TableCell>{ed.school}</TableCell>
                  <TableCell>{ed.course}</TableCell>
                  <TableCell>{ed.years}</TableCell>
                  <TableCell>{ed.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
