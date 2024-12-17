import React from 'react';
import { motion } from 'framer-motion';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => (
  <motion.span
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, type: "spring" }}
    className={`bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent ${className}`}
  >
    {children}
  </motion.span>
);