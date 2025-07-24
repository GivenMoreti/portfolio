import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'; 
import Intro from './components/Intro';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactMe from './pages/contactMe'; 

function App() {
  return (
    <Router>
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Nav />
        <main style={{ flexGrow: 1, padding: '20px 0' }}>
          <Routes>
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