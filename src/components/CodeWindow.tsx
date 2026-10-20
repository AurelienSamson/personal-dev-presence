import { useState } from "react";
import { languages, langVar, type TokenKind } from "@/data/languages";

const tokenClass: Record<TokenKind, string> = {
  kw: "text-syntax-keyword",
  str: "text-syntax-string",
  fn: "text-syntax-fn",
  com: "text-syntax-comment italic",
  num: "text-syntax-number",
  type: "text-syntax-type",
  plain: "text-syntax-plain",
};

export function CodeWindow() {
  const [activeId, setActiveId] = useState(languages[0].id);
  const active = languages.find((l) => l.id === activeId) ?? languages[0];

  return (
    <div className="overflow-hidden rounded-lg border bg-editor shadow-glow">
      <div className="flex items-center gap-1 overflow-x-auto border-b border-border/60 bg-card px-3 py-2">
        <span className="mr-2 flex shrink-0 gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-dot-close" />
          <span className="h-2.5 w-2.5 rounded-full bg-dot-min" />
          <span className="h-2.5 w-2.5 rounded-full bg-dot-max" />
        </span>
        {languages.map((l) => {
          const on = l.id === active.id;
          return (
            <button
              key={l.id}
              type="button"
              onClick={() => setActiveId(l.id)}
              style={langVar(l.id)}
              className={
                "flex shrink-0 items-center gap-2 rounded px-2.5 py-1 font-mono text-xs transition-colors " +
                (on ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground")
              }
            >
              <span className={"h-1.5 w-1.5 rounded-full bg-[var(--lang)] " + (on ? "" : "opacity-40")} />
              {l.file}
            </button>
          );
        })}
      </div>

      <div className="overflow-x-auto p-4 font-mono text-[12.5px] leading-6">
        {active.snippet.map((line, i) => (
          <div key={i} className="grid grid-cols-[2rem_1fr] gap-3">
            <span className="select-none text-right text-syntax-comment">{i + 1}</span>
            <span className="whitespace-pre text-syntax-plain">
              {line.length === 0
                ? "\u00A0"
                : line.map(([kind, text], j) => (
                    <span key={j} className={tokenClass[kind]}>
                      {text}
                    </span>
                  ))}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-border/60 bg-card px-4 py-1.5 font-mono text-[11px] text-muted-foreground">
        <span className="text-[var(--lang)]" style={langVar(active.id)}>
          {active.name}
        </span>
        <span>
          {active.snippet.length} lignes · UTF-8 · {active.file}
        </span>
      </div>
    </div>
  );
}
