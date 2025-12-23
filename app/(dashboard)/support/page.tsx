"use client";

export default function SupportPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! Our support team will get back to you within 24 hours.");
  };

  return (
    <div className="container-fluid page-container">
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h1 className="page-title fw-bold mb-2">Help &amp; Support</h1>
              <p className="text-muted fs-16">
                We&apos;re here to help you get the most out of BizVisibility AI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="row mb-5">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card custom-card text-center h-100">
            <div className="card-body p-4">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                  width="48"
                  height="48"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none" />
                  <path
                    d="M232,56H24a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H232a8,8,0,0,0,8-8V64A8,8,0,0,0,232,56Zm-20,32-96,60L52,88"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                </svg>
              </div>
              <h5 className="fw-semibold mb-2">Email Support</h5>
              <p className="text-muted mb-3">
                Send us an email and we&apos;ll respond within 24 hours
              </p>
              <a href="mailto:support@bizvisibility.com" className="btn btn-sm btn-primary">
                support@bizvisibility.com
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card custom-card text-center h-100">
            <div className="card-body p-4">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                  width="48"
                  height="48"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none" />
                  <path
                    d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-16,2.74,8.07,8.07,0,0,0-.75.75c-15.42,15.42-30.92-15.08-46.34-30.5C112.15,101.85,86.73,86.35,102.15,70.93a8.07,8.07,0,0,0,.75-.75,16,16,0,0,0,2.74-16l-21.11-47.11a16,16,0,0,0-15.17-9.47A56,56,0,0,0,32,40c-7.15,123.16,115.88,251.33,239,244.17A56,56,0,0,0,231.84,173.63Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                </svg>
              </div>
              <h5 className="fw-semibold mb-2">Live Chat</h5>
              <p className="text-muted mb-3">Chat with our support team in real-time</p>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => alert("Live chat feature coming soon!")}
              >
                Start Chat
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card custom-card text-center h-100">
            <div className="card-body p-4">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                  width="48"
                  height="48"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none" />
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <polyline
                    points="128 80 128 128 168 168"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                </svg>
              </div>
              <h5 className="fw-semibold mb-2">Schedule Call</h5>
              <p className="text-muted mb-3">Book a call with our support specialists</p>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => alert("Scheduling feature coming soon!")}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card custom-card text-center h-100">
            <div className="card-body p-4">
              <div className="mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                  width="48"
                  height="48"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none" />
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <path
                    d="M109.86,120a20,20,0,1,1,23.16,19.16A20,20,0,0,1,109.86,120Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <circle cx="128" cy="40" r="8" fill="currentColor" />
                </svg>
              </div>
              <h5 className="fw-semibold mb-2">Knowledge Base</h5>
              <p className="text-muted mb-3">Browse our comprehensive documentation</p>
              <a href="#faqs" className="btn btn-sm btn-primary">
                View Articles
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="row" id="faqs">
        <div className="col-12">
          <h3 className="fw-bold mb-4">Frequently Asked Questions</h3>
        </div>
        <div className="col-lg-8">
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item card custom-card mb-3">
              <h2 className="accordion-header" id="headingFaq1">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                  aria-expanded="false"
                  aria-controls="faq1"
                >
                  <i className="ri-add-line me-2"></i>How do I start a reputation audit?
                </button>
              </h2>
              <div
                id="faq1"
                className="accordion-collapse collapse"
                aria-labelledby="headingFaq1"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p className="text-muted mb-0">
                    Navigate to &quot;Start Audit&quot; from the sidebar menu. Fill in your business
                    information, select the analysis type, and click &quot;Start Audit&quot; to begin the
                    process. Results typically appear within 5-10 minutes.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item card custom-card mb-3">
              <h2 className="accordion-header" id="headingFaq2">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                  aria-expanded="false"
                  aria-controls="faq2"
                >
                  <i className="ri-add-line me-2"></i>What&apos;s included in my plan?
                </button>
              </h2>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                aria-labelledby="headingFaq2"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p className="text-muted mb-0">
                    Visit our Pricing page to see detailed feature comparisons for each plan. Starter
                    plans include basic audits and monthly reports, while Professional plans add weekly
                    reports and advanced analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item card custom-card mb-3">
              <h2 className="accordion-header" id="headingFaq3">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                  aria-expanded="false"
                  aria-controls="faq3"
                >
                  <i className="ri-add-line me-2"></i>How can I upgrade my plan?
                </button>
              </h2>
              <div
                id="faq3"
                className="accordion-collapse collapse"
                aria-labelledby="headingFaq3"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p className="text-muted mb-0">
                    Go to your Account Settings and click &quot;Upgrade Plan&quot;. Choose your new plan and
                    complete the upgrade process. Your new features will be available immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item card custom-card mb-3">
              <h2 className="accordion-header" id="headingFaq4">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                  aria-expanded="false"
                  aria-controls="faq4"
                >
                  <i className="ri-add-line me-2"></i>How often are audits performed?
                </button>
              </h2>
              <div
                id="faq4"
                className="accordion-collapse collapse"
                aria-labelledby="headingFaq4"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p className="text-muted mb-0">
                    Starter plans get monthly audits, Professional plans get weekly audits, and
                    Enterprise plans get real-time audits with continuous monitoring. You can also
                    manually trigger audits anytime.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item card custom-card mb-3">
              <h2 className="accordion-header" id="headingFaq5">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq5"
                  aria-expanded="false"
                  aria-controls="faq5"
                >
                  <i className="ri-add-line me-2"></i>Is there an API available?
                </button>
              </h2>
              <div
                id="faq5"
                className="accordion-collapse collapse"
                aria-labelledby="headingFaq5"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  <p className="text-muted mb-0">
                    API access is available on Professional and Enterprise plans. Contact our sales
                    team to request API documentation and obtain your API keys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Sidebar */}
        <div className="col-lg-4">
          <div className="card custom-card">
            <div className="card-header bg-primary text-fixed-white">
              <h5 className="card-title mb-0">Send us a Message</h5>
            </div>
            <div className="card-body">
              <form id="supportForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Tell us more..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
