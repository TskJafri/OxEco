import { PageIntro } from "@/components/PageIntro";

const profiles = [
  {
    name: "Workflow Design",
    focus: "Tutorial and curriculum design for computational DNA nanotechnology.",
  },
  {
    name: "Community Integration",
    focus: "Coordination with open-source contributors and shared standards.",
  },
  {
    name: "Applied Projects",
    focus: "Case studies connecting simulations to practical molecular programming tasks.",
  },
];

export default function GroupBPage() {
  return (
    <>
      <PageIntro
        title="Group B"
        description="Application-focused members developing workflows, education resources, and collaboration paths."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Members", href: "/members/group-a" },
          { label: "Group B" },
        ]}
      />
      <section className="section">
        <div className="container card-grid cols-3">
          {profiles.map((profile) => (
            <article key={profile.name} className="card">
              <h3>{profile.name}</h3>
              <p>{profile.focus}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
