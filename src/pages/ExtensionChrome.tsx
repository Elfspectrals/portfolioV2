import React from "react";
import Card from "../components/Card/Card";
import styles from "./ExtensionChrome.module.scss";
import { useTranslation } from "react-i18next";

import Scribe from "../assets/scribe.png?url";
import TemplateMail from "../assets/templateMail.png?url";
import Translate from "../assets/translate.png?url";

const ExtensionChrome: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Card
        title={t("extensions.scribeTitle")}
        projectLink="https://chromewebstore.google.com/detail/scribe-correcteur-de-mail/mkimocgphihjblpofonojpiplhfdafbi?authuser=0&hl=fr"
        shortDescription={t("extensions.scribeDesc")}
        imgSrc={Scribe}
        skills={["html", "css", "openai", "javascript"]}
      />
      <Card
        title={t("extensions.templatesTitle")}
        projectLink="https://chromewebstore.google.com/detail/smart-response/ojamkcajnmmiemaidehilboeljknnjde?hl=fr&authuser=0"
        shortDescription={t("extensions.templatesDesc")}
        imgSrc={TemplateMail}
        skills={["html", "css", "openai", "javascript"]}
      />
      <Card
        title={t("extensions.translateTitle")}
        projectLink="https://chromewebstore.google.com/detail/switch-language/cchfkaamljdlfkmpekjdmamfflpiihhn?hl=fr&authuser=0"
        shortDescription={t("extensions.translateDesc")}
        imgSrc={Translate}
        skills={["html", "css", "openai", "javascript"]}
      />
    </div>
  );
};

export default ExtensionChrome;
