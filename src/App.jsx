

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactMe from './pages/ContactMe';
import Skills from './components/Skills';
import Education from './components/Education';
import { Box, Stack } from '@mui/material';
import './App.css';


function App() {
  return (
    <Router>
      <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        {/* Universe Animated Background */}
        <div className="universe-bg" aria-hidden="true"></div>
        <Stack direction="column" minHeight="100vh" sx={{ position: 'relative', zIndex: 1 }}>
          <Nav />
          <Box component="main" flexGrow={1} width="100%" px={0}>
            <Routes>
              <Route path="/contactme" element={<ContactMe />} />
            </Routes>
            <div id="home">
              <Intro />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="education">
              <Education />
            </div>
          </Box>
          <Footer />
        </Stack>
      </Box>
    </Router>
  );
}

export default App;