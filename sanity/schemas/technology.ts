import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Technology',
  name: 'technology',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt',
              type: 'string',
            }),
            defineField({
              name: 'src',
              title: 'Src',
              type: 'file',
            }),
          ],
        },
      ],
    }),
  ],
});
