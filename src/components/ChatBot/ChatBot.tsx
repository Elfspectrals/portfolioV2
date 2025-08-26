import { useState } from "react";
import styles from "./ChatBot.module.scss";
import Avatar from '../../assets/avatar.png';

type QA = {
  question: string;
  answer: string;
};

const predefinedQA: QA[] = [
  {
    question: "Mon rythme d'alternance ?",
    answer: "Je suis en alternance avec un rythme de 3 semaines en entreprise et 1 semaine en cours.",
  },
  {
    question: "Je suis en quelle année ?",
    answer: "Je suis dans ma 3ème année à l'ESGI et je prévois d'aller en master dans le développement.",
  },
  {
    question: "Quels langages je connais ?",
    answer: "J'utilise principalement JavaScript, TypeScript, React, Node.js, HTML, CSS, PHP ( Laravel & Symfony), Wordpress & Shopify et un peu de Go ou du Rust. Et encore du Unreal Engine.",
  },
  {
    question: "Quels projets je fais ?",
    answer: "Je travaille sur des extensions Chrome, des applis React/Node, et des intégrations IA avec Gemini. Ou encore des jeux sur Unreal Engine 5 ou bien en web n'hésitez pas à me demander.",
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "👋 Salut ! Comment puis-je t’aider ?" },
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
            <span>Assistant</span>
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
        <img src={Avatar} alt="Chat Avatar" />
      </button>
    </div>
  );
};

export default ChatBot;
