"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

// Declare global cleanup function type
declare global {
  interface Window {
    __cleanupAnimations?: () => void;
    __scriptsInitialized?: boolean;
  }
}

export default function RouteChangeHandler() {
  const pathname = usePathname();

  // Use useLayoutEffect to run cleanup synchronously before DOM updates
  useLayoutEffect(() => {
    // Cleanup animations before route change takes effect
    if (typeof window !== 'undefined' && window.__cleanupAnimations) {
      window.__cleanupAnimations();
    }
    
    // Reset initialization flag to allow re-initialization on new page
    if (typeof window !== 'undefined') {
      window.__scriptsInitialized = false;
    }
  }, [pathname]);

  // Run cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.__cleanupAnimations) {
        window.__cleanupAnimations();
      }
    };
  }, []);

  return null;
}
