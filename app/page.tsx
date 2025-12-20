import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";

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
                  Online Business
                  <i className="fa-solid fa-arrow-right-long"></i>
                </h6>
                <h1 className="title-animation">
                  AI-Powered <span>Online Visibility Scoring</span>
                </h1>
                <p className="right-reveal">
                  Our AI-powered platform evaluates how visible your business is online, from your
                  website to search results and social platforms. Get intelligent, easy-to-understand
                  recommendations to help you grow digitally.
                </p>
                <div className="banner-two-buttons">
                  <div className="right-reveal">
                    <Link href="/register" className="btn-round-two">
                      Try for free
                    </Link>
                  </div>
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
                <h6 className="right-reveal">AI-Powered Features</h6>
                <h2 className="title-animation">
                  Intelligent <span>Visibility Analysis</span>
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 align-self-center">
              <div className="section-header-two right-reveal">
                <p>
                  Our AI evaluates your website, search engine rankings, and social media platforms
                  to score your online visibility. Get intelligent, actionable insights that tell
                  you exactly what to improve to attract more customers.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-gap-4 mt-60">
            {[
              {
                icon: "flaticon-consultancy",
                title: "AI Website Scoring",
                description:
                  "AI analyzes your website's performance, SEO health, and presentation quality with intelligent scoring.",
              },
              {
                icon: "flaticon-innovation",
                title: "Search Visibility",
                description:
                  "AI evaluates how easily customers can find your business in search results and ranks your visibility.",
              },
              {
                icon: "flaticon-research",
                title: "Social Platform Evaluation",
                description:
                  "AI scores your social media presence and tells you how well you're presented across platforms.",
              },
              {
                icon: "flaticon-solution",
                title: "Smart Recommendations",
                description:
                  "AI tells you exactly what to improve to get better visibility and attract more customers.",
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
                <h2 className="title-animation">Get Your Visibility Score in 3 Simple Steps</h2>
              </div>
            </div>
          </div>
          <div className="row mt-60 row-gap-4 justify-content-center">
            {[
              {
                image: "/images/services/servicesThree1.jpg",
                icon: "/images/icons/sth1.png",
                title: "Step 1: Enter Your Business Info",
                description:
                  "Simply provide your business website URL and social media profiles. Our AI will start scanning immediately.",
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
                  "Get prioritized, AI-generated action items that tell you exactly what to improve for better online visibility and more customers.",
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
                    AI-Driven
                    <span>Visibility Scoring</span>
                  </h2>
                  <p className="right-reveal">
                    Our AI-powered platform checks how easy it is to find your business online and
                    how well it is presented. It scores your business and tells you exactly what to
                    improve to get better visibility and more customers.
                  </p>
                </div>
                <ul className="about-list">
                  {[
                    "AI-Powered Website Scoring",
                    "Intelligent Search Visibility Ranking",
                    "Social Platform Presence Evaluation",
                    "Automated Visibility Scoring",
                    "AI-Generated Smart Recommendations",
                    "Real-Time Progress Tracking",
                  ].map((item, index) => (
                    <li key={index} className="right-reveal">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="right-reveal">
                  Our AI evaluates every aspect of your online presence and provides intelligent
                  recommendations to help you grow digitally and attract more customers.
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
                    AI-Powered Process for
                    <span>Smart Results</span>
                  </h2>
                  <p className="right-reveal">
                    Our AI analyzes your entire online presence in minutes. It checks your website,
                    search rankings, and social platforms to give you an intelligent visibility
                    score with specific recommendations for improvement.
                  </p>
                </div>
                <div className="work-list">
                  <div className="list-item right-reveal">
                    <div className="icon">
                      <i className="flaticon-evaluation"></i>
                    </div>
                    <div className="text">
                      <h5>AI Evaluation</h5>
                      <p>
                        Our AI scans your website, search engine presence, and social platforms to
                        evaluate how easy it is to find your business and how well it&apos;s presented.
                      </p>
                    </div>
                  </div>
                  <div className="list-item right-reveal">
                    <div className="icon">
                      <i className="flaticon-team-work"></i>
                    </div>
                    <div className="text">
                      <h5>Intelligent Scoring</h5>
                      <p>
                        Get an AI-generated visibility score with intelligent recommendations that
                        tell you exactly what to improve for better results.
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
                    AI-Powered Intelligence for
                    <span>Digital Growth</span>
                  </h2>
                  <p className="right-reveal">
                    Our AI-powered platform doesn&apos;t just show you data—it intelligently evaluates
                    your online presence and tells you exactly what to improve. Get smart, actionable
                    recommendations to boost visibility and attract more customers.
                  </p>
                </div>
                <div className="skill-container row row-gap-4 row-gap-lg-5 mt-5">
                  <div className="col-lg-6 right-reveal">
                    <div className="skill-container__item">
                      <div className="percentage" data-target="80">
                        80%
                      </div>
                      <h6>Online Visibility Boost</h6>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped bg-danger"
                          role="progressbar"
                          aria-valuenow={80}
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 right-reveal">
                    <div className="skill-container__item">
                      <div className="percentage" data-target="90">
                        90%
                      </div>
                      <h6>Customer Satisfaction</h6>
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
                    <div className="choose-item">
                      <i className="flaticon-customer-support"></i>
                      <div className="text">
                        <h6>Platform Monitoring</h6>
                        <div className="support-title">24/7</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 right-reveal">
                    <div className="choose-item">
                      <i className="flaticon-economic-growth"></i>
                      <div className="text">
                        <h6>Reputation Growth</h6>
                        <div className="support-title">95%</div>
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
                <h6 className="right-reveal">Our Testimonial</h6>
                <h2 className="title-animation">
                  We are Very Glad to Know
                  <br />
                  <span>Our Client Reviews</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-header-two right-reveal">
                <p>
                  See how businesses like yours are using BizVisibility AI to improve their online
                  presence. Our AI-powered platform has helped hundreds of businesses boost their
                  visibility and attract more customers.
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
                      name: "Walter J. Anthony",
                      role: "Founder, CEO",
                      image: "/images/user/1.jpg",
                      quote:
                        "BizVisibility AI showed us exactly where we were losing customers online. Within 3 months, our search visibility improved by 85%!",
                      rating: 5,
                    },
                    {
                      name: "Emily R. Johnson",
                      role: "Marketing Director",
                      image: "/images/user/2.jpg",
                      quote:
                        "The AI recommendations were spot-on! We fixed our website issues and our online leads doubled in just 6 weeks.",
                      rating: 4.5,
                    },
                    {
                      name: "James L. Carter",
                      role: "Tech Consultant",
                      image: "/images/user/3.jpg",
                      quote:
                        "Finally, a tool that makes online visibility simple! The scoring system helped us prioritize what to fix first. Game changer for small businesses.",
                      rating: 5,
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
                    <span>BizVisibility AI</span>
                  </h2>
                </div>
                <div className="accordion mt-60" id="greatSolutions">
                  {[
                    {
                      id: "collapseOne",
                      question: "How does BizVisibility AI work?",
                      answer:
                        "Our AI scans your website, search engine presence, and social media platforms to evaluate your online visibility. It then generates a comprehensive score and provides intelligent, actionable recommendations to improve your digital presence.",
                      show: true,
                    },
                    {
                      id: "collapseTwo",
                      question: "What platforms does the AI analyze?",
                      answer:
                        "BizVisibility AI analyzes your website performance, search engine rankings (Google, Bing, etc.), and your presence across major social media platforms including Facebook, Instagram, LinkedIn, Twitter, and more.",
                      show: false,
                    },
                    {
                      id: "collapseThree",
                      question: "How long does it take to see results?",
                      answer:
                        "Most businesses start seeing improvements within 2-4 weeks of implementing our AI recommendations. The analysis itself takes just minutes, and you'll receive your visibility score and action plan immediately.",
                      show: false,
                    },
                    {
                      id: "collapseFore",
                      question: "Is my business data secure?",
                      answer:
                        "Absolutely. We use enterprise-grade encryption and security protocols to protect your data. We only analyze publicly available information about your business and never share your data with third parties.",
                      show: false,
                    },
                  ].map((faq, index) => (
                    <div key={index} className="accordion-item top-reveal">
                      <div className="accordion-header">
                        <button
                          className={`accordion-button ${!faq.show ? "collapsed" : ""}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${faq.id}`}
                          aria-expanded={faq.show}
                          aria-controls={faq.id}
                        >
                          {faq.question}
                        </button>
                      </div>
                      <div
                        id={faq.id}
                        className={`accordion-collapse collapse ${faq.show ? "show" : ""}`}
                        data-bs-parent="#greatSolutions"
                      >
                        <div className="accordion-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
                    {[
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
                    {[
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
