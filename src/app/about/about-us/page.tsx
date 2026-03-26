import { PageIntro } from "@/components/PageIntro";

export default function AboutUsPage() {
  return (
    <>
      <PageIntro
        title="About Us"
        description="The oxDNA ecosystem supports open, reproducible DNA nanotechnology research through shared models, software, and community practices."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/about-us" },
          { label: "About Us" },
        ]}
      />

      <section className="section">
        <div className="container card-grid">
          <article className="card">
            <h3>Mission</h3>
            <p>
              Maintain accessible and reliable simulation tools for molecular programming,
              with a focus on scientific clarity rather than marketing language.
            </p>
          </article>
          <article className="card">
            <h3>Research Focus</h3>
            <p>
              DNA self-assembly, strand displacement, thermodynamic validation, and
              visualization of coarse-grained simulation outputs.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
