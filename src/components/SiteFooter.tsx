import Link from "next/link";

const footerLinks = {
  resources: [
    { label: "GitHub Organization", href: "https://github.com/" },
    { label: "Publications", href: "/about/publications" },
    { label: "http://oxdna.org", href: "http://oxdna.org" },
  ],
  community: [
    { label: "Tutorials", href: "/tutorials" },
    { label: "Data & Tools", href: "/data-tools" },
    { label: "Contact Us", href: "/contact-us" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <p className="footer-eyebrow">Funding</p>
          <h2>Research support and acknowledgements</h2>
          <p>
            The oxDNA ecosystem is maintained through collaborative academic grants and
            open-source contributions from molecular programming researchers.
          </p>
        </section>
        <section>
          <p className="footer-eyebrow">Resources</p>
          <ul>
            {footerLinks.resources.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/") ? (
                  <Link href={link.href}>{link.label}</Link>
                ) : (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <p className="footer-eyebrow">Community</p>
          <ul>
            {footerLinks.community.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} oxDNA Ecosystem</p>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
