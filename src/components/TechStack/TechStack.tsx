import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Palette,
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
    level: number;
    icon?: string;
  }[];
}

const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false
  });

  const categories: TechCategory[] = [
    {
      name: "Frontend",
      icon: <Globe className={styles.categoryIcon} />,
      color: "#3b82f6",
      technologies: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "Next.js", level: 85, icon: "▲" },
        { name: "Vue.js", level: 80, icon: "💚" },
        { name: "Sass/SCSS", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "🌊" }
      ]
    },
    {
      name: "Backend",
      icon: <Database className={styles.categoryIcon} />,
      color: "#10b981",
      technologies: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "Redis", level: 75, icon: "🔴" }
      ]
    },
    {
      name: "Mobile",
      icon: <Smartphone className={styles.categoryIcon} />,
      color: "#8b5cf6",
      technologies: [
        { name: "React Native", level: 85, icon: "📱" },
        { name: "Flutter", level: 70, icon: "🦋" },
        { name: "Expo", level: 80, icon: "⚡" },
        { name: "Firebase", level: 85, icon: "🔥" }
      ]
    },
    {
      name: "Tools & DevOps",
      icon: <Zap className={styles.categoryIcon} />,
      color: "#f59e0b",
      technologies: [
        { name: "Git", level: 95, icon: "🌿" },
        { name: "Docker", level: 80, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Vercel", level: 90, icon: "▲" },
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "Jest", level: 80, icon: "🧪" }
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
        type: "spring",
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
            <h2 className={styles.title}>Stack Technologique</h2>
            <p className={styles.subtitle}>
              Technologies et outils que je maîtrise pour créer des solutions modernes
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
                
                <div className={styles.progressSection}>
                  <div className={styles.progressBar}>
                    <motion.div
                      className={styles.progressFill}
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ 
                        delay: index * 0.1 + 0.5,
                        duration: 1,
                        ease: "easeOut"
                      }}
                      style={{ 
                        background: `linear-gradient(90deg, ${categories[activeCategory].color}, ${categories[activeCategory].color}88)`
                      }}
                    />
                  </div>
                  <div className={styles.progressText}>
                    <CountUp
                      end={tech.level}
                      duration={1.5}
                      delay={index * 0.1 + 0.5}
                      suffix="%"
                    />
                  </div>
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
                <h3>Expertise Polyvalente</h3>
                <p>
                  Maîtrise complète du cycle de développement, du design à la mise en production
                </p>
              </div>
            </div>

            <div className={styles.summaryCard}>
              <Shield className={styles.summaryIcon} />
              <div className={styles.summaryContent}>
                <h3>Qualité & Performance</h3>
                <p>
                  Code propre, tests automatisés et optimisations pour des applications performantes
                </p>
              </div>
            </div>

            <div className={styles.summaryCard}>
              <Zap className={styles.summaryIcon} />
              <div className={styles.summaryContent}>
                <h3>Innovation Continue</h3>
                <p>
                  Veille technologique constante et adoption des dernières technologies
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
