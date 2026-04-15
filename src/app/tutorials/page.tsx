import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";

export default function TutorialsPage() {
  return (
    <>
      <PageIntro
        title="Tutorials"
        description="Guided educational materials for oxDNA documentation, OxView YouTube walkthroughs, and DNA origami simulation methods."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tutorials" }]}
      />

      <section className="section">
        <div className="container card-grid cols-3">
          <article className="card">
            <h3>OxDNA to Documentation</h3>
            <p>Core setup and reference documentation for simulation workflows and model assumptions.</p>
            <Link href="/tutorials/oxdna" className="btn btn-primary">Open Documentation</Link>
          </article>
          <article className="card">
            <h3>OxView for YouTube</h3>
            <p>Video-oriented walkthroughs focused on visualizing trajectories and communicating results.</p>
            <Link href="/tutorials/oxview" className="btn btn-primary">Open OxView YouTube Page</Link>
          </article>
          <article className="card">
            <h3>How We Simulate DNA Origami</h3>
            <p>A practical process guide from parameter setup through trajectory analysis and reporting.</p>
            <Link href="/tutorials/how-we-simulate-dna-origami" className="btn btn-primary">Open Tutorial</Link>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container hero-media">
          <Image
            src="/references/tutorials.png"
            alt="Reference screenshot for tutorial page layout"
            width={1162}
            height={768}
          />
        </div>
      </section>
    </>
  );
}
