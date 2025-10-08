import clsx from "clsx";
import { useState } from "react";
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";

import Navigation from "../Navigation/Navigation";

export interface NavItem {
  label: string;
  href: string;
}
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export interface HeaderProps {
  navLinks: NavItem[];
  className?: string;
  languageFlag?: string;
  onLanguageToggle?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  navLinks,
  className,
  languageFlag,
  onLanguageToggle,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className={clsx(styles.header, className)}>
      {/* Left: Portfolio + Language + Theme */}
      <div className={styles.leftGroup}>
        <h1 className={styles.logo}>{t("app.brand")}</h1>
        {languageFlag && onLanguageToggle && (
          <button
            type="button"
            className={styles.langBtn}
            onClick={onLanguageToggle}
            aria-label="Toggle language"
          >
            {languageFlag}
          </button>
        )}
        <ThemeToggle className={styles.themeBtn} />
      </div>

      {/* Right: Navigation or Burger */}
      <div className={styles.rightGroup}>
        {/* Burger only visible on mobile */}
        <button
          type="button"
          className={styles.menuBtn}
          aria-label={t("app.menu")}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            ☰
          </span>
        </button>

        {/* Nav hidden on mobile, visible on desktop */}
        <div
          id="primary-navigation"
          className={styles.navWrapper}
          data-open={isMenuOpen}
        >
          <Navigation navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
};
