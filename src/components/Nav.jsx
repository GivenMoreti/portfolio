import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  AppBar,
  Toolbar,
  useScrollTrigger,
  Slide
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import StarIcon from '@mui/icons-material/Star';

const navItems = [
  { name: 'Home', path: '#home', icon: <HomeIcon /> },
  { name: 'Projects', path: '#projects', icon: <CodeIcon /> },
  { name: 'Skills', path: '#skills', icon: <StarIcon /> },
  { name: 'Education', path: '#education', icon: <SchoolIcon /> },
  { name: 'Contact', path: '/contactme', icon: <RocketLaunchIcon /> },
];

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Nav() {
  const location = useLocation();
  const [active, setActive] = useState('Home');

  // Section highlight on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'education'];
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActive(sec.charAt(0).toUpperCase() + sec.slice(1));
            return;
          }
        }
      }
      setActive('Home');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll for hash links
  const handleNavClick = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const id = path.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <HideOnScroll>
      <AppBar position="fixed" color="transparent" elevation={0} sx={{
        backdropFilter: 'blur(12px)',
        background: 'rgba(52, 54, 66, 0.55)',
        borderBottom: '1.5px solid rgba(134, 204, 237, 0.08)',
        boxShadow: '0 4px 32px 0 rgba(139, 225, 233, 0.12)',
        zIndex: 1200
      }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo / Brand */}
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', letterSpacing: 2, color: '#fff', textShadow: '0 2px 8px #0ff' }}>
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
                sx={{ fontWeight: 'bold', textTransform: 'none', fontSize: 22, letterSpacing: 2, color: '#fff' }}
              >
                Given.T Moreti
              </Button>
            </Typography>
            {/* Navigation Bar */}
            <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={item.path.startsWith('#') ? 'a' : RouterLink}
                  href={item.path.startsWith('#') ? item.path : undefined}
                  to={!item.path.startsWith('#') ? item.path : undefined}
                  color={active === item.name ? 'primary' : 'inherit'}
                  startIcon={item.icon}
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    color: active === item.name ? '#0ff' : '#fff',
                    background: active === item.name ? 'rgba(0,255,255,0.08)' : 'transparent',
                    borderRadius: 2,
                    px: 2,
                    transition: 'all 0.2s',
                    boxShadow: active === item.name ? '0 2px 12px #0ff8' : 'none',
                    '&:hover': {
                      color: '#0ff',
                      background: 'rgba(0,255,255,0.12)',
                      boxShadow: '0 2px 12px #0ff4',
                    },
                  }}
                  onClick={e => handleNavClick(e, item.path)}
                >
                  {item.name}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
