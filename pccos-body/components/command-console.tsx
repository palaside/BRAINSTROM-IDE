"use client";

import { usePCCOSRuntime } from "@/components/pccos-runtime-provider";

export function CommandConsole() {
    const { state, actions } = usePCCOSRuntime();

    return (
        <section className="glass-card rounded-xl p-5">
            <div className="mb-5 text-xs uppercase tracking-[0.3em] text-purple-400">
                Command Console
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                <button
                    onClick={() =>
                        actions.updateRuntimeStatus("Running", "Layer 6 Active")
                    }
                    className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300 transition hover:bg-emerald-400/20"
                >
                    Start Runtime
                </button>

                <button
                    onClick={() =>
                        actions.updateRuntimeStatus("Stopped", "Layer 6 Paused")
                    }
                    className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300 transition hover:bg-red-400/20"
                >
                    Stop Runtime
                </button>

                <button
                    onClick={() => actions.completeMissionTask("Execution Runtime")}
                    className="rounded-xl border border-purple-400/20 bg-purple-400/10 px-4 py-3 text-sm text-purple-300 transition hover:bg-purple-400/20"
                >
                    Verify Mission
                </button>

                <button
                    onClick={() => actions.resetMissionProgress()}
                    className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-3 text-sm text-yellow-300 transition hover:bg-yellow-400/20"
                >
                    Reset Mission
                </button>

                <button
                    onClick={() => actions.resetRuntimeState()}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.08]"
                >
                    Reset Runtime
                </button>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Persistent Snapshot
                </div>

                <div className="mt-3 text-sm text-zinc-300">
                    Status:{" "}
                    <span className="text-emerald-400">{state.runtime.status}</span>
                </div>

                <div className="mt-1 text-sm text-zinc-300">
                    Layer: <span className="text-yellow-400">{state.runtime.layer}</span>
                </div>
            </div>
        </section>
    );
}