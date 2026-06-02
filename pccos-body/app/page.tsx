const navItems = [
  "Dashboard",
  "Projects",
  "Memory",
  "Knowledge",
  "Skills",
  "Packs",
  "Runtime",
  "Audit",
  "Settings",
];

const systemCards = [
  {
    label: "Brain",
    value: "Google Drive",
    status: "Prepared",
    color: "text-yellow-400",
    icon: "🧠",
  },
  {
    label: "Soul",
    value: "GitHub",
    status: "Ready",
    color: "text-emerald-400",
    icon: "◆",
  },
  {
    label: "Body",
    value: "localhost:1453",
    status: "Building",
    color: "text-purple-400",
    icon: "⬢",
  },
  {
    label: "Secrets",
    value: "Local Vault",
    status: "Not Configured",
    color: "text-red-400",
    icon: "🔒",
  },
];

const skills = [
  { name: "Architecture", state: "Active" },
  { name: "Design Taste", state: "Active" },
  { name: "Verification", state: "Active" },
  { name: "Execution Runtime", state: "Pending" },
];

const packs = [
  "Context Foundation",
  "Core Runtime Pack",
  "Design Tokens",
  "Project Status",
];

const activities = [
  "PCCOS Architecture locked",
  "Vega preset selected",
  "Design Tokens created",
  "Commander profile assigned",
];

const missionTasks = [
  "Create visible Command Center",
  "Use Next.js + Tailwind + shadcn/ui",
  "Apply Vega Glass Theme",
  "No MCP / NotebookLM / Terminal / Secrets",
];

const runtimeLayers = [
  { name: "Vision", state: "Ready" },
  { name: "Architecture", state: "Ready" },
  { name: "PCCOS Runtime", state: "Ready" },
  { name: "Agent Runtime", state: "Ready" },
  { name: "Skill Runtime", state: "Ready" },
  { name: "Execution Runtime", state: "Pending" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.9))]">
      <div className="flex min-h-screen">
        <aside className="glass-sidebar flex w-80 flex-col p-5">
          <div className="mb-7">
            <div className="text-xs font-semibold uppercase tracking-[0.45em] text-purple-400">
              PCCOS
            </div>
            <h1 className="mt-3 text-xl font-semibold text-white">
              Command Center
            </h1>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Personal Cognitive
              <br />
              Civilization OS
            </p>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm transition ${item === "Dashboard"
                  ? "bg-purple-500/20 text-purple-200 shadow-[0_0_24px_rgba(168,85,247,0.18)]"
                  : "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
                  }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="glass-card mt-auto overflow-hidden rounded-2xl p-4">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
              <img
                src="/commander.png"
                alt="Commander"
                className="h-56 w-full object-cover"
              />
            </div>

            <div className="mt-4">
              <div className="text-xs uppercase tracking-[0.3em] text-purple-400">
                Commander
              </div>
              <div className="mt-2 text-lg font-semibold leading-tight text-white">
                SM1.NUTTACHAI
                <br />
                LUXSAVONG
              </div>
              <div className="mt-2 text-xs leading-5 text-zinc-400">
                Sergeant Major First Class Special.
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="rounded-lg border border-yellow-400/20 bg-yellow-400/5 px-2 py-2 text-yellow-300">
                Brain
              </div>
              <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-2 py-2 text-emerald-300">
                Soul
              </div>
              <div className="rounded-lg border border-purple-400/20 bg-purple-400/10 px-2 py-2 text-purple-300">
                Body
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              Status: Command Active
            </div>
          </div>
        </aside>

        <section className="flex-1">
          <header className="flex items-center justify-between border-b border-white/10 bg-black/25 px-8 py-5 backdrop-blur-xl">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                PCCOS COMMAND CENTER
              </h2>
              <p className="mt-1 text-sm text-zinc-400">
                Body v0.1 · Vega Glass Theme · localhost:1453
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-400">
                ● Runtime: Preparing
              </div>
              <div className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs text-purple-300">
                ● Layer 6: Pending
              </div>
            </div>
          </header>

          <div className="grid gap-6 p-6 lg:p-8">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {systemCards.map((card) => (
                <div key={card.label} className="glass-card rounded-xl p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-zinc-400">{card.label}</div>
                      <div className="mt-3 text-lg font-semibold text-white">
                        {card.value}
                      </div>
                      <div className={`mt-3 text-sm ${card.color}`}>
                        {card.status}
                      </div>
                    </div>
                    <div className="text-3xl opacity-80">{card.icon}</div>
                  </div>
                </div>
              ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-3">
              <div className="glass-card rounded-xl p-5 xl:col-span-2">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Current Mission
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      Create PCCOS Body v0.1
                    </p>
                  </div>
                  <span className="rounded-full bg-purple-500/20 px-4 py-1.5 text-xs text-purple-200">
                    In Progress
                  </span>
                </div>

                <div className="space-y-3">
                  {missionTasks.map((task, index) => (
                    <div
                      key={task}
                      className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm backdrop-blur-md"
                    >
                      <span className="text-zinc-100">{task}</span>
                      <span className="text-zinc-500">Step {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white">
                  Runtime Layers
                </h3>
                <div className="mt-5 space-y-4">
                  {runtimeLayers.map((layer, index) => (
                    <div
                      key={layer.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-zinc-200">
                        Layer {index + 1}: {layer.name}
                      </span>
                      <span
                        className={
                          layer.state === "Ready"
                            ? "text-emerald-400"
                            : "text-yellow-400"
                        }
                      >
                        {layer.state}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-3">
              <div className="glass-card rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white">Skills</h3>
                <div className="mt-5 space-y-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm backdrop-blur-md"
                    >
                      <span className="text-zinc-200">{skill.name}</span>
                      <span
                        className={
                          skill.state === "Active"
                            ? "text-emerald-400"
                            : "text-yellow-400"
                        }
                      >
                        {skill.state}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white">Packs</h3>
                <div className="mt-5 space-y-3">
                  {packs.map((pack) => (
                    <div
                      key={pack}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-400 backdrop-blur-md"
                    >
                      {pack}
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-xl p-5">
                <h3 className="text-lg font-semibold text-white">
                  Recent Activity
                </h3>
                <div className="mt-5 space-y-4">
                  {activities.map((item) => (
                    <div key={item} className="flex gap-3 text-sm">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
                      <span className="text-zinc-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}