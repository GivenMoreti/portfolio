import React from 'react';
import { Button, Typography, Container, Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Intro() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center"
        gap={4}
      >
      
        <Box flex={1}>
          <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
            My name is Tlou Given Moreti
          </Typography>
          <Typography variant="body1">
            A final year BSc. Information Technology (Full-time, Distance) student at North West University.
            I am an aspiring backend software engineer with a keen passion for the .NET framework.
            I have hands-on experience with Java, C#, Python, React.js, and JavaScript, with over 100 repositories on{' '}
            <Link
              href="https://github.com/GivenMoreti?tab=repositories"
              target="_blank"
              color="primary"
            >
              GitHub
            </Link>.
            Happy coding!
          </Typography>

          {/* Buttons */}
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            gap={2}
            mt={3}
          >
            <Button
              variant="contained"
              component="a"
              href="/cv.pdf"
              download
              sx={{ px: 4 }}
            >
              Download My Resume
            </Button>
            <Button
              variant="outlined"
                component={RouterLink}
                to="/contactme"
                sx={{ px: 4 }}
            >
              Contact Me
            </Button>
          </Box>
        </Box>

        {/* Portrait Image */}
        <Box flex={1} textAlign="center">
          <Box
            component="img"
            id="portrait-img"
            src="pic.jpg"
            alt="Tlou Given Moreti Portrait"
            sx={{
              width: '100%',
              maxWidth: 350,
              borderRadius: '50%',
              boxShadow: 'none',
              border:'none'
            }}
          />
        </Box>
      </Box>
    </Container>
  );
}