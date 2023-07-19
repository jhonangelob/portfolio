import { defineField, defineType } from 'sanity';

export default defineType({
  title: 'Text Content',
  name: 'textContent',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Date Added',
      type: 'string',
      initialValue: `${new Date().toISOString()}`,
    }),
    defineField({
      name: 'jobTitle',
      title: '[Featured] Job Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutMainText',
      title: '[About] Main Text',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'aboutTldr',
      title: '[About] TLDR',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'technologyMainText',
      title: '[Technology] Main Text',
      type: 'string',
    }),
    defineField({
      name: 'technologySubText1',
      title: '[Technology] SubText 1',
      type: 'string',
    }),
    defineField({
      name: 'technologySubText2',
      title: '[Technology] SubText 2',
      type: 'string',
    }),
    defineField({
      name: 'contactAddress1',
      title: '[Contact] Address 1',
      type: 'string',
    }),
    defineField({
      name: 'contactAddress2',
      title: '[Contact] Address 2',
      type: 'string',
    }),
  ],
});
