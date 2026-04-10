import { PageHeader } from "../components/layout/PageHeader";
import privacyContent from "../content/privacy-policy.html?raw";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" overline="Legal" />

      <section className="bg-white py-16 lg:py-20 border-b border-zinc-100">
        <div className="container px-6 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: privacyContent }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
