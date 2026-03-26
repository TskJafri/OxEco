import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

type PageIntroProps = {
  title: string;
  description: string;
  breadcrumbs?: Crumb[];
};

export function PageIntro({ title, description, breadcrumbs }: PageIntroProps) {
  return (
    <section className="section section-intro">
      <div className="container">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
