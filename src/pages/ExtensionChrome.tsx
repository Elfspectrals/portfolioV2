import React from 'react';
import Card from '../components/Card/Card';
import styles from './ExtensionChrome.module.scss';

const ExtensionChrome: React.FC = () => {
  return (
    <div className={styles.container}>
      <Card
        projectLink='a'
        projectLinkText='Où retrouver ce projet : GitHub'
        shortDescription='Extension Chrome pour corriger les fautes d’orthographe dans les emails'
        imgSrc='https://www.tourisme-yonne.com/uploads/2023/03/noyers-sur-serein_copyright-cd89-studio-morize-1600x900.png'
      />
      <Card
        projectLink='a'
        projectLinkText='Où retrouver ce projet : GitHub'
        shortDescription='Extension Chrome pour corriger les fautes d’orthographe dans les emails'
        imgSrc='https://www.tourisme-yonne.com/uploads/2023/03/noyers-sur-serein_copyright-cd89-studio-morize-1600x900.png'
      />
      <Card
        projectLink='a'
        projectLinkText='Où retrouver ce projet : GitHub'
        shortDescription='Extension Chrome pour corriger les fautes d’orthographe dans les emails'
        imgSrc='https://www.tourisme-yonne.com/uploads/2023/03/noyers-sur-serein_copyright-cd89-studio-morize-1600x900.png'
     />
     <Card
        projectLink='a'
        projectLinkText='Où retrouver ce projet : GitHub'
        shortDescription='Extension Chrome pour corriger les fautes d’orthographe dans les emails'
        imgSrc='https://www.tourisme-yonne.com/uploads/2023/03/noyers-sur-serein_copyright-cd89-studio-morize-1600x900.png'
     /><Card
        projectLink='a'
        projectLinkText='Où retrouver ce projet : GitHub'
        shortDescription='Extension Chrome pour corriger les fautes d’orthographe dans les emails'
        imgSrc='https://www.tourisme-yonne.com/uploads/2023/03/noyers-sur-serein_copyright-cd89-studio-morize-1600x900.png'
     />
    </div>
  );
};

export default ExtensionChrome;