import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Resume',
  name: 'resume',
  type: 'document',
  fields: [
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
});
