import { PageIntro } from "@/components/PageIntro";

const bibtex = `@article{oxdna2026,
  title={oxDNA Ecosystem: Reproducible DNA Nanotechnology Simulation Infrastructure},
  author={Contributors, oxDNA Ecosystem},
  journal={Journal of Molecular Programming},
  year={2026},
  doi={10.0000/example-doi}
}`;

export default function CiteUsPage() {
  return (
    <>
      <PageIntro
        title="Cite Us"
        description="Citation instructions for software releases, model references, and associated peer-reviewed publications."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cite Us" }]}
      />
      <section className="section">
        <div className="container card-grid">
          <article className="card">
            <h3>How to Cite</h3>
            <p>
              Cite both the oxDNA software release used in your study and the core
              model publication to ensure reproducibility and proper attribution.
            </p>
          </article>
          <article className="card">
            <h3>BibTeX Example</h3>
            <pre className="code-block">{bibtex}</pre>
          </article>
        </div>
      </section>
    </>
  );
}
