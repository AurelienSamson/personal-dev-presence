import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { languages, langVar } from "@/data/languages";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurélien Samson — Développeur web" },
      {
        name: "description",
        content:
          "Portfolio d'Aurélien Samson, développeur web : TypeScript, React, HTML, CSS et Node.js.",
      },
      { property: "og:title", content: "Aurélien Samson — Développeur web" },
      {
        property: "og:description",
        content: "TypeScript, React, HTML, CSS, Node.js. Du navigateur au serveur, un seul écosystème.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const tools = ["Git", "Docker", "Vitest", "Playwright", "Vite", "PostgreSQL", "REST", "GraphQL"];

const principles = [
  { title: "lisibilité d'abord", body: "Le code est lu cent fois, écrit une fois. Une ligne claire vaut dix astuces." },
  { title: "le framework fait le travail", body: "Je laisse les détails d'implémentation au langage et au framework, moi je m'occupe du produit." },
  { title: "livrer petit", body: "Une fonction testée, mise en ligne, vaut mieux qu'un chef-d'œuvre en attente." },
];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden border-b">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div>
            <p className="font-mono text-sm text-primary">$ whoami</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
              Aurélien
              <br />
              <span className="text-gradient">Samson</span>
            </h1>
            <p className="caret mt-6 font-mono text-lg text-muted-foreground md:text-xl">
              Développeur web · TypeScript & React
            </p>
            <p className="mt-6 max-w-md text-muted-foreground">
              J'écris des applications web de bout en bout : TypeScript, React, HTML, CSS et Node.js.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projets"
                className="rounded-md bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary-glow"
              >
                voir mes projets →
              </Link>
              <a
                href="mailto:contact@example.com"
                className="rounded-md border px-6 py-3 font-mono text-sm text-foreground transition hover:border-primary hover:text-primary"
              >
                me contacter
              </a>
            </div>
          </div>
        </div>

        <div className="relative border-t bg-editor/70">
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4 font-mono text-xs text-muted-foreground">
            {languages.map((l) => (
              <li key={l.id} className="flex items-center gap-2" style={langVar(l.id)}>
                <span className="h-2 w-2 rounded-full bg-[var(--lang)]" />
                <span className="text-[var(--lang)]">{l.name}</span>
              </li>
            ))}
            <li className="ml-auto text-muted-foreground/70">un seul langage, du navigateur au serveur</li>
          </ul>
        </div>
      </section>

      <section className="bg-grid border-t">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-mono text-sm text-primary">// à propos</h2>
            <p className="mt-4 text-2xl leading-relaxed">
              Je conçois des applications web et des outils : React et TypeScript côté interface, Node.js côté API, HTML
              et CSS pour une mise en page soignée.
            </p>
            <ul className="mt-8 space-y-3 font-mono text-sm text-muted-foreground">
              <li>→ des interfaces et des API écrites dans le même langage</li>
              <li>→ des scripts qui remplacent une journée de manuel</li>
              <li>→ des requêtes lisibles avant d'être rapides</li>
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-sm text-primary">// langages</h2>
            <ul className="mt-6 space-y-5">
              {languages.map((l) => (
                <li key={l.id} style={langVar(l.id)}>
                  <div className="flex items-baseline justify-between gap-4 font-mono text-sm">
                    <span className="text-[var(--lang)]">{l.name}</span>
                    <span className="text-xs text-muted-foreground">{l.note}</span>
                  </div>
                  <div className="mt-2 flex gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={
                          "h-1.5 flex-1 rounded-full " +
                          (i < l.level ? "bg-[var(--lang)]" : "bg-muted")
                        }
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-mono text-sm text-primary">// principes</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {principles.map((pr) => (
              <div key={pr.title} className="rounded-lg border bg-card p-6 transition hover:border-primary hover:shadow-glow">
                <h3 className="font-mono text-base font-semibold text-foreground">{pr.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pr.body}</p>
              </div>
            ))}
          </div>
          <h2 className="mt-16 font-mono text-sm text-primary">// outillage</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {tools.map((s) => (
              <li key={s} className="rounded-md border bg-card px-4 py-2 font-mono text-sm">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aurélien Samson
      </footer>
    </div>
  );
}
