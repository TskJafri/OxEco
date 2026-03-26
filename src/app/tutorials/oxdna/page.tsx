import { PageIntro } from "@/components/PageIntro";

const tutorials = [
  "Installing and validating the oxDNA environment",
  "Running your first simulation from sample input",
  "Interpreting trajectory outputs and sanity checks",
  "Batch execution for comparative experiments",
];

export default function OxDnaTutorialsPage() {
  return (
    <>
      <PageIntro
        title="OxDNA Tutorials"
        description="Step-by-step materials for simulation setup, reproducibility checks, and post-processing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tutorials", href: "/tutorials" },
          { label: "OxDNA Tutorials" },
        ]}
      />
      <section className="section">
        <div className="container card-grid">
          {tutorials.map((topic) => (
            <article key={topic} className="card">
              <h3>{topic}</h3>
              <p>Includes command examples, expected outputs, and interpretation notes.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
