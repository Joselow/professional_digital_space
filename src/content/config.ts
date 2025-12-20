import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  type: 'content', // indica que es para archivos .md o .mdx
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    icon: z.string(),
    featuredImage: z.string().optional(), // .optional() si no siempre hay imagen
    order: z.number(),
    star: z.boolean().default(false), // default por si olvidas ponerlo
  }),
});

// Exporta el objeto collections con el nombre de tu carpeta
export const collections = {
  'services': servicesCollection,
};