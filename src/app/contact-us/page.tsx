import { PageIntro } from "@/components/PageIntro";

export default function ContactUsPage() {
  return (
    <>
      <PageIntro
        title="Contact Us"
        description="Contact channels for collaboration, tool support, and scientific coordination."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <section className="section">
        <div className="container card-grid">
          <article className="card">
            <h3>General Inquiries</h3>
            <p>research@oxeco.example</p>
          </article>
          <article className="card">
            <h3>Technical Support</h3>
            <p>support@oxeco.example</p>
          </article>
          <article className="card">
            <h3>Collaboration Requests</h3>
            <p>collab@oxeco.example</p>
          </article>
        </div>
      </section>
    </>
  );
}
