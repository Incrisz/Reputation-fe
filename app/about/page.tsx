import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BizVisibility AI - AI-Powered Online Visibility Solutions",
  description:
    "Learn about BizVisibility AI and our mission to help businesses improve their online presence through AI-powered visibility scoring and intelligent recommendations.",
};

export default function AboutPage() {
  const services = [
    {
      image: "/images/services/servicesThree1.jpg",
      icon: "/images/icons/sth1.png",
      title: "Website Performance Analysis",
      description:
        "Our AI evaluates your website's speed, SEO health, mobile optimization, and user experience to identify areas for improvement.",
    },
    {
      image: "/images/services/servicesThree2.jpg",
      icon: "/images/icons/sth2.png",
      title: "Search Visibility Scoring",
      description:
        "Track how easily customers can find your business across Google, Bing, and other search engines with intelligent visibility rankings.",
    },
    {
      image: "/images/services/servicesThree3.jpg",
      icon: "/images/icons/sth3.png",
      title: "Social Media Evaluation",
      description:
        "Get AI-powered insights on your social media presence across all major platforms and learn how to improve engagement and reach.",
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
                <span className="title-animation">AI-POWERED VISIBILITY</span>
                <h1 className="title-animation">
                  Transform Your Online Presence with Intelligent Insights
                </h1>
                <p className="right-reveal">
                  BizVisibility AI uses cutting-edge artificial intelligence to evaluate your
                  business&apos;s online visibility and provide actionable recommendations to help you
                  grow digitally.
                </p>
                <div className="banner-two-buttons d-flex flex-wrap align-items-center gap-4">
                  <div className="right-reveal">
                    <Link href="/register" className="btn-round-two">
                      Try for free
                    </Link>
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
                  <h6 className="right-reveal">About BizVisibility AI</h6>
                  <h2 className="title-animation">
                    Making Online Visibility Simple and Actionable for Every Business
                  </h2>
                  <p className="right-reveal">
                    BizVisibility AI was created to solve a critical problem: businesses struggle to
                    understand and improve their online presence. Our AI-powered platform evaluates
                    your website, search rankings, and social media to give you a clear visibility
                    score and specific recommendations for growth.
                  </p>
                </div>
                <ul className="about-list">
                  {[
                    "AI-Powered Website Analysis",
                    "Search Engine Visibility Scoring",
                    "Social Platform Evaluation",
                    "Real-Time Progress Tracking",
                    "Intelligent Recommendations",
                    "Comprehensive Visibility Reports",
                  ].map((item, index) => (
                    <li key={index} className="right-reveal">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="right-reveal">
                  Our mission is to empower businesses of all sizes to take control of their
                  digital presence. We believe that understanding your online visibility shouldn&apos;t
                  require a team of experts—just smart AI and clear, actionable insights.
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
