import { useEffect, useState } from "react";
import { heroSlides, contactData } from "../data/siteData";
import "../style/Hero.css";
import {
  Phone,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const interval = setInterval(() => {
      setActiveSlide((previous) => (previous + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  const goToPrevious = () => {
    setActiveSlide(
      (previous) => (previous - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const goToNext = () => {
    setActiveSlide((previous) => (previous + 1) % heroSlides.length);
  };

  return (
    <section className="hero-section">
      {/* Desktop Image Slides */}
      <div className="hero-desktop-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${
              activeSlide === index ? "hero-slide-active" : ""
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
            }}
          />
        ))}
      </div>

      {/* Mobile Single Background Video */}
      <div className="hero-mobile-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero1.mp4"
        >
          <source src="/images/hero/1.mp4" type="video/mp4" />
        </video>
      </div>



      {/* Decorative Top Label */}
      <div className="hero-top-label">
        <span className="hero-top-line" />
        <span> FORTUNE SPA </span>
        <span className="hero-top-line" />
      </div>

      {/* Main Content */}
      <div
        className={`hero-content ${
          isLoaded ? "hero-content-loaded" : ""
        }`}
      >
        <div className="hero-content-inner" key={currentSlide.id}>
          <span className="hero-eyebrow">
            {currentSlide.eyebrow}
          </span>

          <h1 className="hero-title">
            {currentSlide.title}
            <br />
            <em>{currentSlide.highlight}</em>
          </h1>

          <div className="hero-action-controls">
            <a
              href={`tel:${contactData.phone}`}
              className="hero-call-button"
            >
              <Phone size={15} strokeWidth={1.7} />
              <span>Call</span>
            </a>

            <a
              href={`https://wa.me/${
                contactData.whatsapp
              }?text=${encodeURIComponent(
                "Hello Fortune Spa, I would like to book an appointment."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-whatsapp-button"
            >
              <FaWhatsapp size={17} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="hero-bottom">
        {/* Slide Number */}
 

        {/* Slide Progress */}
        <div className="hero-progress">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-progress-item ${
                activeSlide === index
                  ? "hero-progress-active"
                  : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}