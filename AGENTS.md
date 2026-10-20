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

- Language samples live as token data in `src/data/languages.ts` and are rendered by `src/components/CodeWindow.tsx`; add or edit a language there rather than hardcoding code blocks in a page, so the hero, the skills bars and the project tags stay in sync.
- Visual identity is a dark code-editor theme driven by `--syntax-*` and `--lang-*` tokens in `src/styles.css`; use those semantic tokens instead of raw colors so every surface keeps the same palette.
