import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | Reputation AI - Reputation Management Solutions",
  description:
    "Choose the perfect Reputation AI plan for your business. Get reputation scoring, sentiment analysis, narrative intelligence, and strategic guidance.",
};

const monthlyPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses monitoring their reputation",
    price: "$29.00",
    period: "/Month",
    features: [
      { name: "Web Scanning & Mentions", included: true },
      { name: "Reputation Score", included: true },
      { name: "Basic Sentiment Tracking", included: true },
      { name: "Reputation Recommendations", included: true },
      { name: "Advanced Sentiment Analysis", included: false },
      { name: "Priority Support", included: false },
    ],
    buttonText: "Try for free",
  },
  {
    name: "Professional",
    description: "Most popular for growing businesses with active online presence",
    price: "$79.00",
    period: "/Month",
    badge: "Best Value",
    features: [
      { name: "Web Scanning & Mentions", included: true },
      { name: "Real-Time Sentiment Tracking", included: true },
      { name: "AI Reputation Scoring", included: true },
      { name: "Narrative Intelligence & Theme Detection", included: true },
      { name: "Advanced Sentiment Analysis", included: true },
      { name: "Strategic Guidance & Reports", included: true },
    ],
    buttonText: "Try for free",
  },
  {
    name: "Enterprise",
    description: "Complete reputation management for large organizations",
    price: "$199.00",
    period: "/Month",
    features: [
      { name: "Unlimited Web Scanning & Mentions", included: true },
      { name: "Real-Time Sentiment Monitoring", included: true },
      { name: "Advanced Reputation Scoring Engine", included: true },
      { name: "Premium Narrative Analysis & Insights", included: true },
      { name: "Competitive Reputation Intelligence", included: true },
      { name: "Custom Strategic Guidance & Priority Support", included: true },
    ],
    buttonText: "Contact Sales",
  },
];

const yearlyPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses monitoring their reputation",
    price: "$290.00",
    period: "/Year",
    features: [
      { name: "Web Scanning & Mentions", included: true },
      { name: "Reputation Score", included: true },
      { name: "Basic Sentiment Tracking", included: true },
      { name: "Reputation Recommendations", included: true },
      { name: "Advanced Sentiment Analysis", included: false },
      { name: "Priority Support", included: false },
    ],
    buttonText: "Try for free",
  },
  {
    name: "Professional",
    description: "Most popular for growing businesses with active online presence",
    price: "$790.00",
    period: "/Year",
    badge: "Best Value",
    features: [
      { name: "Web Scanning & Mentions", included: true },
      { name: "Real-Time Sentiment Tracking", included: true },
      { name: "AI Reputation Scoring", included: true },
      { name: "Narrative Intelligence & Theme Detection", included: true },
      { name: "Advanced Sentiment Analysis", included: true },
      { name: "Strategic Guidance & Reports", included: true },
    ],
    buttonText: "Try for free",
  },
  {
    name: "Enterprise",
    description: "Complete reputation management for large organizations",
    price: "$1,990.00",
    period: "/Year",
    features: [
      { name: "Unlimited Web Scanning & Mentions", included: true },
      { name: "Real-Time Sentiment Monitoring", included: true },
      { name: "Advanced Reputation Scoring Engine", included: true },
      { name: "Premium Narrative Analysis & Insights", included: true },
      { name: "Competitive Reputation Intelligence", included: true },
      { name: "Custom Strategic Guidance & Priority Support", included: true },
    ],
    buttonText: "Contact Sales",
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className="banner-two-section inner-banner py-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="banner-two-section__content">
                <h6 className="title-animation">Choose your plan</h6>
                <h1 className="title-animation">Reputation Management for Every Business</h1>
                <p className="right-reveal">
                  Start with a free reputation scan to understand your reputation score, sentiment, and key narratives. Upgrade to unlock advanced analysis and strategic guidance.
                </p>
                <div className="banner-two-buttons">
                  <div className="left-reveal">
                    <Link href="/contact" className="btn-round-two btn-outline">
                      Talk to sales
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="banner-two-section__images">
                <Image
                  src="/images/banner/two1.png"
                  alt="dashboard illustration"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-three-section py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header-three text-center">
                <h6 className="top-reveal">PRICING</h6>
                <h2 className="title-animation">Choose the Perfect Plan for Your Business</h2>
                <p className="top-reveal">
                  Start with our free trial and upgrade anytime.
                  <br className="d-none d-xl-block" /> All plans include AI-powered visibility
                  scoring and recommendations.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-lg-12">
              <div className="text-center">
                <div className="nav nav-pills" role="tablist">
                  <button
                    className="nav-link active"
                    id="pills-monthly-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-monthly"
                    type="button"
                    role="tab"
                    aria-controls="pills-monthly"
                    aria-selected="true"
                  >
                    Monthly
                  </button>
                  <button
                    className="nav-link"
                    id="pills-annually-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-annually"
                    type="button"
                    role="tab"
                    aria-controls="pills-annually"
                    aria-selected="false"
                  >
                    Annually
                  </button>
                  <span className="nav-indicator"></span>
                </div>
              </div>
              <div className="tab-content top-reveal">
                <div
                  className="tab-pane show active"
                  id="pills-monthly"
                  role="tabpanel"
                  aria-labelledby="pills-monthly-tab"
                >
                  <div className="row row-gap-4 justify-content-center">
                    {monthlyPlans.map((plan, index) => (
                      <div key={index} className="col-xl-4 col-lg-6 col-md-6 align-self-end">
                        <div className="pricing-section__card">
                          {plan.badge && <span>{plan.badge}</span>}
                          <h5>{plan.name}</h5>
                          <p>{plan.description}</p>
                          <h3>
                            {plan.price} <sub>{plan.period}</sub>
                          </h3>
                          <hr />
                          <ul>
                            {plan.features.map((feature, i) => (
                              <li key={i} className={feature.included ? "check" : "unCheck"}>
                                {feature.name}
                              </li>
                            ))}
                          </ul>
                          <Link href="/register" className="btn-round-two">
                            {plan.buttonText}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="pills-annually"
                  role="tabpanel"
                  aria-labelledby="pills-annually-tab"
                >
                  <div className="row row-gap-4 justify-content-center">
                    {yearlyPlans.map((plan, index) => (
                      <div key={index} className="col-xl-4 col-lg-6 col-md-6 align-self-end">
                        <div className="pricing-section__card">
                          {plan.badge && <span>{plan.badge}</span>}
                          <h5>{plan.name}</h5>
                          <p>{plan.description}</p>
                          <h3>
                            {plan.price} <sub>{plan.period}</sub>
                          </h3>
                          <hr />
                          <ul>
                            {plan.features.map((feature, i) => (
                              <li key={i} className={feature.included ? "check" : "unCheck"}>
                                {feature.name}
                              </li>
                            ))}
                          </ul>
                          <Link href="/register" className="btn-round-two">
                            {plan.buttonText}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
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
