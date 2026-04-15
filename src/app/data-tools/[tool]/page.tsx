import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";

type ToolProfile = {
  name: string;
  description: string;
  details: Array<{
    title: string;
    detail: string;
  }>;
  externalHref?: string;
};

const toolProfiles: Record<string, ToolProfile> = {
  nanobase: {
    name: "Nanobase",
    description: "Data resources and project context for DNA nanotechnology workflows.",
    details: [
      {
        title: "Resource Overview",
        detail: "Centralized reference context for sequence and simulation planning.",
      },
      {
        title: "Workflow Fit",
        detail: "Supports setup and interpretation stages in broader oxDNA pipelines.",
      },
      {
        title: "Data Practices",
        detail: "Designed for reproducible data use across collaborative projects.",
      },
    ],
  },
  tacoxdna: {
    name: "Tacoxdna",
    description: "Tooling support for simulation preparation and workflow execution.",
    details: [
      {
        title: "Preparation Support",
        detail: "Assists with organizing simulation inputs and execution context.",
      },
      {
        title: "Pipeline Integration",
        detail: "Fits into sequence-to-simulation and post-processing pipelines.",
      },
      {
        title: "Usage Guidance",
        detail: "Complements tutorial-driven onboarding for practical use.",
      },
    ],
  },
  oxdna: {
    name: "OxDNA",
    description: "Core simulation engine used for coarse-grained DNA and RNA studies.",
    details: [
      {
        title: "Simulation Core",
        detail: "Run sequence-aware, coarse-grained models for structural and kinetic studies.",
      },
      {
        title: "Research Reliability",
        detail: "Supports reproducible scientific workflows and comparative validation.",
      },
      {
        title: "Community Ecosystem",
        detail: "Backed by shared documentation and educational materials.",
      },
    ],
    externalHref: "http://oxdna.org",
  },
  ppview: {
    name: "ppview",
    description: "Visualization-focused support for trajectory inspection and reporting.",
    details: [
      {
        title: "Visual Inspection",
        detail: "Review simulation states and identify structural patterns quickly.",
      },
      {
        title: "Communication",
        detail: "Prepare results for team discussions, reports, and publication figures.",
      },
      {
        title: "Workflow Alignment",
        detail: "Pairs well with OxView and tutorial-based analysis guidance.",
      },
    ],
  },
  cogli2: {
    name: "cogli2",
    description: "Auxiliary tooling for workflow support and model interpretation.",
    details: [
      {
        title: "Tooling Extension",
        detail: "Adds support capabilities around simulation and analysis tasks.",
      },
      {
        title: "Model Context",
        detail: "Helps bridge parameter understanding with practical workflow decisions.",
      },
      {
        title: "Research Utility",
        detail: "Contributes to reproducible and collaborative project execution.",
      },
    ],
  },
};

type ToolSlug = keyof typeof toolProfiles;

type ToolPageProps = {
  params: Promise<{ tool: string }>;
};

export function generateStaticParams() {
  return Object.keys(toolProfiles).map((tool) => ({ tool }));
}

export default async function DataToolDetailPage({ params }: ToolPageProps) {
  const { tool } = await params;

  if (!(tool in toolProfiles)) {
    notFound();
  }

  const profile = toolProfiles[tool as ToolSlug];

  return (
    <>
      <PageIntro
        title={profile.name}
        description={profile.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Data & Tools", href: "/data-tools" },
          { label: profile.name },
        ]}
      />

      <section className="section">
        <div className="container card-grid cols-3">
          {profile.details.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container button-row">
          {profile.externalHref ? (
            <a href={profile.externalHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit Official Resource
            </a>
          ) : null}
          <Link href="/contact-us" className="btn btn-link">
            Request Access Details
          </Link>
        </div>
      </section>
    </>
  );
}
