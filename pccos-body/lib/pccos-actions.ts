import { PCCOS_STATE } from "@/lib/pccos-state";

export function getPCCOSSnapshot() {
    return {
        commander: PCCOS_STATE.commander,
        civilization: PCCOS_STATE.civilization,
        mission: PCCOS_STATE.mission,
        runtime: PCCOS_STATE.runtime,
        activity: PCCOS_STATE.activity,
    };
}

export function addActivity(message: string) {
    PCCOS_STATE.activity.unshift(message);

    return PCCOS_STATE.activity;
}

export function completeMissionTask(taskTitle: string) {
    const task = PCCOS_STATE.mission.tasks.find(
        (item) => item.title === taskTitle
    );

    if (!task) {
        return {
            success: false,
            message: "Mission task not found",
        };
    }

    task.completed = true;

    addActivity(`Mission task completed: ${taskTitle}`);

    return {
        success: true,
        message: "Mission task completed",
    };
}

export function updateRuntimeStatus(status: string, layer?: string) {
    PCCOS_STATE.runtime.status = status;

    if (layer) {
        PCCOS_STATE.runtime.layer = layer;
    }

    addActivity(`Runtime updated: ${status}`);

    return PCCOS_STATE.runtime;
}

export function updateCivilizationCore(
    core: "brain" | "soul" | "body" | "secrets",
    status: string
) {
    PCCOS_STATE.civilization[core].status = status;

    addActivity(`${core.toUpperCase()} status updated: ${status}`);

    return PCCOS_STATE.civilization[core];
}

export function resetMissionProgress() {
    PCCOS_STATE.mission.tasks.forEach((task) => {
        task.completed = false;
    });

    addActivity("Mission progress reset");

    return PCCOS_STATE.mission;
}