import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { faqs } from "../data/siteData";
import "../style/FAQSection.css";

export default function FAQSection({ faqData = faqs }) {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId((previousId) => (previousId === id ? null : id));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-intro">
          <span className="faq-eyebrow">FREQUENTLY ASKED QUESTIONS</span>

          <h2>
            Everything you need
            <br />
            to know before
            <br />
            <em>your visit.</em>
          </h2>

          <p>
            Have more questions? Our team is always happy to help you plan a
            peaceful and personalized spa experience.
          </p>

          <a href="#contact" className="faq-contact-link">
            Still have questions?
            <ArrowUpRight size={17} strokeWidth={1.7} />
          </a>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => {
            const isOpen = activeId === faq.id;

            return (
              <div
                className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                key={faq.id}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-left">
                    <span className="faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="faq-question-text">
                      {faq.question}
                    </span>
                  </span>

                  <span className="faq-toggle-icon">
                    {isOpen ? (
                      <Minus size={18} strokeWidth={1.5} />
                    ) : (
                      <Plus size={18} strokeWidth={1.5} />
                    )}
                  </span>
                </button>

                <div
                  className={`faq-answer-wrapper ${
                    isOpen ? "faq-answer-visible" : ""
                  }`}
                >
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}