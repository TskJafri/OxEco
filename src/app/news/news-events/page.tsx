import { PageIntro } from "@/components/PageIntro";

const items = [
  {
    title: "Molecular Programming Symposium",
    category: "Event",
    summary: "Upcoming workshop on reproducible DNA simulation workflows.",
  },
  {
    title: "Community Office Hours",
    category: "News",
    summary: "Monthly open call for troubleshooting model setup and analysis scripts.",
  },
  {
    title: "Tutorial Sprint",
    category: "Event",
    summary: "Hands-on session focused on oxView and publication-ready figures.",
  },
  {
    title: "Dataset Curation Update",
    category: "News",
    summary: "Updated benchmark datasets for common strand-displacement studies.",
  },
];

export default function NewsEventsPage() {
  return (
    <>
      <PageIntro
        title="News & Events"
        description="Academic updates, workshops, and community announcements related to the oxDNA ecosystem."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news/release-notes" },
          { label: "News & Events" },
        ]}
      />
      <section className="section">
        <div className="container card-grid cols-3">
          {items.map((item) => (
            <article key={item.title} className="card">
              <p className="eyebrow">{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
