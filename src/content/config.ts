import { defineCollection, z } from 'astro:content';

const comparisonsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    mainSoftware: z.object({
      name: z.string(),
      description: z.string(),
      logo: z.string().optional(),
      price: z.string(),
      rating: z.number().min(0).max(5),
      website: z.string().url(),
      pros: z.array(z.string()),
      cons: z.array(z.string()),
    }),
    alternatives: z.array(z.object({
      name: z.string(),
      description: z.string(),
      logo: z.string().optional(),
      price: z.string(),
      rating: z.number().min(0).max(5),
      website: z.string().url(),
      openSource: z.boolean().default(false),
      pros: z.array(z.string()),
      cons: z.array(z.string()),
    })),
    publishDate: z.date(),
    lastUpdated: z.date(),
    author: z.string().default('Équipe Alternative Logiciel'),
  }),
});

const categoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    icon: z.enum(['briefcase', 'palette', 'code', 'message-circle', 'play', 'shield', 'settings', 'cloud', 'dollar-sign', 'book-open']),
    color: z.enum(['violet', 'blue', 'green', 'orange', 'pink', 'red', 'yellow', 'cyan']).default('violet'),
    featured: z.boolean().default(false),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string(),
  }),
});

export const collections = {
  comparisons: comparisonsCollection,
  categories: categoriesCollection,
  pages: pagesCollection,
};