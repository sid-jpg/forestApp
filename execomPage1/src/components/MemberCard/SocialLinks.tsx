import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { SocialLinks as SocialLinksType } from '../../types';

interface SocialLinksProps {
  links: SocialLinksType;
}

const iconVariants = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  hover: { scale: 1.2 }
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => (
  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {links.linkedin && (
      <motion.a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
      >
        <Linkedin className="w-4 h-4 text-white" />
      </motion.a>
    )}
    {links.github && (
      <motion.a
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
      >
        <Github className="w-4 h-4 text-white" />
      </motion.a>
    )}
    {links.twitter && (
      <motion.a
        href={links.twitter}
        target="_blank"
        rel="noopener noreferrer"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
      >
        <Twitter className="w-4 h-4 text-white" />
      </motion.a>
    )}
  </div>
);