import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onComplete: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onComplete }) => {
  useEffect(() => {
    // Optional: Auto-transition after animation completes
    const timer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black 
        flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <div className="mb-8 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <TypeAnimation
            sequence={[
              'Welcome to',
              1000,
              'Welcome to Executive Committee of',
              1000,
              'Welcome to Executive Committee of\nBEC IEEE Student Branch',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="whitespace-pre-line bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent"
            repeat={0}
          />
        </div>

        <motion.button
          onClick={onComplete}
          className="group flex items-center gap-2 mx-auto px-6 py-3 bg-white/10 rounded-full
            text-white/80 hover:text-white transition-all duration-300
            hover:bg-white/20 hover:shadow-lg hover:shadow-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Meet the Team</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 5 }}
      >
        <p className="text-white/60 text-sm">Click to continue</p>
      </motion.div>
    </motion.div>
  );
};