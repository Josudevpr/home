import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    fetch('https://picsum.photos/200')
      .then(response => setProfileImage(response.url));
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-blur rounded-xl p-8 shadow-lg">
      <div className="flex items-center mb-8">
        <motion.img 
          src={profileImage} 
          alt="Josue Miranda" 
          className="w-32 h-32 rounded-full mr-6 object-cover"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">Josue Miranda</h1>
          <p className="text-xl text-gray-300">Networking and Cybersecurity Student</p>
        </div>
      </div>

      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <GraduationCap className="mr-2 text-blue-400" /> Education
        </h2>
        <div className="ml-6">
          <h3 className="text-xl font-medium">Bachelor's in Networking and Cybersecurity</h3>
          <p>University Name - Expected Graduation: 20XX</p>
        </div>
      </motion.section>

      <motion.section 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Briefcase className="mr-2 text-blue-400" /> Experience
        </h2>
        <div className="ml-6">
          <h3 className="text-xl font-medium">Cybersecurity Intern</h3>
          <p>Company Name - Summer 20XX</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Assisted in vulnerability assessments</li>
            <li>Participated in network security monitoring</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Award className="mr-2 text-blue-400" /> Skills
        </h2>
        <ul className="ml-6 grid grid-cols-2 gap-2">
          <li>Network Protocols</li>
          <li>Firewall Configuration</li>
          <li>Penetration Testing</li>
          <li>Incident Response</li>
          <li>Python Programming</li>
          <li>Linux Administration</li>
        </ul>
      </motion.section>
    </div>
  );
};

export default Resume;