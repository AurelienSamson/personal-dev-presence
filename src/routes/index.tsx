import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContactLinks } from "@/components/ContactLinks";
import { ArrowRight } from "lucide-react";
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

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden border-b">
        <div className="bg-aurora aurora-drift absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
          <div>
            <p className="text-sm text-primary">Développement web</p>
            <h1 className="mt-4 text-5xl font-bold md:text-7xl">
              Aurélien
              <br />
              <span className="text-gradient">Samson</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Développeur web · TypeScript & React
            </p>
            <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
              J'écris des applications web de bout en bout : TypeScript, React, HTML, CSS et Node.js.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg"><Link to="/projets">Voir mes projets <ArrowRight /></Link></Button>
              <ContactLinks />
            </div>
          </div>
        </div>

        <div className="relative border-t bg-editor/70">
          <ul className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-3 px-6 py-4 text-xs text-muted-foreground">
            {languages.map((l) => (
              <li key={l.id} className="flex items-center gap-2" style={langVar(l.id)}>
                <span className="h-2 w-2 rounded-full bg-[var(--lang)]" />
                <span className="text-[var(--lang)]">{l.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-aurora-soft border-t">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-sm font-semibold text-primary">Outillage</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {tools.map((s) => (
              <li key={s} className="rounded-md border bg-card px-4 py-2 text-sm">{s}</li>
            ))}
          </ul>
          <Button asChild variant="link" className="mt-10 px-0"><Link to="/a-propos">Mon parcours, mon approche et mes technologies <ArrowRight /></Link></Button>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aurélien Samson
      </footer>
    </div>
  );
}
