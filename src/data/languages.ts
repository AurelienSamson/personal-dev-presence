import type { CSSProperties } from "react";

export type TokenKind = "kw" | "str" | "fn" | "com" | "num" | "type" | "plain";
export type Token = [kind: TokenKind, text: string];

const k = (text: string): Token => ["kw", text];
const s = (text: string): Token => ["str", text];
const f = (text: string): Token => ["fn", text];
const c = (text: string): Token => ["com", text];
const n = (text: string): Token => ["num", text];
const t = (text: string): Token => ["type", text];
const p = (text: string): Token => ["plain", text];

export type LanguageId = "python" | "typescript" | "ruby" | "go" | "sql";

export type Language = {
  id: LanguageId;
  name: string;
  file: string;
  level: number;
  note: string;
  snippet: Token[][];
};

export const languages: [Language, ...Language[]] = [
  {
    id: "python",
    name: "Python",
    file: "aurelien.py",
    level: 5,
    note: "API, scripts, data",
    snippet: [
      [c("# développeur de haut niveau — Aurélien Samson")],
      [k("class "), t("Developpeur"), p(":")],
      [
        p("    "),
        t("langages"),
        p(" = ["),
        s('"Python"'),
        p(", "),
        s('"TypeScript"'),
        p(", "),
        s('"Ruby"'),
        p("]"),
      ],
      [],
      [p("    "), k("def "), f("livrer"), p("("), t("self"), p(", "), t("idee"), p("):")],
      [p("        "), s('"""moins de lignes, plus de produit"""')],
      [
        p("        "),
        k("return "),
        f("deployer"),
        p("("),
        t("idee"),
        p(", "),
        t("tests"),
        p("="),
        n("True"),
        p(")"),
      ],
      [],
      [t("moi"), p(" = "), f("Developpeur"), p("()")],
      [t("moi"), p("."), f("livrer"), p("("), s('"une API qui répond en 80 ms"'), p(")")],
    ],
  },
  {
    id: "typescript",
    name: "TypeScript",
    file: "aurelien.ts",
    level: 5,
    note: "front et back typés",
    snippet: [
      [k("type "), t("Projet"), p(" = { "), t("id"), p(": "), t("string"), p("; "), t("enLigne"), p(": "), t("boolean"), p(" };")],
      [],
      [k("const "), t("aurelien"), p(" = {")],
      [
        p("  "),
        t("langages"),
        p(": ["),
        s('"TypeScript"'),
        p(", "),
        s('"Python"'),
        p(", "),
        s('"Ruby"'),
        p("] "),
        k("as const"),
        p(","),
      ],
      [p("  "), t("style"), p(": "), s('"explicite, typé, lisible"'), p(",")],
      [p("};")],
      [],
      [k("export async function "), f("livrer"), p("("), t("p"), p(": "), t("Projet"), p("): "), t("Promise"), p("<"), t("string"), p("> {")],
      [p("  "), k("await "), f("verifier"), p("("), t("p"), p(");")],
      [p("  "), k("return "), s("`déployé : ${p.id}`"), p(";")],
      [p("}")],
    ],
  },
  {
    id: "ruby",
    name: "Ruby",
    file: "aurelien.rb",
    level: 3,
    note: "concis, agréable",
    snippet: [
      [c("# le code se lit comme une phrase")],
      [k("class "), t("Developpeur")],
      [p("  "), t("LANGAGES"), p(" = "), s("%w[Ruby Python TypeScript]")],
      [],
      [p("  "), k("def "), f("ecrire"), p("("), t("idee"), p(")")],
      [p("    "), t("idee")],
      [p("      .nettoyer")],
      [p("      .tester")],
      [p("      .publier")],
      [p("  "), k("end")],
      [k("end")],
      [],
      [t("Developpeur"), p(".new."), f("ecrire"), p("("), s('"un CLI qui fait gagner 2 h"'), p(")")],
    ],
  },
  {
    id: "go",
    name: "Go",
    file: "aurelien.go",
    level: 3,
    note: "simple, rapide, déployable",
    snippet: [
      [k("package "), t("main")],
      [],
      [k("import "), s('"fmt"')],
      [],
      [c("// la mémoire est gérée : je me concentre sur le produit")],
      [k("func "), f("Livrer"), p("("), t("idee"), p(" "), t("string"), p(") "), t("string"), p(" {")],
      [p("    "), k("return "), t("fmt"), p("."), f("Sprintf"), p("("), s('"%s déployé"'), p(", "), t("idee"), p(")")],
      [p("}")],
    ],
  },
  {
    id: "sql",
    name: "SQL",
    file: "aurelien.sql",
    level: 4,
    note: "la donnée avant tout",
    snippet: [
      [c("-- la donnée avant tout")],
      [k("select "), t("langage"), p(", "), f("count"), p("(*) "), k("as "), t("lignes")],
      [k("from "), t("commits")],
      [k("where "), t("auteur"), p(" = "), s("'aurelien'")],
      [k("group by "), t("langage")],
      [k("order by "), t("lignes"), p(" "), k("desc")],
      [k("limit "), n("5"), p(";")],
    ],
  },
];

export function langVar(id: string): CSSProperties {
  return { "--lang": `var(--color-lang-${id})` } as CSSProperties;
}

export function langIdFor(tag: string): string | null {
  const id = tag.toLowerCase();
  return languages.some((l) => l.id === id) ? id : null;
}
