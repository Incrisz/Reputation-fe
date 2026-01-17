import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Reputation AI Works | Online Visibility & Reputation Scoring",
  description:
    "Discover how Reputation AI analyzes your online presence, sentiment, and reputation to provide intelligent scoring and strategic recommendations for improving your digital reputation.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      image: "/images/services/servicesThree1.jpg",
      icon: "/images/icons/sth1.png",
      title: "Step 1: Scanning",
      description:
        "Reputation AI scans the web to identify where your business appears and what's being said about you across websites, reviews, social media, and online mentions.",
    },
    {
      image: "/images/services/servicesThree2.jpg",
      icon: "/images/icons/sth2.png",
      title: "Step 2: Analysis",
      description:
        "Advanced AI analyzes sentiment (positive, negative, neutral), identifies narrative themes, and evaluates your online reputation across all sources found.",
    },
    {
      image: "/images/services/servicesThree3.jpg",
      icon: "/images/icons/sth3.png",
      title: "Step 3: Strategic Insight",
      description:
        "You receive a reputation score, sentiment analysis, key findings, and AI-generated strategic recommendations for improving your digital reputation.",
    },
  ];

  const features = [
    {
      icon: "flaticon-consultancy",
      title: "Web Scanning",
      description:
        "Reputation AI scans the entire web to find where your business appears and what's being said about you online.",
    },
    {
      icon: "flaticon-innovation",
      title: "Sentiment Analysis",
      description:
        "AI understands the sentiment behind mentions and reviews - whether people are saying positive, negative, or neutral things about your business.",
    },
    {
      icon: "flaticon-research",
      title: "Narrative Intelligence",
      description:
        "AI identifies common themes, patterns, and narratives in what's said about you to understand how you're perceived.",
    },
    {
      icon: "flaticon-solution",
      title: "Reputation Scoring & Strategy",
      description:
        "AI calculates your reputation score and provides strategic recommendations for improving how you're perceived online.",
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
                <h6 className="title-animation">How It Works</h6>
                <h1 className="title-animation">How Reputation AI Analyzes Your Reputation</h1>
                <p className="right-reveal">
                  Reputation AI uses three core thinking systems to understand your digital reputation: scanning the web to find mentions, analyzing sentiment and narratives to understand perception, and providing strategic guidance to improve your standing.
                </p>
                <div className="banner-two-buttons">
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
                <h2 className="title-animation">Three-Step Reputation Analysis Process</h2>
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
                  How Reputation AI <span>Thinks</span>
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
                  Ready to Understand Your <span>Digital Reputation?</span>
                </h2>
                <p className="mt-3">
                  Get a comprehensive reputation analysis today. Reputation AI scans the web, analyzes what's being said about you, and provides strategic recommendations to improve your digital reputation.
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
