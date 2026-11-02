import { Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { contactData } from "../data/siteData";
import "../style/FloatingContactButtons.css";

export default function FloatingContactButtons() {
  const [open, setOpen] = useState(true);

  const whatsappMessage = encodeURIComponent(
    "Hello FORTUNE SPA Wagholi, I would like to know more about your spa services and offers."
  );

  return (
    <div className="floating-contact-wrapper">
      {/* Floating buttons */}
      <div className={`floating-contact-actions ${open ? "is-open" : ""}`}>
        {/* Call Button */}
        <a
          href={`tel:${contactData.phone}`}
          className="floating-contact-btn floating-call-btn"
          aria-label="Call FORTUNE SPA"
        >
          <span className="floating-btn-icon">
            <Phone size={21} strokeWidth={2} />
          </span>

          <span className="floating-btn-label">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${contactData.whatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact-btn floating-whatsapp-btn"
          aria-label="WhatsApp FORTUNE SPA"
        >
          <span className="floating-btn-icon">
            <FaWhatsapp size={24} />
          </span>

          <span className="floating-btn-label">WhatsApp</span>
        </a>
      </div>


    </div>
  );
}