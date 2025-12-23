"use client";

import Link from "next/link";

export default function ProfileSettingsPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <div className="container-fluid page-container">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="page-title fw-bold mb-2">Account Settings</h1>
          <p className="text-muted">Manage your account and preferences</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          {/* Personal Information */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <h5 className="card-title">Personal Information</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-medium">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="John"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Doe"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    defaultValue="user@bizvisibility.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>

          {/* Business Information */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <h5 className="card-title">Business Information</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-medium">Business Name</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Tech Solutions Inc"
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Industry</label>
                    <select className="form-select" defaultValue="technology">
                      <option value="retail">Retail</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="technology">Technology</option>
                      <option value="services">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="San Francisco, CA"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Website URL</label>
                  <input
                    type="url"
                    className="form-control"
                    defaultValue="https://www.techsolutions.com"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>

          {/* Change Password */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <h5 className="card-title">Change Password</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-medium">Current Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">New Password</label>
                  <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-medium">Confirm New Password</label>
                  <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Update Password
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          {/* Profile Picture */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <h5 className="card-title">Profile Picture</h5>
            </div>
            <div className="card-body text-center">
              <img
                src="/dashboard/images/faces/12.jpg"
                alt="User Avatar"
                className="rounded-circle mb-3"
                width="120"
                height="120"
              />
              <div>
                <button className="btn btn-sm btn-primary me-2">Upload New</button>
                <button className="btn btn-sm btn-secondary">Remove</button>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="card custom-card border-danger">
            <div className="card-header bg-danger text-white">
              <h5 className="card-title mb-0">Danger Zone</h5>
            </div>
            <div className="card-body">
              <p className="text-muted mb-3">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <button className="btn btn-outline-danger w-100">Delete Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
