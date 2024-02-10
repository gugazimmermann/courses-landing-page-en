import BuyNowButton from '../../../components/buyNowButton';

export default function Cta() {
  return (
    <section className='w-full px-4 py-8 bg-slate-900'>
      <div className='flex flex-col items-center justify-center text-center text-slate-100 sm:max-w-4xl sm:mx-auto'>
        <h1 className='text-2xl font-bold'>Get ready to work remotely!</h1>
        <p className='block mt-4 leading-relaxed'>
          The relevance of this ebook in the current market is significant. The
          skills taught, such as React, TypeScript, and Jest, are in high demand
          in the technology industry.
        </p>
        <div className='w-full text-center mt-8'>
          <BuyNowButton size='half' />
        </div>
      </div>
    </section>
  );
}
