import React, { useState, useEffect } from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  source: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Understanding Zero Trust Architecture",
    date: "2024-03-15",
    excerpt: "Explore the principles of Zero Trust and how it's reshaping network security strategies in modern organizations.",
    link: "#",
    source: "NetAdicto"
  },
  {
    title: "The Rise of 5G and Its Impact on Cybersecurity",
    date: "2024-03-10",
    excerpt: "As 5G networks become more prevalent, new security challenges and opportunities arise. Learn about the implications for cybersecurity professionals.",
    link: "#",
    source: "NetAdicto"
  },
  {
    title: "Demystifying SDN: Software-Defined Networking Explained",
    date: "2024-03-05",
    excerpt: "Learn how SDN is transforming network management and improving flexibility in enterprise environments.",
    link: "#",
    source: "NetAdicto"
  },
  {
    title: "Latest Trends in Network Security",
    date: "2024-03-01",
    excerpt: "Discover the cutting-edge technologies and strategies shaping the future of network security.",
    link: "#",
    source: "NetAdicto"
  },
  {
    title: "Cloud Security Best Practices",
    date: "2024-02-25",
    excerpt: "Explore essential security measures for protecting your data and applications in the cloud.",
    link: "#",
    source: "NetAdicto"
  },
  {
    title: "The Role of AI in Cybersecurity",
    date: "2024-02-20",
    excerpt: "Learn how artificial intelligence is revolutionizing threat detection and response in cybersecurity.",
    link: "#",
    source: "NetAdicto"
  }
];

const Blog: React.FC = () => {
  const [allPosts, setAllPosts] = useState<BlogPost[]>(blogPosts);

  useEffect(() => {
    // Simulating fetching external posts
    const fetchExternalPosts = () => {
      const externalPosts: BlogPost[] = [
        {
          title: "Cisco's Latest Security Updates",
          date: "2024-03-18",
          excerpt: "Cisco releases new security patches for IOS and IOS XE devices. Learn about the latest vulnerabilities and how to protect your network.",
          link: "https://tools.cisco.com/security/center/publicationListing.x",
          source: "Cisco Security"
        },
        {
          title: "MikroTik RouterOS 7.8 Release",
          date: "2024-03-17",
          excerpt: "MikroTik announces RouterOS 7.8 with new features and improvements. Discover what's new and how it can enhance your network.",
          link: "https://mikrotik.com/download",
          source: "MikroTik News"
        },
        {
          title: "Recent Cyber Attacks and Their Implications",
          date: "2024-03-16",
          excerpt: "Analysis of recent high-profile cyber attacks and lessons learned for improving organizational security posture.",
          link: "https://krebsonsecurity.com",
          source: "Krebs on Security"
        }
      ];

      setAllPosts([...blogPosts, ...externalPosts]);
    };

    fetchExternalPosts();
  }, []);

  return (
    <div className="mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center">NetAdicto Blog & News</h1>
      <div className="space-y-8">
        {allPosts.map((post, index) => (
          <motion.article 
            key={index} 
            className="bg-blur p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <div className="flex justify-between items-center text-gray-300 mb-4">
              <p className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-sm">Source: {post.source}</p>
            </div>
            <p className="mb-4">{post.excerpt}</p>
            <a 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:underline inline-flex items-center transition-colors"
            >
              Read more <ExternalLink size={16} className="ml-1" />
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;