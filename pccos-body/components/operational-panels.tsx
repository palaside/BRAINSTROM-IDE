import { getCommander } from "@/lib/pccos-selectors";

export function OperationalPanels() {
    const commander = getCommander();

    return (
        <section className="glass-card rounded-xl p-5">
            <div className="mb-5 text-xs uppercase tracking-[0.3em] text-purple-400">
                Commander Intelligence
            </div>

            <div className="space-y-4">
                <div>
                    <div className="text-xs text-zinc-500">Commander</div>
                    <div className="mt-1 text-lg font-semibold text-white">
                        {commander.name}
                    </div>
                </div>

                <div>
                    <div className="text-xs text-zinc-500">Rank</div>
                    <div className="mt-1 text-sm text-zinc-200">
                        {commander.rank}
                    </div>
                </div>

                <div>
                    <div className="text-xs text-zinc-500">Status</div>
                    <div className="mt-1 text-sm text-emerald-400">
                        {commander.status}
                    </div>
                </div>
            </div>
        </section>
    );
}