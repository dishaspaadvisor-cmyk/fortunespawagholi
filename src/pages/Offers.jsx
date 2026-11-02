import OffersSection from "../components/OffersSection";
import Footer from "../components/Footer";
import { contactData, offers } from "../data/siteData";

export default function Offers() {
	return (
		<div className="content-page offers-page">
		
			<OffersSection offers={offers} contactData={contactData} />
		
		</div>
	);
}
