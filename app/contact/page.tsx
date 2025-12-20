import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | BizVisibility AI - Get in Touch with Our Team",
  description:
    "Contact BizVisibility AI for questions about our AI-powered visibility scoring platform. Get support, request demos, discuss pricing, or explore partnership opportunities.",
};

export default function ContactPage() {
  const faqs = [
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
  ];

  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <section className="breadcrumb">
        <div className="breadcrumb-shape"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="breadcrumb__wrapper">
                <ul className="breadcrumb__list">
                  <li className="breadcrumb__item">
                    <Link href="/">BizVisibility AI</Link>
                  </li>
                  <li className="breadcrumb__item">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </li>
                  <li className="breadcrumb__item">
                    <span className="breadcrumb__item-text">Contacts</span>
                  </li>
                </ul>
                <h1 className="breadcrumb__title">Contacts Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contacts-section py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-header-two text-center">
                <h6>Get In Touch</h6>
                <h2 className="title-animation">
                  Let&apos;s Boost Your <br /> <span>Online Visibility Together</span>
                </h2>
                <p className="mt-3">
                  Have questions about how BizVisibility AI can help your business? Our AI-powered
                  platform evaluates your online presence across websites, search engines, and
                  social platforms - providing intelligent visibility scores and actionable
                  recommendations to help you grow digitally.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-gap-4 mt-60">
            <div className="col-xl-6 order-1 order-xl-0">
              <div className="contacts-section__item">
                <div className="row row-gap-4">
                  <div className="col-md-6">
                    <div className="contact-info-box">
                      <div>
                        <i className="material-symbols-outlined">support_agent</i>
                        <h5>Customer services</h5>
                        <a href="mailto:support@bizvisibility.ai">support@bizvisibility.ai</a>
                        <a href="mailto:help@bizvisibility.ai">help@bizvisibility.ai</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact-info-box">
                      <div>
                        <i className="material-symbols-outlined">location_on</i>
                        <h5>Office Location</h5>
                        <a href="#">4416 Taylor Road 5, north tower New York, NY 10013</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="contact-info-iframe">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
                        allowFullScreen
                      ></iframe>
                      <div className="call-info">
                        <h6>New York, NY 10013</h6>
                        <p>4416 Taylor North Street New York</p>
                        <div className="call-btn">
                          <a href="tel:+12345678910" className="contact-btn">
                            Contact
                          </a>
                          <a href="tel:+12345678910">+00123 4567 8910</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="contacts-section__item">
                <form action="/">
                  <div className="row row-gap-4">
                    <div className="col-sm-6">
                      <div className="input-group">
                        <label htmlFor="inputName" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputName"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <label htmlFor="inputNameLast" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputNameLast"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <label htmlFor="inputEmail" className="form-label">
                          Your Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <label htmlFor="inputPhone" className="form-label">
                          Your Phone
                        </label>
                        <input
                          type="tel"
                          className="form-control"
                          id="inputPhone"
                          placeholder="Your Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group">
                        <label htmlFor="inputAddress" className="form-label">
                          Your Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          placeholder="Your Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group">
                        <label htmlFor="inputMessage" className="form-label">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="inputMessage"
                          placeholder="Message..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="inputCheck" />
                        <label className="form-check-label" htmlFor="inputCheck">
                          I Agree with <Link href="/terms-of-service">Terms &amp; Conditions</Link>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-round-two">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
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
                <Image
                  src="/images/faq/2.jpg"
                  alt="faq"
                  width={600}
                  height={500}
                  className="img-fluid"
                />
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
                  {faqs.map((faq, index) => (
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

      <Footer />
    </>
  );
}
