globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BtOBAA8j.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrEYcvRF.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CNmfMpJ1.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const comparisons = [
    {
      title: "Top 10 Alternatives \xE0 Notion",
      description: "D\xE9couvrez les meilleurs outils pour remplacer Notion en 2026.",
      slug: "top-10-alternatives-notion",
      category: "Productivit\xE9",
      rating: 4.8
    },
    {
      title: "Meilleures Alternatives \xE0 Trello",
      description: "Comparez les 10 meilleures alternatives \xE0 Trello.",
      slug: "meilleures-alternatives-trello",
      category: "Gestion de Projet",
      rating: 4.7
    },
    {
      title: "Alternatives \xE0 Photoshop",
      description: "Les meilleurs outils de retouche photo gratuits et payants.",
      slug: "alternatives-photoshop",
      category: "Design",
      rating: 4.6
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tous les Comparatifs - Alternative Logiciel", "description": "D\xE9couvrez tous nos comparatifs de logiciels et trouvez les meilleures alternatives." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-24 pb-12 px-4"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold mb-4">Tous les Comparatifs</h1> <p class="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
Nos analyses détaillées pour vous aider à choisir le meilleur logiciel
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${comparisons.map((comparison) => renderTemplate`<article class="glass-card overflow-hidden group"> <a${addAttribute(`/comparatifs/${comparison.slug}`, "href")} class="block p-6"> <div class="flex items-start justify-between mb-4"> <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400"> ${comparison.category} </span> <span class="flex items-center text-yellow-400 text-sm">
★ ${comparison.rating} </span> </div> <h2 class="text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-purple-400 transition-colors"> ${comparison.title} </h2> <p class="text-[var(--color-text-secondary)] text-sm mb-4"> ${comparison.description} </p> <span class="text-sm font-medium text-purple-400 group-hover:translate-x-1 transition-transform inline-block">
Lire le comparatif →
</span> </a> </article>`)} </div> </div> </div> ` })}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/comparatifs/index.astro", void 0);

const $$file = "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/comparatifs/index.astro";
const $$url = "/comparatifs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
