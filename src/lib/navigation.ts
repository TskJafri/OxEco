export type NavChild = {
  label: string;
  href: string;
  external?: boolean;
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
      { label: "Nanobase", href: "https://nanobase.org/", external: true },
      { label: "Tacoxdna", href: "/data-tools/tacoxdna" },
      { label: "OxDNA", href: "https://oxdna.org/", external: true },
      { label: "ppview", href: "/data-tools/ppview" },
      { label: "cogli2", href: "/data-tools/cogli2" },
    ],
  },
  { label: "Publications", href: "/about/publications" },
  { label: "Experiments", href: "/experiments" },
  { label: "Challenges", href: "/challenges" },
  {
    label: "Members",
    children: [
      { label: "Petr Sulc", href: "/members/petr-sulc" },
      { label: "Grigory Tikhomirov", href: "/members/grigory-tikhomirov" },
      { label: "Lorenzo Rovigatti", href: "/members/lorenzo-rovigatti" },
      { label: "Tom Ouldridge", href: "/members/tom-ouldridge" },
      { label: "Carlos Castros", href: "/members/carlos-castros" },
      { label: "Megan Engel", href: "/members/megan-engel" },
    ],
  },
  {
    label: "About",
    children: [
      { label: "About Us", href: "/about/about-us" },
      { label: "Funding", href: "/about/funding" },
    ],
  },
  {
    label: "Tutorials",
    children: [
      { label: "OxDNA to Documentation", href: "/tutorials/oxdna" },
      { label: "OxView (YouTube)", href: "/tutorials/oxview" },
      { label: "How We Simulate DNA Origami", href: "/tutorials/how-we-simulate-dna-origami" },
    ],
  },
];
