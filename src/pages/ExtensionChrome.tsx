import React from 'react';
import Card from '../components/Card/Card';
import styles from './ExtensionChrome.module.scss';

import Scribe from '../assets/scribe.png';
import MailResponse from '../assets/mailResponse.png';
import Smiley from '../assets/smiley.png';
import Traduction from '../assets/traduction.png';

const ExtensionChrome: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card
        title='IA : Scribe correction de mails'
        projectLink='https://chromewebstore.google.com/detail/mkimocgphihjblpofonojpiplhfdafbi?authuser=0&hl=fr'
        shortDescription='Utilisez l’IA pour corriger vos fautes d’orthographe dans vos emails'
        imgSrc={Scribe}
        skills={[ 'html', 'css','openai','javascript']}

      />
      <Card
        title='Création de templates pour mails'
        projectLink='https://chromewebstore.google.com/detail/smart-response/ojamkcajnmmiemaidehilboeljknnjde?authuser=0&hl=fr'
        shortDescription='Création de templates pour répondre à vos emails plus rapidement'
        imgSrc={MailResponse}
        skills={[ 'html', 'css','openai','javascript']}
      />
      <Card
        title='Impostor Emoji'
        projectLink='https://chromewebstore.google.com/detail/impostor-emoji/hiokcpoidlfkgmeiednkcagmhakkoeph?hl=fr&authuser=0'
        shortDescription="Petit mini jeu d'observation pour passer le temps"
        imgSrc={Smiley}
        skills={[ 'html', 'css','javascript']}

      />
      <Card
        title='IA : Traduction de mails'
        projectLink='https://chromewebstore.google.com/detail/switch-language/cchfkaamljdlfkmpekjdmamfflpiihhn'
        shortDescription="Avec le pouvoir de l'IA, le monde s'offre à vous"
        imgSrc={Traduction}
        skills={[ 'html', 'css','openai','javascript']}
      />
    </div>
  );
};

export default ExtensionChrome;