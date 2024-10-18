import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_ID ?? '',
    dataset: process.env.SANITY_STUDIO_DATASET ?? '',
  },
  studioHost: process.env.SANITY_STUDIO_HOST ?? '',
  autoUpdates: true,
})
