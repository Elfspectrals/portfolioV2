import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
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
    level: 'débutant' | 'intermédiaire' | 'maîtrise';
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
        { name: "React", level: "maîtrise", icon: "⚛️" },
        { name: "TypeScript", level: "maîtrise", icon: "🔷" },
        { name: "Next.js", level: "intermédiaire", icon: "▲" },
        { name: "Vue.js", level: "intermédiaire", icon: "💚" },
        { name: "HTML", level: "maîtrise", icon: "🌐" },
        { name: "CSS", level: "maîtrise", icon: "🎨" },
        { name: "JavaScript", level: "maîtrise", icon: "⚡" },
        { name: "Sass/SCSS", level: "maîtrise", icon: "🎨" },
        { name: "Tailwind CSS", level: "maîtrise", icon: "🌊" }
      ]
    },
    {
      name: "Backend",
      icon: <Database className={styles.categoryIcon} />,
      color: "#10b981",
      technologies: [
        { name: "Node.js", level: "maîtrise", icon: "🟢" },
        { name: "Express.js", level: "maîtrise", icon: "🚀" },
        { name: "Python", level: "intermédiaire", icon: "🐍" },
        { name: "PostgreSQL", level: "intermédiaire", icon: "🐘" },
        { name: "MongoDB", level: "débutant", icon: "🍃" },
      ]
    },
    {
      name: "Mobile",
      icon: <Smartphone className={styles.categoryIcon} />,
      color: "#8b5cf6",
      technologies: [
        { name: "React Native", level: "maîtrise", icon: "📱" },
        { name: "Flutter", level: "débutant", icon: "🦋" },
        { name: "Firebase", level: "intermédiaire", icon: "🔥" }
      ]
    },
    {
      name: "Tools & DevOps",
      icon: <Zap className={styles.categoryIcon} />,
      color: "#f59e0b",
      technologies: [
        { name: "Git", level: "maîtrise", icon: "🌿" },
        { name: "GitHub Action", level: "intermédiaire", icon: "🐙" },
        { name: "Jira", level: "maîtrise", icon: "🔍" },
        { name: "Docker", level: "maîtrise", icon: "🐳" },
        { name: "Figma", level: "intermédiaire", icon: "🎨" },
        { name: "Cypress", level: "maîtrise", icon: "🧪" },
        { name: "Unreal Engine 5", level: "intermédiaire", icon: "🎮" },
        { name: "ThreeJS", level: "intermédiaire", icon: "🔺" }
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
                
                <div className={styles.skillLevelSection}>
                  <motion.div
                    className={`${styles.skillLevel} ${styles[tech.level]}`}
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
