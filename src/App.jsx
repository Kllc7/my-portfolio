import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import SocialBar from './components/SocialBar';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-40}} transition={{duration:0.5}}>
            <Home />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-40}} transition={{duration:0.5}}>
            <About />
          </motion.div>
        } />
        <Route path="/projects" element={
          <motion.div initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-40}} transition={{duration:0.5}}>
            <Projects />
          </motion.div>
        } />
        <Route path="/resume" element={
          <motion.div initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-40}} transition={{duration:0.5}}>
            <Resume />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <SocialBar />
        <Header />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
