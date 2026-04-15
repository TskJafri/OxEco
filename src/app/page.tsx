import Link from "next/link";
import { DocIcon, ToolIcon } from "@/components/Icons";
import { OxViewEmbed } from "@/components/OxViewEmbed";

export default function Home() {
  const releases = [
    {
      version: "v3.4",
      date: "March 2026",
      notes: "Improved GPU integration and expanded coarse-grained DNA model benchmarks.",
    },
    {
      version: "v3.3",
      date: "December 2025",
      notes: "Updated visualization export pipeline and improved simulation stability checks.",
    },
    {
      version: "v3.2",
      date: "August 2025",
      notes: "Added parameter calibration templates for molecular programming workflows.",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="container hero">
          <div>
            <p className="eyebrow">Open Scientific Infrastructure</p>
            <h1>The oxDNA Research Ecosystem</h1>
            <p>
              A shared workspace for DNA nanotechnology simulation, visualization, and
              reproducible methods. Explore tools, publications, tutorials, and citation
              guidance in one coherent research portal.
            </p>
            <div className="button-row" style={{ marginTop: "1.4rem" }}>
              <Link href="/about/publications" className="btn btn-cta">
                View Publications
              </Link>
              <Link href="/data-tools" className="btn btn-primary">
                Explore Data & Tools
              </Link>
            </div>
          </div>
          <figure className="hero-media">
            <OxViewEmbed />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Featured Tools</p>
          <div className="card-grid cols-3">
            <article className="card">
              <div className="icon-row">
                <ToolIcon />
                <span>Simulation</span>
              </div>
              <h3>oxDNA Simulation Suite</h3>
              <p>Run large-scale DNA and RNA coarse-grained simulations with reproducible inputs.</p>
              <Link href="/data-tools/oxdna" className="btn btn-link">Open oxDNA</Link>
            </article>
            <article className="card">
              <div className="icon-row">
                <DocIcon />
                <span>Tools</span>
              </div>
              <h3>Data & Tools Directory</h3>
              <p>Open Nanobase, Tacoxdna, OxDNA, ppview, and cogli2 from one centralized hub.</p>
              <Link href="/data-tools" className="btn btn-link">Browse Data & Tools</Link>
            </article>
            <article className="card">
              <div className="icon-row">
                <DocIcon />
                <span>Publications</span>
              </div>
              <h3>Publications and Citations</h3>
              <p>Review papers, software citations, and reproducibility references for oxDNA research.</p>
              <Link href="/about/publications" className="btn btn-link">Open Publications</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Latest Updates</p>
            <ul className="meta-list">
              {releases.map((release) => (
                <li key={release.version}>
                  <strong>
                    {release.version} · {release.date}
                  </strong>
                  <span>{release.notes}</span>
                </li>
              ))}
            </ul>
            <div className="button-row" style={{ marginTop: "1rem" }}>
              <Link href="/about/publications" className="btn btn-primary">
                See Publication Updates
              </Link>
            </div>
          </div>
          <aside className="card">
            <p className="eyebrow">Quick Links</p>
            <ul className="meta-list">
              <li>
                <strong>GitHub</strong>
                <span>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Repository and issue tracking</a>
                </span>
              </li>
              <li>
                <strong>Documentation</strong>
                <span>
                  <Link href="/tutorials/oxdna">Setup and model reference guides</Link>
                </span>
              </li>
              <li>
                <strong>Publications</strong>
                <span><Link href="/about/publications">Papers and citation references</Link></span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Members</p>
          <div className="card-grid cols-3">
            <article className="card">
              <h3>Petr Sulc&apos;s</h3>
              <p>Coarse-grained DNA modeling, simulation methods, and computational validation workflows.</p>
              <Link href="/members/petr-sulc" className="btn btn-link">View Profile</Link>
            </article>
            <article className="card">
              <h3>Lorenzo Rovigatti&apos;s</h3>
              <p>Simulation software architecture, high-performance workflows, and community tooling.</p>
              <Link href="/members/lorenzo-rovigatti" className="btn btn-link">View Profile</Link>
            </article>
            <article className="card">
              <h3>Grigory Tikhomirov</h3>
              <p>DNA origami design studies, model benchmarking, and multiscale simulation strategies.</p>
              <Link href="/members/grigory-tikhomirov" className="btn btn-link">View Profile</Link>
            </article>
            <article className="card">
              <h3>Tom Ouldridge</h3>
              <p>Molecular programming theory, kinetics models, and robust pathway analysis.</p>
              <Link href="/members/tom-ouldridge" className="btn btn-link">View Profile</Link>
            </article>
            <article className="card">
              <h3>Carlos Castros</h3>
              <p>Applied simulation pipelines and cross-lab reproducibility for DNA nanotechnology.</p>
              <Link href="/members/carlos-castros" className="btn btn-link">View Profile</Link>
            </article>
            <article className="card">
              <h3>Megan Engel</h3>
              <p>Education-facing tutorials, onboarding material, and community documentation quality.</p>
              <Link href="/members/megan-engel" className="btn btn-link">View Profile</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card" style={{ background: "#ffffff" }}>
          <p className="eyebrow">Cite Us</p>
          <h3 style={{ marginBottom: "0.65rem" }}>Citation instructions</h3>
          <p>
            Cite both software releases and associated publications to support reproducible
            computational research in DNA nanotechnology.
          </p>
          <div className="button-row">
            <Link href="/cite-us" className="btn btn-primary">Open Citation Guide</Link>
          </div>
        </div>
      </section>
    </>
  );
}
