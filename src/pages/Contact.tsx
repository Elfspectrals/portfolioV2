import React, { useState } from "react";
import styles from "./Contact.module.scss";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
// import Rocket from "../assets/rocket.svg";

type Status = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/jerome.neupert@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Network response was not ok");
      const data = (await res.json()) as { message?: string };

      setStatus("success");
      setFeedback(data?.message || t("contact.successMsg"));
      toast.success(`✅ ${t("contact.successToast")}`);
      form.reset();
    } catch {
      setStatus("error");
      setFeedback(t("contact.errorMsg"));
      toast.error(`❌ ${t("contact.errorToast")}`);
    }
  };

  return (
    <div className={styles.container}>
      {/* Conteneur global des toasts */}
      <Toaster position="top-right" />

      <header className={styles.header}>
        <h1>{t("contact.title")}</h1>
        <h2>{t("contact.subtitle")}</h2>
      </header>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          name="name"
          placeholder={t("contact.name")}
          className={styles.input}
          required
          autoComplete="name"
        />

        <input
          type="email"
          name="email"
          placeholder={t("contact.email")}
          className={styles.input}
          required
          autoComplete="email"
        />

        <textarea
          name="message"
          rows={5}
          placeholder={t("contact.message")}
          className={styles.textarea}
          required
        />

        <button
          type="submit"
          className={styles.button}
          disabled={status === "loading"}
        >
          {status === "loading" ? t("contact.sending") : t("contact.send")}
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
