import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import styles from './Loading.module.scss';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'medium', 
  text = 'Chargement...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear" as const
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2, duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className={`${styles.loading} ${fullScreen ? styles.fullScreen : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.content}>
        <motion.div 
          className={`${styles.spinner} ${sizeClasses[size]}`}
          variants={spinnerVariants}
          animate="animate"
        >
          <Loader2 className={styles.icon} />
        </motion.div>
        
        {text && (
          <motion.p 
            className={styles.text}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            {text}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default Loading;
