"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Declare global cleanup function type
declare global {
  interface Window {
    __cleanupAnimations?: () => void;
  }
}

export default function Navbar() {
  const pathname = usePathname();

  // Clean up animations when pathname changes
  useEffect(() => {
    // Cleanup function runs before navigation
    return () => {
      if (typeof window !== 'undefined' && window.__cleanupAnimations) {
        window.__cleanupAnimations();
      }
    };
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-two">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <Image
            src="/images/logo/logo.svg"
            alt="BizVisibility AI logo"
            width={150}
            height={40}
            className="logo-img"
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>
        <div className="order-1 d-flex align-items-center gap-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="animated-svg">
              <path
                className="line line-1"
                d="m2.5 6.5h18"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="line line-2"
                d="m2.5 11.5h18"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="line line-3"
                d="m2.5 16.5h18"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <Image
                src="/images/logo/logo2.svg"
                alt="BizVisibility AI logo"
                width={150}
                height={40}
                className="logo-img"
                style={{ width: 'auto', height: 'auto' }}
              />
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body align-items-center">
            <ul className="navbar-nav justify-content-center flex-grow-1">
              {navLinks.map((link) => (
                <li key={link.href} className="nav-item">
                  <Link
                    className={`nav-link ${pathname === link.href ? "active" : ""}`}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
