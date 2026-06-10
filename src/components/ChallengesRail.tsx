"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type RailItem = {
  id: string;
  label: string;
};

export type RailGroup = {
  title: string;
  items: RailItem[];
};

type ChallengesRailProps = {
  groups: RailGroup[];
};

const DESKTOP_MIN_WIDTH = 1024;
// Minimum gap (in px) between the right edge of the article text and the rail.
// Increase to push the rail farther from text; decrease to let it sit closer.
const HORIZONTAL_GAP_PX = 72;
// Distance (in px) between the right edge of the rail and the right edge of the viewport.
// Decrease this to push the rail closer to the right edge of the screen.
const VIEWPORT_GUTTER_PX = 24;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function queryElement(selector: string) {
  return document.querySelector<HTMLElement>(selector);
}

export function ChallengesRail({ groups }: ChallengesRailProps) {
  const railRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const allItems = groups.flatMap((group) => group.items);
  const [activeId, setActiveId] = useState(allItems[0]?.id ?? "");

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

      const layout = queryElement(".challenges-page .challenges-layout");
      const content = queryElement(".challenges-page .challenges-content");

      if (!layout || !content) {
        clearPositionStyles();
        return;
      }

      const layoutRect = layout.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();
      const railWidth = currentRail.offsetWidth;
      const railHeight = currentRail.offsetHeight;

      // Anchor the rail to the right edge of the viewport (VIEWPORT_GUTTER_PX away),
      // but never let it sit closer than HORIZONTAL_GAP_PX to the article text.
      const minLeft = contentRect.right + HORIZONTAL_GAP_PX;
      const desiredLeft = window.innerWidth - railWidth - VIEWPORT_GUTTER_PX;
      const left = Math.max(minLeft, desiredLeft);

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

    const layout = queryElement(".challenges-page .challenges-layout");
    const content = queryElement(".challenges-page .challenges-content");

    if (layout) observer.observe(layout);
    if (content) observer.observe(content);

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
    if (allItems.length === 0) return;

    const headings = allItems
      .map(({ id }) => document.getElementById(id))
      .filter((heading): heading is HTMLElement => heading !== null);

    if (headings.length === 0) return;

    const updateActiveFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && allItems.some((item) => item.id === hash)) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groups]);

  return (
    <aside ref={railRef} className="primer-rail challenges-rail">
      <nav className="primer-toc" aria-label="Challenges navigation">
        <p className="primer-rail-title">Challenges</p>
        <ul className="primer-toc-list challenges-toc-list">
          {groups.map((group) => (
            <li key={group.title} className="challenges-toc-group">
              <p className="challenges-toc-group-title">{group.title}</p>
              <ul className="primer-toc-list">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`#${item.id}`}
                      className={`primer-toc-link${activeId === item.id ? " is-active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
