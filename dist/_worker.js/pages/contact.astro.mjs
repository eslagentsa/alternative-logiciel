globalThis.process ??= {}; globalThis.process.env ??= {};
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BtOBAA8j.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrEYcvRF.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CNmfMpJ1.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - Alternative Logiciel", "description": "Contactez l'\xE9quipe Alternative Logiciel pour toute suggestion ou question." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="pt-24 pb-12 px-4"> <div class="max-w-2xl mx-auto"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold mb-4">Contact</h1> <p class="text-[var(--color-text-secondary)]">
Une question, une suggestion ou un partenariat ? Écrivez-nous !
</p> </div> <div class="glass-card p-8"> <form class="space-y-6" onsubmit="event.preventDefault(); alert('Message envoyé !');"> <div> <label class="block text-sm font-medium mb-2">Nom</label> <input type="text" class="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-purple-500" placeholder="Votre nom"> </div> <div> <label class="block text-sm font-medium mb-2">Email</label> <input type="email" class="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-purple-500" placeholder="votre@email.com"> </div> <div> <label class="block text-sm font-medium mb-2">Sujet</label> <select class="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-purple-500"> <option>Suggestion de logiciel</option> <option>Demande de partenariat</option> <option>Signalement d'erreur</option> <option>Autre</option> </select> </div> <div> <label class="block text-sm font-medium mb-2">Message</label> <textarea rows="5" class="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-tertiary)] border border-[var(--color-border)] text-[var(--color-text-primary)] focus:outline-none focus:border-purple-500 resize-none" placeholder="Votre message..."></textarea> </div> <button type="submit" class="w-full py-3 px-6 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-500 transition-colors">
Envoyer le message
</button> </form> <div class="mt-8 pt-8 border-t border-[var(--color-border)] text-center"> <p class="text-[var(--color-text-secondary)] text-sm">
Ou contactez-nous directement par email :
</p> <a href="mailto:esl.agentsa@gmail.com" class="text-purple-400 hover:text-purple-300 mt-2 inline-block">
esl.agentsa@gmail.com
</a> </div> </div> </div> </div> ` })}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/contact.astro", void 0);

const $$file = "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
