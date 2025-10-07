import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Clock,
  MessageCircle
} from 'lucide-react';
import styles from './Contact.module.scss';

interface ContactProps {
  t: (key: string) => string;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { ref, inView } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('idle');
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className={styles.contactIcon} />,
      title: 'Email',
      value: 'jerome@example.com',
      href: 'mailto:jerome@example.com'
    },
    {
      icon: <Phone className={styles.contactIcon} />,
      title: 'Téléphone',
      value: '+33 6 12 34 56 78',
      href: 'tel:+33612345678'
    },
    {
      icon: <MapPin className={styles.contactIcon} />,
      title: 'Localisation',
      value: 'Paris, France',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className={styles.socialIcon} />,
      name: 'GitHub',
      href: 'https://github.com/elfspectrals/',
      color: '#333'
    },
    {
      icon: <Linkedin className={styles.socialIcon} />,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jerome-neupert/',
      color: '#0077b5'
    },
    {
      icon: <Twitter className={styles.socialIcon} />,
      name: 'Twitter',
      href: 'https://twitter.com/jerome_dev',
      color: '#1da1f2'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className={styles.contact}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="contact"
    >
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          variants={itemVariants}
        >
          <div className={styles.titleSection}>
            <MessageCircle className={styles.titleIcon} />
            <h2 className={styles.title}>Contactez-moi</h2>
            <p className={styles.subtitle}>
              Prêt à collaborer ? Discutons de votre prochain projet
            </p>
          </div>
        </motion.div>

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.div 
            className={styles.contactInfo}
            variants={itemVariants}
          >
            <div className={styles.infoCard}>
              <h3>Informations de contact</h3>
              <p>N'hésitez pas à me contacter pour toute question ou collaboration</p>
              
              <div className={styles.contactList}>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    className={styles.contactItem}
                    whileHover={{ scale: 1.05, x: 10 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {info.icon}
                    <div className={styles.contactDetails}>
                      <span className={styles.contactTitle}>{info.title}</span>
                      <span className={styles.contactValue}>{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className={styles.availability}>
                <div className={styles.availabilityHeader}>
                  <Clock className={styles.availabilityIcon} />
                  <span>Disponibilité</span>
                </div>
                <div className={styles.availabilityStatus}>
                  <div className={styles.statusDot} />
                  <span>Disponible pour de nouveaux projets</span>
                </div>
              </div>
            </div>

            <div className={styles.socialCard}>
              <h3>Réseaux sociaux</h3>
              <p>Suivez-moi pour voir mes derniers projets</p>
              
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    style={{ '--social-color': social.color } as React.CSSProperties}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className={styles.contactForm}
            variants={itemVariants}
          >
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3>Envoyez-moi un message</h3>
                <p>Je réponds généralement dans les 24h</p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.input}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.input}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className={styles.spinner} />
                      <span>Envoi en cours...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className={styles.buttonIcon} />
                      <span>Message envoyé !</span>
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className={styles.buttonIcon} />
                      <span>Erreur d'envoi</span>
                    </>
                  ) : (
                    <>
                      <Send className={styles.buttonIcon} />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className={styles.cta}
          variants={itemVariants}
        >
          <div className={styles.ctaContent}>
            <Calendar className={styles.ctaIcon} />
            <h3>Prêt à commencer ?</h3>
            <p>Planifions un appel pour discuter de votre projet</p>
            <motion.a
              href="https://calendly.com/jerome-neupert"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Planifier un appel</span>
              <Calendar className={styles.buttonIcon} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
