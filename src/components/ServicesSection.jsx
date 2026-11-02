import { useEffect, useRef, useState } from "react";
import { Phone, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { services as defaultServices, contactData as defaultContactData } from "../data/siteData";
import "../style/ServicesSection.css";

export default function ServicesSection({ services = defaultServices, contactData = defaultContactData }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const handleWhatsApp = (service) => {
    const message = `Hello FORTUNE SPA, I am interested in booking ${service.title}. Please share more details.`;

    const whatsappUrl = `https://wa.me/${
      contactData.whatsapp
    }?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      ref={sectionRef}
      className={`services-section ${
        isVisible ? "services-visible" : ""
      }`}
    >
      <div className="services-container">

        {/* =================================
            SECTION INTRO
        ================================= */}
        <div className="services-heading reveal-service">

          <div className="services-symbol">
            <span>✦</span>
          </div>

          <p className="services-eyebrow">
            THE Fortune Spa EXPERIENCE
          </p>

          <h2 className="services-main-title">
            Our Services 
            <br />
         
          </h2>

        

        </div>


        {/* =================================
            SERVICES GRID
        ================================= */}
        <div className="services-grid">

          {services.map((service, index) => (
            <article
              key={service.id}
              className="service-card reveal-service"
              style={{
                "--service-delay": `${index * 0.12}s`,
              }}
            >

              {/* Image */}
              <div className="service-image-wrapper">

                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />

                <div className="service-image-overlay" />

                <span className="service-category">
                  {service.category}
                </span>

              </div>


              {/* Content */}
              <div className="service-content">

                <div className="service-title-row">

                  <h3 className="service-title">
                    {service.title}
                  </h3>

                  <ArrowUpRight
                    size={22}
                    className="service-arrow"
                  />

                </div>

                <p className="service-description">
                  {service.description}
                </p>


             


                {/* Buttons */}
                <div className="service-actions">

                  <a
                    href={`tel:${contactData.phone}`}
                    className="service-call-btn"
                  >
                    <Phone size={16} />
                    <span>CALL NOW</span>
                  </a>

                  <button
                    onClick={() => handleWhatsApp(service)}
                    className="service-whatsapp-btn"
                  >
                    <FaWhatsapp size={17} />
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
        <div className="services-bottom-line reveal-service">

          <span>FORTUNE SPA</span>

          <div />

          <span>RESTORE / RENEW / RECONNECT</span>

        </div>

      </div>
    </section>
  );
}