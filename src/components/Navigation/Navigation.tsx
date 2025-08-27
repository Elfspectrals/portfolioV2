import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.scss";

export interface NavItem {
  label: string;
  href: string;
}

interface NavigationProps {
  links: NavItem[];
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ links, className }) => (
  <nav className={clsx(styles.nav, className)} aria-label="Primary">
    {links.map(({ label, href }) => (
      <NavLink
        key={href}
        to={href}
        className={({ isActive }: { isActive: boolean }) =>
          clsx(styles.link, isActive && styles.active)
        }
      >
        <span>{label}</span>
      </NavLink>
    ))}
  </nav>
);
