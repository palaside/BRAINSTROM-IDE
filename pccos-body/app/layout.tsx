import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PCCOS Command Center",
  description: "Personal Cognitive Civilization Operating System Body v0.1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    "Dashboard",
    "Projects",
    "Memory",
    "Knowledge",
    "Skills",
    "Packs",
    "Runtime",
    "Audit",
    "Settings",
  ];

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          geistSans.variable,
          geistMono.variable
        )}
      >
        <main className="flex min-h-screen overflow-hidden bg-background text-foreground bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.9))]">
          <aside className="glass-sidebar flex w-72 flex-col p-5">
            <div className="mb-8">
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
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm transition ${item === "Dashboard"
                    ? "bg-purple-500/20 text-purple-200 shadow-[0_0_24px_rgba(168,85,247,0.18)]"
                    : "text-zinc-400 hover:bg-white/[0.05] hover:text-white"
                    }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="glass-card mt-auto rounded-xl p-4">
              <div className="text-sm font-semibold text-white">
                PCCOS Body v0.1
              </div>
              <div className="mt-1 text-xs text-zinc-400">Vega Glass Theme</div>
              <div className="mt-3 flex items-center gap-2 text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                localhost:1453
              </div>
            </div>
          </aside>

          <div className="flex flex-1 flex-col">
            <header className="flex items-center justify-between border-b border-white/10 bg-black/25 px-8 py-5 backdrop-blur-xl">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  PCCOS COMMAND CENTER
                </h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Body v0.1 · Vega Theme · localhost:1453
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs text-emerald-400">
                  ● Runtime: Preparing
                </div>
                <div className="rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs text-purple-300">
                  ● Layer 6: Pending
                </div>
              </div>
            </header>

            <div className="flex-1 overflow-y-auto">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}