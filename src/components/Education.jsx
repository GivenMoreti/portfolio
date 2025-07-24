import React from 'react';
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from '@mui/material';

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
    <Container sx={{ py: { xs: 6, md: 8 } }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Education
      </Typography>

      <TableContainer component={Paper}>
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
  );
}
