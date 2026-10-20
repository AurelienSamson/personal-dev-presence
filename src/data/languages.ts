import type { CSSProperties } from "react";

export type LanguageId = "typescript" | "react" | "html" | "css" | "node";

export type Language = {
  id: LanguageId;
  name: string;
  level: number;
  note: string;
};

export const languages: [Language, ...Language[]] = [
  { id: "typescript", name: "TypeScript", level: 5, note: "front et back typés" },
  { id: "react", name: "React", level: 5, note: "interfaces vivantes" },
  { id: "html", name: "HTML", level: 4, note: "sémantique et accessible" },
  { id: "css", name: "CSS", level: 4, note: "mise en page soignée" },
  { id: "node", name: "Node.js", level: 4, note: "API et outils" },
];

export function langVar(id: string): CSSProperties {
  return { "--lang": `var(--color-lang-${id})` } as CSSProperties;
}

export function langIdFor(tag: string): string | null {
  const id = tag.toLowerCase().replace(/\.[a-z]+$/, "");
  return languages.some((l) => l.id === id) ? id : null;
}
