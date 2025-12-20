import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <section className="py-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-1 fw-bold">404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="mb-4">
                Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
              <Link href="/" className="btn-round-two">
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
