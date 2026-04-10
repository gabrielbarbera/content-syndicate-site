import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { PageHeader } from "../components/layout/PageHeader";

export default function NotFoundPage() {
  return (
    <>
      <PageHeader title="Page Not Found" overline="404" />
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="text-8xl font-bold text-dark mb-4 font-display">404</p>
          <p className="text-lg text-gray-500 mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-dark font-bold rounded-full hover:bg-accent/90 transition-all"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
