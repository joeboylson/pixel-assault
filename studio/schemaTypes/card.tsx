import {defineType} from 'sanity'
import {Cards} from '@phosphor-icons/react'

const icon = () => <Cards weight="duotone" />

export default defineType({
  name: 'card',
  title: 'Card',
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
      description: 'The last section of the page URL (eg: https://.../wiki/card/<slug>)',
      type: 'slug',
      options: {
        maxLength: 100,
        source: 'name',
      },
    },
    {
      name: 'cardId',
      title: 'Card ID',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'relatedAttribution',
          title: 'Attribution',
          type: 'reference',
          to: [{type: 'attribution'}],
          initialValue: {
            _type: 'reference',
            _ref: 'dfb89f63-07b0-4bcd-aa5e-ee19b0157e66',
          },
        },
      ],
    },
    {
      name: 'relatedFaction',
      title: 'Faction',
      type: 'reference',
      to: [{type: 'faction'}],
    },
    {
      name: 'relatedMilitatyUnitType',
      title: 'Militaty Unit Type',
      type: 'reference',
      to: [{type: 'militaryUnitType'}],
    },
    {
      name: 'cost',
      title: 'Cost',
      type: 'number',
    },
    {
      name: 'actionEconomy',
      title: 'Action Economy',
      type: 'string',
      description: 'Example: "This card does 3 damage and gives 2 gold"',
    },
    {
      name: 'lore',
      title: 'Lore',
      type: 'blockContent',
    },
    {
      name: 'behindTheScenes',
      title: 'Behind the Scenes',
      type: 'blockContent',
    },
  ],
})
