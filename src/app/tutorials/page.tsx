import Link from "next/link";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";

export default function TutorialsPage() {
  return (
    <>
      <PageIntro
        title="Tutorials"
        description="Guided educational materials for running simulations and visualizing results with oxDNA and oxView."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Tutorials" }]}
      />

      <section className="section">
        <div className="container card-grid">
          <article className="card">
            <h3>OxDNA Tutorials</h3>
            <p>Foundational and advanced tutorials covering setup, execution, and analysis workflows.</p>
            <Link href="/tutorials/oxdna" className="btn btn-primary">Open OxDNA Tutorials</Link>
          </article>
          <article className="card">
            <h3>OxView Tutorials</h3>
            <p>Visualization-focused tutorials for structural inspection and presentation-ready figures.</p>
            <Link href="/tutorials/oxview" className="btn btn-primary">Open OxView Tutorials</Link>
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
