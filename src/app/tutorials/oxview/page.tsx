import { PageIntro } from "@/components/PageIntro";

const youtubeTutorials = [
  {
    title: "OxView setup and first visualization",
    description: "Start with workspace setup and basic trajectory navigation in OxView.",
    href: "https://www.youtube.com/results?search_query=oxview+setup+tutorial",
  },
  {
    title: "Trajectory analysis workflows in OxView",
    description: "Walk through frame inspection, comparison, and annotation for analysis.",
    href: "https://www.youtube.com/results?search_query=oxdna+trajectory+analysis+oxview",
  },
  {
    title: "Figure and animation export with OxView",
    description: "Learn figure-ready styling and video export best practices.",
    href: "https://www.youtube.com/results?search_query=oxview+export+animation",
  },
];

export default function OxViewTutorialsPage() {
  return (
    <>
      <PageIntro
        title="OxView YouTube Tutorials"
        description="Video-focused lessons for inspecting structures and communicating simulation outcomes with OxView."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Tutorials", href: "/tutorials" },
          { label: "OxView YouTube" },
        ]}
      />
      <section className="section">
        <div className="container card-grid">
          {youtubeTutorials.map((tutorial) => (
            <article key={tutorial.title} className="card">
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <a href={tutorial.href} target="_blank" rel="noopener noreferrer" className="btn btn-link">
                Watch on YouTube
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
