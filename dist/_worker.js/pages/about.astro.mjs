globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BtOBAA8j.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrEYcvRF.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CNmfMpJ1.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\xC0 Propos - Alternative Logiciel", "description": "D\xE9couvrez qui se cache derri\xE8re Alternative Logiciel et notre mission." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-24 pb-12 px-4"> <div class="max-w-3xl mx-auto"> <h1 class="text-4xl font-bold mb-6">À Propos</h1> <div class="glass-card p-8 mb-8"> <h2 class="text-2xl font-semibold mb-4">Notre Mission</h2> <p class="text-[var(--color-text-secondary)] mb-4">
Alternative Logiciel est né d'un constat simple : trouver une alternative à un logiciel populaire 
          peut être un parcours du combattant. Entre les solutions open-source méconnues, les outils émergents 
          et les options économiques, il est difficile de s'y retrouver.
</p> <p class="text-[var(--color-text-secondary)]">
Notre mission est de vous aider à découvrir les meilleures alternatives aux logiciels populaires, 
          avec des comparatifs honnêtes, détaillés et actualisés.
</p> </div> <div class="glass-card p-8 mb-8"> <h2 class="text-2xl font-semibold mb-4">Pourquoi nous faire confiance ?</h2> <ul class="space-y-3 text-[var(--color-text-secondary)]"> <li class="flex items-start"> <span class="text-green-400 mr-2">✓</span> <span>Comparatifs indépendants - aucune rémunération des éditeurs</span> </li> <li class="flex items-start"> <span class="text-green-400 mr-2">✓</span> <span>Tests réels et approfondis de chaque logiciel</span> </li> <li class="flex items-start"> <span class="text-green-400 mr-2">✓</span> <span>Mise à jour régulière de nos recommandations</span> </li> <li class="flex items-start"> <span class="text-green-400 mr-2">✓</span> <span>Focus sur la qualité, pas la quantité</span> </li> </ul> </div> <div class="glass-card p-8"> <h2 class="text-2xl font-semibold mb-4">Contact</h2> <p class="text-[var(--color-text-secondary)] mb-4">
Une suggestion ? Une question ? N'hésitez pas à nous contacter :
</p> <a href="mailto:esl.agentsa@gmail.com" class="text-purple-400 hover:text-purple-300">
esl.agentsa@gmail.com
</a> </div> </div> </div> ` })}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/about.astro", void 0);

const $$file = "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
