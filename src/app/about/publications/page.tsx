import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";

const papers = [
  {
    title: "Sequence-dependent coarse-grained models for DNA nanostructure stability",
    journal: "J. Comput. Nanotech.",
    date: "2025",
  },
  {
    title: "Benchmarking oxDNA simulation workflows for reproducible molecular programming",
    journal: "Comput. Methods in Biology",
    date: "2024",
  },
  {
    title: "Visualization-assisted diagnostics for strand displacement pathways",
    journal: "Nano Letters",
    date: "2024",
  },
];

const events = [
  "OxDNA release workshop at Molecular Programming Summit",
  "Community sprint on analysis pipelines",
  "Open tutorial session for early-career researchers",
];

export default function PublicationsPage() {
  return (
    <>
      <PageIntro
        title="Publications"
        description="Peer-reviewed research outputs, software papers, and scientific updates from the oxDNA ecosystem."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/about-us" },
          { label: "Publications" },
        ]}
      />

      <section className="section">
        <div className="container card-grid cols-3">
          {papers.map((paper) => (
            <article key={paper.title} className="card">
              <p className="eyebrow">{paper.journal}</p>
              <h3>{paper.title}</h3>
              <p>{paper.date}</p>
              <a href="https://example.com/doi" target="_blank" rel="noopener noreferrer" className="btn btn-link">
                View DOI
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="card">
            <p className="eyebrow">News & Events</p>
            <ul className="meta-list">
              {events.map((event) => (
                <li key={event}>
                  <strong>{event}</strong>
                  <span>Details and schedules are maintained through the publications and project updates channels.</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-media">
            <Image
              src="/references/publications.png"
              alt="Reference screenshot for publications layout"
              width={1162}
              height={768}
            />
          </div>
        </div>
      </section>
    </>
  );
}
