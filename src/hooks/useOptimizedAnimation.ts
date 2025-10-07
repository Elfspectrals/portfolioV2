import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { isReducedMotion, getDeviceType } from '../utils/performance';

interface UseOptimizedAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
}

export const useOptimizedAnimation = (options: UseOptimizedAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    delay = 0,
    duration = 0.6
  } = options;

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  const { ref, inView } = useInView({
    threshold,
    triggerOnce
  });

  useEffect(() => {
    setDeviceType(getDeviceType());
  }, []);

  useEffect(() => {
    if (inView && !isReducedMotion()) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  const getAnimationVariants = () => {
    if (isReducedMotion()) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      };
    }

    const baseVariants = {
      hidden: { 
        opacity: 0, 
        y: deviceType === 'mobile' ? 20 : 30 
      },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: deviceType === 'mobile' ? duration * 0.8 : duration,
          ease: "easeOut"
        }
      }
    };

    return baseVariants;
  };

  return {
    ref,
    inView,
    shouldAnimate,
    deviceType,
    variants: getAnimationVariants(),
    isReducedMotion: isReducedMotion()
  };
};
