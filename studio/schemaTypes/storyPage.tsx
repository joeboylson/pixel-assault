import {defineType} from 'sanity'
import {Notebook} from '@phosphor-icons/react'

const icon = () => <Notebook weight="duotone" />

export default defineType({
  name: 'storyPage',
  title: 'Story Page',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Page Slug',
      description: 'The last section of the page URL (eg: https://.../wiki/storyPage/<slug>)',
      type: 'slug',
      options: {
        maxLength: 100,
        source: 'title',
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
})
