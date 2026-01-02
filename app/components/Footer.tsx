import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerLinks = [
    { href: "/faq", label: "FAQ" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/cookie-policy", label: "Cookie Policy" },
  ];

  const recentPosts = [
    {
      href: "/blog",
      image: "/images/blog/fb1.jpg",
      date: "January 10, 2025",
      title: "How AI is Transforming Online Visibility",
    },
    {
      href: "/blog",
      image: "/images/blog/fb2.jpg",
      date: "February 15, 2025",
      title: "5 Ways to Boost Your Search Rankings",
    },
    {
      href: "/blog",
      image: "/images/blog/fb3.jpg",
      date: "March 20, 2025",
      title: "Building a Strong Social Media Presence",
    },
  ];

  return (
    <footer className="footer-area footer-two">
      <div className="container py-100">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-area__about">
              <div className="footer-logo">
                <Link href="/">
                  <Image
                    src="/images/logo/logo2.svg"
                    alt="Reputation AI logo"
                    width={150}
                    height={40}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </Link>
              </div>
              <br />
              <p>
                Reputation AI uses artificial intelligence to monitor and analyze your online reputation,
                providing actionable insights to help you build and maintain a strong digital presence.
              </p>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="footer-widget">
              <div className="footer-widget__item">
                <h4 className="footer-widget__title">Pages</h4>
                <ul className="footer-widget__list">
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-widget__item">
                <h4 className="footer-widget__title">Official Info:</h4>
                <ul className="footer-widget__list">
                  <li>
                    <i className="material-symbols-outlined">location_on</i>
                    <p>4416 Taylor Road 5, north tower Street New York, NY 10013</p>
                  </li>
                  <li>
                    <i className="material-symbols-outlined">phone_in_talk</i>
                    <p>
                      <a href="tel:+0889147058350">+088 914-705-8350</a>
                    </p>
                  </li>
                </ul>
                <br />
                <br />
              </div>
              <div className="footer-widget__item">
                <h4 className="footer-widget__title">Recent Post</h4>
                <ul className="footer-widget__news">
                  {recentPosts.map((post, index) => (
                    <li key={index}>
                      <Link href={post.href}>
                        <Image src={post.image} alt="blog image" width={80} height={80} />
                      </Link>
                      <div className="text">
                        <span>
                          <i className="material-symbols-outlined">calendar_today</i>
                          {post.date}
                        </span>
                        <h6>
                          <Link href={post.href}>{post.title}</Link>
                        </h6>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copy-right__content d-flex flex-wrap gap-3 justify-content-between align-items-center">
                <p className="copy-right__text mb-0">
                  © 2025. All Rights Reserved By Reputation AI
                </p>
                <div className="d-flex gap-3 copy-right__text mb-0">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                  <Link href="/terms-of-service">Terms of Service</Link>
                  <Link href="/cookie-policy">Cookie Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
