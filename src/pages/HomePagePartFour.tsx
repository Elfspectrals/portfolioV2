import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Tilt from 'react-parallax-tilt';
import { 
  ExternalLink, 
  Code2,
  Smartphone,
  Globe,
  Zap,
  Chrome
} from 'lucide-react';
import scribeImage from '../assets/frenchCorrector.png?url';
import templateMailImage from '../assets/templateMail.png?url';
import translateImage from '../assets/translate.png?url';
import styles from './HomePagePartFour.module.scss';

interface Extension {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'productivity' | 'utility' | 'ai';
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  chromeUrl?: string;
}

const HomePagePartFour: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false
  });

  const extensions: Extension[] = [
    {
      id: 'scribe-correcteur',
      title: t('extensions.scribeTitle'),
      description: t('extensions.scribeDesc'),
      longDescription: t('extensions.scribeLongDesc'),
      image: scribeImage,
      technologies: ['JavaScript', 'Google Gemini AI', 'Chrome APIs', 'Manifest V3', 'Gmail Integration'],
      category: 'ai',
      status: 'completed',
      featured: true,
      chromeUrl: 'https://chromewebstore.google.com/detail/scribe-correcteur-de-mail/mkimocgphihjblpofonojpiplhfdafbi?authuser=0&hl=fr'
    },
    {
      id: 'smart-response',
      title: t('extensions.templatesTitle'),
      description: t('extensions.templatesDesc'),
      longDescription: t('extensions.templatesLongDesc'),
      image: templateMailImage,
      technologies: ['JavaScript', 'Chrome APIs', 'Template Engine', 'HTML/CSS', 'Gmail API'],
      category: 'productivity',
      status: 'completed',
      featured: true,
      chromeUrl: 'https://chromewebstore.google.com/detail/smart-response/ojamkcajnmmiemaidehilboeljknnjde?hl=fr&authuser=0'
    },
    {
      id: 'switch-language',
      title: t('extensions.translateTitle'),
      description: t('extensions.translateDesc'),
      longDescription: t('extensions.translateLongDesc'),
      image: translateImage,
      technologies: ['JavaScript', 'Translation APIs', 'Chrome APIs', 'Language Detection'],
      category: 'utility',
      status: 'completed',
      featured: false,
      chromeUrl: 'https://chromewebstore.google.com/detail/switch-language/cchfkaamljdlfkmpekjdmamfflpiihhn?hl=fr&authuser=0'
    }
  ];

  const categories = [
    { id: 'all', label: t('extensions.categories.all'), icon: <Code2 /> },
    { id: 'productivity', label: t('extensions.categories.productivity'), icon: <Zap /> },
    { id: 'utility', label: t('extensions.categories.utility'), icon: <Globe /> },
    { id: 'ai', label: t('extensions.categories.ai'), icon: <Smartphone /> }
  ];

  const filteredExtensions = activeFilter === 'all' 
    ? extensions 
    : extensions.filter(extension => extension.category === activeFilter);

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'productivity': return <Zap className={styles.categoryIcon} />;
      case 'utility': return <Globe className={styles.categoryIcon} />;
      case 'ai': return <Smartphone className={styles.categoryIcon} />;
      default: return <Code2 className={styles.categoryIcon} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#4caf50';
      case 'in-progress': return '#ff9800';
      case 'planned': return '#9e9e9e';
      default: return '#9e9e9e';
    }
  };

  return (
    <motion.section 
      id="extensions"
      ref={ref}
      className={styles.extensions}
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
            <Chrome className={styles.titleIcon} />
            <h2 className={styles.title}>{t('homepage.extensions.title')}</h2>
            <p className={styles.subtitle}>
              {t('homepage.extensions.subtitle')}
            </p>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className={styles.filters}
          variants={itemVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`${styles.filterButton} ${activeFilter === category.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Extensions Grid */}
        <motion.div 
          className={styles.extensionsGrid}
          variants={containerVariants}
        >
          {filteredExtensions.map((extension) => (
            <motion.div
              key={extension.id}
              className={`${styles.extensionCard} ${extension.featured ? styles.featured : ''}`}
              variants={itemVariants}
              layout
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1000}
                className={styles.tiltContainer}
              >
                <div className={styles.cardContent}>
                  {/* Extension Image */}
                  <div className={styles.extensionImage}>
                    <img
                      src={extension.image}
                      alt={extension.title}
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.extensionCategory}>
                        {getCategoryIcon(extension.category)}
                        <span>{extension.category}</span>
                      </div>
                      {extension.featured && (
                        <div className={styles.featuredBadge}>
                          <span>⭐ Featured</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Extension Info */}
                  <div className={styles.extensionInfo}>
                    <div className={styles.extensionHeader}>
                      <h3 className={styles.extensionTitle}>{extension.title}</h3>
                      <div 
                        className={styles.statusBadge}
                        style={{ backgroundColor: getStatusColor(extension.status) }}
                      >
                        {extension.status === 'completed' ? 'Terminé' : 
                         extension.status === 'in-progress' ? 'En cours' : 'Planifié'}
                      </div>
                    </div>

                    <p className={styles.extensionDescription}>
                      {extension.description}
                    </p>

                    {/* Technologies */}
                    <div className={styles.technologies}>
                      {extension.technologies.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className={styles.extensionActions}>
                      {extension.chromeUrl && (
                        <motion.a
                          href={extension.chromeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.actionButton}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className={styles.buttonIcon} />
                          <span>Voir l'extension</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className={styles.cta}
          variants={itemVariants}
        >
          <div className={styles.ctaContent}>
            <h3>Intéressé par mes extensions ?</h3>
            <p>Découvrez toutes mes extensions Chrome et améliorez votre productivité</p>
            <motion.a
              href="#contact"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Me contacter</span>
              <ExternalLink className={styles.buttonIcon} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomePagePartFour;
