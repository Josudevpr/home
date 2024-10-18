import React from 'react';
import { Shield, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="text-center text-white mt-16">
      <motion.h1 
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to NetAdicto
      </motion.h1>
      <motion.p 
        className="text-xl mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Your hub for networking and cybersecurity insights
      </motion.p>
      <div className="flex justify-center space-x-12">
        <motion.div 
          className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Network size={64} className="text-blue-300 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Networking</h2>
          <p className="mt-2">Explore the latest in network technologies</p>
        </motion.div>
        <motion.div 
          className="flex flex-col items-center bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Shield size={64} className="text-green-300 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Cybersecurity</h2>
          <p className="mt-2">Stay updated on security best practices</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;