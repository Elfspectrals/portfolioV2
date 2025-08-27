import clsx from "clsx";
import { useState } from "react";
import styles from "./Header.module.scss";

import { Navigation, type NavItem } from "../Navigation/Navigation";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import type { DropdownOption } from "../Dropdown/Dropdown";

export interface HeaderProps {
  navLinks: NavItem[];
  className?: string;
  dropdownOptions?: DropdownOption[]; //
  onDropdownSelect?: (v: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ navLinks, className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.brandRow}>
        <h1 className={styles.logo}>Portfolio</h1>

        <button
          type="button"
          className={styles.menuBtn}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            ☰
          </span>
        </button>

        <ThemeToggle className={styles.themeBtn} />
      </div>

      <div
        id="primary-navigation"
        className={styles.navWrapper}
        data-open={isMenuOpen}
      >
        <Navigation links={navLinks} />
      </div>
    </header>
  );
};
