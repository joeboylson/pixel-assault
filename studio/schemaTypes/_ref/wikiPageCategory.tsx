import {defineField, defineType} from 'sanity'
import {CardsThree} from '@phosphor-icons/react'

const icon = () => <CardsThree weight="duotone" />

export default defineType({
  name: 'wikiPageCategory',
  title: 'Wiki Page Category',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
  ],
})
