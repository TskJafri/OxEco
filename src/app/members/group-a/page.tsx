import { PageIntro } from "@/components/PageIntro";

const profiles = [
  {
    name: "Simulation Core",
    focus: "Model implementation, numerical methods, and performance testing.",
  },
  {
    name: "Validation Team",
    focus: "Cross-checking against experimental data and benchmarking protocols.",
  },
  {
    name: "Release Engineering",
    focus: "Versioning, CI validation, and reproducible artifact publication.",
  },
];

export default function GroupAPage() {
  return (
    <>
      <PageIntro
        title="Group A"
        description="Core simulation and validation contributors working on model quality and release reliability."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Members", href: "/members/group-a" },
          { label: "Group A" },
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
