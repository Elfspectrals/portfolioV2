import clsx from "clsx";
import styles from "./Header.module.scss";

import { Navigation, type NavItem } from "../Navigation/Navigation";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export interface HeaderProps {
  navLinks: NavItem[];
  className?: string;
  onDropdownSelect?: (v: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ navLinks, className }) => (
  <header className={clsx(styles.header, className)}>
    <h1 className={styles.logo}>Portolio</h1>

    <Navigation links={navLinks} />

    <ThemeToggle className={styles.themeBtn} />
  </header>
);
