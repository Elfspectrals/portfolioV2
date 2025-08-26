import React, { useState } from "react";
import styles from "./Contact.module.scss";
import toast, { Toaster } from "react-hot-toast";

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/jerome.neupert@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) throw new Error("Network response was not ok");
      const data = (await res.json()) as { message?: string };

      setStatus("success");
      setFeedback(data?.message || "Merci, votre message a bien été envoyé !");
      toast.success("✅ Message envoyé avec succès !");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("Oups, l’envoi a échoué. Réessayez plus tard ou contactez-moi directement.");
      toast.error("❌ Erreur lors de l’envoi du message.");
    }
  };

  return (
    <div className={styles.container}>
      {/* Conteneur global des toasts */}
      <Toaster position="top-right" />

      <header className={styles.header}>
        <h1>Contactez-moi</h1>
        <h2>Pour m'avoir en prochain alternant, je suis sympathique</h2>
      </header>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          className={styles.input}
          required
          autoComplete="name"
        />

        <input
          type="email"
          name="email"
          placeholder="Votre email"
          className={styles.input}
          required
          autoComplete="email"
        />

        <textarea
          name="message"
          rows={5}
          placeholder="Votre message"
          className={styles.textarea}
          required
        />

        <button type="submit" className={styles.button} disabled={status === "loading"}>
          {status === "loading" ? "Envoi..." : "Envoyer"}
        </button>

        <div
          className={
            status === "success"
              ? styles.success
              : status === "error"
              ? styles.error
              : styles.status
          }
          aria-live="polite"
          role="status"
        >
          {feedback}
        </div>
      </form>
    </div>
  );
};

export default Contact;
