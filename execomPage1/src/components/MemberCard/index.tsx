import React from 'react';
import { motion } from 'framer-motion';
import { Member } from '../../types';
import { cardVariants } from '../../constants/animations';
import { MemberImage } from './MemberImage';
import { MemberInfo } from './MemberInfo';
import { SocialLinks } from './SocialLinks';

interface MemberCardProps {
  member: Member;
}

export const MemberCard: React.FC<MemberCardProps> = ({ member }) => (
  <motion.div
    layout
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    whileHover={{ y: -5 }}
    className="relative w-full aspect-[3/4] rounded-xl overflow-hidden group
      bg-gradient-to-b from-gray-900 to-gray-800
      hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 
      transition-opacity duration-500 group-hover:opacity-100" />
    
    <SocialLinks links={member.socialLinks} />
    <MemberImage src={member.imageUrl} alt={member.name} />
    <MemberInfo
      name={member.name}
      designation={member.designation}
      details={member.details}
    />
    
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  </motion.div>
);