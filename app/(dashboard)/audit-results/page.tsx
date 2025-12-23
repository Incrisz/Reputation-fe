import Link from "next/link";

export default function AuditResultsPage() {
  return (
    <div className="container-fluid page-container">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="page-title fw-bold mb-0">Audit Results</h1>
          <p className="text-muted">Tech Solutions Inc - December 19, 2025</p>
        </div>
        <div>
          <button className="btn btn-secondary me-2">
            <i className="ri-download-line me-1"></i>Download PDF
          </button>
          <Link href="/start-audit" className="btn btn-primary">
            <i className="ri-refresh-line me-1"></i>New Audit
          </Link>
        </div>
      </div>

      {/* Charts Row */}
      <div className="row mb-4">
        {/* Overall Score */}
        <div className="col-lg-3">
          <div className="card custom-card text-center">
            <div className="card-body p-5">
              <h5 className="fw-semibold text-muted mb-3">Overall Score</h5>
              <div
                className="position-relative mx-auto d-flex align-items-center justify-content-center"
                style={{ width: "150px", height: "150px" }}
              >
                <div
                  className="rounded-circle border border-4 border-primary d-flex align-items-center justify-content-center"
                  style={{ width: "120px", height: "120px" }}
                >
                  <span className="fs-1 fw-bold text-primary">87</span>
                </div>
              </div>
              <h3 className="fw-bold text-primary mt-3">87/100</h3>
              <span className="badge bg-success mt-2">Excellent</span>
            </div>
          </div>
        </div>

        {/* Visibility Breakdown */}
        <div className="col-lg-3">
          <div className="card custom-card">
            <div className="card-header">
              <h5 className="card-title">Visibility Breakdown</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Website</span>
                  <span>30%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-primary" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Social Media</span>
                  <span>25%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-warning" style={{ width: "25%" }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Reviews</span>
                  <span>25%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-success" style={{ width: "25%" }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between mb-1">
                  <span>Local Listings</span>
                  <span>20%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-danger" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Scores */}
        <div className="col-lg-3">
          <div className="card custom-card">
            <div className="card-header">
              <h5 className="card-title">Category Scores</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>SEO</span>
                  <span className="text-success">92%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-success" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Social</span>
                  <span className="text-warning">78%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-warning" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>Reviews</span>
                  <span className="text-success">85%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-success" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between mb-1">
                  <span>Mobile</span>
                  <span className="text-success">91%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div className="progress-bar bg-success" style={{ width: "91%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Distribution */}
        <div className="col-lg-3">
          <div className="card custom-card">
            <div className="card-header">
              <h5 className="card-title">Platform Distribution</h5>
            </div>
            <div className="card-body">
              <div className="mb-3 d-flex align-items-center gap-2">
                <span
                  className="badge bg-primary"
                  style={{ width: "12px", height: "12px" }}
                ></span>
                <span>Google: 40%</span>
              </div>
              <div className="mb-3 d-flex align-items-center gap-2">
                <span
                  className="badge bg-info"
                  style={{ width: "12px", height: "12px" }}
                ></span>
                <span>Facebook: 25%</span>
              </div>
              <div className="mb-3 d-flex align-items-center gap-2">
                <span
                  className="badge bg-danger"
                  style={{ width: "12px", height: "12px" }}
                ></span>
                <span>Yelp: 20%</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <span
                  className="badge bg-warning"
                  style={{ width: "12px", height: "12px" }}
                ></span>
                <span>Other: 15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="row">
        <div className="col-lg-12">
          <div className="card custom-card">
            <div className="card-header">
              <h5 className="card-title">Detailed Metrics</h5>
            </div>
            <div className="card-body">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Score</th>
                    <th>Status</th>
                    <th>Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Website SEO</td>
                    <td>92</td>
                    <td>
                      <span className="badge bg-success">Excellent</span>
                    </td>
                    <td>Maintain current optimization strategies</td>
                  </tr>
                  <tr>
                    <td>Social Media Presence</td>
                    <td>78</td>
                    <td>
                      <span className="badge bg-warning">Good</span>
                    </td>
                    <td>Increase posting frequency and engagement</td>
                  </tr>
                  <tr>
                    <td>Online Reviews</td>
                    <td>85</td>
                    <td>
                      <span className="badge bg-success">Excellent</span>
                    </td>
                    <td>Continue encouraging customer reviews</td>
                  </tr>
                  <tr>
                    <td>Local Listings</td>
                    <td>88</td>
                    <td>
                      <span className="badge bg-success">Excellent</span>
                    </td>
                    <td>Ensure all information is up-to-date</td>
                  </tr>
                  <tr>
                    <td>Mobile Optimization</td>
                    <td>91</td>
                    <td>
                      <span className="badge bg-success">Excellent</span>
                    </td>
                    <td>Mobile experience is optimal</td>
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
