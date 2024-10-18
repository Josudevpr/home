import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Forum from './components/Forum';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <ParallaxBackground />
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;