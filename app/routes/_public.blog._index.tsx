import { LoaderFunction } from "@remix-run/node";
import Posts from '../../models/posts.model';
import { useLoaderData } from "@remix-run/react";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import photo from "../../public/images/grafika00.png"
import kalamaz from "../../public/images/kalamaz.svg"

export const loader: LoaderFunction = async () => {
  try {
    return await Posts.find();
  } catch (error) {
    console.error('Błąd pobierania danych:', error);
    return { json: { error: 'Błąd pobierania danych' } };
  }
}

export default function Blog() {

  const data = useLoaderData();
  //console.log('data z blogu', data);

  return (
    <div className="bg-white py-24 sm:py-32 min-h-screen">
      <img src={kalamaz} alt="kałamaż" className="fixed top-20 right-0 opacity-10" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blogownia</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((post: {
            slug: string;
            shortDescription: string | TrustedHTML;
            timeOfPublication: string | undefined; _id: Key | null | undefined; datetime: string | undefined; 
            genre: string | null; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; 
            description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
          }) => (
            <article key={post._id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.timeOfPublication} className="text-gray-500">
                  {post.timeOfPublication}
                </time>
                <a
                  href={`blog/${post.slug}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.genre}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={`blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <a href={`blog/${post.slug}`}>
                  <div dangerouslySetInnerHTML={{ __html: post.shortDescription }} className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"></div>
                </a>
              </div>
              {/* <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div> */}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}