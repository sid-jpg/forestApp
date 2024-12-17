import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Member, Society } from '../types';
import { members } from '../data/members';
import { MemberCard } from '../components/MemberCard';
import { SocietyFilter } from '../components/SocietyFilter';
import { GradientText } from '../components/ui/GradientText';

export const ExecutiveCommittee: React.FC = () => {
  const [selectedSociety, setSelectedSociety] = React.useState<Society | 'ALL'>(
    'ALL'
  );

  const filteredMembers = members.filter(
    (member) => selectedSociety === 'ALL' || member.society === selectedSociety
  );

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <GradientText>Executive Committee</GradientText>
        </motion.h1>

        <SocietyFilter
          selectedSociety={selectedSociety}
          onSelectSociety={setSelectedSociety}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSociety}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
