import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Nav from './components/Nav'; // Your navigation bar
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactMe from './pages/contactMe'; // Maybe a form page?

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Nav />
        <main style={{ flexGrow: 1, padding: '20px 0' }}>
          <Routes>
            {/* <Route path="/" element={<Intro />} /> */}
            {/* <Route path="/projects" element={<Projects />} />
             */}
            <Route path="/contactme" element={<ContactMe />} />
          </Routes>
        </main>
        <Intro/>
        <Projects/>
        <Footer/>

      </div>
    </Router>
  );
}

export default App;