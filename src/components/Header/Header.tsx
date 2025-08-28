import clsx from "clsx";
import { useState } from "react";
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";

import { Navigation, type NavItem } from "../Navigation/Navigation";
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
      {/* Bloc gauche */}
      <div className={styles.leftGroup}>
        <h1 className={styles.logo}>{t("app.brand")}</h1>
        <ThemeToggle className={styles.themeBtn} />
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
      </div>

      {/* Bloc droit */}
      <div className={styles.rightGroup}>
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

        <div
          id="primary-navigation"
          className={clsx(styles.navWrapper, { [styles.open]: isMenuOpen })}
        >
          <Navigation links={navLinks} />
        </div>
      </div>
    </header>
  );
};
