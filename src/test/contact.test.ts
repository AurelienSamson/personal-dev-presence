import { describe, expect, it } from "vitest";
import { contactHref } from "@/data/contact";

describe("Contact du portfolio", () => {
  it("utilise l’adresse fournie par Aurélien", () => {
    expect(contactHref).toBe("mailto:aurelien2.samson@gmail.com");
  });
});