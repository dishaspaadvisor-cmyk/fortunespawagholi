
import { useEffect, useState } from "react";
import { X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contactData as defaultContactData } from "../data/siteData";
import "../style/OfferPopup.css";

const POPUP_DELAY_MS = 30000;

export default function OfferPopup({
  contactData = defaultContactData,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    const message =
      "Hello, I am interested in your special spa offer of ₹1999. Please share more details.";

    const whatsappUrl = `https://wa.me/${
      contactData.whatsapp
    }?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleCall = () => {
    window.location.href = `tel:${contactData.phone}`;
  };

  if (!open) return null;

  return (
    <div className="offer-popup-overlay">
      <div className="offer-popup-card">

        {/* Close Button */}
        <button
          type="button"
          className="offer-popup-close"
          onClick={() => setOpen(false)}
          aria-label="Close offer popup"
        >
          <X size={20} />
        </button>

        {/* Top Image */}
        <div className="offer-popup-image-wrapper">
          <img
            src="/images/hero/38.png"
            alt="Special Spa Offer"
            className="offer-popup-image"
          />

          <div className="offer-popup-image-overlay">
            <span>LIMITED TIME OFFER</span>
          </div>
        </div>

        {/* Content */}
        <div className="offer-popup-content">
          <p className="offer-popup-eyebrow">
            FORTUNE SPA EXPERIENCE
          </p>

          <h2>
           Book now!
          </h2>

          <p className="offer-popup-description">
            Treat yourself to a luxurious spa experience at an
            exclusive special price.
          </p>

          <div className="offer-popup-price">
            <span className="offer-popup-price-label">
              SPECIAL OFFER
            </span>

            <strong>₹1999</strong>
          </div>

          <p className="offer-popup-small-text">
            Limited slots available. Book your experience today.
          </p>

          {/* Action Buttons */}
          <div className="offer-popup-actions">
            <button
              type="button"
              className="offer-popup-call"
              onClick={handleCall}
            >
              <Phone size={18} />
              Call Now
            </button>

            <button
              type="button"
              className="offer-popup-whatsapp"
              onClick={handleWhatsApp}
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

