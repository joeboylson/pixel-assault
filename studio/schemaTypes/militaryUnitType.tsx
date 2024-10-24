import {defineType} from 'sanity'
import {MedalMilitary} from '@phosphor-icons/react'

const icon = () => <MedalMilitary weight="duotone" />

export default defineType({
  name: 'militaryUnitType',
  title: 'Military Unit Type',
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
      description:
        'The last section of the page URL (eg: https://.../wiki/militaryUnitType/<slug>)',
      type: 'slug',
      options: {
        maxLength: 100,
        source: 'name',
      },
    },
  ],
})
