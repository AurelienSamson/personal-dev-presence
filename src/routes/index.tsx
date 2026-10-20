import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurélien Samson — Développeur" },
      { name: "description", content: "Portfolio d'Aurélien Samson, développeur. Profil, compétences et parcours." },
      { property: "og:title", content: "Aurélien Samson — Développeur" },
      { property: "og:description", content: "Portfolio d'Aurélien Samson, développeur." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = ["TypeScript", "React", "Node.js", "SQL", "Git", "Docker"];

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="relative overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-44">
          <p className="font-mono text-sm text-primary">$ whoami</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Aurélien<br /><span className="text-gradient">Samson</span>
          </h1>
          <p className="caret mt-6 font-mono text-lg text-muted-foreground md:text-xl">Développeur</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/projets" className="rounded-md bg-primary px-6 py-3 font-mono text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary-glow">
              voir mes projets →
            </Link>
            <a href="mailto:contact@example.com" className="rounded-md border px-6 py-3 font-mono text-sm text-foreground transition hover:border-primary hover:text-primary">
              me contacter
            </a>
          </div>
        </div>
      </section>

      <section className="bg-grid border-t">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <h2 className="font-mono text-sm text-primary">// à propos</h2>
            <p className="mt-4 text-2xl leading-relaxed">
              Je conçois et développe des applications web soignées, du back-end à l'interface.
            </p>
          </div>
          <div>
            <h2 className="font-mono text-sm text-primary">// stack</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {skills.map((s) => (
                <li key={s} className="rounded-md border bg-card px-4 py-2 font-mono text-sm">{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <footer className="border-t py-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Aurélien Samson
      </footer>
    </div>
  );
}
