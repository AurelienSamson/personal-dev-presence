import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/projets")({
  head: () => ({
    meta: [
      { title: "Projets — Aurélien Samson" },
      { name: "description", content: "Fresque chronologique des projets d'Aurélien Samson, développeur." },
      { property: "og:title", content: "Projets — Aurélien Samson" },
      { property: "og:description", content: "Fresque chronologique des projets d'Aurélien Samson." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projets,
});

// Projets d'exemple — à remplacer
const projects = [
  { year: "2026", title: "Projet à venir", desc: "Description courte du projet, objectifs et résultat.", tags: ["React", "TypeScript"] },
  { year: "2025", title: "Projet à venir", desc: "Description courte du projet, objectifs et résultat.", tags: ["Node.js", "SQL"] },
  { year: "2024", title: "Projet à venir", desc: "Description courte du projet, objectifs et résultat.", tags: ["Docker"] },
  { year: "2023", title: "Projet à venir", desc: "Description courte du projet, objectifs et résultat.", tags: ["JavaScript"] },
];

function Projets() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-sm text-primary">$ git log --projets</p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">Fresque <span className="text-gradient">chronologique</span></h1>

        <ol className="relative mt-20">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2" />
          {projects.map((p, i) => {
            const left = i % 2 === 0;
            return (
              <li key={i} className="relative mb-16 pl-12 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                <span className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-glow md:left-1/2" />
                <div className={left ? "md:text-right" : "md:col-start-2"}>
                  <span className="font-mono text-3xl font-bold text-primary">{p.year}</span>
                  <div className="mt-3 rounded-lg border bg-card p-6 transition hover:border-primary hover:shadow-glow">
                    <h3 className="text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground">{p.desc}</p>
                    <ul className={`mt-4 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                      {p.tags.map((t) => (
                        <li key={t} className="rounded bg-secondary px-2 py-1 font-mono text-xs text-accent-foreground">{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
