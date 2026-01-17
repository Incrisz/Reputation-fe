import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccordionFAQ from "./components/AccordionFAQ";
import PricingTabs from "./components/PricingTabs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className="banner-two-section">
        <div className="banner-two-shape">
          <Image src="/images/shape/banner-two-1.png" alt="banner-two-shape" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
          <Image src="/images/shape/banner-two-1.png" alt="banner-two-shape" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
          <Image src="/images/shape/banner-two-2.png" alt="banner-two-shape" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
          <Image src="/images/shape/banner-two-2.png" alt="banner-two-shape" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
        </div>
        <div className="container">
          <div className="row row-gap-5 justify-content-between">
            <div className="col-xl-6 col-lg-7 align-self-center">
              <div className="banner-two-section__content">
                <h6 className="title-animation">
                  AI-Powered Reputation Intelligence
                  <i className="fa-solid fa-arrow-right-long"></i>
                </h6>
                <h1 className="title-animation">
                  Reputation AI: <span>Know What People Say About Your Business</span>
                </h1>
                <p className="right-reveal">
                  Reputation AI helps you understand what people are saying about your business online and gives you actionable steps to improve it. In seconds, get a complete picture of your online reputation with sentiment analysis, key topics, and personalized recommendations.
                </p>
                <div className="banner-two-buttons">
                  <div className="left-reveal">
                    <div className="youtube-play">
                      <a href="https://www.youtube.com/embed/C_BjC7KJ0XY" className="video-play-btn">
                        <i className="fa-solid fa-play"></i>
                      </a>
                      <span>
                        Watch <br /> Demo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 align-self-center position-relative">
              <div className="banner-two-section__images">
                <Image src="/images/banner/two1.png" alt="banner" width={500} height={500} priority style={{ width: 'auto', height: 'auto' }} />
                <a href="#" className="text--btn-wrap">
                  <div className="circle-button">
                    <div className="rotate-circle">
                      <svg className="textcircle" viewBox="0 0 500 500">
                        <defs>
                          <path
                            id="textcircle"
                            d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                          ></path>
                        </defs>
                        <text>
                          <textPath xlinkHref="#textcircle" textLength="900">
                            Business . AI .
                          </textPath>
                        </text>
                      </svg>
                    </div>
                    <div className="icon d-flex justify-content-center align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 55 54"
                        fill="none"
                      >
                        <path
                          d="M27.5938 48.8319C27.2291 48.8318 26.8743 48.713 26.5831 48.4933C26.292 48.2736 26.0803 47.965 25.9801 47.6143L24.2365 41.5107C23.487 38.8552 22.069 36.4364 20.1179 34.4853C18.1668 32.5342 15.7479 31.1162 13.0925 30.3666L6.98884 28.6231C6.63835 28.5227 6.33007 28.3109 6.11062 28.0197C5.89116 27.7286 5.77246 27.3739 5.77246 27.0093C5.77246 26.6447 5.89116 26.2901 6.11062 25.9989C6.33007 25.7078 6.63835 25.496 6.98884 25.3956L13.0925 23.652C15.7479 22.9025 18.1668 21.4844 20.1179 19.5334C22.069 17.5823 23.487 15.1634 24.2365 12.5079L25.9801 6.40431C26.0805 6.05382 26.2923 5.74554 26.5834 5.52609C26.8746 5.30663 27.2293 5.18793 27.5938 5.18793C27.9584 5.18793 28.3131 5.30663 28.6043 5.52609C28.8954 5.74554 29.1072 6.05382 29.2076 6.40431L30.9512 12.5079C31.7007 15.1634 33.1187 17.5823 35.0698 19.5334C37.0209 21.4844 39.4398 22.9025 42.0952 23.652L48.1989 25.3956C48.5494 25.496 48.8576 25.7078 49.0771 25.9989C49.2965 26.2901 49.4152 26.6447 49.4152 27.0093C49.4152 27.3739 49.2965 27.7286 49.0771 28.0197C48.8576 28.3109 48.5494 28.5227 48.1989 28.6231L42.0952 30.3666C39.4398 31.1162 37.0209 32.5342 35.0698 34.4853C33.1187 36.4364 31.7007 38.8552 30.9512 41.5107L29.2076 47.6143C29.1074 47.965 28.8957 48.2736 28.6046 48.4933C28.3134 48.713 27.9586 48.8318 27.5938 48.8319ZM13.5602 27.0093L14.0079 27.1391C17.2126 28.0439 20.1318 29.7553 22.4864 32.11C24.8411 34.4647 26.5526 37.3838 27.4573 40.5886L27.5871 41.0362L27.717 40.5886C28.6217 37.3838 30.3332 34.4647 32.6878 32.11C35.0425 29.7553 37.9617 28.0439 41.1664 27.1391L41.614 27.0093L41.1664 26.8795C37.9617 25.9748 35.0425 24.2633 32.6878 21.9086C30.3332 19.554 28.6217 16.6348 27.717 13.4301L27.5938 12.978L27.464 13.4256C26.5593 16.6303 24.8478 19.5495 22.4932 21.9042C20.1385 24.2588 17.2193 25.9703 14.0146 26.875L13.5602 27.0093Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-two-section py-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 align-self-center">
              <div className="section-header-two">
                <h6 className="right-reveal">Reputation Intelligence</h6>
                <h2 className="title-animation">
                  How Reputation AI <span>Works</span>
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 align-self-center">
              <div className="section-header-two right-reveal">
                <p>
                  Reputation AI combines advanced web scanning with intelligent analysis to give you a complete understanding of your online reputation. We monitor review sites, news, social media, forums, and more to show you exactly what's being said about your business.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-gap-4 mt-60">
            {[
              {
                icon: "flaticon-consultancy",
                title: "Complete Web Coverage",
                description:
                  "We scan the entire internet including review sites (Google, Yelp), news sources, social media, blogs, and forums to find every mention of your business.",
              },
              {
                icon: "flaticon-innovation",
                title: "Sentiment Analysis",
                description:
                  "Our AI analyzes each mention to determine if it's positive, negative, or neutral. We understand context, so we get the nuance of what people really think.",
              },
              {
                icon: "flaticon-research",
                title: "Reputation Scoring",
                description:
                  "Get a clear reputation score (0-100) based on all mentions we find. See the breakdown of positive, negative, and neutral sentiment at a glance.",
              },
              {
                icon: "flaticon-solution",
                title: "Actionable Recommendations",
                description:
                  "We don't just show you data. We tell you specifically what to do to improve your reputation based on the real mentions and patterns we discovered.",
              },
            ].map((service, index) => (
              <div key={index} className="col-xl-3 col-lg-6 col-md-6 top-reveal">
                <div className="services-two-section__item">
                  <div className="services-box">
                    <div className="icon">
                      <i className={service.icon}></i>
                    </div>
                    <h5>
                      <a href="#">
                        {service.title.split(" ").slice(0, 1).join(" ")}
                        <br /> {service.title.split(" ").slice(1).join(" ")}
                      </a>
                    </h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="services-three-section section-bg py-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-header-three text-center">
                <h6 className="top-reveal">HOW IT WORKS</h6>
                <h2 className="title-animation">Get Your Reputation Score in 3 Simple Steps</h2>
              </div>
            </div>
          </div>
          <div className="row mt-60 row-gap-4 justify-content-center">
            {[
              {
                image: "/images/services/servicesThree1.jpg",
                icon: "/images/icons/sth1.png",
                title: "Step 1: Tell Us About Your Business",
                description:
                  "Simply provide your business name and website, or phone number and location. That's all we need to get started scanning the web.",
              },
              {
                image: "/images/services/servicesThree2.jpg",
                icon: "/images/icons/sth2.png",
                title: "Step 2: We Scan the Web",
                description:
                  "Our AI scans review sites, news, social media, blogs, and forums in seconds. We find every mention of your business and analyze the sentiment.",
              },
              {
                image: "/images/services/servicesThree3.jpg",
                icon: "/images/icons/sth3.png",
                title: "Step 3: Get Your Insights & Recommendations",
                description:
                  "See your reputation score, sentiment breakdown, key topics people discuss, and specific recommendations to improve your online reputation.",
              },
            ].map((step, index) => (
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
                      <Image src={step.icon} alt="icons" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
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

      {/* About Section */}
      <section className="about-two-section py-120">
        <div className="container">
          <div className="row row-gap-5 justify-content-between">
            <div className="col-xl-6 col-lg-12 align-self-center">
              <div className="about-img me-xl-3">
                <div className="img">
                  <Image
                    src="/images/about/about-two.png"
                    alt="about"
                    width={600}
                    height={500}
                    className="img-fluid"
                  />
                </div>
                <div className="about-experts left-reveal">
                  <i className="flaticon-team"></i>
                  <span>Experts</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 align-self-center">
              <div className="about-text ms-xl-3">
                <div className="section-header-two">
                  <h6 className="right-reveal">About Us</h6>
                  <h2 className="title-animation">
                    Your Complete
                    <span>Reputation Dashboard</span>
                  </h2>
                  <p className="right-reveal">
                    Our AI-powered platform scans the entire web for mentions of your business and analyzes what people are saying. Get a clear reputation score, see sentiment breakdown, identify key topics, and receive actionable recommendations to improve your online reputation.
                  </p>
                </div>
                <ul className="about-list">
                  {[
                    "Complete Web Scanning",
                    "Sentiment Analysis & Breakdown",
                    "Reputation Scoring (0-100)",
                    "Key Topics Identification",
                    "Direct Links to Mentions",
                    "Actionable Recommendations",
                  ].map((item, index) => (
                    <li key={index} className="right-reveal">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="right-reveal">
                  Reputation AI helps you understand what's being said about your business across the entire internet and tells you exactly how to improve it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="work-two-section pb-120">
        <div className="container">
          <div className="row row-gap-5 justify-content-between">
            <div className="col-lg-6 col-xl-7 align-self-center">
              <div className="work-two-section__content">
                <div className="section-header-two">
                  <h6 className="right-reveal">How It Works</h6>
                  <h2 className="title-animation">
                    AI-Powered Reputation
                    <span>Analysis & Insights</span>
                  </h2>
                  <p className="right-reveal">
                    Our AI analyzes what people are saying about your business across the entire web. In seconds, you get a clear reputation score, sentiment analysis, key topics people discuss, and specific recommendations to improve your online reputation.
                  </p>
                </div>
                <div className="work-list">
                  <div className="list-item right-reveal">
                    <div className="icon">
                      <i className="flaticon-evaluation"></i>
                    </div>
                    <div className="text">
                      <h5>Web Scanning & Analysis</h5>
                      <p>
                        Our AI scans review sites, news, social media, blogs, and forums to find what people are saying about your business. We analyze each mention for sentiment and context.
                      </p>
                    </div>
                  </div>
                  <div className="list-item right-reveal">
                    <div className="icon">
                      <i className="flaticon-team-work"></i>
                    </div>
                    <div className="text">
                      <h5>Reputation Insights & Recommendations</h5>
                      <p>
                        Get your reputation score, see what percentage of mentions are positive, negative, or neutral, identify key topics, and receive actionable steps to improve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 align-self-center">
              <div className="work-images">
                <Image
                  className="work-img"
                  src="/images/work/work2.jpg"
                  alt="work"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="choose-two-section py-120">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-xl-6 col-lg-12 align-self-center">
              <div className="choose-image me-xl-5">
                <div className="img">
                  <Image src="/images/choose/case-two.jpg" alt="chose" width={600} height={500} />
                </div>
                <div className="global-icon">
                  <i className="flaticon-countries"></i>
                  <h6>120+ Global Country</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 align-self-center">
              <div className="choose-two-section__content">
                <div className="section-header-two">
                  <h6 className="right-reveal">Why Choose Us?</h6>
                  <h2 className="title-animation">
                    Reputation Intelligence for
                    <span>Any Business</span>
                  </h2>
                  <p className="right-reveal">
                    Whether you're a small business, startup, marketing team, or enterprise, Reputation AI gives you a clear understanding of what people are saying about your business online and tells you exactly how to improve it.
                  </p>
                </div>
                <div className="skill-container row row-gap-4 row-gap-lg-5 mt-5">
                  <div className="col-lg-6 right-reveal">
                    <div className="skill-container__item">
                      <div className="percentage" data-target="90">
                        90%
                      </div>
                      <h6>Reputation Coverage</h6>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          aria-valuenow={90}
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 right-reveal">
                    <div className="skill-container__item">
                      <div className="percentage" data-target="95">
                        95%
                      </div>
                      <h6>Sentiment Accuracy</h6>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          aria-valuenow={95}
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 right-reveal">
                    <div className="choose-item">
                      <i className="flaticon-customer-support"></i>
                      <div className="text">
                        <h6>Support Available</h6>
                        <div className="support-title">24/7</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 right-reveal">
                    <div className="choose-item">
                      <i className="flaticon-economic-growth"></i>
                      <div className="text">
                        <h6>Web Coverage</h6>
                        <div className="support-title">Complete</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="feedback-two-section py-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-header-two">
                <h6 className="right-reveal">What Our Users Say</h6>
                <h2 className="title-animation">
                  Real Stories from
                  <br />
                  <span>Reputation AI Users</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header-two right-reveal">
                <p>
                  See how businesses like yours are using Reputation AI to understand what people say about them online and take action. From discovering hidden complaints to improving their reputation, our users are taking control.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-lg-12">
              <div className="feedback-two-slide swiper">
                <div className="swiper-wrapper">
                  {[
                    {
                      name: "Sarah, Restaurant Owner",
                      role: "Hospitality",
                      image: "/images/user/1.jpg",
                      quote:
                        "I discovered a serious complaint on Reddit that was affecting our business. Without Reputation AI, I would never have seen it. Fixed it immediately!",
                      rating: 5,
                    },
                    {
                      name: "Marcus, E-commerce Owner",
                      role: "Online Retail",
                      image: "/images/user/2.jpg",
                      quote:
                        "Our reputation score improved from 62 to 81 after we focused on the recommendations. They were spot-on and easy to implement.",
                      rating: 5,
                    },
                    {
                      name: "Jennifer, Marketing Manager",
                      role: "Marketing",
                      image: "/images/user/3.jpg",
                      quote:
                        "Instead of spending 2 hours per week searching for mentions, I get everything in a clean dashboard. Reputation AI saved us so much time.",
                      rating: 4.5,
                    },
                  ].map((testimonial, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="feedback-two-slide__item">
                        <div className="feedback-user">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                          />
                          <div className="user-text">
                            <h6>{testimonial.name}</h6>
                            <span>{testimonial.role}</span>
                          </div>
                        </div>
                        <div className="text">
                          <p>&quot;{testimonial.quote}&quot;</p>
                          <ul>
                            {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                              <li key={i}>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            ))}
                            {testimonial.rating % 1 !== 0 && (
                              <li>
                                <i className="fa-solid fa-star-half"></i>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="swiper-slid-btns">
                <button className="fa-solid fa-angle-left slid-btn-prev"></button>
                <div className="swiper-number"></div>
                <button className="fa-solid fa-angle-right slid-btn-next"></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-two-section pb-120">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-xl-6 align-self-center">
              <div className="faq-image me-xl-5">
                <Image src="/images/faq/2.jpg" alt="faq" width={600} height={500} className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-6 align-self-center">
              <div className="faq-content">
                <div className="section-header-two">
                  <h6 className="right-reveal">FAQs Questions</h6>
                  <h2 className="title-animation">
                    Common Questions About
                    <br />
                    <span>Reputation AI</span>
                  </h2>
                </div>
                <div className="accordion mt-60" id="greatSolutions">
                  <AccordionFAQ />
                </div>
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
                  Start with our free plan and upgrade anytime.
                  <br className="d-none d-xl-block" /> All plans include AI-powered reputation
                  analysis and recommendations.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-lg-12">
              <div className="text-center">
                <PricingTabs />
              </div>
              <div className="tab-content top-reveal">
                <div
                  className="tab-pane show active"
                  id="pills-monthly"
                  role="tabpanel"
                  aria-labelledby="pills-monthly-tab"
                >
                  <div className="row row-gap-4 justify-content-center">
                    {[
                      {
                        name: "Free",
                        description: "Perfect for getting started",
                        price: "$0",
                        period: "/Month",
                        features: [
                          { name: "1 Scan Per Month", included: true },
                          { name: "Basic Reputation Score", included: true },
                          { name: "See Top Mentions", included: true },
                          { name: "Sentiment Breakdown", included: false },
                          { name: "Email Alerts", included: false },
                          { name: "Priority Support", included: false },
                        ],
                        buttonText: "Try for free",
                      },
                      {
                        name: "Pro",
                        description: "Most popular for growing businesses",
                        price: "$29.00",
                        period: "/Month",
                        badge: "Best Value",
                        features: [
                          { name: "Unlimited Scans", included: true },
                          { name: "Full Reputation Score", included: true },
                          { name: "Detailed Sentiment Analysis", included: true },
                          { name: "Full Topic Breakdown", included: true },
                          { name: "Email Alerts", included: true },
                          { name: "Export Reports to PDF", included: true },
                        ],
                        buttonText: "Try for free",
                      },
                      {
                        name: "Enterprise",
                        description: "Complete solution for large organizations",
                        price: "$199.00",
                        period: "/Month",
                        features: [
                          { name: "Everything in Pro", included: true },
                          { name: "Multi-Location Tracking", included: true },
                          { name: "Team Management", included: true },
                          { name: "Custom Integration", included: true },
                          { name: "Advanced Analytics", included: true },
                          { name: "Dedicated Support", included: true },
                        ],
                        buttonText: "Contact Sales",
                      },
                    ].map((plan, index) => (
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
                    {[
                      {
                        name: "Free",
                        description: "Perfect for getting started",
                        price: "$0",
                        period: "/Year",
                        features: [
                          { name: "1 Scan Per Month", included: true },
                          { name: "Basic Reputation Score", included: true },
                          { name: "See Top Mentions", included: true },
                          { name: "Sentiment Breakdown", included: false },
                          { name: "Email Alerts", included: false },
                          { name: "Priority Support", included: false },
                        ],
                        buttonText: "Try for free",
                      },
                      {
                        name: "Pro",
                        description: "Most popular for growing businesses",
                        price: "$290.00",
                        period: "/Year",
                        badge: "Best Value",
                        features: [
                          { name: "Unlimited Scans", included: true },
                          { name: "Full Reputation Score", included: true },
                          { name: "Detailed Sentiment Analysis", included: true },
                          { name: "Full Topic Breakdown", included: true },
                          { name: "Email Alerts", included: true },
                          { name: "Export Reports to PDF", included: true },
                        ],
                        buttonText: "Try for free",
                      },
                      {
                        name: "Enterprise",
                        description: "Complete solution for large organizations",
                        price: "$1,990.00",
                        period: "/Year",
                        features: [
                          { name: "Everything in Pro", included: true },
                          { name: "Multi-Location Tracking", included: true },
                          { name: "Team Management", included: true },
                          { name: "Custom Integration", included: true },
                          { name: "Advanced Analytics", included: true },
                          { name: "Dedicated Support", included: true },
                        ],
                        buttonText: "Contact Sales",
                      },
                    ].map((plan, index) => (
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

      {/* Company Logos Section */}
      <div className="company-two-section pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper brand-active-slid">
                <div className="swiper-wrapper slide-transition">
                  {[1, 2, 3, 4, 5, 1, 2, 3].map((num, index) => (
                    <div key={index} className="swiper-slide inner-slide-element">
                      <div className="brand-logo-img">
                        <Image
                          src={`/images/company/${num}.png`}
                          alt="brands"
                          width={150}
                          height={60}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
