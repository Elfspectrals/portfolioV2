import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  Shield,
  Layers
} from 'lucide-react';
import styles from './TechStack.module.scss';

interface TechCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  technologies: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

const TechStack: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false
  });

  // Helper function to get CSS class for skill level
  const getSkillLevelClass = (level: string) => {
    if (level === t('techstack.level.beginner')) return 'beginner';
    if (level === t('techstack.level.intermediate')) return 'intermediate';
    if (level === t('techstack.level.mastery')) return 'mastery';
    return 'beginner'; // fallback
  };


  const categories: TechCategory[] = [
    {
      name: "Frontend",
      icon: <Globe className={styles.categoryIcon} />,
      color: "#3b82f6",
      technologies: [
        { name: "React", level: t('techstack.level.mastery'), icon: "⚛️" },
        { name: "TypeScript", level: t('techstack.level.intermediate'), icon: "🔷" },
        { name: "Next.js", level: t('techstack.level.intermediate'), icon: "▲" },
        { name: "Vue.js", level: t('techstack.level.intermediate'), icon: "💚" },
        { name: "HTML", level: t('techstack.level.mastery'), icon: "🌐" },
        { name: "CSS", level: t('techstack.level.mastery'), icon: "🎨" },
        { name: "JavaScript", level: t('techstack.level.mastery'), icon: "⚡" },
        { name: "Sass/SCSS", level: t('techstack.level.mastery'), icon: "🎨" },
        { name: "Tailwind CSS", level: t('techstack.level.mastery'), icon: "🌊" }
      ]
    },
    {
      name: "Backend",
      icon: <Database className={styles.categoryIcon} />,
      color: "#10b981",
      technologies: [
        { name: "Node.js", level: t('techstack.level.mastery'), icon: "🟢" },
        { name: "Express.js", level: t('techstack.level.mastery'), icon: "🚀" },
        { name: "Python", level: t('techstack.level.intermediate'), icon: "🐍" },
        { name: "PostgreSQL", level: t('techstack.level.intermediate'), icon: "🐘" },
        { name: "MongoDB", level: t('techstack.level.beginner'), icon: "🍃" },
      ]
    },
    {
      name: "Mobile",
      icon: <Smartphone className={styles.categoryIcon} />,
      color: "#8b5cf6",
      technologies: [
        { name: "React Native", level: t('techstack.level.mastery'), icon: "📱" },
        { name: "Flutter", level: t('techstack.level.beginner'), icon: "🦋" },
        { name: "Firebase", level: t('techstack.level.intermediate'), icon: "🔥" }
      ]
    },
    {
      name: "Tools & DevOps",
      icon: <Zap className={styles.categoryIcon} />,
      color: "#f59e0b",
      technologies: [
        { name: "Git", level: t('techstack.level.mastery'), icon: "🌿" },
        { name: "GitHub Action", level: t('techstack.level.intermediate'), icon: "🐙" },
        { name: "Jira", level: t('techstack.level.mastery'), icon: "🔍" },
        { name: "Docker", level: t('techstack.level.intermediate'), icon: "🐳" },
        { name: "Figma", level: t('techstack.level.intermediate'), icon: "🎨" },
        { name: "Cypress", level: t('techstack.level.mastery'), icon: "🧪" },
        { name: "Unreal Engine 5", level: t('techstack.level.intermediate'), icon: "🎮" },
        { name: "ThreeJS", level: t('techstack.level.intermediate'), icon: "🔺" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <motion.section 
      id="tech"
      ref={ref}
      className={styles.techStack}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          variants={itemVariants}
        >
          <div className={styles.titleSection}>
            <Code2 className={styles.titleIcon} />
            <h2 className={styles.title}>{t('homepage.techTitle')}</h2>
            <p className={styles.subtitle}>
              {t('homepage.techSubtitle')}
            </p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.content}
          variants={itemVariants}
        >
          {/* Category Tabs */}
          <div className={styles.categoryTabs}>
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                className={`${styles.categoryTab} ${activeCategory === index ? styles.active : ''}`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ '--category-color': category.color } as React.CSSProperties}
              >
                {category.icon}
                <span>{category.name}</span>
                <span className={styles.techCount}>
                  {category.technologies.length}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Technologies Grid */}
          <motion.div 
            className={styles.technologiesGrid}
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories[activeCategory].technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={styles.techCard}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <div className={styles.techHeader}>
                  <div className={styles.techIcon}>
                    {tech.icon}
                  </div>
                  <h3 className={styles.techName}>{tech.name}</h3>
                </div>
                
                <div className={styles.skillLevelSection}>
                  <motion.div
                    className={`${styles.skillLevel} ${styles[getSkillLevelClass(tech.level)]}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.5,
                      duration: 0.5
                    }}
                  >
                    {tech.level}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            className={styles.skillsSummary}
            variants={itemVariants}
          >
            <div className={styles.summaryCard}>
              <Layers className={styles.summaryIcon} />
              <div className={styles.summaryContent}>
                <h3>{t('homepage.expertise.title')}</h3>
                <p>
                  {t('homepage.expertise.description')}
                </p>
              </div>
            </div>

            <div className={styles.summaryCard}>
              <Shield className={styles.summaryIcon} />
              <div className={styles.summaryContent}>
                <h3>{t('homepage.quality.title')}</h3>
                <p>
                  {t('homepage.quality.description')}
                </p>
              </div>
            </div>

            <div className={styles.summaryCard}>
              <Zap className={styles.summaryIcon} />
              <div className={styles.summaryContent}>
                <h3>{t('homepage.innovation.title')}</h3>
                <p>
                  {t('homepage.innovation.description')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechStack;
