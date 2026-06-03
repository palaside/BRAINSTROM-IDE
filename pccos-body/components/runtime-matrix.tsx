import { getCivilizationCores } from "@/lib/pccos-selectors";

export function RuntimeMatrix() {
    const cores = getCivilizationCores();

    return (
        <section className="glass-card rounded-xl p-5">
            <div className="mb-5 text-xs uppercase tracking-[0.3em] text-purple-400">
                Runtime Matrix
            </div>

            <div className="grid grid-cols-2 gap-4">
                {cores.map((core) => (
                    <div
                        key={core.label}
                        className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                    >
                        <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                            {core.label}
                        </div>

                        <div className="mt-2 text-lg font-semibold text-white">
                            {core.data.name}
                        </div>

                        <div className={`mt-2 text-sm ${core.color}`}>
                            {core.data.status}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}