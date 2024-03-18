import { LoaderFunction } from "@remix-run/node";
import Posts from '../../models/posts.model';
import { useLoaderData } from "@remix-run/react";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


export const loader: LoaderFunction = async ({ params }) => {
  try {
    console.log(params)
    const { slug } = params;
    console.log('title %$#', slug);
    return await Posts.findOne({ slug: slug});
  } catch (error) {
    console.error('Błąd pobierania danych:', error);
    return { json: { error: 'Błąd pobierania danych' } };
  }
}

export default function Post() {

  const post = useLoaderData();
  console.log(post);
  //console.log('data z postu', data);

  return (
    <div className="bg-white py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Abc</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      
            <article key={post._id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.timeOfPublication} className="text-gray-500">
                  {post.timeOfPublication}
                </time>
                <a
                  href={"#"}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.genre}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={"#"}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <a href={"#"}>
                  <div dangerouslySetInnerHTML={{ __html: post.description }} className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"></div>
                </a>
              </div>
            </article>
        </div>
      </div>
    </div>
  )
}