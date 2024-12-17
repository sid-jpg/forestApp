import { Variants } from 'framer-motion';

export const cardVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

export const filterButtonVariants: Variants = {
  idle: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  },
  tap: { scale: 0.98 }
};