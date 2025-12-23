"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuditProgressPage() {
  const router = useRouter();

  useEffect(() => {
    // Simulate audit progress and redirect after completion
    const timer = setTimeout(() => {
      router.push("/audit-results");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="container-fluid page-container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card custom-card">
            <div className="card-body p-5 text-center">
              <h2 className="fw-bold mb-4">Analyzing Your Business</h2>
              <p className="text-muted mb-4">
                Please wait while we analyze your online presence...
              </p>

              <div className="mb-4">
                <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="progress" style={{ height: "10px" }}>
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div className="text-start bg-light p-4 rounded">
                <h6 className="fw-semibold mb-3">Currently Analyzing:</h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-2">
                    <i className="ri-check-line text-success me-2"></i>
                    Website SEO
                  </li>
                  <li className="mb-2">
                    <i className="ri-check-line text-success me-2"></i>
                    Social Media Profiles
                  </li>
                  <li className="mb-2">
                    <i className="ri-loader-4-line text-primary me-2 spin"></i>
                    Online Reviews
                  </li>
                  <li className="mb-2 text-muted">
                    <i className="ri-time-line me-2"></i>
                    Local Listings
                  </li>
                  <li className="text-muted">
                    <i className="ri-time-line me-2"></i>
                    Mobile Optimization
                  </li>
                </ul>
              </div>

              <p className="text-muted mt-4 mb-0">
                <small>This usually takes 1-2 minutes</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
