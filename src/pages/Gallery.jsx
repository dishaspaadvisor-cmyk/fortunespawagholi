import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";

import { gallery } from "../data/siteData";

export default function Gallery() {
  return (
    <div className="gallery-page">



      <GallerySection
        gallery={gallery}
      />


    </div>
  );
}