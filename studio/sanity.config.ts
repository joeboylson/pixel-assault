import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes as types} from './schemaTypes'

export const schema = {types}

export default defineConfig({
  name: 'default',
  title: process.env.SANITY_STUDIO_TITLE ?? '',
  projectId: process.env.SANITY_STUDIO_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET ?? '',
  plugins: [structureTool(), visionTool()],
  schema,
})
