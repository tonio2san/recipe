import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "blog-recipe-nextjs",
  apiKey: process.env.API_KEY,
});