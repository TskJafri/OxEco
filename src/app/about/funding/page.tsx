import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";

const partners = [
  "Academic Grants Consortium",
  "Molecular Programming Research Network",
  "Open Simulation Infrastructure Program",
];

export default function FundingPage() {
  return (
    <>
      <PageIntro
        title="Funding"
        description="Funding acknowledgements and institutional support for the oxDNA ecosystem and associated software maintenance."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about/about-us" },
          { label: "Funding" },
        ]}
      />

      <section className="section">
        <div className="container split">
          <div className="card">
            <h3>Acknowledgements</h3>
            <p>
              We acknowledge multi-institutional support that enables long-term software
              stewardship, release engineering, and training resources for the community.
            </p>
            <ul className="meta-list">
              {partners.map((partner) => (
                <li key={partner}>
                  <strong>{partner}</strong>
                  <span>Support category: Research infrastructure and open-source maintenance</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-media">
            <Image
              src="/references/about-funding.png"
              alt="Reference screenshot for funding and tools page design"
              width={1162}
              height={768}
            />
          </div>
        </div>
      </section>
    </>
  );
}
