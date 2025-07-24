import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  AppBar,
  Toolbar,
} from '@mui/material';

export default function Nav() {
  const navItems = [
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contactme' },
  ];

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          
          {/* Logo / Brand */}
          <Typography variant="h6" component="div">
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{ fontWeight: 'bold', textTransform: 'none' }}
            >
              Given.T Moreti
            </Button>
          </Typography>

          {/*NAVIGATION BAR */}
          <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{ textTransform: 'none' }}
              >
                {item.name}
              </Button>
            ))}
          </Stack>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
}