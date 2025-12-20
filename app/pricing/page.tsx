import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | BizVisibility AI - Affordable AI-Powered Visibility Solutions",
  description:
    "Choose the perfect BizVisibility AI plan for your business. From starter to enterprise, get AI-powered visibility scoring, analysis, and smart recommendations.",
};

const monthlyPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started online",
    price: "$29.00",
    period: "/Month",
    features: [
      { name: "AI Visibility Score", included: true },
      { name: "Website Analysis", included: true },
      { name: "Search Rankings Check", included: true },
      { name: "Basic Recommendations", included: true },
      { name: "Social Media Analysis", included: false },
      { name: "Priority Support", included: false },
    ],
    buttonText: "Try for free",
  },
  {
    name: "Professional",
    description: "Most popular for growing businesses",
    price: "$79.00",
    period: "/Month",
    badge: "Best Value",
    features: [
      { name: "AI Visibility Score", included: true },
      { name: "Website Analysis", included: true },
      { name: "Search Rankings Check", included: true },
      { name: "Advanced AI Recommendations", included: true },
      { name: "Social Media Analysis", included: true },
      { name: "Weekly Reports", included: true },
    ],
    buttonText: "Try for free",
  },
  {
    name: "Enterprise",
    description: "Complete solution for large organizations",
    price: "$199.00",
    period: "/Month",
    features: [
      { name: "AI Visibility Score", included: true },
      { name: "Website Analysis", included: true },
      { name: "Search Rankings Check", included: true },
      { name: "Premium AI Recommendations", included: true },
      { name: "Full Social Media Suite", included: true },
      { name: "Priority Support & Training", included: true },
    ],
    buttonText: "Contact Sales",
  },
];

const yearlyPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started online",
    price: "$290.00",
    period: "/Year",
    features: [
      { name: "AI Visibility Score", included: true },
      { name: "Website Analysis", included: true },
      { name: "Search Rankings Check", included: true },
      { name: "Basic Recommendations", included: true },
      { name: "Social Media Analysis", included: false },
      { name: "Priority Support", included: false },
    ],
    buttonText: "Try for free",
  },
  {
    name: "Professional",
    description: "Most popular for growing businesses",
    price: "$790.00",
    period: "/Year",
    badge: "Best Value",
    features: [
      { name: "AI Visibility Score", included: true },
      { name: "Website Analysis", included: true },
      { name: "Search Rankings Check", included: true },
      { name: "Advanced AI Recommendations", included: true },
      { name: "Social Media Analysis", included: true },
      { name: "Weekly Reports", included: true },
    ],
    buttonText: "Try for free",
  },
  {
    name: "Enterprise",
    description: "Complete solution for large organizations",
    price: "$1,990.00",
    period: "/Year",
    features: [
      { name: "AI Visibility Score", included: true },
      { name: "Website Analysis", included: true },
      { name: "Search Rankings Check", included: true },
      { name: "Premium AI Recommendations", included: true },
      { name: "Full Social Media Suite", included: true },
      { name: "Priority Support & Training", included: true },
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
                <h6 className="title-animation">Pick your plan</h6>
                <h1 className="title-animation">Pricing built for growth</h1>
                <p className="right-reveal">
                  Start with a free scan, then upgrade when you&apos;re ready to monitor more
                  locations, keywords, and channels.
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
