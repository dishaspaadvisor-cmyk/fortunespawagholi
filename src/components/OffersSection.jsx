import { useEffect, useRef, useState } from "react";
import {
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contactData as defaultContactData } from "../data/siteData";

import "../style/OfferSection.css";

export default function OfferSection({
  offers = [],
  contactData = defaultContactData,
}) {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  // =================================
  // SCROLL REVEAL
  // =================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // =================================
  // WHATSAPP
  // =================================

  const handleWhatsApp = (offer) => {
    const message = `Hello FORTUNE SPA, I am interested in the ${offer.title} offer at ${offer.offerPrice}. Please share booking details.`;

    const whatsappUrl = `https://wa.me/${
      contactData.whatsapp
    }?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  // =================================
  // EMPTY STATE
  // =================================

  if (!offers.length) return null;

  return (
    <section
      ref={sectionRef}
      className={`offers-section ${
        isVisible ? "offers-visible" : ""
      }`}
    >
      <div className="offers-container">

        {/* =================================
            HEADER
        ================================= */}

        <div className="offers-header reveal-offer">

          <div className="offers-heading-content">

            <p className="offers-eyebrow">
              CURATED FOR YOU
            </p>

            <h2 className="offers-title">
              Special offers
            </h2>

            <p className="offers-subtitle">
              Discover moments of calm, thoughtfully created
              for your wellbeing.
            </p>

          </div>

          <div className="offers-header-symbol">
            ✦
          </div>

        </div>


        {/* =================================
            OFFER GRID
        ================================= */}

        <div className="offers-grid">

          {offers.map((offer, index) => (
            <article
              key={offer.id || index}
              className="offer-card reveal-offer"
              style={{
                "--offer-delay": `${index * 0.15}s`,
              }}
            >

              {/* Image */}
              <div className="offer-image-wrapper">

                <img
                  src={offer.image}
                  alt={offer.title}
                  className="offer-image"
                  loading="lazy"
                />

                <div className="offer-image-overlay" />

                <span className="offer-tag">
                  {offer.tag}
                </span>

                <span className="offer-index">
                  0{index + 1}
                </span>

              </div>


              {/* Content */}
              <div className="offer-content">

                <p className="offer-subtitle">
                  {offer.subtitle}
                </p>
                {/* Buttons */}
                <div className="offer-actions">

                  <a
                    href={`tel:${contactData.phone}`}
                    className="offer-call-btn"
                  >
                    <Phone size={15} />
                    <span>CALL NOW</span>
                  </a>

                  <button
                    type="button"
                    className="offer-whatsapp-btn"
                    onClick={() => handleWhatsApp(offer)}
                  >
                    <FaWhatsapp size={16} />
                    <span>WHATSAPP</span>
                  </button>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =================================
            BOTTOM LINE
        ================================= */}

        <div className="offers-bottom-line reveal-offer">

          <span>FORTUNE SPA</span>

          <div />

          <span>
            SPECIAL MOMENTS / BEAUTIFUL EXPERIENCES
          </span>

        </div>

      </div>
    </section>
  );
}