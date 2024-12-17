import React from 'react';
import { motion } from 'framer-motion';

interface MemberImageProps {
  src: string;
  alt: string;
}

export const MemberImage: React.FC<MemberImageProps> = ({ src, alt }) => (
  <motion.div
    className="relative overflow-hidden transition-all duration-700 ease-out"
    initial={false}
  >
    <img
      src={src}
      alt={alt}
      className="w-20 h-20 rounded-full mx-auto mt-6 object-cover transition-all duration-500 
        group-hover:w-full group-hover:h-[65%] group-hover:rounded-none group-hover:mt-0
        filter saturate-50 group-hover:saturate-100"
    />
  </motion.div>
);