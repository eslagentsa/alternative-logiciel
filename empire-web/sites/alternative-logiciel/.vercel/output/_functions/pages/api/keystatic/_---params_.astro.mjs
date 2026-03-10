import { makeGenericAPIRouteHandler } from '@keystatic/core/api/generic';
import { parseString } from 'set-cookie-parser';
import { config as config$1, collection, fields } from '@keystatic/core';
export { renderers } from '../../../renderers.mjs';

function makeHandler(_config) {
  return async function keystaticAPIRoute(context) {
    var _context$locals, _ref, _config$clientId, _ref2, _config$clientSecret, _ref3, _config$secret;
    const envVarsForCf = (_context$locals = context.locals) === null || _context$locals === void 0 || (_context$locals = _context$locals.runtime) === null || _context$locals === void 0 ? void 0 : _context$locals.env;
    const handler = makeGenericAPIRouteHandler({
      ..._config,
      clientId: (_ref = (_config$clientId = _config.clientId) !== null && _config$clientId !== void 0 ? _config$clientId : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_ID) !== null && _ref !== void 0 ? _ref : tryOrUndefined(() => {
        return undefined                                          ;
      }),
      clientSecret: (_ref2 = (_config$clientSecret = _config.clientSecret) !== null && _config$clientSecret !== void 0 ? _config$clientSecret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_GITHUB_CLIENT_SECRET) !== null && _ref2 !== void 0 ? _ref2 : tryOrUndefined(() => {
        return undefined                                              ;
      }),
      secret: (_ref3 = (_config$secret = _config.secret) !== null && _config$secret !== void 0 ? _config$secret : envVarsForCf === null || envVarsForCf === void 0 ? void 0 : envVarsForCf.KEYSTATIC_SECRET) !== null && _ref3 !== void 0 ? _ref3 : tryOrUndefined(() => {
        return undefined                                ;
      })
    }, {
      slugEnvName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG"
    });
    const {
      body,
      headers,
      status
    } = await handler(context.request);
    let headersInADifferentStructure = /* @__PURE__ */ new Map();
    if (headers) {
      if (Array.isArray(headers)) {
        for (const [key, value] of headers) {
          if (!headersInADifferentStructure.has(key.toLowerCase())) {
            headersInADifferentStructure.set(key.toLowerCase(), []);
          }
          headersInADifferentStructure.get(key.toLowerCase()).push(value);
        }
      } else if (typeof headers.entries === "function") {
        for (const [key, value] of headers.entries()) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
        if ("getSetCookie" in headers && typeof headers.getSetCookie === "function") {
          const setCookieHeaders2 = headers.getSetCookie();
          if (setCookieHeaders2 !== null && setCookieHeaders2 !== void 0 && setCookieHeaders2.length) {
            headersInADifferentStructure.set("set-cookie", setCookieHeaders2);
          }
        }
      } else {
        for (const [key, value] of Object.entries(headers)) {
          headersInADifferentStructure.set(key.toLowerCase(), [value]);
        }
      }
    }
    const setCookieHeaders = headersInADifferentStructure.get("set-cookie");
    headersInADifferentStructure.delete("set-cookie");
    if (setCookieHeaders) {
      for (const setCookieValue of setCookieHeaders) {
        var _options$sameSite;
        const {
          name,
          value,
          ...options
        } = parseString(setCookieValue);
        const sameSite = (_options$sameSite = options.sameSite) === null || _options$sameSite === void 0 ? void 0 : _options$sameSite.toLowerCase();
        context.cookies.set(name, value, {
          domain: options.domain,
          expires: options.expires,
          httpOnly: options.httpOnly,
          maxAge: options.maxAge,
          path: options.path,
          sameSite: sameSite === "lax" || sameSite === "strict" || sameSite === "none" ? sameSite : void 0
        });
      }
    }
    return new Response(body, {
      status,
      headers: [...headersInADifferentStructure.entries()].flatMap(([key, val]) => val.map((x) => [key, x]))
    });
  };
}
function tryOrUndefined(fn) {
  try {
    return fn();
  } catch {
    return void 0;
  }
}

const config = config$1({
  storage: {
    kind: "local"
  },
  ui: {
    brand: {
      name: "Alternative Logiciel",
      mark: () => null
    },
    navigation: {
      Comparatifs: ["comparisons", "categories"],
      Pages: ["pages"]
    }
  },
  collections: {
    comparisons: collection({
      label: "Comparatifs",
      slugField: "title",
      path: "src/content/comparisons/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: "Titre",
            description: "Le titre du comparatif",
            validation: { length: { min: 1, max: 100 } }
          }
        }),
        description: fields.text({
          label: "Description",
          description: "Description courte pour SEO et previews",
          multiline: true,
          validation: { length: { min: 10, max: 200 } }
        }),
        category: fields.relationship({
          label: "Catégorie",
          collection: "categories",
          validation: { isRequired: true }
        }),
        featured: fields.checkbox({
          label: "Mis en avant",
          description: "Afficher sur la page d'accueil",
          defaultValue: false
        }),
        heroImage: fields.image({
          label: "Image principale",
          description: "Image d'en-tête du comparatif",
          directory: "public/images/comparisons",
          publicPath: "/images/comparisons/"
        }),
        mainSoftware: fields.object({
          name: fields.text({ label: "Nom du logiciel principal" }),
          description: fields.text({ label: "Description", multiline: true }),
          logo: fields.image({
            label: "Logo",
            directory: "public/images/software",
            publicPath: "/images/software/"
          }),
          price: fields.text({ label: "Prix" }),
          rating: fields.number({
            label: "Note",
            validation: { min: 0, max: 5, isRequired: true }
          }),
          website: fields.url({ label: "Site web" }),
          pros: fields.array(fields.text({ label: "Avantage" }), {
            label: "Avantages",
            itemLabel: (props) => props.value
          }),
          cons: fields.array(fields.text({ label: "Inconvénient" }), {
            label: "Inconvénients",
            itemLabel: (props) => props.value
          })
        }, {
          label: "Logiciel principal"
        }),
        alternatives: fields.array(
          fields.object({
            name: fields.text({ label: "Nom" }),
            description: fields.text({ label: "Description", multiline: true }),
            logo: fields.image({
              label: "Logo",
              directory: "public/images/software",
              publicPath: "/images/software/"
            }),
            price: fields.text({ label: "Prix" }),
            rating: fields.number({
              label: "Note",
              validation: { min: 0, max: 5, isRequired: true }
            }),
            website: fields.url({ label: "Site web" }),
            openSource: fields.checkbox({
              label: "Open Source",
              defaultValue: false
            }),
            pros: fields.array(fields.text({ label: "Avantage" }), {
              label: "Avantages",
              itemLabel: (props) => props.value
            }),
            cons: fields.array(fields.text({ label: "Inconvénient" }), {
              label: "Inconvénients",
              itemLabel: (props) => props.value
            })
          }),
          {
            label: "Alternatives",
            itemLabel: (props) => props.fields.name.value
          }
        ),
        publishDate: fields.date({
          label: "Date de publication",
          defaultValue: { kind: "today" }
        }),
        lastUpdated: fields.date({
          label: "Dernière mise à jour",
          defaultValue: { kind: "today" }
        }),
        author: fields.text({
          label: "Auteur",
          defaultValue: "Équipe Alternative Logiciel"
        }),
        content: fields.markdoc({
          label: "Contenu",
          description: "Contenu détaillé du comparatif"
        })
      }
    }),
    categories: collection({
      label: "Catégories",
      slugField: "name",
      path: "src/content/categories/*",
      schema: {
        name: fields.slug({
          name: {
            label: "Nom",
            validation: { length: { min: 1, max: 50 } }
          }
        }),
        description: fields.text({
          label: "Description",
          multiline: true,
          validation: { length: { min: 10, max: 200 } }
        }),
        icon: fields.select({
          label: "Icône",
          options: [
            { label: "Bureautique", value: "briefcase" },
            { label: "Créativité", value: "palette" },
            { label: "Développement", value: "code" },
            { label: "Communication", value: "message-circle" },
            { label: "Multimédia", value: "play" },
            { label: "Sécurité", value: "shield" },
            { label: "Système", value: "settings" },
            { label: "Cloud", value: "cloud" },
            { label: "Finance", value: "dollar-sign" },
            { label: "Éducation", value: "book-open" }
          ],
          defaultValue: "briefcase"
        }),
        color: fields.select({
          label: "Couleur",
          options: [
            { label: "Violet", value: "violet" },
            { label: "Bleu", value: "blue" },
            { label: "Vert", value: "green" },
            { label: "Orange", value: "orange" },
            { label: "Rose", value: "pink" },
            { label: "Rouge", value: "red" },
            { label: "Jaune", value: "yellow" },
            { label: "Cyan", value: "cyan" }
          ],
          defaultValue: "violet"
        }),
        featured: fields.checkbox({
          label: "Mis en avant",
          defaultValue: false
        })
      }
    }),
    pages: collection({
      label: "Pages",
      slugField: "title",
      path: "src/content/pages/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Titre",
            validation: { length: { min: 1, max: 100 } }
          }
        }),
        metaTitle: fields.text({
          label: "Meta titre",
          description: "Titre pour SEO (optionnel)"
        }),
        metaDescription: fields.text({
          label: "Meta description",
          description: "Description pour SEO",
          multiline: true
        }),
        content: fields.markdoc({
          label: "Contenu"
        })
      }
    })
  }
});

const all = makeHandler({ config });
const ALL = all;

const prerender = false;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  all,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
