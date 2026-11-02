import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import FAQSection from "../components/FAQSection";

import siteData from "../data/siteData";
import ServicesSection from "../components/ServicesSection";
import { contactData, services } from "../data/siteData";
import GallerySection from "../components/GallerySection";
import OffersSection from "../components/OffersSection";
import { gallery, offers } from "../data/siteData";
import Footer from "../components/Footer";
import { footerData } from "../data/siteData";
import { faqs } from "../data/siteData";

export default function Home() {
  return (
    <>
      <HeroSection
        hero={siteData.hero}
      />

      <ServicesSection
        services={services}
        contactData={contactData}
      />

      <AboutSection
        about={siteData.about}
      />


      <OffersSection
        offers={offers}
        contactData={contactData}
      />

      <GallerySection
        gallery={gallery}
      />

      <FAQSection faqData={faqs} />

      <ContactSection contactData={contactData} />
      <MapSection />





    </>
  );
}