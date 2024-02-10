import Image from 'next/image';
import Bar from '../../../components/bar';

export default function Content() {
  return (
    <section className='py-16 sm:py-8 flex justify-center bg-slate-100 bg-opacity-75'>
      <div className=' mx-4 bg-slate-100 shadow-md rounded-xl flex flex-col max-w-4xl sm:flex-row sm:overflow-hidden'>
        <div className='p-4 max-w-5xl sm:w-1/2'>
          <div className='text-center'>
            <h1 className='text-3xl font-bold text-orange-600'>
              About the Content
            </h1>
            <Bar />
          </div>
          <p className='mt-4 leading-6 tracking-wide'>
            The ebook is designed to be a tutorial that will take you,{' '}
            <span className='font-semibold'>step by step</span> and in a
            practical way, through each phase of the development of a web
            application. Starting with basic concepts and advancing to more
            complex techniques, the goals were set to be realistic and
            achievable, even for those{' '}
            <span className='font-semibold'>starting from scratch.</span>.
          </p>
          <p className='mt-4 leading-6 tracking-wide'>
            By the end of the course, you will have acquired skills in{' '}
            <span className='font-semibold'>React, TypeScript and Jest</span>,
            in addition to having developed a complete web application with
            authentication features and unit tests covering 100% of the code.
            The final project, with the code on GitHub and running on the web,
            can be used as a <span className='font-semibold'>portfolio</span> of
            your learning.
          </p>
        </div>
        <div className='p-2 sm:hidden'>
          <Image
            src='/images/content.webp'
            alt='content'
            width='0'
            height='0'
            sizes='100vw'
            className='rounded-xl shadow-md w-full'
          />
        </div>
        <div className='hidden sm:w-1/2 sm:inline-block'>
          <div
            className='sm:bg-center md:bg-cover h-full'
            style={{ backgroundImage: "url('/images/content.webp')" }}
          />
        </div>
      </div>
    </section>
  );
}
