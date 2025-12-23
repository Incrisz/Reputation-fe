import Link from "next/link";

export default function AuditHistoryPage() {
  return (
    <div className="container-fluid page-container">
      <h1 className="page-title fw-bold mb-4">Audit History</h1>

      <div className="card custom-card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="card-title">Previous Audits</h5>
          <Link href="/start-audit" className="btn btn-sm btn-primary">
            <i className="ri-add-line me-1"></i>New Audit
          </Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Business Name</th>
                  <th>Overall Score</th>
                  <th>SEO Score</th>
                  <th>Social Media</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dec 19, 2025</td>
                  <td>Tech Solutions Inc</td>
                  <td>
                    <strong>87</strong>
                  </td>
                  <td>92</td>
                  <td>78</td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
                  <td>
                    <Link href="/audit-results" className="btn btn-sm btn-primary me-1">
                      View
                    </Link>
                    <button className="btn btn-sm btn-secondary">
                      <i className="ri-download-line"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Dec 12, 2025</td>
                  <td>Tech Solutions Inc</td>
                  <td>
                    <strong>84</strong>
                  </td>
                  <td>88</td>
                  <td>75</td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
                  <td>
                    <Link href="/audit-results" className="btn btn-sm btn-primary me-1">
                      View
                    </Link>
                    <button className="btn btn-sm btn-secondary">
                      <i className="ri-download-line"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Dec 05, 2025</td>
                  <td>Tech Solutions Inc</td>
                  <td>
                    <strong>79</strong>
                  </td>
                  <td>85</td>
                  <td>68</td>
                  <td>
                    <span className="badge bg-success">Completed</span>
                  </td>
                  <td>
                    <Link href="/audit-results" className="btn btn-sm btn-primary me-1">
                      View
                    </Link>
                    <button className="btn btn-sm btn-secondary">
                      <i className="ri-download-line"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
