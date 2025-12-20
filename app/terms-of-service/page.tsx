import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BizVisibility AI",
  description:
    "Read the terms and conditions for using BizVisibility AI's services. Understand your rights and responsibilities.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className="banner-two-section inner-banner py-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="banner-two-section__content">
                <h6 className="title-animation">Legal</h6>
                <h1 className="title-animation">Terms of Service</h1>
                <p className="right-reveal">
                  These terms govern your use of BizVisibility AI. By creating an account, you
                  agree to them.
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
              <h2>Service Description</h2>
              <p>
                BizVisibility AI provides AI-powered online visibility scoring and recommendations.
                We scan your website, search engine presence, and social media platforms to
                evaluate your digital presence and provide actionable insights.
              </p>

              <h2 className="mt-4">Account Responsibilities</h2>
              <ul className="list-unstyled mt-3">
                <li className="d-flex gap-3 mb-2">
                  <i className="material-symbols-outlined">check_circle</i>
                  <span>You must provide accurate account information.</span>
                </li>
                <li className="d-flex gap-3 mb-2">
                  <i className="material-symbols-outlined">check_circle</i>
                  <span>You are responsible for maintaining account security.</span>
                </li>
                <li className="d-flex gap-3 mb-2">
                  <i className="material-symbols-outlined">check_circle</i>
                  <span>You must have authority to connect business properties.</span>
                </li>
              </ul>

              <h2 className="mt-4">Acceptable Use</h2>
              <p>
                You agree not to misuse our services, attempt to access unauthorized areas, or use
                the platform for any illegal purposes. We reserve the right to suspend accounts
                that violate these terms.
              </p>

              <h2 className="mt-4">Billing and Cancellation</h2>
              <p>
                Paid plans are billed monthly or annually. You can cancel anytime from your account
                settings. Cancellation takes effect at the end of the current billing period.
              </p>

              <h2 className="mt-4">Limitation of Liability</h2>
              <p>
                BizVisibility AI provides recommendations based on publicly available data. We do
                not guarantee specific results from implementing our recommendations. Our liability
                is limited to the amount paid for services in the preceding 12 months.
              </p>

              <h2 className="mt-4">Changes to Terms</h2>
              <p>
                We may update these terms from time to time. Continued use of the service after
                changes constitutes acceptance of the new terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
