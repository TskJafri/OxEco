"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, type NavChild } from "@/lib/navigation";

function LogoMark() {
  return (
    <div className="logo-mark" aria-label="oxDNA logo placeholder">
      <span>DNA</span>
    </div>
  );
}

function ChildLink({ child }: { child: NavChild }) {
  if (!child.href) {
    return <span className="dropdown-label">{child.label}</span>;
  }
  if (child.external) {
    return (
      <a href={child.href} target="_blank" rel="noopener noreferrer">
        {child.label}
      </a>
    );
  }
  return <Link href={child.href}>{child.label}</Link>;
}

function DropdownItem({ child }: { child: NavChild }) {
  if (child.children && child.children.length > 0) {
    return (
      <li className="dropdown-item has-flyout">
        <span className="dropdown-trigger">
          {child.label}
          <span aria-hidden="true" className="dropdown-caret">
            ›
          </span>
        </span>
        <ul className="dropdown dropdown-flyout" role="list">
          {child.children.map((grandchild) => (
            <li key={grandchild.label} className="dropdown-item">
              <ChildLink child={grandchild} />
            </li>
          ))}
        </ul>
      </li>
    );
  }
  return (
    <li className="dropdown-item">
      <ChildLink child={child} />
    </li>
  );
}

function DesktopNavigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <ul className="desktop-nav" role="list">
      {navigation.map((item) => (
        <li key={item.label} className="nav-item">
          {item.children ? (
            <>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`nav-trigger${isActive(item.href) ? " is-active" : ""}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className="nav-trigger">{item.label}</span>
              )}
              <ul className="dropdown" role="list">
                {item.children.map((child) => (
                  <DropdownItem key={child.label} child={child} />
                ))}
              </ul>
            </>
          ) : item.href ? (
            item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link">
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className={`nav-link${isActive(item.href) ? " is-active" : ""}`}>
                {item.label}
              </Link>
            )
          ) : null}
        </li>
      ))}
    </ul>
  );
}

function MobileChildLink({ child }: { child: NavChild }) {
  if (!child.href) {
    return <span>{child.label}</span>;
  }
  if (child.external) {
    return (
      <a href={child.href} target="_blank" rel="noopener noreferrer">
        {child.label}
      </a>
    );
  }
  return <Link href={child.href}>{child.label}</Link>;
}

function MobileChild({ child }: { child: NavChild }) {
  if (child.children && child.children.length > 0) {
    return (
      <details className="mobile-subitem">
        <summary>{child.label}</summary>
        <ul role="list">
          {child.children.map((grandchild) => (
            <li key={grandchild.label}>
              <MobileChildLink child={grandchild} />
            </li>
          ))}
        </ul>
      </details>
    );
  }
  return <MobileChildLink child={child} />;
}

function MobileNavigation() {
  return (
    <details className="mobile-nav-wrap">
      <summary>Menu</summary>
      <div className="mobile-panel">
        {navigation.map((item) => (
          <div key={item.label} className="mobile-item">
            {item.children ? (
              <details>
                <summary>{item.label}</summary>
                <ul role="list">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <MobileChild child={child} />
                    </li>
                  ))}
                </ul>
              </details>
            ) : item.href ? (
              item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ) : (
                <Link href={item.href}>{item.label}</Link>
              )
            ) : null}
          </div>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-link" aria-label="Go to home">
          <LogoMark />
          <div className="logo-copy">
            <strong>OxEco</strong>
            <span>DNA Nanotechnology Ecosystem</span>
          </div>
        </Link>
        <nav aria-label="Primary navigation" className="primary-nav">
          <DesktopNavigation />
          <MobileNavigation />
        </nav>
        <div className="header-actions">
          <Link href="/contact-us" className="contact-btn">
            Contact Us
          </Link>
          <Link href="/cite-us" className="cite-btn">
            Cite Us
          </Link>
        </div>
      </div>
    </header>
  );
}
