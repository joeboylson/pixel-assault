import {defineField, defineType} from 'sanity'
import {Notebook} from '@phosphor-icons/react'

const icon = () => <Notebook weight="duotone" />

export default defineType({
  name: 'wikiPage',
  title: 'Wiki Page',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'relatedWikiPageCategory',
      title: 'Category',
      type: 'reference',
      to: [{type: 'wikiPageCategory'}],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),
    defineField({
      name: 'relatedWikiPages',
      title: 'Related Wiki Pages',
      type: 'reference',
      to: [{type: 'wikiPage'}],
    }),
  ],
})
