import { MapPin, ExternalLink } from "lucide-react";
import { contactData } from "../data/siteData";
import "../style/MapSection.css";

const mapQuery = encodeURIComponent(contactData.address);

export default function MapSection() {
  const googleMapsUrl ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30253.84576827411!2d73.95573947431643!3d18.586175000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c366efa3341b%3A0xed554bbfe95a5fbb!2sFortune%20Thai%20Spa%20In%20Wagholi!5e0!3m2!1sen!2sus!4v1790079382992!5m2!1sen!2sus"

  return (
    <section className="map-section">
      <div className="map-container">
        <div className="map-header">
          <div>
            <span className="map-eyebrow">FIND YOUR WAY TO US</span>

            <h2>
              Visit <em>FORTUNE SPA</em>
            </h2>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-directions-button"
          >
            Get Directions
            <ExternalLink size={16} strokeWidth={1.7} />
          </a>
        </div>

        <div className="map-frame-wrapper">
          <iframe
            title="FORTUNE SPA Wagholi Location"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="map-location-card">
            <span className="map-location-icon">
              <MapPin size={19} />
            </span>

            <div>
              <strong>FORTUNE SPA Wagholi</strong>
              <p>{contactData.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}