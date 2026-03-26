export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavChild[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Data & Tools",
    children: [
      { label: "Overview", href: "/data-tools" },
      { label: "Downloads", href: "/downloads" },
    ],
  },
  { label: "Downloads", href: "/downloads" },
  { label: "API", href: "https://example.com/api", external: true },
  {
    label: "Members",
    children: [
      { label: "Group A", href: "/members/group-a" },
      { label: "Group B", href: "/members/group-b" },
    ],
  },
  {
    label: "News",
    children: [
      { label: "Release Notes", href: "/news/release-notes" },
      { label: "News & Events", href: "/news/news-events" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about/about-us" },
      { label: "Funding", href: "/about/funding" },
      { label: "Publications", href: "/about/publications" },
    ],
  },
  {
    label: "Help",
    children: [
      { label: "FAQ", href: "/help/faq" },
      { label: "Community Links", href: "/help/community-links" },
    ],
  },
  {
    label: "Tutorials",
    children: [
      { label: "OxDNA Tutorials", href: "/tutorials/oxdna" },
      { label: "OxView Tutorials", href: "/tutorials/oxview" },
    ],
  },
];
