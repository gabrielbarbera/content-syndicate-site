import { PageHeader } from "../components/layout/PageHeader";
import termsContent from "../content/terms-and-conditions.html?raw";
import SEO from "../components/SEO";

export default function TermsPage() {
  return (
    <>
      <SEO />
      <PageHeader title="Terms and Conditions" overline="Legal" />

      <section className="bg-white py-16 lg:py-20 border-b border-zinc-100">
        <div className="container px-6 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: termsContent }} />
          </div>
        </div>
      </section>
    </>
  );
}
