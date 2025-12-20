import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | BizVisibility AI",
  description:
    "Learn about how BizVisibility AI uses cookies and similar technologies to improve your experience.",
};

export default function CookiePolicyPage() {
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
                <h1 className="title-animation">Cookie Policy</h1>
                <p className="right-reveal">
                  This policy explains how BizVisibility AI uses cookies and similar technologies.
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
              <h2>What are cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit websites. They
                help websites remember your preferences and improve your experience.
              </p>

              <h2 className="mt-4">How we use cookies</h2>
              <ul className="list-unstyled mt-3">
                <li className="d-flex gap-3 mb-2">
                  <i className="material-symbols-outlined">check_circle</i>
                  <span>
                    <strong>Essential cookies:</strong> Required for the platform to function,
                    including authentication and security.
                  </span>
                </li>
                <li className="d-flex gap-3 mb-2">
                  <i className="material-symbols-outlined">check_circle</i>
                  <span>
                    <strong>Analytics cookies:</strong> Help us understand how users interact with
                    our platform to improve features.
                  </span>
                </li>
                <li className="d-flex gap-3 mb-2">
                  <i className="material-symbols-outlined">check_circle</i>
                  <span>
                    <strong>Preference cookies:</strong> Remember your settings and preferences
                    across sessions.
                  </span>
                </li>
              </ul>

              <h2 className="mt-4">Managing cookies</h2>
              <p>
                You can control cookies through your browser settings. Disabling certain cookies
                may affect platform functionality. Essential cookies cannot be disabled while using
                the platform.
              </p>

              <h2 className="mt-4">Third-party cookies</h2>
              <p>
                We use trusted third-party services for analytics and functionality. These services
                may set their own cookies. We carefully select partners who respect your privacy.
              </p>

              <h2 className="mt-4">Updates to this policy</h2>
              <p>
                We may update this cookie policy periodically. Check back for the latest
                information on our cookie practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
