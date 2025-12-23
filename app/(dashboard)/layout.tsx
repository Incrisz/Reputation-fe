"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import "../globals.css";

// Sidebar navigation items
const mainNavItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <path d="M133.66,34.34a8,8,0,0,0-11.32,0L40,116.69V216h64V152h48v64h64V116.69Z" opacity="0.2"/>
        <line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <polyline points="152 216 152 152 104 152 104 216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <line x1="40" y1="116.69" x2="40" y2="216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <line x1="216" y1="216" x2="216" y2="116.69" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <path d="M24,132.69l98.34-98.35a8,8,0,0,1,11.32,0L232,132.69" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </svg>
    ),
  },
  {
    href: "/start-audit",
    label: "Start Audit",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <polygon points="216 216 80 216 160 24 216 216" opacity="0.2"/>
        <polyline points="16 216 80 40 160 24 240 216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </svg>
    ),
  },
  {
    href: "/audit-history",
    label: "Audit History",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <circle cx="128" cy="128" r="96" opacity="0.2"/>
        <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <polyline points="128 72 128 128 176 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </svg>
    ),
  },
  {
    href: "/pricing-app",
    label: "My Plan",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <path d="M224,80H160v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80H32a8,8,0,0,1,0-16H224a8,8,0,0,1,0,16Z" opacity="0.2"/>
        <line x1="80" y1="40" x2="80" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <line x1="128" y1="40" x2="128" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <line x1="176" y1="40" x2="176" y2="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <rect x="40" y="80" width="176" height="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </svg>
    ),
  },
  {
    href: "/support",
    label: "Support",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <circle cx="128" cy="96" r="36" opacity="0.2"/>
        <circle cx="128" cy="96" r="36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <path d="M216,160c0,32-37.25,56-88,56s-88-24-88-56m32-16a20,20,0,1,1,20-20A20,20,0,0,1,160,144Z" opacity="0.2"/>
        <circle cx="188" cy="128" r="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <path d="M216,160c0,32-37.25,56-88,56s-88-24-88-56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <circle cx="128" cy="96" r="36" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </svg>
    ),
  },
];

const footerNavItems = [
  {
    href: "/profile",
    label: "Profile",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <path d="M128,32A96,96,0,0,0,63.8,199.38h0A72,72,0,0,1,128,160a40,40,0,1,1,40-40,40,40,0,0,1-40,40,72,72,0,0,1,64.2,39.37A96,96,0,0,0,128,32Z" opacity="0.2"/>
        <path d="M63.8,199.37a72,72,0,0,1,128.4,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <circle cx="128" cy="120" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </svg>
    ),
  },
  {
    href: "/login",
    label: "Sign Out",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <path d="M48,40H208a16,16,0,0,1,16,16V200a16,16,0,0,1-16,16H48a0,0,0,0,1,0,0V40A0,0,0,0,1,48,40Z" opacity="0.2"/>
        <polyline points="112 40 48 40 48 216 112 216" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <line x1="112" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
        <polyline points="184 88 224 128 184 168" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
      </svg>
    ),
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html
      lang="en"
      dir="ltr"
      data-nav-layout="vertical"
      data-theme-mode="light"
      data-header-styles="transparent"
      data-width="fullwidth"
      data-menu-styles="transparent"
      data-page-style="flat"
      data-toggled="close"
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/dashboard/images/brand-logos/favicon.ico" type="image/x-icon" />
        <link id="style" href="/dashboard/libs/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/dashboard/css/styles.css" rel="stylesheet" />
        <link href="/dashboard/css/icons.css" rel="stylesheet" />
        <link href="/dashboard/libs/node-waves/waves.min.css" rel="stylesheet" />
        <link href="/dashboard/libs/simplebar/simplebar.min.css" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <div className="page">
          {/* Header */}
          <header className="app-header sticky">
            <div className="main-header-container container-fluid">
              {/* Left side: Logo and Hamburger */}
              <div className="header-content-left">
                <div className="header-element">
                  <div className="horizontal-logo">
                    <Link href="/dashboard" className="header-logo">
                      <img src="/dashboard/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                      <img src="/dashboard/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
                    </Link>
                  </div>
                </div>
                <div className="header-element">
                  <a
                    aria-label="Hide Sidebar"
                    className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                    data-bs-toggle="sidebar"
                    href="javascript:void(0);"
                  >
                    <span></span>
                  </a>
                </div>
              </div>

              {/* Right side: Icons and Profile */}
              <ul className="header-content-right">
                {/* Dark Mode Toggle */}
                <li className="header-element header-theme-mode">
                  <a href="javascript:void(0);" className="header-link layout-setting">
                    <span className="light-layout">
                      <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"/>
                        <path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" opacity="0.2"/>
                        <path d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                      </svg>
                    </span>
                    <span className="dark-layout">
                      <svg xmlns="http://www.w3.org/2000/svg" className="header-link-icon" viewBox="0 0 256 256">
                        <rect width="256" height="256" fill="none"/>
                        <circle cx="128" cy="128" r="56" opacity="0.2"/>
                        <line x1="128" y1="40" x2="128" y2="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <circle cx="128" cy="128" r="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="64" y1="64" x2="56" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="64" y1="192" x2="56" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="192" y1="64" x2="200" y2="56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="192" y1="192" x2="200" y2="200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="40" y1="128" x2="32" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="128" y1="216" x2="128" y2="224" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                        <line x1="216" y1="128" x2="224" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
                      </svg>
                    </span>
                  </a>
                </li>

                {/* Profile Dropdown */}
                <li className="header-element dropdown">
                  <a
                    href="javascript:void(0);"
                    className="header-link dropdown-toggle"
                    id="mainHeaderProfile"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    <div>
                      <img src="/dashboard/images/faces/12.jpg" alt="img" className="header-link-icon" />
                    </div>
                  </a>
                  <div
                    className="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end"
                    aria-labelledby="mainHeaderProfile"
                  >
                    <div className="p-3 bg-primary text-fixed-white">
                      <div className="d-flex align-items-center justify-content-between">
                        <p className="mb-0 fs-16">Profile</p>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="p-3">
                      <div className="d-flex align-items-start gap-2">
                        <div className="lh-1">
                          <span className="avatar avatar-sm bg-primary-transparent avatar-rounded">
                            <img src="/dashboard/images/faces/12.jpg" alt="" />
                          </span>
                        </div>
                        <div>
                          <span className="d-block fw-semibold lh-1">User Name</span>
                          <span className="text-muted fs-12">user@bizvisibility.com</span>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <Link className="dropdown-item d-flex align-items-center" href="/profile">
                          <i className="ri-user-circle-line me-2"></i>View Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item d-flex align-items-center" href="/profile-settings">
                          <i className="ri-settings-gear-line me-2"></i>Account Settings
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item d-flex align-items-center" href="/login">
                          <i className="ri-logout-box-line me-2"></i>Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </header>

          {/* Sidebar */}
          <aside className="app-sidebar sticky" id="sidebar">
            <div className="main-sidebar-header">
              <Link href="/dashboard" className="header-logo">
                <img src="/dashboard/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo" />
                <img src="/dashboard/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark" />
              </Link>
            </div>

            <div className="main-sidebar has-footer" id="sidebar-scroll">
              <nav className="main-menu-container nav nav-pills flex-column sub-open">
                <ul className="main-menu">
                  {mainNavItems.map((item) => (
                    <li key={item.href} className="slide">
                      <Link
                        href={item.href}
                        className={`side-menu__item ${pathname === item.href ? "active" : ""}`}
                      >
                        {item.icon}
                        <span className="side-menu__label">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="sidebar-footer">
                <ul className="main-menu">
                  {footerNavItems.map((item) => (
                    <li key={item.href} className="slide">
                      <Link
                        href={item.href}
                        className={`side-menu__item ${pathname === item.href ? "active" : ""}`}
                      >
                        {item.icon}
                        <span className="side-menu__label">{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="main-content app-content">{children}</div>
        </div>

        {/* Scripts */}
        <Script src="/dashboard/libs/choices.js/public/assets/scripts/choices.min.js" strategy="beforeInteractive" />
        <Script src="/dashboard/libs/@popperjs/core/umd/popper.min.js" strategy="afterInteractive" />
        <Script src="/dashboard/libs/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/dashboard/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
