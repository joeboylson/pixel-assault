import { createClient, type ClientConfig } from "@sanity/client";

const sanityConfig: ClientConfig = {
  projectId: process.env.REACT_APP_ID,
  dataset: process.env.REACT_APP_DATASET,
  apiVersion: process.env.REACT_APP_API_VERSION,
  useCdn: true,
};

export const sanityClient = createClient(sanityConfig);
