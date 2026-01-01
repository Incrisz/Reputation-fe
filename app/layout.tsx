import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://reputationai.io"),
  title: "Reputation AI - Online Reputation & Sentiment Analysis Platform",
  description:
    "Reputation AI analyzes what people say about your business online. Get your reputation score, sentiment breakdown, key topics, and actionable recommendations to improve your online reputation across review sites, news, social media, and more.",
  keywords:
    "online reputation, reputation management, sentiment analysis, reputation scoring, business reputation, digital reputation, online presence monitoring, brand monitoring, reputation tracking, customer reviews",
  authors: [{ name: "Reputation AI" }],
  openGraph: {
    type: "website",
    title: "Reputation AI - Know What People Say About Your Business",
    description:
      "Reputation AI scans the web to find what people are saying about your business. Get actionable insights to improve your online reputation.",
    images: ["/images/logo/reputation-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reputation AI - Know What People Say About Your Business",
    description:
      "Reputation AI scans the web to find what people are saying about your business. Get actionable insights to improve your online reputation.",
    images: ["/images/logo/reputation-og-image.jpg"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/css/odometer.css" />
        <link rel="stylesheet" href="/css/custom-animation.css" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
      </head>
      <body suppressHydrationWarning>
        {/* Cursor effects */}
        <div className="cursor" suppressHydrationWarning></div>
        <div className="cursor-trail" suppressHydrationWarning></div>
        <div className="cursor-slider" suppressHydrationWarning>
          <img
            width="20"
            height="22"
            src="https://assets.codepen.io/162656/cursor-swipe.svg"
            alt="swipe indicator"
          />
        </div>

        {/* Preloader */}
        <div id="preloader" suppressHydrationWarning>
          <div id="text">
            <p className="active">R</p>
            <p>e</p>
            <p>p</p>
            <p>u</p>
            <p>t</p>
            <p>a</p>
            <p>t</p>
            <p>i</p>
            <p>o</p>
            <p>n</p>
            <p> </p>
            <p className="active">A</p>
            <p>I</p>
          </div>
        </div>

        {/* Scroll back to top */}
        <div className="progress-wrap" suppressHydrationWarning>
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>

        <main suppressHydrationWarning>
          <div id="smooth-wrapper" suppressHydrationWarning>
            <div id="smooth-content" suppressHydrationWarning>{children}</div>
          </div>
        </main>

        {/* Scripts */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/js/SplitText.min.js" strategy="beforeInteractive" />
        <Script src="/js/boostrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/scrollreveal.min.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
        <Script
          src="/js/jquery.magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
