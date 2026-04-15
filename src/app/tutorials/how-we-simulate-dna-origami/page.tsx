import { PageIntro } from "@/components/PageIntro";

const simulationFlow = [
  {
    title: "1. Design Inputs",
    detail: "Define sequence constraints, geometry targets, and expected interaction patterns before running the model.",
  },
  {
    title: "2. Prepare Simulation Parameters",
    detail: "Set temperature windows, salt conditions, and run lengths to match the target DNA origami scenario.",
  },
  {
    title: "3. Execute and Monitor Runs",
    detail: "Track trajectory stability, convergence markers, and checkpoints to ensure reliable outcomes.",
  },
  {
    title: "4. Analyze and Report",
    detail: "Use post-processing and visualization workflows to summarize structural behavior and reproducibility evidence.",
  },
];

export default function DnaOrigamiSimulationTutorialPage() {
  return (
    <>
      <PageIntro
        title="How We Simulate DNA Origami"
        description="A practical end-to-end overview of how oxDNA workflows are used to configure, run, and validate DNA origami simulations."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tutorials", href: "/tutorials" },
          { label: "How We Simulate DNA Origami" },
        ]}
      />
      <section className="section">
        <div className="container card-grid cols-3">
          {simulationFlow.map((step) => (
            <article key={step.title} className="card">
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
