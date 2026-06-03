import {
    getMission,
    getMissionProgress,
    getMissionTasks,
} from "@/lib/pccos-selectors";

export function MissionCommand() {
    const mission = getMission();
    const progress = getMissionProgress();
    const tasks = getMissionTasks();

    return (
        <section className="glass-card rounded-xl p-5 xl:col-span-2">
            <div className="mb-5 flex items-center justify-between">
                <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-purple-400">
                        Active Mission
                    </div>

                    <h3 className="mt-2 text-xl font-semibold text-white">
                        {mission.title}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-400">
                        PCCOS Body v0.6.1 · State Driven Components
                    </p>
                </div>

                <span className="rounded-full bg-purple-500/20 px-4 py-1.5 text-xs text-purple-200">
                    {progress}% Progress
                </span>
            </div>

            <div className="space-y-3">
                {tasks.map((task) => (
                    <div
                        key={task.title}
                        className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm backdrop-blur-md"
                    >
                        <span className="text-zinc-100">{task.title}</span>

                        <span className={task.state === "Done" ? "text-emerald-400" : "text-yellow-400"}>
                            {task.state === "Done" ? "Done" : "Pending"}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}