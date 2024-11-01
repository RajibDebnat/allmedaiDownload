import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

const valuesData = [
  { 
    icon: "👥", 
    title: "Community First", 
    description: "Building a vibrant global community where everyone's voice matters." 
  },
  { 
    icon: "✅", 
    title: "Trust & Security", 
    description: "Maintaining the highest standards of security and transparency." 
  },
  { 
    icon: "⚡", 
    title: "Lightning Fast", 
    description: "Delivering blazing-fast performance with cutting-edge technology." 
  },
];

const teamMembers = [
  { 
    name: "Rajib D.", 
    position: "Founder & CEO", 
    image: "/src/assets/founder.jpeg",
    bio: "10+ years of experience in tech leadership"
  },
  { 
    name: "Anita P.", 
    position: "Chief Marketing Officer", 
    image: "/api/placeholder/150/150",
    bio: "Digital marketing expert with global experience"
  },
  { 
    name: "Vikram T.", 
    position: "Lead Developer", 
    image: "/api/placeholder/150/150",
    bio: "Full-stack developer passionate about user experience"
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-screen flex items-center rounded-xl justify-center px-4 bg-gradient-to-r from-blue-900 to-blue-700"
        tyle={{
          backgroundImage: `url('/src/assets/B.png')`,  // Replace with your image path
          backgroundSize: 'contain', // Adjust this to 'cover' or 'contain' based on your preference
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Welcome to Media Downloader
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl opacity-90"
          >
            Your one-stop solution for downloading media from YouTube, Instagram, and more with ease.
          </motion.p>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 text-white"
        >
          <ChevronDown size={40} />
        </motion.div>
      </motion.div>

      {/* Our Story Section */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-24"
      >
        <motion.div 
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Our Story</h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            From a passionate side project to a global platform serving millions, 
            our journey has been driven by a simple mission: making media accessible to everyone.
            We've grown through challenges, celebrated victories, and learned from our community every step of the way.
          </p>
        </motion.div>
      </motion.div>

      {/* Core Values Section */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-gray-50 py-24 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuesData.map((value, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl shadow-xl"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white text-3xl mx-auto mb-6 transform rotate-3">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">{value.title}</h3>
                <p className="text-gray-600 text-center text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Team Section */}
      {/* <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-4 py-24"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl shadow-xl"
            >
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-600"
              />
              <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
              <p className="text-blue-600 text-lg text-center mb-4">{member.position}</p>
              <p className="text-gray-600 text-center text-lg">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div> */}

      {/* Vision & Mission Section */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="bg-gradient-to-r  from-blue-700 to-blue-900 text-white py-24 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
              <p className="opacity-90 text-xl leading-relaxed">
                To revolutionize digital content accessibility while maintaining the highest 
                standards of quality and user experience. We envision a world where managing 
                your media content is effortless and secure.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
              <p className="opacity-90 text-xl leading-relaxed">
                To provide innovative, user-friendly solutions that make media downloading 
                accessible to everyone. We're committed to continuous improvement and 
                staying ahead of technological advancements.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 py-24 text-center"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-gray-600 mb-12 max-w-2xl mx-auto text-xl"
        >
          Join thousands of satisfied users who trust Media Downloader for their content needs.
        </motion.p>
        <motion.button 
          variants={scaleIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <Link to='/connect'>
          Get Started Now
          </Link>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default AboutUs;