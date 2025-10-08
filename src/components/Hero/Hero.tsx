import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { 
  Code2, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail
} from 'lucide-react';
import jeromeProfilePic from '../../assets/jerome.jpg';
import MailModal from '../MailModal/MailModal';
import styles from './Hero.module.scss';

interface HeroProps {
  t: (key: string) => string;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMailModalOpen, setIsMailModalOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  const { ref: heroRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 20,
        y: (e.clientY - window.innerHeight / 2) / 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.section 
      id="home"
      ref={heroRef}
      className={styles.hero}
      style={{ y, opacity }}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Animated Background */}
      <div className={styles.background}>
        <div className={styles.gradientOrb} style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }} />
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Profile Section */}
          <motion.div 
            className={styles.profileSection}
            variants={itemVariants}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
            >
              <motion.div 
                className={styles.avatarContainer}
                variants={floatingVariants}
                animate="animate"
              >
                <div className={styles.avatarGlow} />
                <img
                  src={jeromeProfilePic}
                  alt={t("homepage.avatarAlt")}
                  className={styles.avatar}
                  width="200"
                  height="200"
                />
                <div className={styles.statusBadge}>
                  <div className={styles.statusDot} />
                  <span>Disponible</span>
                </div>
              </motion.div>
            </Tilt>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className={styles.textContent}
            variants={itemVariants}
          >
            <motion.div 
              className={styles.greeting}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Code2 className={styles.icon} />
              <span>{t("homepage.heroGreeting")}</span>
            </motion.div>

            <motion.h1 
              className={styles.title}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className={styles.name}>Jérôme Neupert</span>
              <span className={styles.role}>
                {t("homepage.heroRole")}
              </span>
            </motion.h1>

            <motion.p 
              className={styles.description}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {t("homepage.heroSubtitle1")}
              <br />
              {t("homepage.heroSubtitle2")}
            </motion.p>

            {/* Stats */}
            <motion.div 
              className={styles.stats}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className={styles.stat}>
                <span className={styles.statNumber}>3+</span>
                <span className={styles.statLabel}>{t("homepage.stats.experience")}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>{t("homepage.stats.projects")}</span>
              </div>
              
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className={styles.ctaSection}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="#contact"
                className={styles.primaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t("homepage.cta.workTogether")}</span>
                <ArrowRight className={styles.buttonIcon} />
              </motion.a>

              <motion.a
                href="#projects"
                className={styles.secondaryButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{t("homepage.cta.viewProjects")}</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className={styles.socialLinks}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <motion.a
                href="https://github.com/elfspectrals/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className={styles.socialIcon} />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/jerome-neupert/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className={styles.socialIcon} />
                <span>LinkedIn</span>
              </motion.a>

              <motion.button
                onClick={() => setIsMailModalOpen(true)}
                className={styles.socialLink}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className={styles.socialIcon} />
                <span>Email</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={styles.scrollArrow}
          >
            ↓
          </motion.div>
          <span>{t("homepage.scrollToDiscover")}</span>
        </motion.div>
      </div>

      {/* Mail Modal */}
      <MailModal 
        isOpen={isMailModalOpen} 
        onClose={() => setIsMailModalOpen(false)} 
      />
    </motion.section>
  );
};

export default Hero;
