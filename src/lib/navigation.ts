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
      { label: "Nanobase", href: "/data-tools/nanobase" },
      { label: "Tacoxdna", href: "/data-tools/tacoxdna" },
      { label: "OxDNA", href: "/data-tools/oxdna" },
      { label: "ppview", href: "/data-tools/ppview" },
      { label: "cogli2", href: "/data-tools/cogli2" },
      { label: "http://oxdna.org", href: "http://oxdna.org", external: true },
    ],
  },
  { label: "Publications", href: "/about/publications" },
  {
    label: "Members",
    children: [
      { label: "Petr Sulc's", href: "/members/petr-sulc" },
      { label: "Lorenzo Rovigatti's", href: "/members/lorenzo-rovigatti" },
      { label: "Grigory Tikhomirov", href: "/members/grigory-tikhomirov" },
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
