import React, { useState } from 'react';
import '../styles/Project.css';

const projectData = {
  Extension: [
    {
      title: "AI Correcteur de français",
      img: "https://www.actuia.com/storage/uploads/2022/09/oeuvre-art-generee-IA-MidJourney-remporte-1er-prix-Colorado-State-Fair-696x385.png",
      desc: "Une extension Chrome qui corrige les fautes de français dans les mails.",
      tech: "JavaScript, HTML, CSS,NodeJS"
    },
  ],
  Website: [
    {
      title: "Website",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
      desc: "A responsive portfolio website showcasing skills, projects, and contact information.",
      tech: "React, CSS Modules"
    }
  ],
  Other: [
    {
      title: "Mockup Tracker",
      img: "https://cdn.dribbble.com/users/2131134/screenshots/14809903/media/90cf5c2f8a81c7ec0b70b87f5406f3c5.png?compress=1&resize=768x576&vertical=top",
      desc: "A Figma-inspired mockup dashboard for UI/UX experiments and testing layout ideas.",
      tech: "Figma, React"
    },
    {
      title: "Other Tool",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
      desc: "Miscellaneous apps, tools, and experiments built to explore new tech stacks.",
      tech: "Varies by project"
    }
  ]
};

const Project = () => {
  const [category, setCategory] = useState("Extension");

  return (
    <div className="project-wrapper">
      <h2 className="project-title">My Projects</h2>

      <div className="category-buttons">
        {Object.keys(projectData).map((cat) => (
          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="carousel">
        <div className="carousel-inner">
          {projectData[category].map((project, index) => (
            <div
              className="carousel-card"
              key={index}
              style={{
                transform: `rotateY(${index * (360 / projectData[category].length)}deg) translateZ(300px)`
              }}
            >
              <h3>{project.title}</h3>
              <img src={project.img} alt={project.title} />
              <p>{project.desc}</p>
              <span>Tech: {project.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
