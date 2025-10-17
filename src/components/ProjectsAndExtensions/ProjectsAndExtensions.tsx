import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView as useIntersectionObserver } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
import {
  ExternalLink,
  Code2,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Chrome,
} from "lucide-react";

// Import project images
import shareDrinkImage from "../../assets/ShareDrink.PNG?url";
import starbucksImage from "../../assets/starbucks.png?url";
import portfolioImage from "../../assets/portfolio.png?url";

// Import extension images
import scribeImage from "../../assets/frenchCorrector.png?url";
import templateMailImage from "../../assets/templateMail.png?url";
import translateImage from "../../assets/translate.png?url";

import styles from "./ProjectsAndExtensions.module.scss";

interface ProjectOrExtension {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "game" | "productivity" | "utility" | "ai";
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
  type: "project" | "extension";
  liveUrl?: string;
  chromeUrl?: string;
}

const ProjectsAndExtensions: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false,
  });

  const items: ProjectOrExtension[] = [
    // Projects
    {
      id: "shareddrinks",
      title: "SharedDrinks",
      description: t("projects.shareddrinks.description"),
      longDescription: t("projects.shareddrinks.longDescription"),
      image: shareDrinkImage,
      technologies: [
        "React Native",
        "JavaScript",
        "OpenStreetMap",
        "CocktailAPI",
        "Firebase",
      ],
      category: "mobile",
      status: "completed",
      featured: true,
      type: "project",
      liveUrl: "https://sharedrinks-b8a73.web.app",
    },
    {
      id: "starbucks-coffee-simulator",
      title: "Starbucks Coffee Simulator",
      description: t("projects.starbucks.description"),
      longDescription: t("projects.starbucks.longDescription"),
      image: starbucksImage,
      technologies: [
        "React",
        "TypeScript",
        "Three.js",
        "React Three Fiber",
        "Drei",
        "CSS3",
      ],
      category: "game",
      status: "completed",
      featured: true,
      type: "project",
      liveUrl: "https://starbuckssimulator.web.app",
    },
    {
      id: "portfolio-v2",
      title: "Portfolio V2",
      description: t("projects.portfolio.description"),
      longDescription: t("projects.portfolio.longDescription"),
      image: portfolioImage,
      technologies: ["React", "TypeScript", "Framer Motion", "SCSS", "Vite"],
      category: "web",
      status: "completed",
      featured: true,
      type: "project",
      liveUrl: "https://portfoliojerome-7db78.web.app",
    },
    // Extensions
    {
      id: "scribe-correcteur",
      title: t("extensions.scribeTitle"),
      description: t("extensions.scribeDesc"),
      longDescription: t("extensions.scribeLongDesc"),
      image: scribeImage,
      technologies: [
        "JavaScript",
        "Google Gemini AI",
        "Chrome APIs",
        "Manifest V3",
        "Gmail Integration",
      ],
      category: "ai",
      status: "completed",
      featured: true,
      type: "extension",
      chromeUrl:
        "https://chromewebstore.google.com/detail/scribe-correcteur-de-mail/mkimocgphihjblpofonojpiplhfdafbi?authuser=0&hl=fr",
    },
    {
      id: "smart-response",
      title: t("extensions.templatesTitle"),
      description: t("extensions.templatesDesc"),
      longDescription: t("extensions.templatesLongDesc"),
      image: templateMailImage,
      technologies: [
        "JavaScript",
        "Chrome APIs",
        "Template Engine",
        "HTML/CSS",
        "Gmail API",
      ],
      category: "productivity",
      status: "completed",
      featured: true,
      type: "extension",
      chromeUrl:
        "https://chromewebstore.google.com/detail/smart-response/ojamkcajnmmiemaidehilboeljknnjde?hl=fr&authuser=0",
    },
    {
      id: "switch-language",
      title: t("extensions.translateTitle"),
      description: t("extensions.translateDesc"),
      longDescription: t("extensions.translateLongDesc"),
      image: translateImage,
      technologies: [
        "JavaScript",
        "Translation APIs",
        "Chrome APIs",
        "Language Detection",
      ],
      category: "utility",
      status: "completed",
      featured: false,
      type: "extension",
      chromeUrl:
        "https://chromewebstore.google.com/detail/switch-la3+nguage/cchfkaamljdlfkmpekjdmamfflpiihhn?hl=fr&authuser=0",
    },
  ];

  const categories = [
    {
      id: "all",
      label: t("projectsExtensions.categories.all"),
      icon: <Code2 />,
    },
    { id: "web", label: t("projects.categories.web"), icon: <Globe /> },
    {
      id: "mobile",
      label: t("projects.categories.mobile"),
      icon: <Smartphone />,
    },
    { id: "game", label: t("projects.categories.game"), icon: <Zap /> },
    {
      id: "productivity",
      label: t("extensions.categories.productivity"),
      icon: <Zap />,
    },
    {
      id: "utility",
      label: t("extensions.categories.utility"),
      icon: <Globe />,
    },
    { id: "ai", label: t("extensions.categories.ai"), icon: <Smartphone /> },
  ];

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return <Globe className={styles.categoryIcon} />;
      case "mobile":
        return <Smartphone className={styles.categoryIcon} />;
      case "game":
        return <Zap className={styles.categoryIcon} />;
      case "productivity":
        return <Zap className={styles.categoryIcon} />;
      case "utility":
        return <Globe className={styles.categoryIcon} />;
      case "ai":
        return <Smartphone className={styles.categoryIcon} />;
      default:
        return <Code2 className={styles.categoryIcon} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "#4caf50";
      case "in-progress":
        return "#ff9800";
      case "planned":
        return "#9e9e9e";
      default:
        return "#9e9e9e";
    }
  };

  return (
    <motion.section
      id="projects-extensions"
      ref={ref}
      className={styles.projectsExtensions}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className={styles.container}>
        <motion.div className={styles.header} variants={itemVariants}>
          <div className={styles.titleSection}>
            <div className={styles.iconGroup}>
              <Palette className={styles.titleIcon} />
              <Chrome className={styles.titleIcon} />
            </div>
            <h2 className={styles.title}>Projets & Extensions</h2>
            <p className={styles.subtitle}>
              Découvrez mes créations : applications web, mobiles et extensions
              Chrome
            </p>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div className={styles.filters} variants={itemVariants}>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`btn btn--filter ${
                activeFilter === category.id ? "btn--filter--active" : ""
              }`}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.icon}
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Items Grid */}
        <motion.div className={styles.itemsGrid} variants={containerVariants}>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className={`${styles.itemCard} ${
                item.featured ? styles.featured : ""
              }`}
              variants={itemVariants}
              layout
            >
              <Tilt
                tiltMaxAngleX={3}
                tiltMaxAngleY={3}
                perspective={1000}
                scale={1.005}
                transitionSpeed={800}
                className={styles.tiltContainer}
              >
                <div className={styles.cardContent}>
                  {/* Item Image */}
                  <div className={styles.itemImage}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.image}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.itemCategory}>
                        {getCategoryIcon(item.category)}
                        <span>{item.category}</span>
                      </div>
                      {item.featured && (
                        <div className={styles.featuredBadge}>
                          <span>⭐ Featured</span>
                        </div>
                      )}
                      <div className={styles.typeBadge}>
                        {item.type === "project" ? <Palette /> : <Chrome />}
                        <span>
                          {item.type === "project" ? "Projet" : "Extension"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Item Info */}
                  <div className={styles.itemInfo}>
                    <div className={styles.itemHeader}>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                      <div
                        className={styles.statusBadge}
                        style={{ backgroundColor: getStatusColor(item.status) }}
                      >
                        {item.status === "completed"
                          ? "Terminé"
                          : item.status === "in-progress"
                          ? "En cours"
                          : "Planifié"}
                      </div>
                    </div>

                    <p className={styles.itemDescription}>{item.description}</p>

                    {/* Technologies */}
                    <div className={styles.technologies}>
                      {item.technologies.map((tech) => (
                        <span key={tech} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className={styles.itemActions}>
                      {item.liveUrl && (
                        <motion.a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--primary"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink className="btn-icon" />
                          <span>Voir le projet</span>
                        </motion.a>
                      )}
                      {item.chromeUrl && (
                        <motion.a
                          href={item.chromeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn--primary"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink className="btn-icon" />
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
        
      </div>
    </motion.section>
  );
};

export default ProjectsAndExtensions;
