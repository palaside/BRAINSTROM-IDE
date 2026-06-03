import { getCivilizationCores } from "@/lib/pccos-selectors";

export function CivilizationCore() {
    const coreList = getCivilizationCores();

    return (
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {coreList.map((core) => (
                <div key={core.label} className="glass-card rounded-xl p-5">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                                {core.label}
                            </div>

                            <div className="mt-3 text-xl font-semibold text-white">
                                {core.data.name}
                            </div>

                            <div className={`mt-3 text-sm ${core.color}`}>
                                {core.data.status}
                            </div>
                        </div>

                        <div className="text-3xl opacity-80">
                            {core.icon}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}