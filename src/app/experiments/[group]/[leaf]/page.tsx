import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { experimentsGroups, type Block } from "@/lib/experiments-content";

type LeafPageProps = {
  params: Promise<{ group: string; leaf: string }>;
};

const INLINE_TOKEN = /(\*\*[^*]+\*\*|\[\d+(?:\s*[,\u2013-]\s*\d+)*\])/g;
const CITATION_PATTERN = /^\[\d+(?:\s*[,\u2013-]\s*\d+)*\]$/;

function parseCitationRange(inner: string): number[] {
  const out: number[] = [];
  const segments = inner.split(/\s*,\s*/);
  for (const seg of segments) {
    const rangeMatch = seg.match(/^(\d+)\s*[\u2013-]\s*(\d+)$/);
    if (rangeMatch) {
      const start = Number.parseInt(rangeMatch[1], 10);
      const end = Number.parseInt(rangeMatch[2], 10);
      if (!Number.isNaN(start) && !Number.isNaN(end) && end >= start) {
        for (let n = start; n <= end; n++) out.push(n);
      }
      continue;
    }
    const single = Number.parseInt(seg, 10);
    if (!Number.isNaN(single)) out.push(single);
  }
  return out;
}

function renderInline(text: string) {
  const parts = text.split(INLINE_TOKEN);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (CITATION_PATTERN.test(part)) {
      const numbers = parseCitationRange(part.slice(1, -1));
      if (numbers.length === 0) {
        return <span key={index}>{part}</span>;
      }
      return (
        <sup key={index} className="citation-marker">
          <span aria-hidden="true">[</span>
          {numbers.map((n, idx) => (
            <span key={`${n}-${idx}`}>
              <a href={`#ref-${n}`}>{n}</a>
              {idx < numbers.length - 1 ? <span aria-hidden="true">,</span> : null}
            </span>
          ))}
          <span aria-hidden="true">]</span>
        </sup>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function renderBlock(block: Block, index: number) {
  switch (block.kind) {
    case "p":
      return <p key={index}>{renderInline(block.text)}</p>;
    case "h":
      return (
        <h3 key={index} className="experiments-subheading">
          {renderInline(block.text)}
        </h3>
      );
    case "ol":
      return (
        <ol key={index} className="experiments-list experiments-ol">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    case "ul":
      return (
        <ul key={index} className="experiments-list experiments-ul">
          {block.items.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
  }
}

export function generateStaticParams() {
  return experimentsGroups.flatMap((group) =>
    group.leaves.map((leaf) => ({
      group: group.slug,
      leaf: leaf.slug,
    })),
  );
}

export default async function ExperimentsLeafPage({ params }: LeafPageProps) {
  const { group, leaf } = await params;

  const groupData = experimentsGroups.find((g) => g.slug === group);
  if (!groupData) {
    notFound();
  }

  const leafData = groupData.leaves.find((l) => l.slug === leaf);
  if (!leafData) {
    notFound();
  }

  return (
    <>
      <PageIntro
        title={leafData.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Experiments", href: "/experiments" },
          { label: groupData.label },
          { label: leafData.title },
        ]}
      />

      <section className="section">
        <div className="container experiments-article">
          <article className="prose">
            {leafData.blocks.map((block, index) => renderBlock(block, index))}

            {leafData.references && leafData.references.length > 0 ? (
              <>
                <h2 className="references-heading">References</h2>
                <ol className="references-list">
                  {leafData.references.map((reference, index) => (
                    <li key={index} id={`ref-${index + 1}`}>
                      {reference}
                    </li>
                  ))}
                </ol>
              </>
            ) : null}
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container button-row">
          <Link href="/experiments" className="btn btn-link">
            Back to Experiments
          </Link>
        </div>
      </section>
    </>
  );
}
