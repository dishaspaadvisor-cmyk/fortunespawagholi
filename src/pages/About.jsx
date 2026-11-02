import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import siteData from "../data/siteData";

export default function About() {
  return (
    <div className="about-page">
      {/* About Section */}
      <AboutSection
        about={siteData.about}
      />


    </div>
  );
}