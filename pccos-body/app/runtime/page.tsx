import { PageShell } from "@/components/page-shell";
import { getPCCOSSnapshot } from "@/lib/pccos-actions";

export default function RuntimePage() {
    const snapshot = getPCCOSSnapshot();

    return (
        <PageShell
            title="Runtime Control Center"
            subtitle="Execution Runtime Management Layer"
        >
            <div className="grid gap-6">

                <section className="glass-card rounded-xl p-5">
                    <div className="mb-4 text-xs uppercase tracking-[0.3em] text-purple-400">
                        Runtime Status
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <div className="text-xs text-zinc-500">
                                Current Runtime
                            </div>

                            <div className="mt-1 text-xl font-semibold text-white">
                                {snapshot.runtime.status}
                            </div>
                        </div>

                        <div>
                            <div className="text-xs text-zinc-500">
                                Current Layer
                            </div>

                            <div className="mt-1 text-xl font-semibold text-yellow-400">
                                {snapshot.runtime.layer}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="glass-card rounded-xl p-5">
                    <div className="mb-4 text-xs uppercase tracking-[0.3em] text-purple-400">
                        Civilization Runtime
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {Object.entries(snapshot.civilization).map(([key, value]) => (
                            <div
                                key={key}
                                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                            >
                                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                                    {key}
                                </div>

                                <div className="mt-2 text-lg font-semibold text-white">
                                    {value.name}
                                </div>

                                <div className="mt-2 text-sm text-zinc-400">
                                    {value.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="glass-card rounded-xl p-5">
                    <div className="mb-4 text-xs uppercase tracking-[0.3em] text-purple-400">
                        Mission Runtime
                    </div>

                    <div className="space-y-3">
                        {snapshot.mission.tasks.map((task) => (
                            <div
                                key={task.title}
                                className="flex items-center justify-between rounded-lg border border-white/10 px-4 py-3"
                            >
                                <div className="text-white">
                                    {task.title}
                                </div>

                                <div
                                    className={
                                        task.completed
                                            ? "text-emerald-400"
                                            : "text-yellow-400"
                                    }
                                >
                                    {task.completed ? "Done" : "Pending"}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="glass-card rounded-xl p-5">
                    <div className="mb-4 text-xs uppercase tracking-[0.3em] text-purple-400">
                        Activity Log
                    </div>

                    <div className="space-y-2">
                        {snapshot.activity.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </PageShell>
    );
}