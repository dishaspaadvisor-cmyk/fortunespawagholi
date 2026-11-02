import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import { contactData } from "../data/siteData";

export default function Contact() {
  return (
    <>
      <main>
        <ContactSection contactData={contactData} />
        <MapSection />
      </main>

    </>
  );
}