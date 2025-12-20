import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizvisibility.ai"),
  title: "BizVisibility AI - AI-Powered Online Visibility Scoring & Reputation Management",
  description:
    "BizVisibility AI uses artificial intelligence to evaluate your online business across websites, search engines, and social platforms. Get intelligent visibility scores and actionable recommendations to grow your business digitally.",
  keywords:
    "online visibility, AI reputation management, business visibility score, SEO analysis, social media monitoring, search ranking, digital presence, online reputation",
  authors: [{ name: "BizVisibility AI" }],
  openGraph: {
    type: "website",
    title: "BizVisibility AI - AI-Powered Online Visibility Scoring",
    description:
      "Our AI-powered platform evaluates how visible your business is online and provides intelligent recommendations to help you grow digitally.",
    images: ["/images/logo/bizvisibility-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizVisibility AI - AI-Powered Online Visibility Scoring",
    description:
      "Our AI-powered platform evaluates how visible your business is online and provides intelligent recommendations to help you grow digitally.",
    images: ["/images/logo/bizvisibility-og-image.jpg"],
  },
  icons: {
    shortcut: "/images/logo/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/css/odometer.css" />
        <link rel="stylesheet" href="/css/custom-animation.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
      </head>
      <body>
        {/* Cursor effects */}
        <div className="cursor"></div>
        <div className="cursor-trail"></div>
        <div className="cursor-slider">
          <img
            width="20"
            height="22"
            src="https://assets.codepen.io/162656/cursor-swipe.svg"
            alt="swipe indicator"
          />
        </div>

        {/* Preloader */}
        <div id="preloader">
          <div id="text">
            <p className="active">B</p>
            <p>i</p>
            <p>z</p>
            <p className="active">V</p>
            <p>i</p>
            <p>s</p>
            <p>i</p>
            <p>b</p>
            <p>i</p>
            <p>l</p>
            <p>i</p>
            <p>t</p>
            <p>y</p>
            <p> </p>
            <p className="active">A</p>
            <p>I</p>
          </div>
        </div>

        {/* Scroll back to top */}
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>

        <main>
          <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
          </div>
        </main>

        {/* Scripts */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.min.js" strategy="afterInteractive" />
        <Script src="/js/boostrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/scrollreveal.min.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script
          src="/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
