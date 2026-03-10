import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Alternative Logiciel',
      mark: () => null,
    },
    navigation: {
      Comparatifs: ['comparisons', 'categories'],
      Pages: ['pages'],
    },
  },
  collections: {
    comparisons: collection({
      label: 'Comparatifs',
      slugField: 'title',
      path: 'src/content/comparisons/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({
          name: {
            label: 'Titre',
            description: 'Le titre du comparatif',
            validation: { length: { min: 1, max: 100 } },
          },
        }),
        description: fields.text({
          label: 'Description',
          description: 'Description courte pour SEO et previews',
          multiline: true,
          validation: { length: { min: 10, max: 200 } },
        }),
        category: fields.relationship({
          label: 'Catégorie',
          collection: 'categories',
          validation: { isRequired: true },
        }),
        featured: fields.checkbox({
          label: 'Mis en avant',
          description: 'Afficher sur la page d\'accueil',
          defaultValue: false,
        }),
        heroImage: fields.image({
          label: 'Image principale',
          description: 'Image d\'en-tête du comparatif',
          directory: 'public/images/comparisons',
          publicPath: '/images/comparisons/',
        }),
        mainSoftware: fields.object({
          name: fields.text({ label: 'Nom du logiciel principal' }),
          description: fields.text({ label: 'Description', multiline: true }),
          logo: fields.image({
            label: 'Logo',
            directory: 'public/images/software',
            publicPath: '/images/software/',
          }),
          price: fields.text({ label: 'Prix' }),
          rating: fields.number({
            label: 'Note',
            validation: { min: 0, max: 5, isRequired: true },
          }),
          website: fields.url({ label: 'Site web' }),
          pros: fields.array(fields.text({ label: 'Avantage' }), {
            label: 'Avantages',
            itemLabel: props => props.value,
          }),
          cons: fields.array(fields.text({ label: 'Inconvénient' }), {
            label: 'Inconvénients',
            itemLabel: props => props.value,
          }),
        }, {
          label: 'Logiciel principal',
        }),
        alternatives: fields.array(
          fields.object({
            name: fields.text({ label: 'Nom' }),
            description: fields.text({ label: 'Description', multiline: true }),
            logo: fields.image({
              label: 'Logo',
              directory: 'public/images/software',
              publicPath: '/images/software/',
            }),
            price: fields.text({ label: 'Prix' }),
            rating: fields.number({
              label: 'Note',
              validation: { min: 0, max: 5, isRequired: true },
            }),
            website: fields.url({ label: 'Site web' }),
            openSource: fields.checkbox({
              label: 'Open Source',
              defaultValue: false,
            }),
            pros: fields.array(fields.text({ label: 'Avantage' }), {
              label: 'Avantages',
              itemLabel: props => props.value,
            }),
            cons: fields.array(fields.text({ label: 'Inconvénient' }), {
              label: 'Inconvénients',
              itemLabel: props => props.value,
            }),
          }),
          {
            label: 'Alternatives',
            itemLabel: props => props.fields.name.value,
          }
        ),
        publishDate: fields.date({
          label: 'Date de publication',
          defaultValue: { kind: 'today' },
        }),
        lastUpdated: fields.date({
          label: 'Dernière mise à jour',
          defaultValue: { kind: 'today' },
        }),
        author: fields.text({
          label: 'Auteur',
          defaultValue: 'Équipe Alternative Logiciel',
        }),
        content: fields.markdoc({
          label: 'Contenu',
          description: 'Contenu détaillé du comparatif',
        }),
      },
    }),
    categories: collection({
      label: 'Catégories',
      slugField: 'name',
      path: 'src/content/categories/*',
      schema: {
        name: fields.slug({
          name: {
            label: 'Nom',
            validation: { length: { min: 1, max: 50 } },
          },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { length: { min: 10, max: 200 } },
        }),
        icon: fields.select({
          label: 'Icône',
          options: [
            { label: 'Bureautique', value: 'briefcase' },
            { label: 'Créativité', value: 'palette' },
            { label: 'Développement', value: 'code' },
            { label: 'Communication', value: 'message-circle' },
            { label: 'Multimédia', value: 'play' },
            { label: 'Sécurité', value: 'shield' },
            { label: 'Système', value: 'settings' },
            { label: 'Cloud', value: 'cloud' },
            { label: 'Finance', value: 'dollar-sign' },
            { label: 'Éducation', value: 'book-open' },
          ],
          defaultValue: 'briefcase',
        }),
        color: fields.select({
          label: 'Couleur',
          options: [
            { label: 'Violet', value: 'violet' },
            { label: 'Bleu', value: 'blue' },
            { label: 'Vert', value: 'green' },
            { label: 'Orange', value: 'orange' },
            { label: 'Rose', value: 'pink' },
            { label: 'Rouge', value: 'red' },
            { label: 'Jaune', value: 'yellow' },
            { label: 'Cyan', value: 'cyan' },
          ],
          defaultValue: 'violet',
        }),
        featured: fields.checkbox({
          label: 'Mis en avant',
          defaultValue: false,
        }),
      },
    }),
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: {
            label: 'Titre',
            validation: { length: { min: 1, max: 100 } },
          },
        }),
        metaTitle: fields.text({
          label: 'Meta titre',
          description: 'Titre pour SEO (optionnel)',
        }),
        metaDescription: fields.text({
          label: 'Meta description',
          description: 'Description pour SEO',
          multiline: true,
        }),
        content: fields.markdoc({
          label: 'Contenu',
        }),
      },
    }),
  },
});