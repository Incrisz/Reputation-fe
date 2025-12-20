import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | BizVisibility AI - Frequently Asked Questions",
  description:
    "Find answers to common questions about BizVisibility AI's visibility scoring, AI analysis, pricing plans, data security, and how to improve your online presence.",
};

export default function FAQPage() {
  const topQuestions = [
    {
      question: "How is my visibility score calculated?",
      answer:
        "We combine website performance, search presence, listings accuracy, reviews, and social signals using the approved BizVisibility AI model. Each factor is weighted by impact on discoverability.",
    },
    {
      question: "How often do you scan my business?",
      answer:
        "Starter scans weekly, Growth scans daily, and Enterprise is configurable. You can trigger on-demand scans after important changes.",
    },
    {
      question: "Do you support multiple locations?",
      answer:
        "Yes. Growth supports up to 5 locations. Enterprise supports unlimited locations with location groups and permissions.",
    },
    {
      question: "Can I invite my team?",
      answer:
        "All paid plans support team invites with role-based access so marketers, owners, and agencies can collaborate.",
    },
    {
      question: "How do I cancel?",
      answer:
        "You can cancel anytime from billing settings. Your subscription remains active through the current period.",
    },
  ];

  const moreQuestions = [
    {
      question: "Do you integrate with Google Business Profile?",
      answer:
        "Yes. Connect your profile to keep listings synced, track reviews, and feed local data into your score.",
    },
    {
      question: "Can I export reports?",
      answer:
        "Download PDF or CSV reports for stakeholders. Growth includes weekly summaries; Enterprise adds custom intervals.",
    },
    {
      question: "What if I don't have access to my listings?",
      answer:
        "We guide you through reclaiming or verifying listings so your data stays accurate and consistent.",
    },
    {
      question: "Do you offer onboarding?",
      answer:
        "Yes—Growth includes guided setup, and Enterprise adds hands-on onboarding with a dedicated success manager.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* FAQ Section */}
      <section className="py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="service-one__item h-100">
                <h2>Top questions</h2>
                {topQuestions.map((q, index) => (
                  <div key={index} className="mt-4">
                    <h5>{q.question}</h5>
                    <p>{q.answer}</p>
                  </div>
                ))}
                <div className="row row-gap-3 mt-4">
                  {moreQuestions.map((q, index) => (
                    <div key={index} className="col-lg-6">
                      <h5>{q.question}</h5>
                      <p>{q.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="call-to-action-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="action-skew">
                <div className="call-to-action-section__content">
                  <h2>Still have questions?</h2>
                  <form>
                    <input type="email" name="email" placeholder="Enter your work email" />
                    <button type="submit" className="btn-round">
                      <span>Talk to us</span>
                    </button>
                  </form>
                  <p className="mt-3">
                    Or <Link href="/contact">contact our support team</Link> directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
