import { components } from "@/slices";
import { createClient } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";

export default async function Blog() {
  const client = createClient(process.env.PRISMIC_REPOSITORY_NAME!);
  const page = await client.getSingle("author");

  return <SliceZone slices={page.data.slices} components={components} />;
}

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient(process.env.PRISMIC_REPOSITORY_NAME!);
//   const page = await client.getSingle("blog");

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }
