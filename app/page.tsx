export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="https://memechronicle.com" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              <span className="text-yellow-400">Meme</span>
              <span className="text-white">Chronicle</span>
            </span>
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-gray-300 sm:flex">
            <a href="#features" className="transition-colors hover:text-white">
              Features
            </a>
            <a href="#how-it-works" className="transition-colors hover:text-white">
              How It Works
            </a>
            <a
              href="https://memechronicle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-4 py-2 font-semibold text-gray-950 transition-colors hover:bg-yellow-300"
            >
              Launch App
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-24 text-center sm:py-40">
        {/* ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-[32rem] w-[32rem] rounded-full bg-yellow-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <span className="mb-6 inline-block rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-400">
            Free &amp; Automated
          </span>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Meme Coin News.{" "}
            <span className="text-yellow-400">No Hype.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            MemeChronicle automatically aggregates and summarises meme coin news
            from trusted publishers — giving traders the signal, not the noise.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://memechronicle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 px-8 py-3 text-base font-bold text-gray-950 shadow-lg transition-colors hover:bg-yellow-300"
            >
              Start Reading Free →
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/20 px-8 py-3 text-base font-medium text-gray-300 transition-colors hover:border-white/40 hover:text-white"
            >
              See Features
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-white/5 px-6 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center sm:grid-cols-4">
          {(
            [
              { value: "100%", label: "Free to Use" },
              { value: "24/7", label: "Live Updates" },
              { value: "10+", label: "Trusted Publishers" },
              { value: "0", label: "Hype or Ads" },
            ] as const
          ).map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-yellow-400">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────── */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything traders need,{" "}
              <span className="text-yellow-400">nothing they don&apos;t.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
              Four curated feeds designed to keep you informed and ahead of the
              market.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(
              [
                {
                  icon: "⚡",
                  title: "Latest",
                  description:
                    "Real-time summaries of the most recent meme coin stories as they break across the web.",
                },
                {
                  icon: "📈",
                  title: "Market Movers",
                  description:
                    "Spot which coins are trending before the crowd. Curated news tied directly to price action.",
                },
                {
                  icon: "📣",
                  title: "Announcements",
                  description:
                    "Official updates, exchange listings, partnership reveals and project launches — all in one place.",
                },
                {
                  icon: "🏆",
                  title: "Top 10 Prices",
                  description:
                    "Live snapshot of the top 10 meme coins by market cap with price context alongside news.",
                },
              ] as const
            ).map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-yellow-400/40"
              >
                <span className="text-4xl">{f.icon}</span>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="border-t border-white/10 bg-white/5 px-6 py-24"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              How MemeChronicle works
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Fully automated. No editors. No bias. Just the news.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {(
              [
                {
                  step: "01",
                  icon: "🌐",
                  title: "Crawl",
                  description:
                    "Our crawler continuously monitors dozens of trusted crypto news publishers around the clock.",
                },
                {
                  step: "02",
                  icon: "✂️",
                  title: "Summarise",
                  description:
                    "AI distils each article into a concise, fact-first summary — no filler, no sponsored spin.",
                },
                {
                  step: "03",
                  icon: "🗂️",
                  title: "Categorise",
                  description:
                    "Stories are automatically sorted into Latest, Market Movers, Announcements and Top 10 feeds.",
                },
              ] as const
            ).map((s) => (
              <div
                key={s.step}
                className="flex flex-col items-center text-center"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/40 bg-gray-900 text-3xl">
                  {s.icon}
                </span>
                <span className="mt-2 text-xs font-bold uppercase tracking-widest text-yellow-400">
                  Step {s.step}
                </span>
                <h3 className="mt-3 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div className="h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ready to trade smarter?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Join thousands of traders who trust MemeChronicle for fact-first
            meme coin coverage. It&apos;s free — always.
          </p>
          <a
            href="https://memechronicle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold text-gray-950 shadow-xl transition-colors hover:bg-yellow-300"
          >
            Go to MemeChronicle →
          </a>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>
            <span className="font-bold text-yellow-400">Meme</span>
            <span className="font-bold text-white">Chronicle</span>
            <span className="ml-2">— No hype, just facts for traders.</span>
          </p>
          <a
            href="https://memechronicle.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Launch App
          </a>
          <p>© {new Date().getFullYear()} MemeChronicle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

