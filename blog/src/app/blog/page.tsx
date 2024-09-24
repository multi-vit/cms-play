import { createClient } from "@/prismicio";
import { Metadata } from "next";

export default async function Blog() {
  const client = createClient();
  const page = await client.getSingle("blog");
  const author = await client.getByUID("author", "1");

  // console.log(page);
  console.log(author);
  // console.log(typeof page.data.slices[0]?.primary.created_date);

  return (
    <div>
      <h1 color="white">{page.data.slices[0]?.primary.title[0].text}</h1>
      <div>
        <h2 color="white">{author.data.name}</h2>
        <img
          src={author.data.profile_picture.url}
          alt={author.data.profile_picture.alt}
          height={100}
          width={100}
        />
        <h3 color="white">{author.data.email}</h3>
      </div>
      <h3 color="white">
        {new Date(page.data.slices[0]?.primary.created_date).toLocaleDateString(
          page.lang
        )}
      </h3>
      <br />
      {page.data.slices[0]?.primary.body.map((paragraph, index) => {
        return (
          <>
            <p key={index}>{paragraph.text}</p>
            <br />
          </>
        );
      })}
      <img
        src={page.data.slices[0]?.primary.image.url}
        alt={page.data.slices[0]?.primary.image.alt}
        height={500}
        width={500}
      />
      <br />
    </div>
  );
}

// export async function generateMetadata(): Promise<Metadata> {
//   const client = createClient(process.env.PRISMIC_REPOSITORY_NAME!);
//   const page = await client.getSingle("blog");

//   return {
//     title: page.data.meta_title,
//     description: page.data.meta_description,
//   };
// }
