"use client";

import { useState } from "react";
import Link from "next/link";

export default function StartAuditPage() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Audit started! You will be redirected to the results page.");
    window.location.href = "/audit-progress";
  };

  return (
    <div className="container-fluid page-container">
      <h1 className="page-title fw-bold mb-4">Start Your Business Audit</h1>

      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          {/* Progress Bar */}
          <div className="mb-5">
            <div className="progress" style={{ height: "3px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${currentStep * 25}%` }}
              ></div>
            </div>
            <div className="row text-center mt-4">
              <div className="col-3">
                <small
                  className={`fw-semibold step-label ${currentStep >= 1 ? "" : "text-muted"}`}
                >
                  Business Info
                </small>
              </div>
              <div className="col-3">
                <small
                  className={`fw-semibold step-label ${currentStep >= 2 ? "" : "text-muted"}`}
                >
                  Website
                </small>
              </div>
              <div className="col-3">
                <small
                  className={`fw-semibold step-label ${currentStep >= 3 ? "" : "text-muted"}`}
                >
                  Social Media
                </small>
              </div>
              <div className="col-3">
                <small
                  className={`fw-semibold step-label ${currentStep >= 4 ? "" : "text-muted"}`}
                >
                  Review
                </small>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Business Info */}
            {currentStep === 1 && (
              <div className="card custom-card mb-4">
                <div className="card-body p-5">
                  <h4 className="fw-semibold mb-4">Business Information</h4>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Business Name</label>
                    <input type="text" className="form-control" name="businessName" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Industry</label>
                    <select className="form-select" name="industry" required>
                      <option value="">Select your industry</option>
                      <option value="retail">Retail</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="technology">Technology</option>
                      <option value="services">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Business Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      placeholder="City, State"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Website */}
            {currentStep === 2 && (
              <div className="card custom-card mb-4">
                <div className="card-body p-5">
                  <h4 className="fw-semibold mb-4">Website Information</h4>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Website URL</label>
                    <input
                      type="url"
                      className="form-control"
                      name="websiteUrl"
                      placeholder="https://www.example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Google Business Profile URL</label>
                    <input
                      type="url"
                      className="form-control"
                      name="googleUrl"
                      placeholder="https://maps.google.com/..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Social Media */}
            {currentStep === 3 && (
              <div className="card custom-card mb-4">
                <div className="card-body p-5">
                  <h4 className="fw-semibold mb-4">Social Media Profiles</h4>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Facebook Page</label>
                    <input
                      type="url"
                      className="form-control"
                      name="facebook"
                      placeholder="https://facebook.com/..."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-medium">Instagram Profile</label>
                    <input
                      type="url"
                      className="form-control"
                      name="instagram"
                      placeholder="https://instagram.com/..."
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-medium">LinkedIn Company Page</label>
                    <input
                      type="url"
                      className="form-control"
                      name="linkedin"
                      placeholder="https://linkedin.com/company/..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {currentStep === 4 && (
              <div className="card custom-card mb-4">
                <div className="card-body p-5">
                  <h4 className="fw-semibold mb-4">Review &amp; Start Audit</h4>
                  <p className="text-muted mb-4">
                    Please review your information before starting the audit.
                  </p>
                  <div className="alert alert-info">
                    <i className="ri-information-line me-2"></i>
                    Your audit will analyze your online presence across websites, social media, and
                    review platforms.
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handlePrevStep}
                >
                  Previous
                </button>
              ) : (
                <Link href="/dashboard" className="btn btn-secondary">
                  Cancel
                </Link>
              )}
              {currentStep < 4 ? (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleNextStep}
                >
                  Next Step
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Start Audit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
