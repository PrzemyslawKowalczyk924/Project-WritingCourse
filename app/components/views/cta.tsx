import fantasyBook from '../../../public/images/opened_book.jpg';
import creatiVeCourse from '../../../public/images/creatiVeCourse.jpg';
import writingCourse from '../../../public/images/writingCourse.jpg';

export default function CallToAction() {
    return (
        <section className="bg-lavenda-pink dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tighter font-black leading-tight text-gray-900 dark:text-white">Zacznij swoją przygodę z pisaniem!</h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Zapisz się na kurs i "Napisz historię marzeń". Już dziś dołącz do szerokiego grona ludzi, którzy z pisania uczynili swoje życiowe rzemiosło i pasję.</p>
            <a href="pricing" className="text-gray-700 bg-cherry-pink hover:bg-primary-800 shadow focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Cennik</a>
        </div>
    </div>
</section>
    );
};