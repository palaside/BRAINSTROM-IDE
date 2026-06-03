"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCommander } from "@/lib/pccos-selectors";

const navItems = [
    { label: "Dashboard", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Memory", href: "/memory" },
    { label: "Knowledge", href: "/knowledge" },
    { label: "Skills", href: "/skills" },
    { label: "Packs", href: "/packs" },
    { label: "Runtime", href: "/runtime" },
    { label: "Audit", href: "/audit" },
    { label: "Settings", href: "/settings" },
];

export function Sidebar() {
    const pathname = usePathname();
    const commander = getCommander();

    return (
        <aside className="glass-sidebar flex w-80 flex-col p-5">
            <div className="mb-7">
                <div className="text-xs font-semibold uppercase tracking-[0.45em] text-purple-400">
                    PCCOS
                </div>

                <h1 className="mt-3 text-xl font-semibold text-white">
                    Command Center
                </h1>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Personal Cognitive
                    <br />
                    Civilization OS
                </p>
            </div>

            <nav className="space-y-2">
                {navItems.map((item) => {
                    const active = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block w-full rounded-xl px-4 py-3 text-left text-sm transition ${active
                                    ? "bg-purple-500/20 text-purple-200 shadow-[0_0_24px_rgba(168,85,247,0.18)]"
                                    : "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
                                }`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto">
                <div className="glass-card overflow-hidden rounded-2xl p-4">
                    <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
                        <img
                            src="/commander.png"
                            alt="Commander"
                            className="h-56 w-full object-cover"
                        />
                    </div>

                    <div className="mt-4">
                        <div className="text-xs uppercase tracking-[0.3em] text-purple-400">
                            Commander
                        </div>

                        <div className="mt-2 text-lg font-semibold leading-tight text-white">
                            {commander.name}
                        </div>

                        <div className="mt-2 text-xs leading-5 text-zinc-400">
                            {commander.rank}
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="rounded-lg border border-yellow-400/20 bg-yellow-400/5 px-2 py-2 text-yellow-300">
                            Brain
                        </div>
                        <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/5 px-2 py-2 text-emerald-300">
                            Soul
                        </div>
                        <div className="rounded-lg border border-purple-400/20 bg-purple-400/10 px-2 py-2 text-purple-300">
                            Body
                        </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                        Status: {commander.status}
                    </div>
                </div>
            </div>
        </aside>
    );
}