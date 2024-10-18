import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Network } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-600 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Network size={32} className="text-white" />
          <span className="text-2xl font-bold text-white">NetAdicto</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:text-blue-200 transition-colors">Home</Link></li>
            <li><Link to="/resume" className="text-white hover:text-blue-200 transition-colors">Resume</Link></li>
            <li><Link to="/blog" className="text-white hover:text-blue-200 transition-colors">Blog</Link></li>
            <li><Link to="/forum" className="text-white hover:text-blue-200 transition-colors">Forum</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;