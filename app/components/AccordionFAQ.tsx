"use client";

import { useState } from "react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "collapseOne",
    question: "How does Reputation AI work?",
    answer:
      "Our AI scans the entire web including review sites, news, social media, blogs, and forums for mentions of your business. We analyze each mention for sentiment (positive, negative, neutral) and identify key topics. You get a reputation score and actionable recommendations in seconds.",
  },
  {
    id: "collapseTwo",
    question: "What sources does Reputation AI analyze?",
    answer:
      "Reputation AI analyzes mentions across review platforms (Google Reviews, Yelp, Trustpilot), news sources, social media platforms (Facebook, Twitter, Instagram, LinkedIn), blogs, forums, and more. We focus on the mentions people actually see.",
  },
  {
    id: "collapseThree",
    question: "How long does it take to get my reputation report?",
    answer:
      "You get your complete reputation report in seconds. Our AI analyzes everything in real-time and presents your reputation score, sentiment breakdown, key topics, and recommendations immediately.",
  },
  {
    id: "collapseFore",
    question: "Is my business data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption and security protocols to protect your data. We only analyze publicly available information about your business and never share your data with third parties.",
  },
];

export default function AccordionFAQ() {
  const [openId, setOpenId] = useState<string>("collapseOne");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <>
      {faqs.map((faq) => (
        <div key={faq.id} className="accordion-item top-reveal">
          <div className="accordion-header">
            <button
              className={`accordion-button ${openId !== faq.id ? "collapsed" : ""}`}
              type="button"
              onClick={() => toggleAccordion(faq.id)}
              aria-expanded={openId === faq.id}
              aria-controls={faq.id}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={faq.id}
            className={`accordion-collapse collapse ${openId === faq.id ? "show" : ""}`}
            data-bs-parent="#greatSolutions"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
