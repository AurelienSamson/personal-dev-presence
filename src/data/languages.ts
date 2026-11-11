import type { CSSProperties } from "react";

export type LanguageId = "typescript" | "react" | "html" | "css" | "node";

export type Language = {
  id: LanguageId;
  name: string;
  note: string;
};

export const languages: [Language, ...Language[]] = [
  { id: "typescript", name: "TypeScript", note: "front et back typés" },
  { id: "react", name: "React", note: "interfaces vivantes" },
  { id: "html", name: "HTML", note: "sémantique et accessible" },
  { id: "css", name: "CSS", note: "mise en page soignée" },
  { id: "node", name: "Node.js", note: "API et outils" },
];

export function langVar(id: string): CSSProperties {
  return { "--lang": `var(--color-lang-${id})` } as CSSProperties;
}

export function langIdFor(tag: string): string | null {
  const id = tag.toLowerCase().replace(/\.[a-z]+$/, "");
  return languages.some((l) => l.id === id) ? id : null;
}
