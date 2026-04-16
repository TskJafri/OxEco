import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";

type MemberProfile = {
  name: string;
  description: string;
  focus: Array<{
    title: string;
    detail: string;
  }>;
};

const memberProfiles = {
  "petr-sulc": {
    name: "Petr Sulc",
    description: "Coarse-grained DNA model development, simulation methods, and reproducibility-focused workflows.",
    focus: [
      {
        title: "Model Development",
        detail: "Design and refinement of coarse-grained interaction models for DNA nanostructures.",
      },
      {
        title: "Simulation Quality",
        detail: "Validation practices for robust and reproducible computational experiments.",
      },
      {
        title: "Method Integration",
        detail: "Connecting simulation pipelines with analysis and publication standards.",
      },
    ],
  },
  "lorenzo-rovigatti": {
    name: "Lorenzo Rovigatti",
    description: "Simulation software architecture, performance optimization, and toolchain reliability.",
    focus: [
      {
        title: "Engine Performance",
        detail: "Optimization of simulation throughput and hardware-aware execution workflows.",
      },
      {
        title: "Software Reliability",
        detail: "Versioning, stability checks, and reproducible release engineering practices.",
      },
      {
        title: "Workflow Design",
        detail: "Clear runbook patterns that support research and teaching use cases.",
      },
    ],
  },
  "grigory-tikhomirov": {
    name: "Grigory Tikhomirov",
    description: "DNA origami simulation analysis, multiscale modeling, and structural diagnostics.",
    focus: [
      {
        title: "Origami Modeling",
        detail: "Simulation strategies tailored to DNA origami assembly and stability studies.",
      },
      {
        title: "Benchmark Studies",
        detail: "Comparative analysis across parameter sets and design variants.",
      },
      {
        title: "Structural Diagnostics",
        detail: "Interpretation workflows for trajectories and conformation quality.",
      },
    ],
  },
  "tom-ouldridge": {
    name: "Tom Ouldridge",
    description: "Molecular programming theory, kinetic analysis, and pathway-level modeling.",
    focus: [
      {
        title: "Kinetic Modeling",
        detail: "Rate-focused approaches for DNA interaction pathways and reaction systems.",
      },
      {
        title: "Theory to Practice",
        detail: "Translating theoretical constructs into simulation-ready experiments.",
      },
      {
        title: "Research Guidance",
        detail: "Methodological patterns for reproducible molecular programming projects.",
      },
    ],
  },
  "carlos-castros": {
    name: "Carlos Castros",
    description: "Application-facing simulation workflows and cross-lab reproducibility practices.",
    focus: [
      {
        title: "Applied Pipelines",
        detail: "End-to-end simulation workflows for practical DNA nanotechnology studies.",
      },
      {
        title: "Collaboration Workflows",
        detail: "Shared standards for multi-team analysis and reporting.",
      },
      {
        title: "Reproducibility",
        detail: "Methods for consistent results across environments and datasets.",
      },
    ],
  },
  "megan-engel": {
    name: "Megan Engel",
    description: "Educational resources, onboarding guides, and community-facing tutorial quality.",
    focus: [
      {
        title: "Tutorial Quality",
        detail: "Clear educational materials for new users entering oxDNA workflows.",
      },
      {
        title: "Community Enablement",
        detail: "Resources that improve collaboration and onboarding across contributors.",
      },
      {
        title: "Documentation Design",
        detail: "Maintaining clear structure and language across learning materials.",
      },
    ],
  },
} satisfies Record<string, MemberProfile>;

type MemberSlug = keyof typeof memberProfiles;

type MemberPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(memberProfiles).map((slug) => ({ slug }));
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { slug } = await params;

  if (!(slug in memberProfiles)) {
    notFound();
  }

  const member = memberProfiles[slug as MemberSlug];

  return (
    <>
      <PageIntro
        title={member.name}
        description={member.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Members" },
          { label: member.name },
        ]}
      />

      <section className="section">
        <div className="container card-grid cols-3">
          {member.focus.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link href="/contact-us" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
