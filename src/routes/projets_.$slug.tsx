import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import projects from "@/data/projects.json";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactLinks } from "@/components/ContactLinks";
import { Button } from "@/components/ui/button";
import { langIdFor, langVar } from "@/data/languages";

export const Route = createFileRoute("/projets_/$slug")({
  loader: ({ params }) => {
    const project = projects.find(p => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.title} (${loaderData.year}) — Aurélien Samson` : "Projet indisponible — Aurélien Samson" },
    { name: "description", content: loaderData?.desc ?? "Ce projet est indisponible." },
    { property: "og:title", content: loaderData ? `${loaderData.title} (${loaderData.year}) — Aurélien Samson` : "Projet indisponible — Aurélien Samson" },
    { property: "og:description", content: loaderData?.desc ?? "Ce projet est indisponible." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    ...(!loaderData ? [{ name: "robots", content: "noindex" }] : []),
  ] }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  return <div className="min-h-screen bg-aurora-soft">
    <SiteHeader />
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Button asChild variant="link" className="px-0"><Link to="/projets"><ArrowLeft />Tous les projets</Link></Button>
      <p className="mt-12 text-primary">{project.year}</p>
      <h1 className="mt-4 text-4xl font-bold md:text-6xl">{project.title}</h1>
      <p className="mt-6 text-xl leading-relaxed text-muted-foreground">{project.desc}</p>
      <ul className="mt-6 flex flex-wrap gap-4">{project.tags.map(tag => {
        const id = langIdFor(tag);
        return <li key={tag} style={id ? langVar(id) : undefined} className={id ? "text-sm text-[var(--lang)]" : "text-sm text-muted-foreground"}>{tag}</li>;
      })}</ul>
      <div className="mt-8 flex flex-wrap gap-3">
        {project.demoUrl ? <Button asChild><a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Voir le site <ArrowUpRight /></a></Button> : null}
        {project.sourceUrl ? <Button asChild variant="outline"><a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Code source <ArrowUpRight /></a></Button> : null}
      </div>
      {[{ title: "Contexte", body: project.context }, { title: "Réalisation", body: project.approach }, { title: "Résultats et enseignements", body: project.result }].map(section => <section key={section.title} className="mt-12 border-t pt-8"><h2 className="text-2xl font-semibold">{section.title}</h2><p className="mt-4 leading-relaxed text-muted-foreground">{section.body}</p></section>)}
      <div className="mt-16 border-t pt-8"><ContactLinks /></div>
    </main>
  </div>;
}