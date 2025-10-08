import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { 
  ExternalLink, 
  Code2,
  Palette,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';
// Import project images
import shareDrinkImage from '../../assets/ShareDrink.PNG?url';
import starbucksImage from '../../assets/starbucks.png?url';
import portfolioImage from '../../assets/portfolio.png?url';
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
  liveUrl?: string;
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
      image: shareDrinkImage,
      technologies: ['React Native', 'JavaScript', 'OpenStreetMap', 'CocktailAPI', 'Firebase'],
      category: 'mobile',
      status: 'completed',
      featured: true,
      liveUrl: 'https://sharedrinks-b8a73.web.app'
    },
     {
       id: "starbucks-coffee-simulator",
       title: "Starbucks Coffee Simulator",
       description: "Simulateur de café Starbucks 3D avec système de crafting et interactions clients",
       longDescription: "Simulateur immersif de café Starbucks développé avec React, TypeScript et Three.js. Jeu 3D en vue à la troisième personne avec système de crafting de boissons, gestion d'inventaire, clients IA, et interface de jeu complète. Optimisé avec compression Draco et modèles low-poly pour des performances optimales.",
       image: starbucksImage,
       technologies: ["React", "TypeScript", "Three.js", "React Three Fiber", "Drei", "CSS3"],
       category: "game",
       status: "completed",
       featured: true,
       liveUrl: "https://starbuckssimulator.web.app"
     },
    {
      id: 'portfolio-v2',
      title: 'Portfolio V2',
      description: 'Portfolio moderne avec animations avancées et design responsive',
      longDescription: 'Portfolio personnel développé avec React, TypeScript et Framer Motion. Design moderne avec animations fluides, mode sombre/clair, et optimisations de performance. Intégration de Three.js pour les éléments 3D.',
      image: portfolioImage,
      technologies: ['React', 'TypeScript', 'Framer Motion', 'SCSS', 'Vite'],
      category: 'web',
      status: 'completed',
      featured: true,
      liveUrl: 'https://portfoliojerome-7db78.web.app'
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
        type: "spring" as const,
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
          {filteredProjects.map((project) => (
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
                          <span>⭐ Featured</span>
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
