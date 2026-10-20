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

export type LanguageId = "typescript" | "react" | "html" | "css" | "node";

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
    id: "typescript",
    name: "TypeScript",
    file: "aurelien.ts",
    level: 5,
    note: "front et back typés",
    snippet: [
      [c("// typé de bout en bout")],
      [k("type "), t("Projet"), p(" = { "), t("id"), p(": "), t("string"), p("; "), t("enLigne"), p(": "), t("boolean"), p(" };")],
      [],
      [k("const "), t("aurelien"), p(" = {")],
      [
        p("  "),
        t("stack"),
        p(": ["),
        s('"TypeScript"'),
        p(", "),
        s('"React"'),
        p(", "),
        s('"Node.js"'),
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
    id: "react",
    name: "React",
    file: "aurelien.tsx",
    level: 5,
    note: "interfaces vivantes",
    snippet: [
      [c("// une interface, un composant")],
      [k("function "), f("Profil"), p("({ "), t("nom"), p(" }: { "), t("nom"), p(": "), t("string"), p(" }) {")],
      [p("  "), k("const "), p("[ "), t("enLigne"), p(", "), f("setEnLigne"), p(" ] = "), f("useState"), p("("), n("true"), p(");")],
      [],
      [p("  "), k("return "), p("(")],
      [p("    "), k("<article>"), p("{"), c("/* le rendu suit l'état */"), p("}")],
      [p("      "), k("<h1>"), p("Bonjour, {"), t("nom"), p("}"), k("</h1>")],
      [p("      "), k("<button"), p(" "), t("onClick"), p("={() => "), f("setEnLigne"), p("("), n("false"), p(")}>me contacter"), k("</button>")],
      [p("    "), k("</article>")],
      [p("  "), p(");")],
      [p("}")],
    ],
  },
  {
    id: "html",
    name: "HTML",
    file: "aurelien.html",
    level: 4,
    note: "sémantique et accessible",
    snippet: [
      [c("<!-- la structure avant le style -->")],
      [k("<section"), p(" "), t("class"), p("="), s('"hero"'), k(">")],
      [p("  "), k("<h1>"), p("Aurélien Samson"), k("</h1>")],
      [p("  "), k("<p>"), p("Développeur web — TypeScript & React"), k("</p>")],
      [p("  "), k("<a"), p(" "), t("href"), p("="), s('"#projets"'), k(">"), p("voir mes projets"), k("</a>")],
      [k("</section>")],
    ],
  },
  {
    id: "css",
    name: "CSS",
    file: "aurelien.css",
    level: 4,
    note: "mise en page soignée",
    snippet: [
      [c("/* chaque pixel a une raison */")],
      [t(".hero"), p(" {")],
      [p("  "), t("display"), p(": "), t("grid"), p(";")],
      [p("  "), t("gap"), p(": "), f("var"), p("("), s("--espace"), p(");")],
      [p("  "), t("color"), p(": "), f("var"), p("("), s("--texte"), p(");")],
      [p("}")],
      [],
      [t(".hero__titre:hover"), p(" {")],
      [p("  "), t("color"), p(": "), f("var"), p("("), s("--accent"), p(");")],
      [p("}")],
    ],
  },
  {
    id: "node",
    name: "Node.js",
    file: "api.ts",
    level: 4,
    note: "API et outils",
    snippet: [
      [c("// le serveur, sans douleur")],
      [k("import "), p("{ "), t("serveur"), p(" } "), k("from "), s('"./http"'), p(";")],
      [],
      [t("serveur"), p("."), f("get"), p("("), s('"/api/projets"'), p(", "), k("async "), p("("), t("req"), p(") => {")],
      [p("  "), k("const "), t("projets"), p(" = "), k("await "), t("db"), p("."), t("projets"), p("."), f("liste"), p("();")],
      [p("  "), k("return "), t("reponse"), p("."), f("json"), p("("), t("projets"), p(");")],
      [p("});")],
    ],
  },
];

export function langVar(id: string): CSSProperties {
  return { "--lang": `var(--color-lang-${id})` } as CSSProperties;
}

export function langIdFor(tag: string): string | null {
  const id = tag.toLowerCase().replace(/\.[a-z]+$/, "");
  return languages.some((l) => l.id === id) ? id : null;
}
