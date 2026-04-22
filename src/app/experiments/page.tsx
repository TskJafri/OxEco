import { PageIntro } from "@/components/PageIntro";

export default function ExperimentsPage() {
  return (
    <>
      <PageIntro
        title="Experiments"
        description=""
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Experiments" }]}
      />
      <section className="section" />
    </>
  );
}
