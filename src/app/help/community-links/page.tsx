import { PageIntro } from "@/components/PageIntro";

const links = [
  { label: "GitHub Organization", href: "https://github.com/" },
  { label: "Issue Tracker", href: "https://github.com/issues" },
  { label: "Documentation Portal", href: "https://example.com/docs" },
  { label: "Community Forum", href: "https://example.com/forum" },
];

export default function CommunityLinksPage() {
  return (
    <>
      <PageIntro
        title="Community Links"
        description="Open-source channels and community resources for collaboration and technical support."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Help", href: "/help/faq" },
          { label: "Community Links" },
        ]}
      />
      <section className="section">
        <div className="container card-grid">
          {links.map((link) => (
            <article key={link.label} className="card">
              <h3>{link.label}</h3>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-link">
                Open Link
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
