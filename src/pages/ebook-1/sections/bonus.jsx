import { Bar } from '@/components';
import { DocIcon, GitIcon, LinkedinIcon } from '@/components/icons';

function Module({ icon, title, content }) {
  return (
    <div className='flex flex-col items-center p-4 space-y-2 text-center bg-slate-100 rounded-lg shadow-md'>
      <span className='inline-block p-2 text-white bg-orange-500 rounded-full'>
        {icon}
      </span>
      <h1 className='text-xl font-semibold capitalize'>{title}</h1>
      <p>{content}</p>
    </div>
  );
}

export default function Bonus() {
  return (
    <section className='w-full py-8 bg-orange-100 bg-opacity-90'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold tracking-wide'>
          Bonus
          </h1>
          <Bar dark={true} />
        </div>
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mt-4'>
          <Module
            title='LinkedIn'
            content='Learn how to create a professional profile to stand out, attract recruiters, and receive job offers from all over the world'
            icon={<LinkedinIcon />}
          />
          <Module
            title='README'
            content='Your GitHub is a showcase where recruiters can see your projects, technologies you use, and your codes. A correct README is essential'
            icon={<DocIcon />}
          />
          <Module
            title='Version Control'
            content='Understand how version control works, the difference between the most used systems, and the main Git commands.'
            icon={<GitIcon />}
          />
        </div>
      </div>
    </section>
  );
}
