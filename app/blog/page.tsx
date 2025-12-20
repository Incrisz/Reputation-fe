import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | BizVisibility AI - Online Visibility Tips & AI Insights",
  description:
    "Expert articles on improving online visibility, AI-powered reputation management, SEO strategies, and digital presence optimization from the BizVisibility AI team.",
};

const blogPosts = [
  {
    image: "/images/blog/blog-two1.jpg",
    category: "Visibility",
    title: "Launch a 90-day visibility sprint with AI tasks.",
    comments: 3,
  },
  {
    image: "/images/blog/blog-two2.jpg",
    category: "Local SEO",
    title: "Fix listings and reviews to win map packs.",
    comments: 9,
  },
  {
    image: "/images/blog/blog-two3.jpg",
    category: "Social Proof",
    title: "Turn reviews into rankings with structured data.",
    comments: 6,
  },
  {
    image: "/images/blog/blog-two4.jpg",
    category: "Product Updates",
    title: "What changed in the latest scoring release.",
    comments: 3,
  },
  {
    image: "/images/blog/blog-two5.jpg",
    category: "Analytics",
    title: "Track the metrics that move your visibility score.",
    comments: 9,
  },
  {
    image: "/images/blog/blog-two6.jpg",
    category: "Automation",
    title: "Automate alerts for score drops and new reviews.",
    comments: 6,
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* Blog Section */}
      <section className="py-120">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="section-header-two">
                <h6>Our Blog</h6>
                <h2 className="title-animation">
                  Latest <span>Insights & Tips</span>
                </h2>
                <p>
                  Expert articles on improving online visibility, AI-powered reputation management,
                  and digital presence optimization.
                </p>
              </div>
            </div>
          </div>
          <div className="row row-gap-4 justify-content-center">
            {blogPosts.map((post, index) => (
              <div key={index} className="col-xl-4 col-lg-4 col-md-6">
                <div className="blogs-two-slide__item">
                  <div className="blog-img">
                    <Link href="/blog">
                      <Image src={post.image} alt="blog" width={400} height={300} />
                    </Link>
                    <span>{post.category}</span>
                  </div>
                  <div className="blog-text">
                    <ul>
                      <li>
                        <i className="material-symbols-outlined">account_circle</i> by Admin
                      </li>
                      <li>
                        <i className="material-symbols-outlined">forum</i> {post.comments} Comments
                      </li>
                    </ul>
                    <h5>
                      <Link href="/blog">{post.title}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
