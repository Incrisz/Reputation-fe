export default function PricingAppPage() {
  return (
    <div className="container-fluid page-container">
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h1 className="page-title fw-bold mb-2">My Plan</h1>
              <p className="text-muted fs-16">
                Manage your subscription and upgrade when ready
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Current Plan Section */}
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto">
          <div className="card custom-card border border-primary">
            <div className="card-body p-5">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <h3 className="fw-bold mb-1">Free Plan</h3>
                  <p className="text-muted">Your current plan</p>
                </div>
                <span className="badge bg-primary">Active</span>
              </div>
              <div className="mb-4">
                <span className="fs-32 fw-bold text-primary">$0</span>
                <span className="text-muted">/month</span>
              </div>
              <p className="text-muted mb-4">
                Get started with basic reputation monitoring
              </p>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <h6 className="fw-semibold mb-3">Included Features:</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="ri-check-line text-success me-2"></i>1 Business Audit Per
                      Month
                    </li>
                    <li className="mb-2">
                      <i className="ri-check-line text-success me-2"></i>Basic Reports
                    </li>
                    <li className="mb-2">
                      <i className="ri-check-line text-success me-2"></i>Email Support
                    </li>
                    <li className="mb-2">
                      <i className="ri-close-line text-muted me-2"></i>Weekly Reports
                    </li>
                    <li className="mb-2">
                      <i className="ri-close-line text-muted me-2"></i>Advanced Analytics
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 mb-3">
                  <h6 className="fw-semibold mb-3">Plan Limits:</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="ri-information-line me-2"></i>
                      <strong>Audits:</strong> 1/month
                    </li>
                    <li className="mb-2">
                      <i className="ri-information-line me-2"></i>
                      <strong>Reports:</strong> Basic
                    </li>
                    <li className="mb-2">
                      <i className="ri-information-line me-2"></i>
                      <strong>Support:</strong> Email
                    </li>
                    <li className="mb-2">
                      <i className="ri-information-line me-2"></i>
                      <strong>Analytics:</strong> Limited
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <h3 className="fw-bold mb-4">Upgrade Your Plan</h3>
        </div>
      </div>

      <div className="row">
        {/* Starter Plan */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100">
            <div className="card-body p-5">
              <h4 className="fw-semibold mb-3">Starter</h4>
              <div className="mb-4">
                <span className="fs-32 fw-bold text-primary">$29</span>
                <span className="text-muted">/month</span>
              </div>
              <p className="text-muted mb-4">Perfect for growing businesses</p>
              <button className="btn btn-primary btn-wave w-100 mb-4">Upgrade Now</button>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Unlimited Monthly Audits
                </li>
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Monthly Reports
                </li>
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Email Support
                </li>
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Basic Analytics
                </li>
                <li className="mb-2">
                  <i className="ri-close-line text-muted me-2"></i>API Access
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Plan */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100 border-primary shadow-lg position-relative">
            <div
              className="badge bg-primary position-absolute"
              style={{ top: "-12px", right: "20px" }}
            >
              Most Popular
            </div>
            <div className="card-body p-5">
              <h4 className="fw-semibold mb-3">Professional</h4>
              <div className="mb-4">
                <span className="fs-32 fw-bold text-primary">$99</span>
                <span className="text-muted">/month</span>
              </div>
              <p className="text-muted mb-4">
                For growing businesses that need detailed insights
              </p>
              <button className="btn btn-primary btn-wave w-100 mb-4">Get Started</button>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Complete Reputation Audit
                </li>
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Weekly Reports
                </li>
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Priority Support
                </li>
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Advanced Analytics
                </li>
                <li className="mb-2">
                  <i className="ri-close-line text-danger me-2"></i>API Access
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card custom-card h-100">
            <div className="card-body p-5">
              <h4 className="fw-semibold mb-3">Enterprise</h4>
              <div className="mb-4">
                <span className="fs-32 fw-bold text-primary">Custom</span>
              </div>
              <p className="text-muted mb-4">
                For large organizations with custom needs
              </p>
              <button className="btn btn-outline-primary btn-wave w-100 mb-4">
                Contact Sales
              </button>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Everything in Pro
                </li>
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Real-time Reports
                </li>
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>24/7 Dedicated Support
                </li>
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Advanced Analytics
                </li>
                <li className="mb-2">
                  <i className="ri-check-line text-success me-2"></i>Full API Access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
