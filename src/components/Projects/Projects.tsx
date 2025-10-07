import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { 
  ExternalLink, 
  Github, 
  Star, 
  Calendar,
  Users,
  Code2,
  Palette,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';
import styles from './Projects.module.scss';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'desktop' | 'game';
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  stats: {
    stars?: number;
    contributors?: number;
    downloads?: number;
  };
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false
  });

  const projects: Project[] = [
    {
      id: 'shareddrinks',
      title: 'SharedDrinks',
      description: 'Application mobile de recommandations de boissons et localisation de bars',
      longDescription: 'Une application mobile complète développée avec React Native qui permet aux utilisateurs de découvrir de nouveaux bars et cocktails. Intégration d\'APIs de cocktails, services de géolocalisation et système de recommandations personnalisées.',
      image: '/api/placeholder/400/300',
      technologies: ['React Native', 'JavaScript', 'OpenStreetMap', 'CocktailAPI', 'Firebase'],
      category: 'mobile',
      status: 'completed',
      featured: true,
      githubUrl: 'https://github.com/elfspectrals/shareddrinks',
      liveUrl: 'https://shareddrinks.app',
      stats: {
        stars: 24,
        contributors: 3,
        downloads: 1500
      }
    },
    {
      id: 'gluttony-eater',
      title: 'Gluttony Eater',
      description: 'Jeu de combat développé avec Unreal Engine 5',
      longDescription: 'Prototype de jeu de combat innovant utilisant Unreal Engine 5. Système de combat dynamique basé sur la consommation d\'aliments pour débloquer des super-pouvoirs. Intégration de shaders personnalisés et effets de particules avancés.',
      image: '/api/placeholder/400/300',
      technologies: ['Unreal Engine 5', 'C++', 'Blueprints', 'HLSL', 'Substance Designer'],
      category: 'game',
      status: 'in-progress',
      featured: true,
      githubUrl: 'https://github.com/elfspectrals/gluttony-eater',
      stats: {
        stars: 12,
        contributors: 1
      }
    },
    {
      id: 'portfolio-v2',
      title: 'Portfolio V2',
      description: 'Portfolio moderne avec animations avancées et design responsive',
      longDescription: 'Portfolio personnel développé avec React, TypeScript et Framer Motion. Design moderne avec animations fluides, mode sombre/clair, et optimisations de performance. Intégration de Three.js pour les éléments 3D.',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'SCSS', 'Vite'],
      category: 'web',
      status: 'completed',
      featured: true,
      githubUrl: 'https://github.com/elfspectrals/portfolio-v2',
      liveUrl: 'https://jerome-neupert.dev',
      stats: {
        stars: 8,
        contributors: 1
      }
    },
    {
      id: 'chrome-extensions',
      title: 'Chrome Extensions Suite',
      description: 'Collection d\'extensions Chrome pour la productivité',
      longDescription: 'Suite d\'extensions Chrome développées pour améliorer la productivité. Inclut un correcteur d\'orthographe IA, un générateur de templates d\'emails, et un mini-jeu d\'observation. Intégration avec des APIs d\'IA pour la correction automatique.',
      image: '/api/placeholder/400/300',
      technologies: ['JavaScript', 'Chrome APIs', 'AI Integration', 'Manifest V3'],
      category: 'web',
      status: 'completed',
      featured: false,
      githubUrl: 'https://github.com/elfspectrals/chrome-extensions',
      stats: {
        downloads: 5000
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'Tous', icon: <Code2 /> },
    { id: 'web', label: 'Web', icon: <Globe /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone /> },
    { id: 'game', label: 'Jeux', icon: <Zap /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return <Globe className={styles.categoryIcon} />;
      case 'mobile': return <Smartphone className={styles.categoryIcon} />;
      case 'game': return <Zap className={styles.categoryIcon} />;
      default: return <Code2 className={styles.categoryIcon} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'in-progress': return '#f59e0b';
      case 'planned': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <motion.section 
      id="projects"
      ref={ref}
      className={styles.projects}
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
            <Palette className={styles.titleIcon} />
            <h2 className={styles.title}>Projets & Réalisations</h2>
            <p className={styles.subtitle}>
              Découvrez mes projets personnels et professionnels, témoignant de ma passion pour l'innovation technologique
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

        {/* Projects Grid */}
        <motion.div 
          className={styles.projectsGrid}
          variants={containerVariants}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
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
                  {/* Project Image */}
                  <div className={styles.projectImage}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.projectCategory}>
                        {getCategoryIcon(project.category)}
                        <span>{project.category}</span>
                      </div>
                      {project.featured && (
                        <div className={styles.featuredBadge}>
                          <Star className={styles.starIcon} />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={styles.projectInfo}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <div 
                        className={styles.statusBadge}
                        style={{ backgroundColor: getStatusColor(project.status) }}
                      >
                        {project.status === 'completed' ? 'Terminé' : 
                         project.status === 'in-progress' ? 'En cours' : 'Planifié'}
                      </div>
                    </div>

                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className={styles.technologies}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    {project.stats && (
                      <div className={styles.projectStats}>
                        {project.stats.stars && (
                          <div className={styles.stat}>
                            <Star className={styles.statIcon} />
                            <span>{project.stats.stars}</span>
                          </div>
                        )}
                        {project.stats.contributors && (
                          <div className={styles.stat}>
                            <Users className={styles.statIcon} />
                            <span>{project.stats.contributors}</span>
                          </div>
                        )}
                        {project.stats.downloads && (
                          <div className={styles.stat}>
                            <Calendar className={styles.statIcon} />
                            <span>{project.stats.downloads.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className={styles.projectActions}>
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.actionButton}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className={styles.buttonIcon} />
                          <span>Voir le projet</span>
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.secondaryButton}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className={styles.buttonIcon} />
                          <span>Code source</span>
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
            <h3>Intéressé par mon travail ?</h3>
            <p>N'hésitez pas à me contacter pour discuter de votre projet</p>
            <motion.a
              href="#contact"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Commencer un projet</span>
              <ExternalLink className={styles.buttonIcon} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
