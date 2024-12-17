import React from 'react';
import { motion } from 'framer-motion';
import { filterButtonVariants } from '../../constants/animations';

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ active, onClick, children }) => (
  <motion.button
    variants={filterButtonVariants}
    initial="idle"
    whileHover="hover"
    whileTap="tap"
    onClick={onClick}
    className={`
      px-6 py-2 rounded-full backdrop-blur-sm transition-all duration-300
      border border-transparent
      ${active 
        ? 'bg-white/10 border-white/20 text-white shadow-lg shadow-white/10' 
        : 'bg-black/20 text-gray-400 hover:text-gray-200 hover:bg-black/30'}
    `}
  >
    {children}
  </motion.button>
);