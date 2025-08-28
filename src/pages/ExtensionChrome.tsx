import React from "react";
import Card from "../components/Card/Card";
import styles from "./ExtensionChrome.module.scss";
import { useTranslation } from "react-i18next";

import Scribe from "../assets/scribe.png";
import MailResponse from "../assets/mailResponse.png";
import Smiley from "../assets/smiley.png";
import Traduction from "../assets/traduction.png";

const ExtensionChrome: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Card
        title={t("extensions.scribeTitle")}
        projectLink="https://chromewebstore.google.com/detail/mkimocgphihjblpofonojpiplhfdafbi?authuser=0&hl=fr"
        shortDescription={t("extensions.scribeDesc")}
        imgSrc={Scribe}
        skills={["html", "css", "openai", "javascript"]}
      />
      <Card
        title={t("extensions.templatesTitle")}
        projectLink="https://chromewebstore.google.com/detail/smart-response/ojamkcajnmmiemaidehilboeljknnjde?authuser=0&hl=fr"
        shortDescription={t("extensions.templatesDesc")}
        imgSrc={MailResponse}
        skills={["html", "css", "openai", "javascript"]}
      />
      <Card
        title={t("extensions.impostorTitle")}
        projectLink="https://chromewebstore.google.com/detail/impostor-emoji/hiokcpoidlfkgmeiednkcagmhakkoeph?hl=fr&authuser=0"
        shortDescription={t("extensions.impostorDesc")}
        imgSrc={Smiley}
        skills={["html", "css", "javascript"]}
      />
      <Card
        title={t("extensions.translateTitle")}
        projectLink="https://chromewebstore.google.com/detail/switch-language/cchfkaamljdlfkmpekjdmamfflpiihhn"
        shortDescription={t("extensions.translateDesc")}
        imgSrc={Traduction}
        skills={["html", "css", "openai", "javascript"]}
      />
    </div>
  );
};

export default ExtensionChrome;
