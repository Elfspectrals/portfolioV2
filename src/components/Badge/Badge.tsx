import clsx from "clsx";
import styles from "./Badge.module.scss";

export interface BadgeProps {
  text: string;
  className?: string;
  svgLogo?: string; // URL du logo
}

export const Badge: React.FC<BadgeProps> = ({ text, className, svgLogo }) => (
  <span className={clsx(styles.badge, className)}>
    {svgLogo && <img src={svgLogo} alt="" className={styles.logo} aria-hidden="true" />}
    <span className={styles.text}>{text}</span>
  </span>
);

export default Badge;
