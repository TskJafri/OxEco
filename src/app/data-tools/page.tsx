import Link from "next/link";
import Image from "next/image";
import { DocIcon, DownloadIcon, ToolIcon } from "@/components/Icons";
import { PageIntro } from "@/components/PageIntro";

export default function DataToolsPage() {
  return (
    <>
      <PageIntro
        title="Data & Tools"
        description="Core simulation and analysis resources for DNA nanotechnology research workflows."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Data & Tools" }]}
      />

      <section className="section">
        <div className="container card-grid cols-3">
          <article className="card">
            <div className="icon-row">
              <ToolIcon />
              <span>Simulation</span>
            </div>
            <h3>oxDNA Engine</h3>
            <p>Run sequence-aware simulations with reproducible settings and benchmark presets.</p>
            <Link href="/downloads" className="btn btn-primary">Download</Link>
          </article>
          <article className="card">
            <div className="icon-row">
              <DownloadIcon />
              <span>Analysis</span>
            </div>
            <h3>Analysis Scripts</h3>
            <p>Post-processing scripts for trajectories, structural metrics, and reporting outputs.</p>
            <a href="https://example.com/scripts" target="_blank" rel="noopener noreferrer" className="btn btn-link">Open Script Index</a>
          </article>
          <article className="card">
            <div className="icon-row">
              <DocIcon />
              <span>Reference</span>
            </div>
            <h3>API and Model Docs</h3>
            <p>Technical documentation for model assumptions, command-line usage, and APIs.</p>
            <a href="https://example.com/api" target="_blank" rel="noopener noreferrer" className="btn btn-link">Open API Docs</a>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container hero-media">
          <Image
            src="/references/downloads-tools.png"
            alt="Reference screenshot for downloads and tools layout"
            width={1162}
            height={768}
          />
        </div>
      </section>
    </>
  );
}
