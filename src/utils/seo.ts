// SEO utilities and metadata

export const defaultSEO = {
  title: 'Jérôme Neupert - Développeur Full-Stack & Architecte d\'Expériences Numériques',
  description: 'Portfolio de Jérôme Neupert, développeur full-stack passionné par la création d\'applications web modernes et performantes. Découvrez mes projets et compétences techniques.',
  keywords: [
    'développeur',
    'full-stack',
    'react',
    'typescript',
    'javascript',
    'portfolio',
    'développement web',
    'frontend',
    'backend',
    'mobile',
    'applications web'
  ],
  author: 'Jérôme Neupert',
  url: 'https://jerome-neupert.dev',
  image: '/og-image.jpg',
  type: 'website',
  locale: 'fr_FR'
};

export const updateMetaTags = (meta: Partial<typeof defaultSEO>) => {
  const merged = { ...defaultSEO, ...meta };
  
  // Update document title
  document.title = merged.title;
  
  // Update meta description
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute('content', merged.description);
  }
  
  // Update meta keywords
  const keywords = document.querySelector('meta[name="keywords"]');
  if (keywords) {
    keywords.setAttribute('content', merged.keywords.join(', '));
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', merged.title);
  }
  
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', merged.description);
  }
  
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute('content', merged.image);
  }
  
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', merged.url);
  }
  
  const ogType = document.querySelector('meta[property="og:type"]');
  if (ogType) {
    ogType.setAttribute('content', merged.type);
  }
  
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale) {
    ogLocale.setAttribute('content', merged.locale);
  }
};

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jérôme Neupert',
    jobTitle: 'Développeur Full-Stack',
    description: defaultSEO.description,
    url: defaultSEO.url,
    sameAs: [
      'https://github.com/elfspectrals',
      'https://www.linkedin.com/in/jerome-neupert/'
    ],
    knowsAbout: [
      'React',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Web Development',
      'Mobile Development'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Développeur Full-Stack',
      description: 'Développement d\'applications web et mobiles modernes'
    }
  };
};
