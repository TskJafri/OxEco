"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { experimentsGroups } from "@/lib/experiments-content";

const MAIN_HREF = "/experiments";

function leafHref(groupSlug: string, leafSlug: string) {
  return `${MAIN_HREF}/${groupSlug}/${leafSlug}`;
}

function getActiveGroupSlug(pathname: string | null): string | null {
  if (!pathname) return null;
  for (const group of experimentsGroups) {
    if (group.leaves.some((leaf) => pathname === leafHref(group.slug, leaf.slug))) {
      return group.slug;
    }
  }
  return null;
}

export function ExperimentsRail() {
  const pathname = usePathname();
  const isMainActive = pathname === MAIN_HREF;

  const [openGroups, setOpenGroups] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    const activeSlug = getActiveGroupSlug(pathname);
    if (activeSlug) initial.add(activeSlug);
    return initial;
  });

  useEffect(() => {
    const activeSlug = getActiveGroupSlug(pathname);
    if (!activeSlug) return;
    setOpenGroups((prev) => {
      if (prev.has(activeSlug)) return prev;
      const next = new Set(prev);
      next.add(activeSlug);
      return next;
    });
  }, [pathname]);

  const toggleGroup = (slug: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  };

  return (
    <aside className="experiments-rail" aria-label="Experiments navigation">
      <nav className="experiments-rail-nav">
        <p className="experiments-rail-title">Experiments</p>
        <ul className="experiments-rail-list" role="list">
          <li className="experiments-rail-main">
            <Link
              href={MAIN_HREF}
              className={`experiments-rail-main-link${isMainActive ? " is-active" : ""}`}
            >
              Main Page
            </Link>
          </li>
          {experimentsGroups.map((group) => {
            const isOpen = openGroups.has(group.slug);
            return (
              <li key={group.slug} className="experiments-rail-group">
                <button
                  type="button"
                  className="experiments-rail-group-summary"
                  aria-expanded={isOpen}
                  aria-controls={`experiments-rail-leaves-${group.slug}`}
                  onClick={() => toggleGroup(group.slug)}
                >
                  <span className="experiments-rail-group-title">{group.label}</span>
                  <span
                    aria-hidden="true"
                    className={`experiments-rail-caret${isOpen ? " is-open" : ""}`}
                  >
                    ▸
                  </span>
                </button>
                {isOpen ? (
                  <ul
                    id={`experiments-rail-leaves-${group.slug}`}
                    className="experiments-rail-leaves"
                    role="list"
                  >
                    {group.leaves.map((leaf) => {
                      const href = leafHref(group.slug, leaf.slug);
                      const active = pathname === href;
                      return (
                        <li key={leaf.slug}>
                          <Link
                            href={href}
                            className={`experiments-rail-link${active ? " is-active" : ""}`}
                          >
                            {leaf.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
