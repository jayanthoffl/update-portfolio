import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/journey', label: 'Journey' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 dark:bg-black/50 bg-white/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold dark:text-purple-300 text-purple-600">JR</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative ${
                  location.pathname === link.path
                    ? 'dark:text-purple-300 text-purple-600'
                    : 'dark:text-white text-gray-800 hover:text-purple-600 dark:hover:text-purple-300'
                } transition-colors`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 dark:bg-purple-300 bg-purple-600 bottom-[-4px]"
                  />
                )}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full dark:bg-purple-500/10 bg-purple-100 dark:text-purple-300 text-purple-600"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden dark:text-white text-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-2 space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md ${
                  location.pathname === link.path
                    ? 'dark:bg-purple-500/20 bg-purple-100 dark:text-purple-300 text-purple-600'
                    : 'dark:text-white text-gray-800 hover:bg-purple-100 dark:hover:bg-purple-500/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="w-full px-3 py-2 text-left rounded-md dark:text-white text-gray-800 hover:bg-purple-100 dark:hover:bg-purple-500/10"
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}