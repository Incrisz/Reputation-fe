import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BizVisibility AI - Dashboard",
  description: "Business Reputation Dashboard",
};

export default function DashboardPage() {
  return (
    <div className="container-fluid page-container">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="page-title fw-bold mb-0">Welcome Back!</h1>
          <p className="text-muted">Here&apos;s your business reputation overview</p>
        </div>
        <Link href="/start-audit" className="btn btn-primary">
          <i className="ri-play-circle-line me-2"></i>Start New Audit
        </Link>
      </div>

      {/* Stats Row */}
      <div className="row mb-4">
        <div className="col-lg-3 col-md-6">
          <div className="card custom-card">
            <div className="card-body">
              <div className="d-flex align-items-start gap-3">
                <div className="flex-fill">
                  <span className="fs-13 fw-medium">Visibility Score</span>
                  <h4 className="fw-bold my-2 text-primary">87</h4>
                  <span className="fs-12 text-success">
                    <i className="ri-trending-up-line me-1"></i>+5 this month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card custom-card">
            <div className="card-body">
              <div className="d-flex align-items-start gap-3">
                <div className="flex-fill">
                  <span className="fs-13 fw-medium">Online Mentions</span>
                  <h4 className="fw-bold my-2 text-success">342</h4>
                  <span className="fs-12 text-success">
                    <i className="ri-trending-up-line me-1"></i>+12 this month
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card custom-card">
            <div className="card-body">
              <div className="d-flex align-items-start gap-3">
                <div className="flex-fill">
                  <span className="fs-13 fw-medium">Reviews</span>
                  <h4 className="fw-bold my-2 text-warning">4.8</h4>
                  <span className="fs-12 text-muted">Avg. Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card custom-card">
            <div className="card-body">
              <div className="d-flex align-items-start gap-3">
                <div className="flex-fill">
                  <span className="fs-13 fw-medium">Last Audit</span>
                  <h4 className="fw-bold my-2">2 days</h4>
                  <span className="fs-12 text-muted">ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Audits */}
      <div className="row">
        <div className="col-12">
          <div className="card custom-card">
            <div className="card-header">
              <h5 className="card-title">Recent Audits</h5>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Score</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dec 17, 2025</td>
                    <td>
                      <span className="badge bg-success">Completed</span>
                    </td>
                    <td>87</td>
                    <td>
                      <Link href="/audit-results" className="btn btn-sm btn-primary">
                        View
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>Dec 15, 2025</td>
                    <td>
                      <span className="badge bg-success">Completed</span>
                    </td>
                    <td>84</td>
                    <td>
                      <Link href="/audit-results" className="btn btn-sm btn-primary">
                        View
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
