import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contactData as defaultContactData } from "../data/siteData";
import "../style/ContactSection.css";

const FORM_KEY = "frm_fortunespawagholi_784255";

const API_URL =
  "https://apibackend.mastercall.in/api/v1/web-leads/submit/";

export default function ContactSection({
  contactData = defaultContactData,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    setStatus({
      type: "",
      message: "",
    });

    setLoading(true);

    try {
      // Send all entered values exactly as they are.
      // No frontend validation or field restriction.
      const payload = {
        form_key: FORM_KEY,

        name: formData.name,

        phone: formData.phone,

        address: formData.address,

        notes: formData.notes,

        // Backend compatibility
        message: formData.notes,

        contact_phone: contactData?.phone || "",

        contact_email: contactData?.email || "",

        contact_address: contactData?.address || "",

        submitted_from_url:
          typeof window !== "undefined"
            ? window.location.href
            : "",
      };

      console.log("=================================");
      console.log("SUBMITTING WEB LEAD");
      console.log("API URL:", API_URL);
      console.log("PAYLOAD:", payload);
      console.log("=================================");

      const response = await fetch(API_URL, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify(payload),
      });

      console.log("API STATUS:", response.status);
      console.log("API OK:", response.ok);

      // Read response safely
      const rawResponse = await response.text();

      console.log("API RAW RESPONSE:", rawResponse);

      let result = null;

      try {
        result = rawResponse ? JSON.parse(rawResponse) : null;
      } catch {
        console.warn("API response is not valid JSON");
      }

      console.log("API PARSED RESPONSE:", result);

      if (!response.ok) {
        throw new Error(
          result?.message ||
            result?.detail ||
            result?.error ||
            rawResponse ||
            `Request failed with status ${response.status}`
        );
      }

      setStatus({
        type: "success",
        message:
          result?.message ||
          "Thank you! Your booking request has been submitted successfully.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        address: "",
        notes: "",
      });
    } catch (error) {
      console.error("WEB LEAD SUBMISSION ERROR:", error);

      let errorMessage = error?.message;

      if (
        errorMessage === "Failed to fetch" ||
        errorMessage?.includes("NetworkError")
      ) {
        errorMessage =
          "Unable to connect to the server. Please check your internet connection or call us directly.";
      }

      setStatus({
        type: "error",
        message:
          errorMessage ||
          "Something went wrong. Please call us directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message =
      "Hello FORTUNE SPA Wagholi, I would like to book a spa appointment.";

    const whatsappUrl = `https://wa.me/${
      contactData.whatsapp
    }?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h2>
            Your moment of
            <br />
            <em>wellness</em> begins here.
          </h2>

          <p>
            Whether you are looking for relaxation, rejuvenation, or simply
            some peaceful time for yourself, our team is here to help you
            choose the perfect experience.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Contact Details */}
          <div className="contact-details">
            <div className="contact-details-header">
              <span className="small-label">CONTACT DETAILS</span>

              <h3>Visit us or connect with our team.</h3>
            </div>

            <div className="contact-info-list">
              <a
                href={`tel:${contactData.phone}`}
                className="contact-info-item"
              >
                <span className="contact-icon">
                  <Phone size={19} strokeWidth={1.6} />
                </span>

                <span className="contact-info-content">
                  <small>CALL US</small>
                  <strong>{contactData.phone}</strong>
                </span>

                <ArrowUpRight
                  className="contact-info-arrow"
                  size={18}
                  strokeWidth={1.5}
                />
              </a>

              <a
                href={`mailto:${contactData.email}`}
                className="contact-info-item"
              >
                <span className="contact-icon">
                  <Mail size={19} strokeWidth={1.6} />
                </span>

                <span className="contact-info-content">
                  <small>EMAIL US</small>
                  <strong>{contactData.email}</strong>
                </span>

                <ArrowUpRight
                  className="contact-info-arrow"
                  size={18}
                  strokeWidth={1.5}
                />
              </a>

              <div className="contact-info-item contact-address-item">
                <span className="contact-icon">
                  <MapPin size={19} strokeWidth={1.6} />
                </span>

                <span className="contact-info-content">
                  <small>OUR LOCATION</small>
                  <strong>{contactData.address}</strong>
                </span>
              </div>
            </div>

            <div className="contact-actions">
              <a
                href={`tel:${contactData.phone}`}
                className="contact-call-button"
              >
                <Phone size={17} />
                Call Now
              </a>

              <button
                type="button"
                className="contact-whatsapp-button"
                onClick={handleWhatsApp}
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </button>
            </div>

            <div className="contact-note">
              <span className="contact-note-dot" />

              <span>
                Our team usually responds within a few minutes.
              </span>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-top">
              <div>
                <span className="small-label">
                  BOOK AN EXPERIENCE
                </span>

                <h3>Let us take care of you.</h3>
              </div>

              <div className="form-number">01</div>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="address">
                  Your Location
                </label>

                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="Enter your location"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="notes">
                  Message / Booking Details
                </label>

                <textarea
                  id="notes"
                  name="notes"
                  rows="5"
                  placeholder="Tell us your preferred service, date, or any special request..."
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>

              {status.message && (
                <div
                  className={`contact-status contact-status-${status.type}`}
                >
                  {status.type === "success" ? (
                    <CheckCircle size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}

                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="contact-submit-button"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="contact-spinner" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Send Booking Request
                    <Send size={17} strokeWidth={1.8} />
                  </>
                )}
              </button>

              <p className="form-disclaimer">
                By submitting this form, you agree to be contacted by our
                team regarding your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}