import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  projectLink: string;
  shortDescription: string;
  imgSrc: string;
  title: string;
}

const Card: React.FC<CardProps> = ({
  projectLink,
  shortDescription,
  imgSrc,
  title,
}) => {
  return (
    <div className={styles.test}>
      <div className="card">
        <img src={imgSrc} alt="Course thumbnail" className="card-img" />
        <div className="card-content">
          <a
            href={projectLink}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="card-title">{title}</h3>
          </a>
          <div className="card-info">
            <span className="card-short-description">{shortDescription}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
