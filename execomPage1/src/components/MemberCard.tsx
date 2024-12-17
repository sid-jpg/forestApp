import React from 'react';
import { Member } from '../types';
import { motion } from 'framer-motion';

interface MemberCardProps {
  member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-[190/254] bg-gray-800 rounded-lg overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-3/4 h-2 mx-auto bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-800 rounded-b-xl" />
      
      <div className="relative h-full">
        <div className="transition-all duration-500 group-hover:scale-110">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-20 h-20 rounded-full mx-auto mt-8 object-cover transition-all duration-500 group-hover:w-full group-hover:h-3/4 group-hover:rounded-none group-hover:mt-0"
          />
        </div>

        <div className="p-4 text-center transition-opacity duration-500 group-hover:opacity-0">
          <h3 className="text-xl font-bold bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
            {member.name}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{member.designation}</p>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-purple-900/90 to-transparent p-4 transform translate-y-full transition-transform duration-500 group-hover:translate-y-0">
          <div className="text-white text-center">
            {member.details.split('\n').map((line, i) => (
              <p key={i} className={i === 0 ? 'font-bold' : 'text-sm mt-1'}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};