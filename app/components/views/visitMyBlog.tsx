import doorsToBlog from '../../../public/images/doorsToBlog.png';
import typeWriterMachine from '../../../public/movies/typewriter2.mp4';

export default function VisitMyBlog() {
    return (
        <section className="text-gray-600 body-font bg-mimi-pink z-30">
            <div className="max-w-commonLayout mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center shadow-2xl rounded-full w-96 h-96 opacity-80" alt="hero" src={doorsToBlog} />
                   {/*  <video className="object-cover object-center rounded-full w-96 h-96 opacity-90" src={typeWriterMachine} /> */}
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Puk! Puk!</h1>
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button className="text-gray-700 bg-cherry-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Blog</button>
                    </div>
                </div>
            </div>
        </section>
    )
}