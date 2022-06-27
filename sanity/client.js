import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2022-04-26",
  useCdn: false,
});

function urlForThumbnail(source) {
  return imageUrlBuilder(client).image(source).width(300).url();
}
function urlFor(source) {
  return imageUrlBuilder(client).image(source).width(580).url();
}
export { urlForThumbnail };
export { urlFor };
