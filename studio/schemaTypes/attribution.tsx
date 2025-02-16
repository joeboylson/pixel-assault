import {defineType} from 'sanity'
import {Notebook} from '@phosphor-icons/react'

const icon = () => <Notebook weight="duotone" />

export default defineType({
  name: 'attribution',
  title: 'Attribution',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Artist Name',
      type: 'string',
    },
  ],
})
