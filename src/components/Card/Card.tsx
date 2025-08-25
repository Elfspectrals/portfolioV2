import React from "react";
import styles from "./Card.module.scss";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGo,
  SiRust,
  SiOpenai,
} from "react-icons/si";

// Map lowercase skill names to their corresponding Simple Icons component.
const skillIconComponents: Record<string, IconType> = {
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  html: SiHtml5,
  css: SiCss3,
  python: SiPython,
  go: SiGo,
  rust: SiRust,
  openai: SiOpenai,
};

interface CardProps {
  projectLink: string;
  shortDescription: string;
  imgSrc: string;
  title: string;

  skills?: string[];
}

const Card: React.FC<CardProps> = ({
  projectLink,
  shortDescription,
  imgSrc,
  title,
  skills = [],
}) => {
  return (
    <div className={styles.test}>
      <div className="card">
        <img src={imgSrc} alt={`${title} thumbnail`} className="card-img" />
        <div className="card-content">
          <a
            href={projectLink}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="card-title">{title}</h3>
          </a>

          <span className="card-short-description">{shortDescription}</span>

          {skills.length > 0 && (
            <div className="card-skills">
              {skills.map((skill) => {
                const Icon = skillIconComponents[skill.toLowerCase()];
                return Icon ? (
                  <Icon
                    key={skill}
                    title={skill}
                    aria-label={skill}
                    className="card-skill-icon"
                  />
                ) : null;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
