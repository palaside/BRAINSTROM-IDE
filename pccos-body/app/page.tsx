import { ActivityFeed } from "@/components/activity-feed";
import { CivilizationCore } from "@/components/civilization-core";
import { MissionCommand } from "@/components/mission-command";
import { OperationalPanels } from "@/components/operational-panels";
import { Sidebar } from "@/components/sidebar";
import { Topbar } from "@/components/topbar";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.9))]">
      <div className="flex min-h-screen">
        <Sidebar />

        <section className="flex-1">
          <Topbar />

          <div className="grid gap-6 p-6 lg:p-8">
            <CivilizationCore />

            <section className="grid gap-6 xl:grid-cols-3">
              <MissionCommand />
              <ActivityFeed />
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <OperationalPanels />
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}