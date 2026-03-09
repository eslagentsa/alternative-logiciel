globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, m as maybeRenderHead, k as renderComponent, h as addAttribute, r as renderTemplate } from '../chunks/astro/server_BtOBAA8j.mjs';
import { a as createLucideIcon, S as Search, $ as $$Layout, c as categories } from '../chunks/Layout_CrEYcvRF.mjs';
import { $ as $$CategoryCard } from '../chunks/CategoryCard_4ZxomXN-.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CNmfMpJ1.mjs';

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
];
const Sparkles = createLucideIcon("Sparkles", __iconNode);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"> <!-- Animated gradient background --> <div class="absolute inset-0 gradient-bg"></div> <!-- Grid pattern overlay --> <div class="absolute inset-0 grid-pattern opacity-20"></div> <!-- Floating orbs --> <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl animate-float"></div> <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div> <div class="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-float" style="animation-delay: -6s;"></div> <!-- Content --> <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <!-- Badge --> <div class="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8 fade-in"> ${renderComponent($$result, "Sparkles", Sparkles, { "class": "text-yellow-400", "size": 16 })} <span class="text-sm font-medium text-[var(--color-text-primary)]">
Plus de 100 comparatifs de logiciels
</span> </div> <!-- Main heading --> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight fade-in" style="animation-delay: 0.1s;">
Trouvez la <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400 glow-text">meilleure alternative</span><br>
à vos logiciels
</h1> <!-- Subtitle --> <p class="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 fade-in" style="animation-delay: 0.2s;">
Comparatifs détaillés, avis vérifiés et recommandations personnalisées pour trouver le logiciel parfait adapté à vos besoins.
</p> <!-- Search bar --> <div class="max-w-2xl mx-auto mb-12 fade-in" style="animation-delay: 0.3s;"> <div class="relative group"> <div class="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div> <form action="/recherche" method="GET" class="relative flex items-center"> ${renderComponent($$result, "Search", Search, { "class": "absolute left-5 text-[var(--color-text-muted)]", "size": 24 })} <input type="text" name="q" placeholder="Rechercher un logiciel (ex: Photoshop, Excel, Slack...)" class="w-full pl-14 pr-36 py-5 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-2xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-lg"> <button type="submit" class="absolute right-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium rounded-xl hover:from-primary-500 hover:to-accent-500 transition-all duration-300 shadow-lg shadow-primary-500/25">
Chercher
</button> </form> </div> </div> <!-- Quick links --> <div class="flex flex-wrap items-center justify-center gap-4 fade-in" style="animation-delay: 0.4s;"> <span class="text-white/60 text-sm">Populaires :</span> ${["Microsoft Office", "Adobe Photoshop", "Slack", "Zoom", "Notion"].map((item) => renderTemplate`<a${addAttribute(`/comparatifs/${item.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="px-4 py-2 glass rounded-full text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"> ${item} </a>`)} </div> <!-- Stats --> <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto fade-in" style="animation-delay: 0.5s;"> ${[
    { value: "100+", label: "Comparatifs" },
    { value: "500+", label: "Logiciels r\xE9pertori\xE9s" },
    { value: "50K+", label: "Visiteurs mensuels" },
    { value: "4.8", label: "Note moyenne" }
  ].map((stat) => renderTemplate`<div class="text-center"> <p class="text-3xl sm:text-4xl font-bold text-white mb-1">${stat.value}</p> <p class="text-white/60 text-sm">${stat.label}</p> </div>`)} </div> </div> <!-- Scroll indicator --> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"> <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"> <div class="w-1.5 h-3 bg-white/50 rounded-full animate-pulse"></div> </div> </div> </section>`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const comparisons = [
    {
      title: "Top 10 Alternatives \xE0 Notion",
      description: "D\xE9couvrez les meilleurs outils pour remplacer Notion en 2026. Comparatifs d\xE9taill\xE9s des solutions de productivit\xE9.",
      slug: "top-10-alternatives-notion",
      category: "Productivit\xE9",
      categorySlug: "productivite",
      featured: true,
      mainSoftware: {
        name: "Notion",
        description: "Outil de productivit\xE9 tout-en-un",
        price: "Gratuit / $10/mois",
        rating: 4.8
      },
      alternatives: [
        {
          name: "Obsidian",
          description: "Prise de notes en markdown avec graphe de connaissances",
          price: "Gratuit (usage personnel)",
          rating: 4.9,
          openSource: false,
          pros: ["100% offline", "Liens entre notes puissants", "Plugins communautaires"],
          cons: ["Courbe d'apprentissage", "Pas de collaboration native"]
        },
        {
          name: "Logseq",
          description: "Base de connaissances open-source",
          price: "Gratuit",
          rating: 4.7,
          openSource: true,
          pros: ["Open source", "Outliner puissant", "Graph view"],
          cons: ["Interface moins polish", "Moins d'int\xE9grations"]
        }
      ]
    },
    {
      title: "Meilleures Alternatives \xE0 Trello",
      description: "Comparez les 10 meilleures alternatives \xE0 Trello pour la gestion de projet.",
      slug: "meilleures-alternatives-trello",
      category: "Gestion de Projet",
      categorySlug: "gestion-projet",
      featured: false,
      mainSoftware: {
        name: "Trello",
        description: "Tableau Kanban simple et intuitif",
        price: "Gratuit / $5/mois",
        rating: 4.5
      },
      alternatives: [
        {
          name: "ClickUp",
          description: "Plateforme tout-en-one pour les \xE9quipes",
          price: "Gratuit / $7/mois",
          rating: 4.6,
          openSource: false,
          pros: ["Fonctionnalit\xE9s riches", "Vues multiples", "Automatisations"],
          cons: ["Interface complexe", "Peut \xEAtre lent"]
        },
        {
          name: "Focalboard",
          description: "Alternative open-source \xE0 Trello",
          price: "Gratuit / Auto-h\xE9berg\xE9",
          rating: 4.4,
          openSource: true,
          pros: ["Open source", "Auto-h\xE9bergement possible", "Similaire \xE0 Trello"],
          cons: ["Moins mature", "Communaut\xE9 plus petite"]
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alternative Logiciel - Trouvez le Meilleur Outil" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<section class="py-20 px-4"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-4">Comparatifs Populaires</h2> <p class="text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
Découvrez nos analyses détaillées des meilleures alternatives aux logiciels populaires
</p> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> ${comparisons.map((comparison) => renderTemplate`<article class="glass-card overflow-hidden group"> <a${addAttribute(`/comparatifs/${comparison.slug}`, "href")} class="block p-6 lg:p-8"> <div class="flex items-start justify-between mb-4"> <div> <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 mb-2"> ${comparison.category} </span> <h3 class="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-purple-400 transition-colors"> ${comparison.title} </h3> </div> </div> <p class="text-[var(--color-text-secondary)] mb-6"> ${comparison.description} </p> <div class="flex items-center justify-between pt-4 border-t border-[var(--color-border)]"> <span class="text-sm text-[var(--color-text-muted)]"> ${comparison.alternatives.length} alternatives testées
</span> <span class="text-sm font-medium text-purple-400 group-hover:translate-x-1 transition-transform">
Voir le comparatif →
</span> </div> </a> </article>`)} </div> <div class="text-center mt-12"> <a href="/comparatifs" class="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-colors">
Voir tous les comparatifs
</a> </div> </div> </section> <section class="py-20 px-4 bg-slate-900/50"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-4">Parcourir par Catégorie</h2> <p class="text-center text-[var(--color-text-secondary)] mb-12 max-w-2xl mx-auto">
Trouvez des alternatives adaptées à vos besoins spécifiques
</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> ${categories.map((c) => renderTemplate`${renderComponent($$result2, "CategoryCard", $$CategoryCard, { ...c })}`)} </div> </div> </section> <section class="py-20 px-4"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl font-bold mb-6">Pourquoi chercher des alternatives ?</h2> <div class="grid md:grid-cols-3 gap-8 mt-12"> <div class="glass-card p-6"> <div class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4"> <span class="text-2xl">💰</span> </div> <h3 class="font-semibold mb-2">Économisez</h3> <p class="text-sm text-[var(--color-text-secondary)]">Trouvez des solutions gratuites ou moins chères sans compromis sur la qualité.</p> </div> <div class="glass-card p-6"> <div class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4"> <span class="text-2xl">🔒</span> </div> <h3 class="font-semibold mb-2">Protégez vos données</h3> <p class="text-sm text-[var(--color-text-secondary)]">Optez pour des solutions open-source et auto-hébergées pour plus de confidentialité.</p> </div> <div class="glass-card p-6"> <div class="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4"> <span class="text-2xl">⚡</span> </div> <h3 class="font-semibold mb-2">Gagnez en performance</h3> <p class="text-sm text-[var(--color-text-secondary)]">Découvrez des outils plus légers et plus rapides que les logiciels gourmands.</p> </div> </div> </div> </section> ` })}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/index.astro", void 0);

const $$file = "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
