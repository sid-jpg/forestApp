import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from '../ui/GradientText';

interface MemberInfoProps {
  name: string;
  designation: string;
  details: string;
}

export const MemberInfo: React.FC<MemberInfoProps> = ({ name, designation, details }) => (
  <>
    <div className="p-4 text-center transition-all duration-500 group-hover:opacity-0">
      <GradientText className="text-xl font-bold block mb-1">{name}</GradientText>
      <span className="text-gray-400 text-sm">{designation}</span>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute bottom-0 left-0 w-full backdrop-blur-sm bg-black/40 p-4 
        transform translate-y-full transition-transform duration-500 ease-out
        group-hover:translate-y-0"
    >
      <div className="text-white text-center">
        {details.split('\n').map((line, i) => (
          <p key={i} className={i === 0 ? 'font-bold' : 'text-sm mt-1 text-gray-200'}>
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  </>
);