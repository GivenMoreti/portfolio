
import React from 'react';
import { Box, Container, Typography, Stack, IconButton, Link } from '@mui/material';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Gmail',
      icon: <FaEnvelope size={24} color="#d02492" />,
      url: 'mailto:moretigiven@gmail.com',
      label: 'Send Email',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} color="#0095ed" />,
      url: 'https://www.linkedin.com/in/tlou-given-moreti-31b1bb331/',
      label: 'View LinkedIn Profile',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={24} color="#d02492" />,
      url: 'https://github.com/GivenMoreti',
      label: 'View GitHub Repositories',
    },
  ];

  return (
    <Box component="footer" py={8} sx={{ background: 'linear-gradient(90deg, #fce4ec 0%, #f8fafc 100%)', textAlign: 'center', width: '100%' }}>
      <Container maxWidth="lg">
        <Typography variant="h5" color="primary" fontWeight="bold" mb={3}>
          Get In Touch
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={6} mb={4} flexWrap="wrap">
          {socialLinks.map((item, index) => (
            <Box key={index} textAlign="center">
              <Link href={item.url} target="_blank" rel="noopener" aria-label={item.label} underline="none" sx={{ display: 'inline-block', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' } }}>
                <IconButton aria-label={item.label} size="large" sx={{ background: 'transparent', '&:hover': { background: '#fce4ec' } }}>
                  {item.icon}
                </IconButton>
                <Typography variant="body2" color="text.primary" mt={1}>{item.name}</Typography>
              </Link>
            </Box>
          ))}
        </Stack>
        <Typography variant="caption" color="text.secondary" mt={6} display="block">
          © {new Date().getFullYear()} Tlou Given Moreti.
        </Typography>
      </Container>
    </Box>
  );
}