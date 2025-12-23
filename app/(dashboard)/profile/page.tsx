import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="container-fluid page-container">
      <div className="row mb-5">
        <div className="col-12">
          <div className="card custom-card">
            <div className="card-body">
              <div className="d-flex align-items-center gap-4 mb-4">
                <div>
                  <img
                    src="/dashboard/images/faces/12.jpg"
                    alt="User Avatar"
                    className="rounded-circle"
                    width="120"
                    height="120"
                  />
                </div>
                <div>
                  <h2 className="fw-bold mb-2">User Name</h2>
                  <p className="text-muted mb-1">user@bizvisibility.com</p>
                  <p className="text-muted mb-3">Premium Member</p>
                  <Link href="/profile-settings" className="btn btn-primary btn-sm">
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Information */}
      <div className="row mb-4">
        <div className="col-lg-6">
          <div className="card custom-card">
            <div className="card-header">
              <h5 className="card-title">Personal Information</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">First Name</label>
                <p className="text-muted">John</p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Last Name</label>
                <p className="text-muted">Doe</p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <p className="text-muted">user@bizvisibility.com</p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Phone</label>
                <p className="text-muted">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card custom-card">
            <div className="card-header">
              <h5 className="card-title">Business Information</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Business Name</label>
                <p className="text-muted">Tech Solutions Inc</p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Industry</label>
                <p className="text-muted">Technology</p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Website</label>
                <p className="text-muted">www.techsolutions.com</p>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Location</label>
                <p className="text-muted">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Info */}
      <div className="row">
        <div className="col-12">
          <div className="card custom-card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">Subscription</h5>
              <Link href="/pricing-app" className="btn btn-sm btn-primary">
                Upgrade Plan
              </Link>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Current Plan</label>
                  <p className="text-muted">Free Plan</p>
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Status</label>
                  <p>
                    <span className="badge bg-success">Active</span>
                  </p>
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Member Since</label>
                  <p className="text-muted">December 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
