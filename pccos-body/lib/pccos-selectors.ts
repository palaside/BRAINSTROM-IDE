import { PCCOS_STATE } from "@/lib/pccos-state";

export function getCommander() {
    return PCCOS_STATE.commander;
}

export function getCivilizationCores() {
    return [
        {
            label: "Brain",
            data: PCCOS_STATE.civilization.brain,
            color: "text-yellow-400",
            icon: "🧠",
        },
        {
            label: "Soul",
            data: PCCOS_STATE.civilization.soul,
            color: "text-emerald-400",
            icon: "◆",
        },
        {
            label: "Body",
            data: PCCOS_STATE.civilization.body,
            color: "text-purple-400",
            icon: "⬢",
        },
        {
            label: "Secrets",
            data: PCCOS_STATE.civilization.secrets,
            color: "text-red-400",
            icon: "🔒",
        },
    ];
}

export function getMission() {
    return PCCOS_STATE.mission;
}

export function getMissionProgress() {
    const tasks = PCCOS_STATE.mission.tasks;

    if (tasks.length === 0) {
        return 0;
    }

    const completed = tasks.filter((task) => task.completed).length;

    return Math.round((completed / tasks.length) * 100);
}

export function getMissionTasks() {
    return PCCOS_STATE.mission.tasks.map((task) => ({
        ...task,
        state: task.completed ? "Done" : "Pending",
    }));
}

export function getRuntimeStatus() {
    return PCCOS_STATE.runtime;
}

export function getActivities() {
    return PCCOS_STATE.activity;
}

export function getCivilizationStatus() {
    const statuses = Object.values(PCCOS_STATE.civilization).map(
        (core) => core.status
    );

    if (statuses.includes("Offline")) {
        return "Degraded";
    }

    if (statuses.includes("Not Configured")) {
        return "Needs Configuration";
    }

    if (statuses.includes("Prepared")) {
        return "Preparing";
    }

    return "Operational";
}