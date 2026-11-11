<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The language list lives in `src/data/languages.ts`; the hero strip, the technology contexts and the project tags all read from it, so add or edit a language there rather than hardcoding one in a page.
- Visual identity is a dark theme driven by the `--lang-*` language accents and the shadcn theme tokens in `src/styles.css`; use those semantic tokens instead of raw colors so every surface keeps the same palette.
- Navigation labels are plain French words (Accueil, Projets) with no file-extension or shell-prompt styling in the header.
- Section backgrounds are soft colour halos built from the `--lang-*` accents (`bg-aurora`, `bg-aurora-soft`, `aurora-drift`); never a grid, graph-paper or terminal-style rule pattern.

- Project content lives in `src/data/projects.json`; list and detail pages read that single source to stay synchronized.
- Project detail routes use `projets_.$slug.tsx` to render independently of the list page.
- Contact and optional CV links use `src/data/contact.ts`; hide absent URLs rather than creating dead links.
