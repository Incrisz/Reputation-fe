import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | BizVisibility AI - AI-Powered Visibility Scoring Process",
  description:
    "Discover how BizVisibility AI analyzes your website, search rankings, and social platforms to provide intelligent visibility scores and actionable recommendations.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      image: "/images/services/servicesThree1.jpg",
      icon: "/images/icons/sth1.png",
      title: "Step 1: Enter Your Business Info",
      description:
        "Provide your website URL and social profiles and our AI begins scanning immediately.",
    },
    {
      image: "/images/services/servicesThree2.jpg",
      icon: "/images/icons/sth2.png",
      title: "Step 2: Get Your AI Score",
      description:
        "In minutes, receive a comprehensive visibility score with detailed insights on your website, search presence, and social platforms.",
    },
    {
      image: "/images/services/servicesThree3.jpg",
      icon: "/images/icons/sth3.png",
      title: "Step 3: Follow Smart Recommendations",
      description:
        "Get prioritized, AI-generated action items that tell you exactly what to improve for better online visibility.",
    },
  ];

  const features = [
    {
      icon: "flaticon-consultancy",
      title: "Website Analysis",
      description:
        "AI evaluates your website's speed, SEO health, mobile optimization, and user experience.",
    },
    {
      icon: "flaticon-innovation",
      title: "Search Visibility",
      description:
        "Track how easily customers can find your business across Google, Bing, and other search engines.",
    },
    {
      icon: "flaticon-research",
      title: "Social Presence",
      description:
        "Get insights on your social media presence across all major platforms and learn how to improve.",
    },
    {
      icon: "flaticon-solution",
      title: "Smart Recommendations",
      description:
        "AI-generated action items prioritized by impact to help you improve visibility quickly.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className="banner-two-section inner-banner py-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="banner-two-section__content">
                <h6 className="title-animation">Visibility Made Simple</h6>
                <h1 className="title-animation">How BizVisibility AI Works</h1>
                <p className="right-reveal">
                  We continuously scan your website, listings, search results, and social profiles,
                  then translate the findings into a clear score with step-by-step recommendations.
                </p>
                <div className="banner-two-buttons">
                  <div className="right-reveal">
                    <Link href="/register" className="btn-round-two">
                      Try for free
                    </Link>
                  </div>
                  <div className="left-reveal">
                    <Link href="/pricing" className="btn-round-two btn-outline">
                      View plans
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

      {/* Steps Section */}
      <section className="services-three-section py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-header-three">
                <h6 className="top-reveal">HOW IT WORKS</h6>
                <h2 className="title-animation">Get Your Visibility Score in 3 Simple Steps</h2>
              </div>
            </div>
          </div>
          <div className="row mt-60 row-gap-4 justify-content-center">
            {steps.map((step, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6 top-reveal">
                <div className="service__item">
                  <div className="service-img">
                    <Image
                      src={step.image}
                      alt="services"
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-text">
                    <div className="icon">
                      <Image src={step.icon} alt="icons" width={50} height={50} />
                    </div>
                    <h4>
                      <a href="#">{step.title}</a>
                    </h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="services-two-section section-bg py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-header-two">
                <h6 className="right-reveal">What We Analyze</h6>
                <h2 className="title-animation">
                  Comprehensive <span>Visibility Analysis</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row-gap-4 mt-60">
            {features.map((feature, index) => (
              <div key={index} className="col-xl-3 col-lg-6 col-md-6 top-reveal">
                <div className="services-two-section__item">
                  <div className="services-box">
                    <div className="icon">
                      <i className={feature.icon}></i>
                    </div>
                    <h5>
                      <a href="#">{feature.title}</a>
                    </h5>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-header-two">
                <h2 className="title-animation">
                  Ready to Boost Your <span>Online Visibility?</span>
                </h2>
                <p className="mt-3">
                  Start your free scan today and see exactly where you stand online. Get actionable
                  recommendations to improve your visibility and attract more customers.
                </p>
                <div className="mt-4">
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
