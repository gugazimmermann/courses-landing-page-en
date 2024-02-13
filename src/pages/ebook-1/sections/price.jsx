import Link from 'next/link';
import Bar from '../../../components/bar';

export default function Price() {
  return (
    <section className='w-full bg-white py-8'>
      <div className='flex flex-col sm:flex-row justify-center items-center sm:max-w-2xl md:max-w-4xl sm:mx-auto'>
        <div className='px-4 text-center sm:w-2/3'>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold tracking-wide text-orange-600'>
              Exclusive Launch Offer
            </h1>
            <Bar />
          </div>
          <p className='mt-4'>
            Beyond the code, in this ebook we will discuss the main tools, best
            practices, and gain a deep understanding of the development process
            within a tech company.
          </p>
        </div>
        <div className='mt-8 sm:mt-0 sm:w-1/3'>
          <div className='p-8 space-y-4 text-slate-100 uppercase text-center bg-orange-700 rounded-2xl shadow-md'>
            <h2 className='text-3xl font-bold pb-8'>$ 9,99</h2>
            <Link
              href='https://www.amazon.com/dp/B0CVK5K94J'
              rel='noopener noreferrer'
              target='_blank'
              className='w-full px-4 py-2 tracking-wide text-orange-600 font-bold text-xl capitalize bg-slate-100 rounded-md'
            >
              Buy Now on Amazon
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
