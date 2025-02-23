import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Journey from './pages/Journey';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen transition-colors duration-300 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 bg-gradient-to-br from-white via-purple-50 to-white">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/journey" element={<Journey />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;