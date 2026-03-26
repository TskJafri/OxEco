import { PageIntro } from "@/components/PageIntro";

const packages = [
  { name: "oxDNA macOS Build", kind: "Binary", notes: "Apple Silicon and Intel support", cta: "Download" },
  { name: "oxDNA Linux Build", kind: "Binary", notes: "CUDA-ready build with CLI utilities", cta: "Download" },
  { name: "Source Distribution", kind: "Source", notes: "CMake project with sample configs", cta: "Get Source" },
  { name: "Legacy Versions", kind: "Archive", notes: "Previous validated releases", cta: "Browse" },
];

export default function DownloadsPage() {
  return (
    <>
      <PageIntro
        title="Downloads"
        description="Versioned binaries, source packages, and archived releases for reproducible research setups."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Downloads" }]}
      />

      <section className="section">
        <div className="container card-grid">
          {packages.map((pkg) => (
            <article className="card" key={pkg.name}>
              <p className="eyebrow">{pkg.kind}</p>
              <h3>{pkg.name}</h3>
              <p>{pkg.notes}</p>
              <a href="https://example.com/downloads" target="_blank" rel="noopener noreferrer" className="btn btn-cta">
                {pkg.cta}
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
