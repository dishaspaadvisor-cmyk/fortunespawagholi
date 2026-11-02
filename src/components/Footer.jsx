import {
    Phone,
    Mail,
    MapPin,
    ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";



import { Link } from "react-router-dom";

import { footerData as defaultFooterData } from "../data/siteData";

import "../style/Footer.css";

export default function Footer({
    footerData = defaultFooterData,
}) {
    const {
        logo,
        logoSubtext,
        description,
        quickLinks = [],
        services = [],
        socialLinks = [],
        contact = {},
        copyright,
    } = footerData;

    // =================================
    // WHATSAPP HANDLER
    // =================================

    const handleWhatsApp = () => {
        if (!contact.whatsapp) return;

        const message =
            "Hello FORTUNE SPA, I would like to know more about your services.";

        const whatsappUrl = `https://wa.me/${contact.whatsapp
            }?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <footer className="footer-section">
            <div className="footer-container">

                {/* =================================
            TOP FOOTER
        ================================= */}

                <div className="footer-top">

                    {/* =================================
              BRAND
          ================================= */}

                    <div className="footer-brand">

                        {/* Brand from props */}
                        <Link
                            to="/"
                            className="footer-logo"
                        >
                            <img
                                src="/images/logo/1.png"
                                alt={`${logo} ${logoSubtext}`}
                            />
                        </Link>



                        <p className="footer-description">
                            {description}
                        </p>

                        {/* SOCIAL LINKS */}

                        <div className="footer-socials">

                            {socialLinks.map((social, index) => {
                                let SocialIcon = null;

                                if (social.label === "Instagram") {
                                    SocialIcon = FaInstagram;
                                }

                                if (social.label === "Facebook") {
                                    SocialIcon = FaFacebookF;
                                }

                                if (social.label === "Pinterest") {
                                    SocialIcon = FaPinterestP;
                                }

                                if (social.label === "Twitter") {
                                    SocialIcon = FaTwitter;
                                }

                                if (social.label === "Youtube") {
                                    SocialIcon = FaYoutube;
                                }

                                if (!SocialIcon) return null;

                                return (
                                    <a
                                        key={social.label || index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="footer-social-link"
                                        aria-label={social.label}
                                        title={social.label}
                                    >
                                        <SocialIcon size={18} />
                                    </a>
                                );
                            })}

                        </div>

                    </div>


                    {/* =================================
              QUICK LINKS
          ================================= */}

                    <div className="footer-column">

                        <h4 className="footer-column-title">
                            Explore
                        </h4>

                        <ul className="footer-links">

                            {quickLinks.map((link, index) => (
                                <li key={link.label || index}>

                                    <a href={link.path}>

                                        <span>{link.label}</span>

                                        <ArrowUpRight
                                            size={13}
                                            strokeWidth={1.5}
                                        />

                                    </a>

                                </li>
                            ))}

                        </ul>

                    </div>


                    {/* =================================
              SERVICES
          ================================= */}

                    <div className="footer-column">

                        <h4 className="footer-column-title">
                            Treatments
                        </h4>

                        <ul className="footer-links">

                            {services.map((service, index) => (
                                <li key={service.label || index}>

                                    <a href={service.path}>

                                        <span>{service.label}</span>

                                        <ArrowUpRight
                                            size={13}
                                            strokeWidth={1.5}
                                        />

                                    </a>

                                </li>
                            ))}

                        </ul>

                    </div>


                    {/* =================================
              CONTACT
          ================================= */}

                    <div className="footer-column footer-contact-column">

                        <h4 className="footer-column-title">
                            Visit Us
                        </h4>

                        <div className="footer-contact-list">

                            {/* PHONE */}

                            {contact.phone && (
                                <a
                                    href={`tel:${contact.phone}`}
                                    className="footer-contact-item"
                                >
                                    <Phone
                                        size={16}
                                        strokeWidth={1.5}
                                    />

                                    <span>{contact.phone}</span>
                                </a>
                            )}


                            {/* EMAIL */}

                            {contact.email && (
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="footer-contact-item"
                                >
                                    <Mail
                                        size={16}
                                        strokeWidth={1.5}
                                    />

                                    <span>{contact.email}</span>
                                </a>
                            )}


                            {/* ADDRESS */}

                            {contact.address && (
                                <div className="footer-contact-item">

                                    <MapPin
                                        size={16}
                                        strokeWidth={1.5}
                                    />

                                    <span>{contact.address}</span>

                                </div>
                            )}

                        </div>


                        {/* CTA BUTTONS */}

                        <div className="footer-actions">

                            {contact.phone && (
                                <a
                                    href={`tel:${contact.phone}`}
                                    className="footer-call-btn"
                                >
                                    <Phone size={15} />
                                    <span>Call Now</span>
                                </a>
                            )}

                            {contact.whatsapp && (
                                <button
                                    type="button"
                                    onClick={handleWhatsApp}
                                    className="footer-whatsapp-btn"
                                >
                                    <FaWhatsapp size={15} />
                                    <span>WhatsApp</span>
                                </button>
                            )}

                        </div>

                    </div>

                </div>


                {/* =================================
            DIVIDER
        ================================= */}

                <div className="footer-divider" />


                {/* =================================
            BOTTOM FOOTER
        ================================= */}

                <div className="footer-bottom">

                    <span>
                        {copyright}
                    </span>

                    <div className="footer-bottom-center">

                        <span className="footer-star">
                            ✦
                        </span>

                        <span>
                            WELLNESS / BEAUTY / BALANCE
                        </span>

                    </div>

                    <a
                        href="/privacy-policy"
                        className="footer-privacy"
                    >
                        Privacy Policy
                    </a>

                </div>

            </div>
        </footer>
    );
}