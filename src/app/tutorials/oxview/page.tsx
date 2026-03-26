import { PageIntro } from "@/components/PageIntro";

const tutorials = [
  "Loading trajectories and exploring structural frames",
  "Color mapping and annotation for publication figures",
  "Comparing trajectories across parameter sweeps",
  "Exporting snapshots and animation sequences",
];

export default function OxViewTutorialsPage() {
  return (
    <>
      <PageIntro
        title="OxView Tutorials"
        description="Visualization-focused lessons for inspecting structures and communicating simulation outcomes."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tutorials", href: "/tutorials" },
          { label: "OxView Tutorials" },
        ]}
      />
      <section className="section">
        <div className="container card-grid">
          {tutorials.map((topic) => (
            <article key={topic} className="card">
              <h3>{topic}</h3>
              <p>Includes interface walkthroughs and practical recommendations for clear figures.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
