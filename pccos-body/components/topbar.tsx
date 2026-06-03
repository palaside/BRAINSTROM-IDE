import {
    getCivilizationStatus,
    getRuntimeStatus,
} from "@/lib/pccos-selectors";
import { StatusBadge } from "@/components/status-badge";

export function Topbar() {
    const civilizationStatus = getCivilizationStatus();
    const runtime = getRuntimeStatus();

    return (
        <header className="flex items-center justify-between border-b border-white/10 bg-black/25 px-8 py-5 backdrop-blur-xl">
            <div>
                <div className="text-xs uppercase tracking-[0.3em] text-purple-400">
                    Mission Control
                </div>

                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                    PCCOS COMMAND CENTER
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                    Military Intelligence + Civilization OS
                </p>
            </div>

            <div className="flex items-center gap-3">
                <StatusBadge label={`Civilization: ${civilizationStatus}`} tone="green" />
                <StatusBadge label={`Runtime: ${runtime.status}`} tone="purple" />
                <StatusBadge label={runtime.layer} tone="yellow" />
            </div>
        </header>
    );
}