import urlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/asset-utils";
import { createClient, type ClientConfig } from "@sanity/client";

const getSanityClient = () => {
  console.log(process.env);

  const sanityConfig: ClientConfig = {
    projectId: process.env.REACT_APP_ID,
    dataset: process.env.REACT_APP_DATASET,
    apiVersion: process.env.REACT_APP_API_VERSION,
    useCdn: true,
  };

  return createClient(sanityConfig);
};

export const sanityClient = getSanityClient();

export const makeImageUrl = (sanityImageSource: SanityImageSource) => {
  return urlBuilder(sanityClient)
    .image(sanityImageSource)
    .width(800)
    .fit("max")
    .auto("format")
    .url();
};
