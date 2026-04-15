import Link from "next/link";
import Image from "next/image";
import { DocIcon, ToolIcon } from "@/components/Icons";
import { PageIntro } from "@/components/PageIntro";

const tools = [
  { label: "Nanobase", href: "/data-tools/nanobase" },
  { label: "Tacoxdna", href: "/data-tools/tacoxdna" },
  { label: "OxDNA", href: "/data-tools/oxdna" },
  { label: "ppview", href: "/data-tools/ppview" },
  { label: "cogli2", href: "/data-tools/cogli2" },
];

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
              <span>Directory</span>
            </div>
            <h3>Data & Tools Directory</h3>
            <p>Browse all current simulation and analysis resources from one index.</p>
            <ul className="meta-list">
              {tools.map((tool) => (
                <li key={tool.label}>
                  <strong>
                    <Link href={tool.href}>{tool.label}</Link>
                  </strong>
                </li>
              ))}
            </ul>
          </article>
          <article className="card">
            <div className="icon-row">
              <DocIcon />
              <span>Documentation</span>
            </div>
            <h3>OxDNA Documentation</h3>
            <p>Technical references for model assumptions, command-line usage, and workflows.</p>
            <Link href="/tutorials/oxdna" className="btn btn-link">Open Documentation Hub</Link>
          </article>
          <article className="card">
            <div className="icon-row">
              <DocIcon />
              <span>Official Site</span>
            </div>
            <h3>oxdna.org</h3>
            <p>Visit the official website for project updates and external resources.</p>
            <a href="http://oxdna.org" target="_blank" rel="noopener noreferrer" className="btn btn-link">Open http://oxdna.org</a>
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
