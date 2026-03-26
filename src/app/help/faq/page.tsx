import { PageIntro } from "@/components/PageIntro";

const faqs = [
  {
    q: "Where should I start with oxDNA simulations?",
    a: "Start with the OxDNA tutorials and sample configurations, then compare your output with benchmark datasets.",
  },
  {
    q: "How should I report issues or bugs?",
    a: "Use the GitHub issue tracker with your configuration file, platform details, and minimal reproducible case.",
  },
  {
    q: "Are old versions still available?",
    a: "Yes, archived releases are listed on the Downloads page for reproducibility in older studies.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageIntro
        title="FAQ"
        description="Common technical questions about installation, simulation setup, and support channels."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Help", href: "/help/faq" },
          { label: "FAQ" },
        ]}
      />
      <section className="section">
        <div className="container card-grid">
          {faqs.map((faq) => (
            <article key={faq.q} className="card">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
