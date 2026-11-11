import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactLinks } from "@/components/ContactLinks";
import { Button } from "@/components/ui/button";
import { languages, langVar } from "@/data/languages";

export const Route = createFileRoute("/a-propos")({
  head: () => ({ meta: [
    { title: "À propos — Aurélien Samson" },
    { name: "description", content: "L’approche d’Aurélien Samson : des applications web lisibles, soignées et livrées progressivement." },
    { property: "og:title", content: "À propos — Aurélien Samson" },
    { property: "og:description", content: "Mon approche du développement web, de l’interface aux API." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: About,
});

function About() {
  return <div className="min-h-screen bg-aurora-soft">
    <SiteHeader />
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm text-primary">À propos</p>
      <h1 className="mt-4 text-4xl font-bold md:text-6xl">Aurélien <span className="text-gradient">Samson</span></h1>
      <p className="mt-8 max-w-3xl text-2xl leading-relaxed">Je conçois des applications web et des outils : React et TypeScript côté interface, Node.js côté API, HTML et CSS pour une mise en page soignée.</p>
      <div className="mt-12"><ContactLinks /></div>
      <section className="mt-20 border-t pt-12">
        <h2 className="text-2xl font-semibold">Mon approche</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div><h3 className="text-lg text-primary">Lisibilité d’abord</h3><p className="mt-3 leading-relaxed text-muted-foreground">Le code est lu cent fois, écrit une fois. Une ligne claire vaut dix astuces.</p></div>
          <div><h3 className="text-lg text-primary">Le produit au centre</h3><p className="mt-3 leading-relaxed text-muted-foreground">Je laisse les détails d’implémentation au langage et au framework pour me concentrer sur le produit.</p></div>
          <div><h3 className="text-lg text-primary">Livrer petit</h3><p className="mt-3 leading-relaxed text-muted-foreground">Une fonction testée, mise en ligne, vaut mieux qu’un chef-d’œuvre en attente.</p></div>
        </div>
      </section>
      <section className="mt-16 border-t pt-12">
        <h2 className="text-2xl font-semibold">Mes technologies</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">{languages.map(l => <li key={l.id} style={langVar(l.id)}><h3 className="text-[var(--lang)]">{l.name}</h3><p className="mt-1 text-muted-foreground">{l.note}</p></li>)}</ul>
        <Button asChild variant="link" className="mt-8 px-0"><Link to="/projets">Voir mes projets <ArrowRight /></Link></Button>
      </section>
    </main>
  </div>;
}