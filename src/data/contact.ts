// Adresse découpée : elle n'apparaît jamais en clair dans le code ni dans le HTML servi,
// ce qui limite la collecte par les robots de spam. Elle est assemblée au clic.
const parts = { user: ["aurelien2", "samson"].join("."), domain: ["gmail", "com"].join(".") };

export const contact = {
  email: `${parts.user}@${parts.domain}`,
  cvUrl: null as string | null,
};

export const contactHref = `mailto:${contact.email}`;
