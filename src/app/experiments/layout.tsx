import { ExperimentsRail } from "@/components/ExperimentsRail";

export default function ExperimentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="experiments-shell">
      <div className="experiments-shell-grid">
        <div className="experiments-shell-main">{children}</div>
        <ExperimentsRail />
      </div>
    </div>
  );
}
