"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { PCCOS_STATE } from "@/lib/pccos-state";

const STORAGE_KEY = "pccos.runtime.v1";

type PCCOSState = typeof PCCOS_STATE;
type CivilizationCoreKey = keyof PCCOSState["civilization"];

function cloneState(state: PCCOSState): PCCOSState {
    return JSON.parse(JSON.stringify(state));
}

type PCCOSRuntimeContextValue = {
    state: PCCOSState;
    selectors: {
        getCommander: () => PCCOSState["commander"];
        getCivilizationCores: () => Array<{
            label: string;
            data: { name: string; status: string };
            color: string;
            icon: string;
        }>;
        getMission: () => PCCOSState["mission"];
        getMissionProgress: () => number;
        getMissionTasks: () => Array<{
            title: string;
            completed: boolean;
            state: "Done" | "Pending";
        }>;
        getRuntimeStatus: () => PCCOSState["runtime"];
        getActivities: () => string[];
        getCivilizationStatus: () => string;
    };
    actions: {
        addActivity: (message: string) => void;
        completeMissionTask: (taskTitle: string) => void;
        updateRuntimeStatus: (status: string, layer?: string) => void;
        updateCivilizationCore: (
            core: CivilizationCoreKey,
            status: string
        ) => void;
        resetMissionProgress: () => void;
        resetRuntimeState: () => void;
    };
};

const PCCOSRuntimeContext = createContext<PCCOSRuntimeContextValue | null>(null);

export function PCCOSRuntimeProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<PCCOSState>(() => cloneState(PCCOS_STATE));

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved) {
            setState(JSON.parse(saved));
        }
    }, []);

    function commitState(updater: (draft: PCCOSState) => void) {
        setState((current) => {
            const next = cloneState(current);
            updater(next);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            return next;
        });
    }

    const value = useMemo<PCCOSRuntimeContextValue>(() => {
        const selectors = {
            getCommander() {
                return state.commander;
            },

            getCivilizationCores() {
                return [
                    {
                        label: "Brain",
                        data: state.civilization.brain,
                        color: "text-yellow-400",
                        icon: "🧠",
                    },
                    {
                        label: "Soul",
                        data: state.civilization.soul,
                        color: "text-emerald-400",
                        icon: "◆",
                    },
                    {
                        label: "Body",
                        data: state.civilization.body,
                        color: "text-purple-400",
                        icon: "⬢",
                    },
                    {
                        label: "Secrets",
                        data: state.civilization.secrets,
                        color: "text-red-400",
                        icon: "🔒",
                    },
                ];
            },

            getMission() {
                return state.mission;
            },

            getMissionProgress() {
                const tasks = state.mission.tasks;

                if (tasks.length === 0) {
                    return 0;
                }

                const completed = tasks.filter((task) => task.completed).length;
                return Math.round((completed / tasks.length) * 100);
            },

            getMissionTasks() {
                return state.mission.tasks.map((task) => ({
                    ...task,
                    state: task.completed ? ("Done" as const) : ("Pending" as const),
                }));
            },

            getRuntimeStatus() {
                return state.runtime;
            },

            getActivities() {
                return state.activity;
            },

            getCivilizationStatus() {
                const brainReady = ["Prepared", "Ready", "Connected"].includes(
                    state.civilization.brain.status
                );
                const soulReady = ["Ready", "Connected"].includes(
                    state.civilization.soul.status
                );
                const bodyRunning = ["Running", "Building"].includes(
                    state.civilization.body.status
                );

                if (brainReady && soulReady && bodyRunning) {
                    return "Operational";
                }

                return "Building";
            },
        };

        const actions = {
            addActivity(message: string) {
                commitState((draft) => {
                    draft.activity.unshift(message);
                });
            },

            completeMissionTask(taskTitle: string) {
                commitState((draft) => {
                    const task = draft.mission.tasks.find(
                        (item) => item.title === taskTitle
                    );

                    if (task) {
                        task.completed = true;
                        draft.activity.unshift(`Mission task completed: ${taskTitle}`);
                    }
                });
            },

            updateRuntimeStatus(status: string, layer?: string) {
                commitState((draft) => {
                    draft.runtime.status = status;

                    if (layer) {
                        draft.runtime.layer = layer;
                    }

                    draft.activity.unshift(`Runtime updated: ${status}`);
                });
            },

            updateCivilizationCore(core: CivilizationCoreKey, status: string) {
                commitState((draft) => {
                    draft.civilization[core].status = status;
                    draft.activity.unshift(`${core.toUpperCase()} updated: ${status}`);
                });
            },

            resetMissionProgress() {
                commitState((draft) => {
                    draft.mission.tasks.forEach((task) => {
                        task.completed = false;
                    });

                    draft.activity.unshift("Mission progress reset");
                });
            },

            resetRuntimeState() {
                const resetState = cloneState(PCCOS_STATE);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(resetState));
                setState(resetState);
            },
        };

        return {
            state,
            selectors,
            actions,
        };
    }, [state]);

    return (
        <PCCOSRuntimeContext.Provider value={value}>
            {children}
        </PCCOSRuntimeContext.Provider>
    );
}

export function usePCCOSRuntime() {
    const context = useContext(PCCOSRuntimeContext);

    if (!context) {
        throw new Error("usePCCOSRuntime must be used inside PCCOSRuntimeProvider");
    }

    return context;
}