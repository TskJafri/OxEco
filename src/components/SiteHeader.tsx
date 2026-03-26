import Link from "next/link";
import { navigation } from "@/lib/navigation";

function LogoMark() {
  return (
    <div className="logo-mark" aria-label="oxDNA logo placeholder">
      <span>DNA</span>
    </div>
  );
}

function DesktopNavigation() {
  return (
    <ul className="desktop-nav" role="list">
      {navigation.map((item) => (
        <li key={item.label} className="nav-item">
          {item.children ? (
            <>
              <span className="nav-trigger">{item.label}</span>
              <ul className="dropdown" role="list">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link href={child.href}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            </>
          ) : item.href ? (
            item.external ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link">
                {item.label}
              </a>
            ) : (
              <Link href={item.href} className="nav-link">
                {item.label}
              </Link>
            )
          ) : null}
        </li>
      ))}
    </ul>
  );
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
                      <Link href={child.href}>{child.label}</Link>
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
