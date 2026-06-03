import { getActivities } from "@/lib/pccos-selectors";

export function RuntimeTimeline() {
    const items = getActivities();

    return (
        <section className="glass-card rounded-xl p-5">
            <div className="mb-5 text-xs uppercase tracking-[0.3em] text-purple-400">
                Runtime Timeline
            </div>

            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-purple-400" />

                        <div>
                            <div className="text-xs text-zinc-500">
                                T-{items.length - index}
                            </div>

                            <div className="text-sm text-zinc-300">{item}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}