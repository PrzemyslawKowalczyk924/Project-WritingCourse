import { LoaderFunction } from "@remix-run/node";
import Posts from '../../models/posts.model';
import { useLoaderData } from "@remix-run/react";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


export const loader: LoaderFunction = async ({ params }) => {
  try {
    console.log(params)
    const { slug } = params;
    console.log('title %$#', slug);
    return await Posts.findOne({ slug: slug });
  } catch (error) {
    console.error('Błąd pobierania danych:', error);
    return { json: { error: 'Błąd pobierania danych' } };
  }
}

export default function Post() {

  const post = useLoaderData();
  console.log(post);
  //console.log('data z postu', data);

  const parts = [];
  const maxLength = 500; // Maksymalna długość każdej części
  for (let i = 0; i < post.description.length; i += maxLength) {
    parts.push(post.description.substr(i, maxLength));
  }

  return (
    <div className="bg-white py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto lg:mx-0">
          <a href="/blog" className="text-4xl absolute top-0 left-10">&#8592;</a>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Abc</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <article key={post._id}>
          <article className="flex border-t border-b py-7 my-10 border-gray-200">
            <div className="flex items-center justify-center gap-x-4 text-xl">
              <p className="text-gray-500 font-extralight">
                No. 000001
              </p>
              <p className="text-gray-500 font-extralight">
                {post.genre}
              </p>
              <time dateTime={post.timeOfPublication} className="text-gray-500 font-extralight">
                {post.timeOfPublication}
              </time>
            </div>
          </article>
          <h3 className="uppercase text-4xl mt-16 font-thin tracking-tight text-gray-900 group-hover:text-gray-600">
            {post.title}
          </h3>
          <div className="mx-auto grid max-w-2xl grid-cols-2 grid-rows-3 gap-x-3 gap-y-10 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {parts.map((part, index) => (
              <article key={index} className="flex max-w-xl flex-col items-start justify-between">
                  <div dangerouslySetInnerHTML={{ __html: part }} className="mt-5 px-10 text-justify text-base leading-6 text-gray-600" />
              </article>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}