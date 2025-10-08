import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, User, MessageSquare } from 'lucide-react';
import styles from './MailModal.module.scss';

interface MailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MailModal: React.FC<MailModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Clean up iframe
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.header}>
              <div className={styles.titleSection}>
                <Mail className={styles.mailIcon} />
                <h2>Contactez-moi</h2>
              </div>
              <button 
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Fermer"
              >
                <X className={styles.closeIcon} />
              </button>
            </div>

            {!isSubmitted ? (
              <form 
                action="https://formsubmit.co/jerome.neupert@gmail.com" 
                method="POST"
                onSubmit={handleSubmit} 
                className={styles.form}
              >
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="Nouveau message depuis votre portfolio" />
                <input type="hidden" name="_next" value={window.location.origin} />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Merci pour votre message ! Je vous répondrai dans les plus brefs délais." />
                
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    <User className={styles.inputIcon} />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Votre nom"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    <Mail className={styles.inputIcon} />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="votre@email.com"
                    required
                  />
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
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    <MessageSquare className={styles.inputIcon} />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={styles.textarea}
                    placeholder="Décrivez votre projet ou votre demande..."
                    rows={5}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className={styles.spinner}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className={styles.sendIcon} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className={styles.successIcon}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  ✓
                </motion.div>
                <h3>Message envoyé avec succès !</h3>
                <p>Je vous répondrai dans les plus brefs délais.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MailModal;
