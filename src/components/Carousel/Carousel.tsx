// src/components/Carousel/Carousel.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Carousel.module.scss";

export type CarouselItem = {
  id: string | number;
  title: string;
  description?: string;
  cover?: string;     // optional background image url
  ctaLabel?: string;  // defaults to "Jouer" or "Bientôt"
  href?: string;      // if provided -> renders <a>, else disabled <button>
};

interface CarouselProps {
  title: string;
  subtitle?: string;
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;  // ms, default 5000
}

const Carousel: React.FC<CarouselProps> = ({
  title,
  subtitle,
  items,
  autoPlay = true,
  interval = 5000,
}) => {
  const [index, setIndex] = useState(0);
  const isPausedRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);
  const slidesCount = items.length;

  const goTo = (i: number) => {
    if (slidesCount === 0) return;
    const mod = ((i % slidesCount) + slidesCount) % slidesCount;
    setIndex(mod);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // autoplay
  useEffect(() => {
    if (!autoPlay || slidesCount <= 1) return;
    const id = window.setInterval(() => {
      if (!isPausedRef.current) next();
    }, Math.max(1500, interval));
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, interval, slidesCount, index]);

  // pause/resume handlers
  const pause = () => { isPausedRef.current = true; };
  const resume = () => { isPausedRef.current = false; };

  // keyboard nav on container
  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); prev(); }
  };

  // touch swipe
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    const dx = touchDeltaX.current;
    touchStartX.current = null;
    touchDeltaX.current = 0;
    const threshold = 48; // px
    if (Math.abs(dx) > threshold) {
      if (dx < 0) next(); else prev();
    }
  };

  const trackStyle = useMemo(
    () => ({ transform: `translate3d(${-index * 100}%, 0, 0)` }),
    [index]
  );

  if (slidesCount === 0) return null;

  return (
    <section
      className={styles.carouselSection}
      aria-roledescription="carousel"
      aria-label={title}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
      onKeyDown={onKeyDown}
    >
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </header>

      <div
        className={styles.viewport}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles.track} style={trackStyle}>
          {items.map((item, i) => (
            <article
              key={item.id}
              className={styles.slide}
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${slidesCount}: ${item.title}`}
            >
              <div
                className={styles.cover}
                style={
                  item.cover
                    ? { backgroundImage: `url(${item.cover})` }
                    : undefined
                }
                aria-hidden="true"
              />
              <div className={styles.content}>
                <h3 className={styles.gameTitle}>{item.title}</h3>
                {item.description && (
                  <p className={styles.desc}>{item.description}</p>
                )}
                {item.href ? (
                  <a
                    className={styles.cta}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {item.ctaLabel || "Jouer"}
                  </a>
                ) : (
                  <button className={styles.cta} type="button" disabled>
                    {item.ctaLabel || "Bientôt"}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {slidesCount > 1 && (
          <>
            <button
              className={styles.prev}
              aria-label="Diapo précédente"
              onClick={prev}
              type="button"
            >
              ‹
            </button>
            <button
              className={styles.next}
              aria-label="Diapo suivante"
              onClick={next}
              type="button"
            >
              ›
            </button>
          </>
        )}
      </div>

      {slidesCount > 1 && (
        <div className={styles.dots} role="tablist" aria-label="Sélection de diapo">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === index}
              aria-label={`Aller à la diapo ${i + 1}`}
              className={i === index ? `${styles.dot} ${styles.active}` : styles.dot}
              onClick={() => goTo(i)}
              type="button"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Carousel;
