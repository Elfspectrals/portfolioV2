import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import ChatBot from "./components/ChatBot/ChatBot";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";

import { setTheme } from "./utils/theme";
import { useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import ExtensionChrome from "./pages/ExtensionChrome";
import ThreeDWorld from "./pages/3DWorld";
import Home from "./pages/Home";

const navLinks = (t: (k: string) => string) => [
  { label: t("app.nav.home"), href: "#home" },
  { label: t("app.nav.tech"), href: "#tech" },
  { label: t("app.nav.projects"), href: "#projects" },
  { label: t("app.nav.contact"), href: "#contact" },
];

function App() {
  const { t } = useTranslation();
  const [theme] = useState<"light" | "dark">("light");
  const [currentLang, setCurrentLang] = useState("fr");

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const cycleLanguage = () => {
    const languages = ["fr", "en", "de"];
    const currentIndex = languages.indexOf(currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLang = languages[nextIndex];
    setCurrentLang(nextLang);
    i18n.changeLanguage(nextLang);
  };

  const getLanguageFlag = () => {
    const flags = { fr: "🇫🇷", en: "🇬🇧", de: "🇩🇪" };
    return flags[currentLang as keyof typeof flags];
  };

  return (
    <>
      <ScrollProgress />
      <Navigation
        navLinks={navLinks(t)}
        languageFlag={getLanguageFlag()}
        onLanguageToggle={cycleLanguage}
      />
      <ChatBot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extension-chrome" element={<ExtensionChrome />} />
        <Route path="/3DWorld" element={<ThreeDWorld />} />
      </Routes>
      <BackToTop />
    </>
  );
}

export default App;
