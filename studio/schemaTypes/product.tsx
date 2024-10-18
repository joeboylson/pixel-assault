import {defineType} from 'sanity'
import {Storefront} from '@phosphor-icons/react'

const icon = () => <Storefront weight="duotone" />

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      description: 'For now, add cents as zeroes, ie 500 = $5',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
