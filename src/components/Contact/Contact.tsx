import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Github,
  Linkedin,
  Clock,
  MessageCircle
} from 'lucide-react';
import styles from './Contact.module.scss';

const Contact: React.FC = () => {
  const { t } = useTranslation();
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
    setIsSubmitting(true);
    
    try {
      // Create a hidden iframe to submit the form
      const form = e.currentTarget as HTMLFormElement;
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'formsubmit-iframe';
      document.body.appendChild(iframe);
      
      // Set form target to iframe
      form.target = 'formsubmit-iframe';
      
      // Submit the form
      form.submit();
      
      // Show success state after a delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Clean up iframe
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
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
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className={styles.contactIcon} />,
      title: t('contact.email'),
      value: 'jerome.neupert@gmail.com',
      href: 'mailto:jerome.neupert@gmail.com'
    },
    {
      icon: <Phone className={styles.contactIcon} />,
      title: t('contact.phone'),
      value: '+33 7 67 19 62 73',
      href: 'tel:+33767196273'
    },
    {
      icon: <MapPin className={styles.contactIcon} />,
      title: t('contact.location'),
      value: t('contact.locationValue'),
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className={styles.socialIcon} />,
      name: t('contact.social.github'),
      href: 'https://github.com/elfspectrals/',
      color: '#333'
    },
    {
      icon: <Linkedin className={styles.socialIcon} />,
      name: t('contact.social.linkedin'),
      href: 'https://www.linkedin.com/in/jerome-neupert/',
      color: '#0077b5'
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
            <h2 className={styles.title}>{t('contact.title')}</h2>
            <p className={styles.subtitle}>
              {t('contact.subtitle')}
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
              <h3>{t('contact.infoTitle')}</h3>
              <p>{t('contact.infoDescription')}</p>
              
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
                  <span>{t('contact.availability')}</span>
                </div>
                <div className={styles.availabilityStatus}>
                  <div className={styles.statusDot} />
                  <span>{t('contact.availabilityStatus')}</span>
                </div>
              </div>
            </div>

            <div className={styles.socialCard}>
              <h3>{t('contact.socialTitle')}</h3>
              <p>{t('contact.socialDescription')}</p>
              
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
                <h3>{t('contact.formTitle')}</h3>
                <p>{t('contact.formDescription')}</p>
              </div>

              <form 
                action="https://formsubmit.co/jerome.neupert@gmail.com" 
                method="POST"
                onSubmit={handleSubmit} 
                className={styles.form}
              >
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value={t('contact.formSubject')} />
                <input type="hidden" name="_next" value={window.location.origin} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value={t('contact.formAutoResponse')} />
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      {t('contact.nameLabel')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.input}
                      required
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      {t('contact.emailLabel')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.input}
                      required
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    {t('contact.subjectLabel')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder={t('contact.subjectPlaceholder')}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    {t('contact.messageLabel')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    required
                    rows={5}
                    placeholder={t('contact.messagePlaceholder')}
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
                      <span>{t('contact.sending')}</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className={styles.buttonIcon} />
                      <span>{t('contact.successMessage')}</span>
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className={styles.buttonIcon} />
                      <span>{t('contact.errorMessage')}</span>
                    </>
                  ) : (
                    <>
                      <Send className={styles.buttonIcon} />
                      <span>{t('contact.sendButton')}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default Contact;
