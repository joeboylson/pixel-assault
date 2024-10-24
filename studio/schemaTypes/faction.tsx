import {defineType} from 'sanity'
import {Flag} from '@phosphor-icons/react'

const icon = () => <Flag weight="duotone" />

export default defineType({
  name: 'faction',
  title: 'Faction',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Page Slug',
      description: 'The last section of the page URL (eg: https://.../wiki/faction/<slug>)',
      type: 'slug',
      options: {
        maxLength: 100,
        source: 'name',
      },
    },
    {
      name: 'colorPageBackground',
      title: 'Page Background Color',
      type: 'color',
    },
    {
      name: 'colorAccentOne',
      title: 'Accent Color 1',
      type: 'color',
    },
    {
      name: 'colorAccentTwo',
      title: 'Accent Color 2',
      type: 'color',
    },
  ],
})
