"use client";

import { useEffect, useRef } from "react";

export default function PricingTabs() {
  const navPillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navPillsRef.current) return;

    const navPills = navPillsRef.current;
    const links = navPills.querySelectorAll(".nav-link");
    const indicator = navPills.querySelector(".nav-indicator") as HTMLElement;

    if (!indicator) return;

    function updateIndicator(el: Element) {
      if (el instanceof HTMLElement) {
        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.left = `${el.offsetLeft}px`;
      }
    }

    // Initial setup
    const activeLink = navPills.querySelector(".nav-link.active");
    if (activeLink) {
      setTimeout(() => updateIndicator(activeLink), 50);
    }

    // Handle clicks
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const active = navPills.querySelector(".nav-link.active");
        if (active) active.classList.remove("active");
        link.classList.add("active");
        updateIndicator(link);
      });
    });

    // Handle resize
    window.addEventListener("resize", () => {
      const active = navPills.querySelector(".nav-link.active");
      if (active) updateIndicator(active);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div ref={navPillsRef} className="nav nav-pills" role="tablist">
      <button
        className="nav-link active"
        id="pills-monthly-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-monthly"
        type="button"
        role="tab"
        aria-controls="pills-monthly"
        aria-selected="true"
      >
        Monthly
      </button>
      <button
        className="nav-link"
        id="pills-annually-tab"
        data-bs-toggle="pill"
        data-bs-target="#pills-annually"
        type="button"
        role="tab"
        aria-controls="pills-annually"
        aria-selected="false"
      >
        Annually
      </button>
      <span className="nav-indicator"></span>
    </div>
  );
}
