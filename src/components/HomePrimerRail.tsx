"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type PrimerSection = {
  id: string;
  label: string;
};

type HomePrimerRailProps = {
  sections: PrimerSection[];
};

const DESKTOP_MIN_WIDTH = 1024;
const HORIZONTAL_GAP_PX = 72;
const VIEWPORT_GUTTER_PX = 16;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function queryElement(selector: string) {
  return document.querySelector<HTMLElement>(selector);
}

export function HomePrimerRail({ sections }: HomePrimerRailProps) {
  const railRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const clearPositionStyles = () => {
      rail.style.removeProperty("position");
      rail.style.removeProperty("left");
      rail.style.removeProperty("top");
      rail.style.removeProperty("width");
      rail.style.removeProperty("margin-inline");
        rail.style.removeProperty("transform");
    };

    const updatePosition = () => {
      const currentRail = railRef.current;
      if (!currentRail) return;

      if (window.innerWidth < DESKTOP_MIN_WIDTH) {
        clearPositionStyles();
        return;
      }

      const layout = queryElement(".home-page .primer-layout");
      const primerContent = queryElement(".home-page .primer-content");

      if (!layout || !primerContent) {
        clearPositionStyles();
        return;
      }

      const layoutRect = layout.getBoundingClientRect();
      const contentRect = primerContent.getBoundingClientRect();
      const railWidth = currentRail.offsetWidth;
      const railHeight = currentRail.offsetHeight;

      const maxLeft = window.innerWidth - railWidth - VIEWPORT_GUTTER_PX;
      const boundedMaxLeft = Math.max(VIEWPORT_GUTTER_PX, maxLeft);
      const left = clamp(contentRect.right + HORIZONTAL_GAP_PX, VIEWPORT_GUTTER_PX, boundedMaxLeft);

      const centeredTop = (window.innerHeight - railHeight) / 2;
      const maxTop = layoutRect.bottom - railHeight;
      const minTop = layoutRect.top;
      const top = maxTop < minTop ? minTop : clamp(centeredTop, minTop, maxTop);

      currentRail.style.position = "fixed";
      currentRail.style.left = `${Math.round(left)}px`;
      currentRail.style.top = `${Math.round(top)}px`;
      currentRail.style.width = `${Math.round(railWidth)}px`;
      currentRail.style.marginInline = "0";
        currentRail.style.transform = "none";
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updatePosition();
      });
    };

    scheduleUpdate();

    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });

    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(rail);

    const layout = queryElement(".home-page .primer-layout");
    const primerContent = queryElement(".home-page .primer-content");

    if (layout) observer.observe(layout);
    if (primerContent) observer.observe(primerContent);

    return () => {
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("scroll", scheduleUpdate);
      observer.disconnect();
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      clearPositionStyles();
    };
  }, []);

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
    <aside ref={railRef} className="primer-rail home-primer-rail">
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
    </aside>
  );
}