import { getActivities } from "@/lib/pccos-selectors";

export function ActivityFeed() {
    const activities = getActivities();

    return (
        <section className="glass-card rounded-xl p-5">
            <div className="text-xs uppercase tracking-[0.25em] text-purple-400 mb-4">
                Activity Feed
            </div>
            <ul className="space-y-2">
                {activities.map((activity, index) => (
                    <li key={index} className="text-sm text-zinc-300">
                        • {activity}
                    </li>
                ))}
            </ul>
        </section>
    );
}