import Link from "next/link";
import Image from "next/image";
import { DocIcon, DownloadIcon, ToolIcon } from "@/components/Icons";

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
              reproducible methods. Explore tools, release notes, tutorials, and citation
              guidance in one coherent research portal.
            </p>
            <div className="button-row" style={{ marginTop: "1.4rem" }}>
              <Link href="/downloads" className="btn btn-cta">
                Download Tools
              </Link>
              <Link href="/data-tools" className="btn btn-primary">
                Explore Data & Tools
              </Link>
            </div>
          </div>
          <figure className="hero-media">
            <Image
              src="/references/home.png"
              alt="Reference layout showing oxDNA ecosystem homepage"
              width={1162}
              height={768}
              priority
            />
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
              <Link href="/data-tools" className="btn btn-link">Launch Tool</Link>
            </article>
            <article className="card">
              <div className="icon-row">
                <DocIcon />
                <span>Documentation</span>
              </div>
              <h3>Developer and User Docs</h3>
              <p>Access API references, model assumptions, and reproducibility notes.</p>
              <a className="btn btn-link" href="https://example.com/docs" target="_blank" rel="noopener noreferrer">Open Documentation</a>
            </article>
            <article className="card">
              <div className="icon-row">
                <DownloadIcon />
                <span>Downloads</span>
              </div>
              <h3>Binary and Source Releases</h3>
              <p>Choose platform-specific builds, source distributions, and legacy versions.</p>
              <Link href="/downloads" className="btn btn-link">Go to Downloads</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Latest Releases</p>
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
              <Link href="/news/release-notes" className="btn btn-primary">
                Full Release Notes
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
                  <a href="https://example.com/docs" target="_blank" rel="noopener noreferrer">Setup and model reference guides</a>
                </span>
              </li>
              <li>
                <strong>Downloads</strong>
                <span><Link href="/downloads">Versioned installers and source archives</Link></span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Member Groups</p>
          <div className="card-grid">
            <article className="card">
              <h3>Group A · Simulation Methods</h3>
              <p>
                Focused on model validation, performance studies, and benchmarking for
                DNA nanotechnology simulations.
              </p>
              <Link href="/members/group-a" className="btn btn-link">View Group A</Link>
            </article>
            <article className="card">
              <h3>Group B · Applications and Workflows</h3>
              <p>
                Focused on analysis pipelines, educational workflows, and open-source
                community collaboration.
              </p>
              <Link href="/members/group-b" className="btn btn-link">View Group B</Link>
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
