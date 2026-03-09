globalThis.process ??= {}; globalThis.process.env ??= {};
import { e as createAstro, f as createComponent, h as addAttribute, l as renderScript, r as renderTemplate, s as spreadAttributes, u as unescapeHTML, k as renderComponent, m as maybeRenderHead, n as renderTransition, o as renderSlot, p as renderHead } from '../chunks/astro/server_BtOBAA8j.mjs';
/* empty css                                 */
import { a as reactExports } from '../chunks/_@astro-renderers_CNmfMpJ1.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_CNmfMpJ1.mjs';

const $$Astro$c = createAstro("https://alternative-logiciel.pages.dev");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$b = createAstro("https://alternative-logiciel.pages.dev");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$a = createAstro("https://alternative-logiciel.pages.dev");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$9 = createAstro("https://alternative-logiciel.pages.dev");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$8 = createAstro("https://alternative-logiciel.pages.dev");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$7 = createAstro("https://alternative-logiciel.pages.dev");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$6 = createAstro("https://alternative-logiciel.pages.dev");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$5 = createAstro("https://alternative-logiciel.pages.dev");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$4 = createAstro("https://alternative-logiciel.pages.dev");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro-seo/src/SEO.astro", void 0);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return reactExports.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$m = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("ArrowRight", __iconNode$m);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$l = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("Briefcase", __iconNode$l);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$k = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("Check", __iconNode$k);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$j = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
];
const Cloud = createLucideIcon("Cloud", __iconNode$j);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$i = [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }]
];
const Code = createLucideIcon("Code", __iconNode$i);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$h = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("ExternalLink", __iconNode$h);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$g = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("Github", __iconNode$g);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$f = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("Heart", __iconNode$f);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$e = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f"
    }
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }]
];
const Linkedin = createLucideIcon("Linkedin", __iconNode$e);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$d = [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }]
];
const Mail = createLucideIcon("Mail", __iconNode$d);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$c = [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }]
];
const Menu = createLucideIcon("Menu", __iconNode$c);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$b = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("MessageCircle", __iconNode$b);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$a = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
];
const Moon = createLucideIcon("Moon", __iconNode$a);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$9 = [
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  [
    "path",
    {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",
      key: "12rzf8"
    }
  ]
];
const Palette = createLucideIcon("Palette", __iconNode$9);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$8 = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
const Play = createLucideIcon("Play", __iconNode$8);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$7 = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
];
const Search = createLucideIcon("Search", __iconNode$7);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$6 = [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("Settings", __iconNode$6);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$5 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("Shield", __iconNode$5);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$4 = [
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
const Sparkles = createLucideIcon("Sparkles", __iconNode$4);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$3 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("Star", __iconNode$3);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("Sun", __iconNode$2);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode$1 = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
];
const Twitter = createLucideIcon("Twitter", __iconNode$1);

/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */


const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("X", __iconNode);

const categories = [
  {
    slug: "bureautique",
    name: "Bureautique",
    description: "Alternatives aux suites bureautiques pour la productivité quotidienne",
    icon: Briefcase,
    color: "blue",
    count: 12
  },
  {
    slug: "creativite",
    name: "Créativité",
    description: "Logiciels de design, montage vidéo et création graphique",
    icon: Palette,
    color: "pink",
    count: 15
  },
  {
    slug: "developpement",
    name: "Développement",
    description: "IDE, éditeurs de code et outils de développement",
    icon: Code,
    color: "violet",
    count: 18
  },
  {
    slug: "communication",
    name: "Communication",
    description: "Messagerie, visioconférence et outils collaboratifs",
    icon: MessageCircle,
    color: "green",
    count: 10
  },
  {
    slug: "multimedia",
    name: "Multimédia",
    description: "Lecteurs multimédia, streaming et gestion de médias",
    icon: Play,
    color: "red",
    count: 8
  },
  {
    slug: "securite",
    name: "Sécurité",
    description: "Antivirus, VPN et outils de protection de la vie privée",
    icon: Shield,
    color: "cyan",
    count: 9
  },
  {
    slug: "systeme",
    name: "Système",
    description: "Utilitaires système et optimisation PC",
    icon: Settings,
    color: "orange",
    count: 14
  },
  {
    slug: "cloud",
    name: "Cloud & Stockage",
    description: "Solutions de stockage cloud et synchronisation",
    icon: Cloud,
    color: "blue",
    count: 11
  }
];
categories.filter((c) => ["developpement", "bureautique", "creativite", "communication"].includes(c.slug));

const $$Astro$3 = createAstro("https://alternative-logiciel.pages.dev");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/categories", label: "Cat\xE9gories" },
    { href: "/comparatifs", label: "Comparatifs" },
    { href: "/about", label: "\xC0 propos" },
    { href: "/contact", label: "Contact" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 right-0 z-50 glass-nav"> <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex items-center justify-between h-16 lg:h-20"> <!-- Logo --> <a href="/" class="flex items-center space-x-3 group"${addAttribute(renderTransition($$result, "cuzixibf", "", "logo"), "data-astro-transition-scope")}> <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"> <span class="text-white font-bold text-lg">AL</span> </div> <span class="font-bold text-xl hidden sm:block gradient-text">
Alternative Logiciel
</span> </a> <!-- Desktop Navigation --> <div class="hidden lg:flex items-center space-x-1"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 animated-underline",
    currentPath === link.href ? "text-primary-400 bg-primary-500/10" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]"
  ], "class:list")}> ${link.label} </a>`)} <!-- Categories Dropdown --> <div class="relative group"> <button class="px-4 py-2 rounded-lg text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300 flex items-center space-x-1"> <span>Catégories</span> <svg class="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div class="absolute top-full left-0 mt-2 w-64 glass rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top"> <div class="p-4 space-y-2"> ${categories.slice(0, 6).map((cat) => renderTemplate`<a${addAttribute(`/categories/${cat.slug}`, "href")} class="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary-500/10 transition-colors duration-200"> <div${addAttribute(`w-10 h-10 rounded-lg bg-${cat.color}-500/20 flex items-center justify-center`, "class")}> <span${addAttribute(`text-${cat.color}-400`, "class")}> ${renderComponent($$result, "cat.icon", cat.icon, { "size": 20 })} </span> </div> <div> <p class="font-medium text-sm text-[var(--color-text-primary)]">${cat.name}</p> <p class="text-xs text-[var(--color-text-muted)]">${cat.count} comparatifs</p> </div> </a>`)} <a href="/categories" class="block text-center text-sm text-primary-400 hover:text-primary-300 pt-2 border-t border-[var(--color-border)]">
Voir toutes les catégories →
</a> </div> </div> </div> </div> <!-- Right Actions --> <div class="flex items-center space-x-2"> <!-- Search Button --> <button class="p-2 rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300" aria-label="Rechercher"> ${renderComponent($$result, "Search", Search, { "size": 20 })} </button> <!-- Theme Toggle --> <button data-theme-toggle class="p-2 rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300" aria-label="Changer de thème"> <span class="dark:hidden"> ${renderComponent($$result, "Moon", Moon, { "size": 20 })} </span> <span class="hidden dark:block"> ${renderComponent($$result, "Sun", Sun, { "size": 20 })} </span> </button> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="lg:hidden p-2 rounded-xl text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)] transition-all duration-300" aria-label="Menu"> ${renderComponent($$result, "Menu", Menu, { "size": 24, "class": "menu-open" })} ${renderComponent($$result, "X", X, { "size": 24, "class": "menu-close hidden" })} </button> </div> </div> </nav> <!-- Mobile Menu --> <div id="mobile-menu" class="lg:hidden hidden glass border-t border-[var(--color-border)]"> <div class="px-4 py-4 space-y-2"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute([
    "block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200",
    currentPath === link.href ? "text-primary-400 bg-primary-500/10" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-tertiary)]"
  ], "class:list")}> ${link.label} </a>`)} <div class="pt-4 border-t border-[var(--color-border)]"> <p class="px-4 text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
Catégories populaires
</p> ${categories.slice(0, 4).map((cat) => renderTemplate`<a${addAttribute(`/categories/${cat.slug}`, "href")} class="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-[var(--color-bg-tertiary)] transition-colors duration-200"> <span${addAttribute(`text-${cat.color}-400`, "class")}> ${renderComponent($$result, "cat.icon", cat.icon, { "size": 18 })} </span> <span class="text-[var(--color-text-secondary)]">${cat.name}</span> </a>`)} </div> </div> </div> </header> ${renderScript($$result, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/components/Navbar.astro", "self");

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const footerLinks = {
    navigation: [
      { label: "Accueil", href: "/" },
      { label: "Cat\xE9gories", href: "/categories" },
      { label: "Comparatifs", href: "/comparatifs" },
      { label: "\xC0 propos", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    legal: [
      { label: "Mentions l\xE9gales", href: "/legal/mentions-legales" },
      { label: "Politique de confidentialit\xE9", href: "/legal/politique-confidentialite" },
      { label: "CGU", href: "/legal/cgu" }
    ]
  };
  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/alternativelogiciel", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/alternative-logiciel", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/alternative-logiciel", label: "GitHub" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative mt-20 overflow-hidden"> <!-- Background decoration --> <div class="absolute inset-0 gradient-bg opacity-5 pointer-events-none"></div> <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none"></div> <div class="relative border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50 backdrop-blur-xl"> <!-- Newsletter Section --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[var(--color-border)]"> <div class="glass rounded-3xl p-8 lg:p-12 overflow-hidden relative"> <div class="absolute inset-0 gradient-bg opacity-10"></div> <div class="relative grid lg:grid-cols-2 gap-8 items-center"> <div> <h3 class="text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
Restez informé des <span class="gradient-text">nouveaux comparatifs</span> </h3> <p class="text-[var(--color-text-secondary)] text-lg">
Recevez chaque semaine les meilleures alternatives logicielles directement dans votre boîte mail.
</p> </div> <form class="flex flex-col sm:flex-row gap-4" action="/api/newsletter" method="POST"> <div class="flex-1 relative"> ${renderComponent($$result, "Mail", Mail, { "class": "absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]", "size": 20 })} <input type="email" name="email" placeholder="votre@email.com" required class="w-full pl-12 pr-4 py-4 bg-[var(--color-bg-primary)] border border-[var(--color-border)] rounded-xl text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all duration-300"> </div> <button type="submit" class="btn-primary flex items-center justify-center space-x-2 whitespace-nowrap"> <span>S'inscrire</span> ${renderComponent($$result, "ArrowRight", ArrowRight, { "size": 18 })} </button> </form> </div> </div> </div> <!-- Main Footer Content --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12"> <!-- Brand --> <div class="col-span-2 lg:col-span-2"> <a href="/" class="flex items-center space-x-3 mb-6"> <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"> <span class="text-white font-bold text-xl">AL</span> </div> <span class="font-bold text-xl gradient-text">Alternative Logiciel</span> </a> <p class="text-[var(--color-text-secondary)] mb-6 max-w-sm">
Votre guide complet pour trouver les meilleures alternatives aux logiciels populaires. Comparatifs objectifs et avis vérifiés.
</p> <div class="flex space-x-4"> ${socialLinks.map(({ icon: Icon, href, label }) => renderTemplate`<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(label, "aria-label")} class="w-10 h-10 rounded-xl bg-[var(--color-bg-tertiary)] flex items-center justify-center text-[var(--color-text-secondary)] hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300"> ${renderComponent($$result, "Icon", Icon, { "size": 20 })} </a>`)} </div> </div> <!-- Navigation --> <div> <h4 class="font-semibold text-[var(--color-text-primary)] mb-4">Navigation</h4> <ul class="space-y-3"> ${footerLinks.navigation.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-[var(--color-text-secondary)] hover:text-primary-400 transition-colors duration-200"> ${link.label} </a> </li>`)} </ul> </div> <!-- Categories --> <div> <h4 class="font-semibold text-[var(--color-text-primary)] mb-4">Catégories</h4> <ul class="space-y-3"> ${categories.slice(0, 5).map((cat) => renderTemplate`<li> <a${addAttribute(`/categories/${cat.slug}`, "href")} class="text-[var(--color-text-secondary)] hover:text-primary-400 transition-colors duration-200"> ${cat.name} </a> </li>`)} <li> <a href="/categories" class="text-primary-400 hover:text-primary-300 transition-colors duration-200">
Voir tout →
</a> </li> </ul> </div> <!-- Legal --> <div> <h4 class="font-semibold text-[var(--color-text-primary)] mb-4">Légal</h4> <ul class="space-y-3"> ${footerLinks.legal.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-[var(--color-text-secondary)] hover:text-primary-400 transition-colors duration-200"> ${link.label} </a> </li>`)} </ul> </div> </div> </div> <!-- Bottom Bar --> <div class="border-t border-[var(--color-border)]"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"> <div class="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"> <p class="text-sm text-[var(--color-text-muted)] text-center sm:text-left">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Alternative Logiciel. Tous droits réservés.
</p> <p class="text-sm text-[var(--color-text-muted)] flex items-center space-x-1"> <span>Fait avec</span> ${renderComponent($$result, "Heart", Heart, { "size": 14, "class": "text-red-500 fill-current" })} <span>en France</span> </p> </div> </div> </div> </div> </footer>`;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://alternative-logiciel.pages.dev");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Alternative Logiciel - Les meilleures alternatives aux logiciels populaires",
    description = "D\xE9couvrez les meilleures alternatives aux logiciels populaires. Comparatifs d\xE9taill\xE9s, avis v\xE9rifi\xE9s et recommandations personnalis\xE9es pour trouver le logiciel parfait.",
    image = "/images/og-default.jpg",
    type = "website",
    noindex = false
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "https://alternative-logiciel.fr");
  const ogImage = new URL(image, Astro2.site || "https://alternative-logiciel.fr");
  return renderTemplate(_a || (_a = __template(['<html lang="fr" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#7c3aed"><!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"><!-- SEO -->', '<!-- Schema.org structured data --><script type="application/ld+json">', "<\/script>", "<script>\n    // Theme initialization - prevent flash\n    const theme = localStorage.getItem('theme') || 'dark';\n    document.documentElement.classList.toggle('dark', theme === 'dark');\n  <\/script>", '</head> <body class="min-h-screen flex flex-col"> ', ' <main class="flex-1"', "> ", " </main> ", " ", " </body> </html>"])), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "canonical": canonicalURL.toString(), "noindex": noindex, "openGraph": {
    basic: {
      title,
      type,
      image: ogImage.toString(),
      url: canonicalURL.toString()
    },
    optional: {
      description,
      locale: "fr_FR",
      siteName: "Alternative Logiciel"
    },
    image: {
      url: ogImage.toString(),
      secureUrl: ogImage.toString(),
      type: "image/jpeg",
      width: 1200,
      height: 630,
      alt: title
    }
  }, "twitter": {
    card: "summary_large_image",
    site: "@alternativelogiciel",
    creator: "@alternativelogiciel",
    title,
    description,
    image: ogImage.toString(),
    imageAlt: title
  }, "extend": {
    meta: [
      { name: "author", content: "Alternative Logiciel" },
      { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" },
      { name: "googlebot", content: noindex ? "noindex, nofollow" : "index, follow" },
      { property: "article:publisher", content: "https://www.facebook.com/alternativelogiciel" }
    ],
    link: [
      { rel: "alternate", type: "application/rss+xml", title: "RSS Feed", href: "/rss.xml" },
      { rel: "sitemap", href: "/sitemap-index.xml" }
    ]
  } }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebSite",
    name: "Alternative Logiciel",
    url: "https://alternative-logiciel.fr",
    description,
    publisher: {
      "@type": "Organization",
      name: "Alternative Logiciel",
      logo: {
        "@type": "ImageObject",
        url: "https://alternative-logiciel.fr/logo.png"
      }
    },
    ...type === "article" && {
      headline: title,
      image: ogImage.toString(),
      datePublished: (/* @__PURE__ */ new Date()).toISOString(),
      dateModified: (/* @__PURE__ */ new Date()).toISOString(),
      author: {
        "@type": "Organization",
        name: "Alternative Logiciel"
      }
    }
  })), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), addAttribute(renderTransition($$result, "kbwtph2n", "fade", ""), "data-astro-transition-scope"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderScript($$result, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/layouts/Layout.astro", "self");

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

const $$Astro$1 = createAstro("https://alternative-logiciel.pages.dev");
const $$ComparisonCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ComparisonCard;
  const {
    title,
    description,
    mainSoftware,
    alternatives,
    category,
    categorySlug,
    slug,
    featured = false
  } = Astro2.props;
  const bestAlternative = alternatives.reduce(
    (best, current) => current.rating > best.rating ? current : best
  );
  return renderTemplate`${maybeRenderHead()}<article${addAttribute([
    "glass-card card-shine overflow-hidden group",
    featured && "lg:col-span-2 lg:row-span-2"
  ], "class:list")} data-astro-cid-lvwzczwg> <a${addAttribute(`/comparatifs/${slug}`, "href")} class="block p-6 lg:p-8 h-full" data-astro-cid-lvwzczwg> <!-- Header --> <div class="flex items-start justify-between mb-6" data-astro-cid-lvwzczwg> <div data-astro-cid-lvwzczwg> <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 mb-3" data-astro-cid-lvwzczwg> ${category} </span> <h3${addAttribute([
    "font-bold text-[var(--color-text-primary)] group-hover:text-primary-400 transition-colors duration-300",
    featured ? "text-2xl lg:text-3xl" : "text-xl"
  ], "class:list")} data-astro-cid-lvwzczwg> ${title} </h3> </div> <div class="flex items-center space-x-1 text-yellow-400" data-astro-cid-lvwzczwg> ${renderComponent($$result, "Star", Star, { "size": 16, "fill": "currentColor", "data-astro-cid-lvwzczwg": true })} <span class="text-sm font-medium text-[var(--color-text-primary)]" data-astro-cid-lvwzczwg>${mainSoftware.rating}</span> </div> </div> <!-- Description --> <p${addAttribute([
    "text-[var(--color-text-secondary)] mb-6",
    featured ? "text-base lg:text-lg" : "text-sm line-clamp-2"
  ], "class:list")} data-astro-cid-lvwzczwg> ${description} </p> <!-- Main Software --> <div class="mb-6 p-4 bg-[var(--color-bg-tertiary)] rounded-xl" data-astro-cid-lvwzczwg> <p class="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-2" data-astro-cid-lvwzczwg>Logiciel principal</p> <div class="flex items-center justify-between" data-astro-cid-lvwzczwg> <div data-astro-cid-lvwzczwg> <p class="font-semibold text-[var(--color-text-primary)]" data-astro-cid-lvwzczwg>${mainSoftware.name}</p> <p class="text-sm text-[var(--color-text-muted)]" data-astro-cid-lvwzczwg>${mainSoftware.price}</p> </div> <span class="text-2xl font-bold text-[var(--color-text-muted)]" data-astro-cid-lvwzczwg>VS</span> </div> </div> <!-- Best Alternative Preview --> <div class="mb-6" data-astro-cid-lvwzczwg> <p class="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-3" data-astro-cid-lvwzczwg>Meilleure alternative</p> <div class="flex items-center space-x-4" data-astro-cid-lvwzczwg> <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center" data-astro-cid-lvwzczwg> <span class="text-xl font-bold text-green-400" data-astro-cid-lvwzczwg>${bestAlternative.name.charAt(0)}</span> </div> <div class="flex-1" data-astro-cid-lvwzczwg> <p class="font-semibold text-[var(--color-text-primary)]" data-astro-cid-lvwzczwg>${bestAlternative.name}</p> <div class="flex items-center space-x-2 text-sm" data-astro-cid-lvwzczwg> <span class="text-[var(--color-text-secondary)]" data-astro-cid-lvwzczwg>${bestAlternative.price}</span> ${bestAlternative.openSource && renderTemplate`<span class="px-2 py-0.5 rounded-full text-xs bg-green-500/10 text-green-400" data-astro-cid-lvwzczwg>
Open Source
</span>`} </div> </div> <div class="flex items-center space-x-1" data-astro-cid-lvwzczwg> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`${renderComponent($$result, "Star", Star, { "size": 14, "class": i < Math.floor(bestAlternative.rating) ? "text-yellow-400 fill-current" : "text-[var(--color-border)]", "data-astro-cid-lvwzczwg": true })}`)} </div> </div> </div> <!-- Quick Pros/Cons --> <div${addAttribute(["grid gap-4", featured ? "sm:grid-cols-2" : ""], "class:list")} data-astro-cid-lvwzczwg> ${bestAlternative.pros && bestAlternative.pros.slice(0, 2).map((pro) => renderTemplate`<div class="flex items-start space-x-2" data-astro-cid-lvwzczwg> ${renderComponent($$result, "Check", Check, { "size": 16, "class": "text-green-400 mt-0.5 flex-shrink-0", "data-astro-cid-lvwzczwg": true })} <span class="text-sm text-[var(--color-text-secondary)]" data-astro-cid-lvwzczwg>${pro}</span> </div>`)} </div> <!-- Footer --> <div class="mt-6 pt-6 border-t border-[var(--color-border)] flex items-center justify-between" data-astro-cid-lvwzczwg> <span class="text-sm text-[var(--color-text-muted)]" data-astro-cid-lvwzczwg> ${alternatives.length} alternative${alternatives.length > 1 ? "s" : ""} </span> <span class="inline-flex items-center text-sm font-medium text-primary-400 group-hover:text-primary-300 transition-colors duration-300" data-astro-cid-lvwzczwg>
Voir le comparatif
${renderComponent($$result, "ExternalLink", ExternalLink, { "size": 16, "class": "ml-2 transform group-hover:translate-x-1 transition-transform duration-300", "data-astro-cid-lvwzczwg": true })} </span> </div> </a> </article> `;
}, "C:/Users/AgentSA/.openclaw/workspace/site-fix/src/components/ComparisonCard.astro", void 0);

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

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const featuredComparisons = [
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
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alternative Logiciel - Trouvez le Meilleur Outil" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Trouvez l'Alternative Parfaite", "subtitle": "Comparez les meilleurs outils digitaux et trouvez celui qui correspond \xE0 vos besoins." })} ${maybeRenderHead()}<section class="py-20 px-4"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12">Comparatifs Populaires</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${featuredComparisons.map((c) => renderTemplate`${renderComponent($$result2, "ComparisonCard", $$ComparisonCard, { ...c })}`)} </div> </div> </section> <section class="py-20 px-4 bg-slate-900/50"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl font-bold text-center mb-12">Catégories</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-6"> ${categories.map((c) => renderTemplate`${renderComponent($$result2, "CategoryCard", $$CategoryCard, { ...c })}`)} </div> </div> </section> ` })}`;
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
