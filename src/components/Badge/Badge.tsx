import clsx from "clsx";
import styles from "./Badge.module.scss";

export interface BadgeProps {
  text: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, className }) => (
  <span className={clsx(styles.badge, className)}>{text}</span>
);

export default Badge;
