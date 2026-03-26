import { PageIntro } from "@/components/PageIntro";

const notes = [
  {
    version: "v3.4",
    details: "Improved GPU kernels, cleaner logging, and stronger validation checks.",
  },
  {
    version: "v3.3",
    details: "Improved trajectory export compatibility for downstream analysis tools.",
  },
  {
    version: "v3.2",
    details: "Expanded parameter presets for common DNA origami simulation setups.",
  },
];

export default function ReleaseNotesPage() {
  return (
    <>
      <PageIntro
        title="Release Notes"
        description="Version history and key technical updates for oxDNA software components."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news/release-notes" },
          { label: "Release Notes" },
        ]}
      />
      <section className="section">
        <div className="container card-grid">
          {notes.map((note) => (
            <article key={note.version} className="card">
              <p className="eyebrow">{note.version}</p>
              <p>{note.details}</p>
              <a href="https://example.com/releases" target="_blank" rel="noopener noreferrer" className="btn btn-link">
                View full changelog
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
