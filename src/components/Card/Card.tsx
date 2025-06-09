import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
  projectLink: string;
  projectLinkText: string;
  shortDescription: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({
  projectLink,
  projectLinkText,
  shortDescription,
  imgSrc,
}) => {
  return (
    <div className={styles.test}>
      <div className="card">
        <img src={imgSrc} alt="Course thumbnail" className="card-img" />
        <div className="card-content">
          <h3 className="card-title">IA correction de mails</h3>
          <div className="card-info">
            <span className="card-short-description">{shortDescription}</span>
            <a href={projectLink} className="card-link">
              Où retrouver ce projet : {projectLinkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
