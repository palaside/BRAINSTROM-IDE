type StatusBadgeProps = {
    label: string;
    tone?: "green" | "purple" | "yellow" | "red" | "blue";
};

const toneMap = {
    green: "border-emerald-400/20 bg-emerald-400/5 text-emerald-400",
    purple: "border-purple-400/20 bg-purple-400/10 text-purple-300",
    yellow: "border-yellow-400/20 bg-yellow-400/5 text-yellow-300",
    red: "border-red-400/20 bg-red-400/5 text-red-400",
    blue: "border-blue-400/20 bg-blue-400/5 text-blue-300",
};

export function StatusBadge({
    label,
    tone = "purple",
}: StatusBadgeProps) {
    return (
        <div
            className={`rounded-full border px-4 py-2 text-xs ${toneMap[tone]}`}
        >
            ● {label}
        </div>
    );
}