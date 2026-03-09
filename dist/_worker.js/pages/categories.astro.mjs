globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BtOBAA8j.mjs';
import { $ as $$Layout, c as categories } from '../chunks/Layout_CrEYcvRF.mjs';
import { $ as $$CategoryCard } from '../chunks/CategoryCard_4ZxomXN-.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CNmfMpJ1.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cat\xE9gories - Alternative Logiciel", "description": "Parcourez les cat\xE9gories de logiciels et trouvez des alternatives adapt\xE9es \xE0 vos besoins." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-24 pb-12 px-4"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold mb-4">Catégories</h1> <p class="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
Choisissez une catégorie pour découvrir les meilleures alternatives aux logiciels populaires
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${categories.map((category) => renderTemplate`${renderComponent($$result2, "CategoryCard", $$CategoryCard, { ...category })}`)} </div> </div> </div> ` })}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/categories/index.astro", void 0);

const $$file = "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
