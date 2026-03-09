globalThis.process ??= {}; globalThis.process.env ??= {};
import { t as decodeKey } from './chunks/astro/server_z50TpEtD.mjs';
import './chunks/astro-designed-error-pages_D8_sP6mS.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_CR3RxFs2.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/AgentSA/.openclaw/workspace/site-fix/","cacheDir":"file:///C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/.astro/","outDir":"file:///C:/Users/AgentSA/.openclaw/workspace/site-fix/dist/","srcDir":"file:///C:/Users/AgentSA/.openclaw/workspace/site-fix/src/","publicDir":"file:///C:/Users/AgentSA/.openclaw/workspace/site-fix/public/","buildClientDir":"file:///C:/Users/AgentSA/.openclaw/workspace/site-fix/dist/","buildServerDir":"file:///C:/Users/AgentSA/.openclaw/workspace/site-fix/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"categories/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/categories","isIndex":true,"type":"page","pattern":"^\\/categories\\/?$","segments":[[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categories/index.astro","pathname":"/categories","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"comparatifs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/comparatifs","isIndex":true,"type":"page","pattern":"^\\/comparatifs\\/?$","segments":[[{"content":"comparatifs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/comparatifs/index.astro","pathname":"/comparatifs","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.ZXyU73wm.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.ZXyU73wm.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.ZXyU73wm.js"}],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"site":"https://alternative-logiciel.pages.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/comparatifs/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/comparatifs/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/comparatifs/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/comparatifs/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/AgentSA/.openclaw/workspace/site-fix/src/components/Navbar.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/AgentSA/.openclaw/workspace/site-fix/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/categories/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/categories/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/AgentSA/.openclaw/workspace/site-fix/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/categories/index@_@astro":"pages/categories.astro.mjs","\u0000@astro-page:src/pages/comparatifs/index@_@astro":"pages/comparatifs.astro.mjs","\u0000@astro-page:src/pages/comparatifs/[...slug]@_@astro":"pages/comparatifs/_---slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D_VD9URB.mjs","C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Dlb-PiIE.mjs","C:\\Users\\AgentSA\\.openclaw\\workspace\\site-fix\\.astro\\content-assets.mjs":"chunks/content-assets_XqCgPAV2.mjs","C:\\Users\\AgentSA\\.openclaw\\workspace\\site-fix\\.astro\\content-modules.mjs":"chunks/content-modules_Bvq7llv8.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BlZ_tVu1.mjs","C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.D8v2gwCD.js","@astrojs/react/client.js":"_astro/client.BJGBxOWp.js","C:/Users/AgentSA/.openclaw/workspace/site-fix/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.Bbp4fi0e.js","C:/Users/AgentSA/.openclaw/workspace/site-fix/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.D75l6boI.js","C:/Users/AgentSA/.openclaw/workspace/site-fix/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.Bh4wqtPV.js","astro:scripts/page.js":"_astro/page.ZXyU73wm.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/AgentSA/.openclaw/workspace/site-fix/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts","const t=document.querySelector(\"[data-theme-toggle]\"),o=document.documentElement;t?.addEventListener(\"click\",()=>{const e=o.classList.toggle(\"dark\");localStorage.setItem(\"theme\",e?\"dark\":\"light\")});"],["C:/Users/AgentSA/.openclaw/workspace/site-fix/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","const n=document.getElementById(\"mobile-menu-btn\"),e=document.getElementById(\"mobile-menu\"),t=n?.querySelector(\".menu-open\"),s=n?.querySelector(\".menu-close\");n?.addEventListener(\"click\",()=>{e?.classList.toggle(\"hidden\"),t?.classList.toggle(\"hidden\"),s?.classList.toggle(\"hidden\")});e?.querySelectorAll(\"a\").forEach(d=>{d.addEventListener(\"click\",()=>{e.classList.add(\"hidden\"),t?.classList.remove(\"hidden\"),s?.classList.add(\"hidden\")})});"]],"assets":["/_astro/about.DlTyEuSN.css","/_astro/client.BJGBxOWp.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.Bh4wqtPV.js","/_astro/index.BbrLBU_f.js","/_astro/index.KOfHF6jZ.js","/_astro/keystatic-page.D8v2gwCD.js","/_astro/page.ZXyU73wm.js","/_worker.js/index.js","/_worker.js/noop-entrypoint.mjs","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/pages/about.astro.mjs","/_worker.js/pages/categories.astro.mjs","/_worker.js/pages/comparatifs.astro.mjs","/_worker.js/pages/contact.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/chunks/astro-designed-error-pages_D8_sP6mS.mjs","/_worker.js/chunks/astro_B8wHy-gu.mjs","/_worker.js/chunks/CategoryCard_C39lyky_.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/consts_DBS1dnOp.mjs","/_worker.js/chunks/content-assets_XqCgPAV2.mjs","/_worker.js/chunks/content-modules_Bvq7llv8.mjs","/_worker.js/chunks/index_BMeGUCi_.mjs","/_worker.js/chunks/index_Dtq64N-W.mjs","/_worker.js/chunks/Layout_a0vD_Sp8.mjs","/_worker.js/chunks/noop-middleware_CR3RxFs2.mjs","/_worker.js/chunks/parse_CDBk4F85.mjs","/_worker.js/chunks/path_BgNISshD.mjs","/_worker.js/chunks/remote_CrdlObHx.mjs","/_worker.js/chunks/sharp_Dlb-PiIE.mjs","/_worker.js/chunks/_@astro-renderers_ZkvB7lbw.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_C-_sqSNC.mjs","/_worker.js/chunks/_astro_assets_hzoZxvhE.mjs","/_worker.js/chunks/_astro_content_CthsY6z7.mjs","/_worker.js/chunks/_astro_data-layer-content_BlZ_tVu1.mjs","/_worker.js/_astro/about.DlTyEuSN.css","/_worker.js/chunks/astro/server_z50TpEtD.mjs","/_worker.js/pages/comparatifs/_---slug_.astro.mjs","/_worker.js/pages/api/keystatic/_---params_.astro.mjs","/_worker.js/pages/keystatic/_---params_.astro.mjs","/_astro/page.ZXyU73wm.js","/about/index.html","/categories/index.html","/comparatifs/index.html","/contact/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"X2A95xeZC7X0xIdrdTdJ12HuJzIEBs+WubYDcYixPdU=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
