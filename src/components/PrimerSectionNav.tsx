"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type PrimerSection = {
  id: string;
  label: string;
};

type PrimerSectionNavProps = {
  sections: PrimerSection[];
};

export function PrimerSectionNav({ sections }: PrimerSectionNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    if (sections.length === 0) return;

    const headings = sections
      .map(({ id }) => document.getElementById(id))
      .filter((heading): heading is HTMLElement => heading !== null);

    if (headings.length === 0) return;

    const updateActiveFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sections.some((section) => section.id === hash)) {
        setActiveId(hash);
      }
    };

    updateActiveFromHash();

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-24% 0px -60% 0px",
        threshold: [0.15, 0.35, 0.55],
      },
    );

    headings.forEach((heading) => observer.observe(heading));
    window.addEventListener("hashchange", updateActiveFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateActiveFromHash);
    };
  }, [sections]);

  return (
    <nav className="primer-toc" aria-label="Primer navigation">
      <p className="primer-rail-title">On this page</p>
      <ul className="primer-toc-list">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              className={`primer-toc-link${activeId === section.id ? " is-active" : ""}`}
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
