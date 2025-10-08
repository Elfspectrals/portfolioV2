import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./ChatBot.module.scss";
import Avatar from '../../assets/avatar.png';

type QA = {
  question: string;
  answer: string;
};

const ChatBot = () => {
  const { t } = useTranslation();
  
  const predefinedQA: QA[] = [
    {
      question: t('chatbot.qa1.question'),
      answer: t('chatbot.qa1.answer'),
    },
    {
      question: t('chatbot.qa2.question'),
      answer: t('chatbot.qa2.answer'),
    },
    {
      question: t('chatbot.qa3.question'),
      answer: t('chatbot.qa3.answer'),
    },
    {
      question: t('chatbot.qa4.question'),
      answer: t('chatbot.qa4.answer'),
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: t('chatbot.welcome') },
  ]);

  const handleQuestionClick = (qa: QA) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: qa.question },
      { from: "bot", text: qa.answer },
    ]);
  };

  return (
    <div className={styles.chatbotContainer}>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>{t('chatbot.assistant')}</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className={styles.chatBody}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.from === "bot" ? styles.botMsg : styles.userMsg}
              >
                {msg.text}
              </div>
            ))}

            <div className={styles.questionList}>
              {predefinedQA.map((qa, i) => (
                <button key={i} onClick={() => handleQuestionClick(qa)}>
                  {qa.question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Avatar */}
      <button
        className={styles.avatarButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={Avatar} alt={t('chatbot.avatarAlt')} />
      </button>
    </div>
  );
};

export default ChatBot;
