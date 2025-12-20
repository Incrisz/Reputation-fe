import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | BizVisibility AI",
  description:
    "Learn about how BizVisibility AI collects, uses, and protects your data. Your privacy is important to us.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className="banner-two-section inner-banner py-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="banner-two-section__content">
                <h6 className="title-animation">Privacy First</h6>
                <h1 className="title-animation">Privacy Policy</h1>
                <p className="right-reveal">
                  Your data powers your visibility score. This page explains what we collect, why
                  we collect it, and how we protect it across BizVisibility AI.
                </p>
                <div className="banner-two-buttons">
                  <div className="right-reveal">
                    <Link href="/contact" className="btn-round-two btn-outline">
                      Contact support
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

      {/* Content Section */}
      <section className="py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2>What we collect</h2>
              <p>
                We gather only the data needed to deliver accurate visibility scores and
                recommendations: your account details, business profile, connected properties
                (domains, search listings, and social links), and product analytics that show how
                you use the app. We do not sell your data.
              </p>

              <h2 className="mt-4">How we use your data</h2>
              <ul className="list-unstyled mt-3">
                <li className="d-flex gap-3 mb-2">
                  <i className="material-symbols-outlined">check_circle</i>
                  <span>
                    Run scans across web, search, and social to calculate your visibility score.
                  </span>
                </li>
                <li className="d-flex gap-3 mb-2">
                  <i className="material-symbols-outlined">check_circle</i>
                  <span>Improve recommendations, accuracy, and product performance.</span>
                </li>
                <li className="d-flex gap-3 mb-2">
                  <i className="material-symbols-outlined">check_circle</i>
                  <span>
                    Notify you about changes to your score, new risks, or new opportunities.
                  </span>
                </li>
              </ul>

              <h2 className="mt-4">Your controls</h2>
              <p>
                You can request data export or deletion at any time by emailing{" "}
                <a href="mailto:privacy@bizvisibility.ai">privacy@bizvisibility.ai</a>. Removing
                access to connected properties may limit scoring accuracy but will not block
                deletion requests.
              </p>

              <h2 className="mt-4">Security</h2>
              <p>
                We use encryption in transit and at rest, least-privilege access, and regular
                security reviews. Third-party processors are vetted for compliance and bound by
                data protection agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="call-to-action-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="action-skew">
                <div className="call-to-action-section__content">
                  <h2>Questions about privacy?</h2>
                  <form>
                    <input type="email" name="email" placeholder="Enter your work email" />
                    <button type="submit" className="btn-round">
                      <span>Contact us</span>
                    </button>
                  </form>
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
