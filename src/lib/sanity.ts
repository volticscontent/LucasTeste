import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2023-07-03',
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

export const getAllPosts = async () => {
  return await sanityClient.fetch(
    `*[_type == "post"] | order(date desc) [0...100] {
      _id,
      title,
      slug,
      coverImage,
      author,
      date,
      body
    }`
  );
}; 