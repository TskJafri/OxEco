import { PageIntro } from "@/components/PageIntro";

const documentationTopics = [
  "Installing and validating the oxDNA environment",
  "Running your first simulation from sample input",
  "Interpreting trajectory outputs and sanity checks",
  "Batch execution for comparative experiments",
];

export default function OxDnaTutorialsPage() {
  return (
    <>
      <PageIntro
        title="OxDNA Documentation"
        description="Reference-oriented materials for simulation setup, reproducibility checks, and post-processing workflows."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tutorials", href: "/tutorials" },
          { label: "OxDNA Documentation" },
        ]}
      />
      <section className="section">
        <div className="container card-grid">
          {documentationTopics.map((topic) => (
            <article key={topic} className="card">
              <h3>{topic}</h3>
              <p>Includes command examples, expected outputs, and interpretation notes.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <a href="http://oxdna.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit Official Documentation
          </a>
        </div>
      </section>
    </>
  );
}
