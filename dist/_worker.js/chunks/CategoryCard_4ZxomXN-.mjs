globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, k as renderComponent, r as renderTemplate } from './astro/server_BtOBAA8j.mjs';
/* empty css                         */
import { A as ArrowRight } from './Layout_CrEYcvRF.mjs';

const $$Astro = createAstro("https://alternative-logiciel.pages.dev");
const $$CategoryCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryCard;
  const { name, description, slug, icon: Icon, color, count } = Astro2.props;
  const colorClasses = {
    violet: { bg: "bg-violet-500/10", text: "text-violet-400", gradient: "from-violet-500 to-purple-500" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-400", gradient: "from-blue-500 to-cyan-500" },
    green: { bg: "bg-green-500/10", text: "text-green-400", gradient: "from-green-500 to-emerald-500" },
    orange: { bg: "bg-orange-500/10", text: "text-orange-400", gradient: "from-orange-500 to-amber-500" },
    pink: { bg: "bg-pink-500/10", text: "text-pink-400", gradient: "from-pink-500 to-rose-500" },
    red: { bg: "bg-red-500/10", text: "text-red-400", gradient: "from-red-500 to-orange-500" },
    yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", gradient: "from-yellow-500 to-amber-500" },
    cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", gradient: "from-cyan-500 to-blue-500" }
  };
  const colors = colorClasses[color] || colorClasses.violet;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/categories/${slug}`, "href")} class="group relative glass-card p-6 lg:p-8 overflow-hidden" data-astro-cid-d242pyyr> <!-- Background gradient on hover --> <div${addAttribute([
    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
    colors.gradient
  ], "class:list")} data-astro-cid-d242pyyr></div> <div class="relative" data-astro-cid-d242pyyr> <!-- Icon --> <div${addAttribute([
    "w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110",
    colors.bg
  ], "class:list")} data-astro-cid-d242pyyr> ${renderComponent($$result, "Icon", Icon, { "class:list": [colors.text], "size": 28, "data-astro-cid-d242pyyr": true })} </div> <!-- Content --> <h3 class="text-xl font-bold text-[var(--color-text-primary)] mb-2 group-hover:text-primary-400 transition-colors duration-300" data-astro-cid-d242pyyr> ${name} </h3> <p class="text-[var(--color-text-secondary)] text-sm mb-4 line-clamp-2" data-astro-cid-d242pyyr> ${description} </p> <!-- Footer --> <div class="flex items-center justify-between" data-astro-cid-d242pyyr> <span class="text-sm text-[var(--color-text-muted)]" data-astro-cid-d242pyyr> ${count} comparatif${count > 1 ? "s" : ""} </span> <span${addAttribute([
    "inline-flex items-center text-sm font-medium transition-all duration-300",
    colors.text,
    "group-hover:translate-x-1"
  ], "class:list")} data-astro-cid-d242pyyr>
Explorer
${renderComponent($$result, "ArrowRight", ArrowRight, { "size": 16, "class": "ml-1", "data-astro-cid-d242pyyr": true })} </span> </div> </div> <!-- Decorative corner --> <div${addAttribute([
    "absolute -bottom-4 -right-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500",
    colors.bg
  ], "class:list")} data-astro-cid-d242pyyr></div> </a> `;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/components/CategoryCard.astro", void 0);

export { $$CategoryCard as $ };
