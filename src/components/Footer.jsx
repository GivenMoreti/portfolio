import React from 'react';
import {
  Container,
  Typography,
  Link,
  Box,
  Stack,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  const socialLinks = [
    {
      name: 'Gmail',
      icon: <EmailIcon color="secondary" />,
      url: 'mailto:moretigiven@gmail.com',
      label: 'Send Email',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon color="primary" />,
      url: 'https://www.linkedin.com/in/tlou-given-moreti-31b1bb331/',
      label: 'View LinkedIn Profile',
    },
    {
      name: 'GitHub',
      icon: <GitHubIcon color="secondary" />,
      url: 'https://github.com/GivenMoreti',
      label: 'View GitHub Repositories',
    },
  ];

  return (
    <Container sx={{ py: 6, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Get In Touch
      </Typography>

      <Stack
        spacing={4}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        {socialLinks.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform 0.2s',
              },
            }}
          >
            {item.icon}
            <Link
              href={item.url}
              target={item.url.startsWith('http') ? '_blank' : undefined}
              rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              variant="body1"
              color="inherit"
              underline="hover"
              aria-label={item.label}
            >
              {item.name}
            </Link>
          </Box>
        ))}
      </Stack>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 5 }}>
        © {new Date().getFullYear()} Tlou Given Moreti.
      </Typography>
    </Container>
  );
}