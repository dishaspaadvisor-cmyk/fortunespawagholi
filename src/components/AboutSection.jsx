import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import "../style/AboutSection.css";

export default function AboutSection({ about }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section ${isVisible ? "about-visible" : ""}`}
    >
      <div className="about-container">
        <div className="about-heading reveal-up">
          <div className="about-heading-top">
            <span className="about-eyebrow">
              {about.eyebrow}
            </span>

       
          </div>

      
        </div>

        <div className="about-main-grid">
          <div className="about-image-area reveal-up">
            <div className="about-image-wrapper">
              <img
                src="/images/gallery/15.JPG"
                alt={about.imageAlt}
                className="about-image"
              />
            </div>

            <div className="about-image-caption">
              <span className="about-caption-line" />
              <span>A SPACE MADE FOR YOU</span>
            </div>
          </div>

          <div className="about-content reveal-up">
            <span className="about-side-label">
              {about.sideLabel}
            </span>

            <h3 className="about-side-title">
              {about.sideTitle}
            </h3>

            <p className="about-description">
              {about.description}
            </p>

            <p className="about-side-description">
              {about.sideDescription}
            </p>

  

            <a
              href={about.buttonLink}
              className="about-button"
            >
              <span>{about.buttonText}</span>
              <ArrowUpRight size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="about-bottom-line reveal-up">
          <span>Fortune Spa</span>
          <div />
          <span>RELAX / RESTORE / RENEW</span>
        </div>
      </div>
    </section>
  );
}