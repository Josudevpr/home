import React, { useState } from 'react';
import { MessageSquare, User, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const forumTopics = [
  {
    title: "Best practices for securing a home network",
    author: "NetworkNinja",
    replies: 15,
    lastActivity: "2 hours ago",
    content: "I'm looking for advice on securing my home network. What are some essential steps I should take?",
  },
  {
    title: "Recommendations for network monitoring tools",
    author: "SecuritySam",
    replies: 8,
    lastActivity: "1 day ago",
    content: "Can anyone suggest some good network monitoring tools for a small business environment?",
  },
  {
    title: "How to prepare for the CISSP certification?",
    author: "CertSeeker",
    replies: 22,
    lastActivity: "3 days ago",
    content: "I'm planning to take the CISSP exam. What study materials and strategies do you recommend?",
  },
];

const Forum: React.FC = () => {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);

  const toggleTopic = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  return (
    <div className="mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center">NetAdicto Forum</h1>
      <div className="bg-blur rounded-lg shadow-md overflow-hidden">
        {forumTopics.map((topic, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div 
              className="p-4 border-b border-gray-700 last:border-b-0 cursor-pointer hover:bg-gray-800 transition-colors"
              onClick={() => toggleTopic(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
                {expandedTopic === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              <div className="flex justify-between text-sm text-gray-300">
                <p className="flex items-center">
                  <User size={16} className="mr-1" />
                  {topic.author}
                </p>
                <p className="flex items-center">
                  <MessageSquare size={16} className="mr-1" />
                  {topic.replies} replies
                </p>
                <p>Last activity: {topic.lastActivity}</p>
              </div>
            </div>
            <AnimatePresence>
              {expandedTopic === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-gray-800"
                >
                  <p>{topic.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Forum;