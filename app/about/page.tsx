import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Reputation AI | Online Reputation Management Platform",
  description:
    "Learn about Reputation AI, the leading platform for comprehensive online reputation management. We combine visibility intelligence, sentiment analysis, reputation scoring, and strategic guidance to help businesses understand and improve their digital reputation.",
};

export default function AboutPage() {
  const services = [
    {
      image: "/images/services/servicesThree1.jpg",
      icon: "/images/icons/sth1.png",
      title: "Visibility & Presence Intelligence",
      description:
        "Our AI identifies where your business appears across the web, understanding your digital footprint and online presence across all channels.",
    },
    {
      image: "/images/services/servicesThree2.jpg",
      icon: "/images/icons/sth2.png",
      title: "Sentiment & Narrative Intelligence",
      description:
        "AI analyzes what's being said about you - the sentiment (positive/negative/neutral) and key narrative themes that define your reputation.",
    },
    {
      image: "/images/services/servicesThree3.jpg",
      icon: "/images/icons/sth3.png",
      title: "Reputation Scoring & Strategy",
      description:
        "AI calculates your reputation score and provides strategic recommendations for improving how you're perceived and managing your digital reputation.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className="banner-three-section">
        <div className="container">
          <div className="row row-gap-5 justify-content-between">
            <div className="col-xl-6 align-self-center">
              <div className="banner-three-section__content">
                <span className="title-animation">COMPREHENSIVE REPUTATION MANAGEMENT</span>
                <h1 className="title-animation">
                  Understand and Improve Your Digital Reputation with AI
                </h1>
                <p className="right-reveal">
                  Reputation AI combines four intelligent systems to evaluate your complete online reputation: visibility intelligence, sentiment analysis, reputation scoring, and strategic guidance. We help businesses understand how they appear online and provide actionable recommendations to enhance their digital standing.
                </p>
                <div className="banner-two-buttons d-flex flex-wrap align-items-center gap-4">
                  <div className="right-reveal">
                    <a href="#" className="btn-round-two">
                      Try for free
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 align-self-center animate-3d" style={{ perspective: "400px" }}>
              <div className="banner-three-section__images">
                <Image
                  src="/images/banner/banner-three.jpg"
                  alt="banner"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-three-section py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-img me-xl-3">
                <div className="img left-reveal">
                  <Image
                    src="/images/about/about-three.jpg"
                    alt="about"
                    width={400}
                    height={350}
                    className="img-fluid"
                  />
                </div>
                <div className="img2 right-reveal">
                  <Image
                    src="/images/about/about-three2.jpg"
                    alt="about"
                    width={300}
                    height={250}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-text ms-xl-3">
                <div className="section-header-three">
                  <h6 className="right-reveal">About Reputation AI</h6>
                  <h2 className="title-animation">
                    Comprehensive Digital Reputation Management for Every Business
                  </h2>
                  <p className="right-reveal">
                    Reputation AI was created to address the critical challenge facing modern businesses: understanding and managing your digital reputation. Our AI-powered platform evaluates your visibility, analyzes sentiment around your brand, scores your reputation, and provides strategic guidance on how to improve your digital standing.
                  </p>
                </div>
                <ul className="about-list">
                  {[
                    "Visibility Intelligence Across All Channels",
                    "Real-Time Sentiment & Narrative Analysis",
                    "AI-Powered Reputation Scoring",
                    "Strategic Reputation Recommendations",
                    "Online Mention Tracking",
                    "Comprehensive Digital Standing Reports",
                  ].map((item, index) => (
                    <li key={index} className="right-reveal">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="right-reveal">
                  Our mission is to empower businesses of all sizes to take control of their digital reputation. We believe that understanding your online standing shouldn&apos;t require a team of experts—just smart AI and clear, actionable insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="services-three-section section-bg py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-header-three text-center">
                <h6 className="top-reveal">WHAT WE DO</h6>
                <h2 className="title-animation">Comprehensive AI-Powered Visibility Analysis</h2>
              </div>
            </div>
          </div>
          <div className="row mt-60 row-gap-4 justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6 top-reveal">
                <div className="service__item">
                  <div className="service-img">
                    <Image
                      src={service.image}
                      alt="services"
                      width={400}
                      height={300}
                      className="img-fluid"
                    />
                  </div>
                  <div className="service-text">
                    <div className="icon">
                      <Image src={service.icon} alt="icons" width={50} height={50} />
                    </div>
                    <h4>
                      <a href="#">{service.title}</a>
                    </h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
