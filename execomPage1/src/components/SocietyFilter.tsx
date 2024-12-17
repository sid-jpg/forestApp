import React from 'react';
import { motion } from 'framer-motion';
import { Society } from '../types';
import { FilterButton } from './ui/FilterButton';

interface SocietyFilterProps {
  selectedSociety: Society | 'ALL';
  onSelectSociety: (society: Society | 'ALL') => void;
}

const societies: (Society | 'ALL')[] = ['ALL', 'IEEE', 'ACM', 'ISTE', 'CSI'];

export const SocietyFilter: React.FC<SocietyFilterProps> = ({
  selectedSociety,
  onSelectSociety,
}) => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-wrap justify-center gap-3 mb-12"
  >
    {societies.map((society) => (
      <FilterButton
        key={society}
        active={selectedSociety === society}
        onClick={() => onSelectSociety(society)}
      >
        {society}
      </FilterButton>
    ))}
  </motion.div>
);