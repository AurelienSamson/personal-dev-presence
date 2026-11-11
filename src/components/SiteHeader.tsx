import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  const link = "text-sm text-muted-foreground transition-colors hover:text-primary";
  return (
    <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="font-mono text-sm font-bold text-primary">
          aurelien.dev
        </Link>
        <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 sm:gap-6">
          <Link
            to="/"
            className={link}
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Accueil
          </Link>
          <Link to="/projets" className={link} activeProps={{ className: "text-primary" }}>
            Projets
          </Link>
          <Link to="/a-propos" className={link} activeProps={{ className: "text-primary" }}>À propos</Link>
        </div>
      </nav>
    </header>
  );
}
