import Bar from '../../../components/bar';
import {
  AlertIcon,
  ApiIcon,
  CodeIcon,
  ComponentsIcon,
  FormIcon,
  ServerIcon,
  TechIcon,
  UserIcon,
} from '@/components/icons';

const modules = [
  {
    title: '1 - Technologies',
    icon: <TechIcon />,
    content:
      'Learn about the main technologies and tools used in web development, and about the day-to-day of a technology company.',
  },
  {
    title: '2 - The Application',
    icon: <CodeIcon />,
    content:
      'Set up the development environment, understand about code quality, Git / GitHub, and how to host the application.',
  },
  {
    title: '3 - Components',
    icon: <ComponentsIcon />,
    content:
      'Learn to create reusable components that are easy to maintain, understand how to correctly make Commits and protect against attacks.',
  },
  {
    title: '4 - Backend',
    icon: <ServerIcon />,
    content:
      'Create a backend to be used with the application, understand about interfaces and environment variables.',
  },
  {
    title: '5 - Authentication',
    icon: <ApiIcon />,
    content: 'Learn about Services, API queries, and delve into React Router.',
  },
  {
    title: '6 - Unit Tests',
    icon: <AlertIcon />,
    content:
      'Understand the importance and how to conduct unit tests using Jest, enforce code quality using Coverage and Husky.',
  },
  {
    title: '7 - Forms',
    icon: <FormIcon />,
    content:
      'Learn the entire Authentication flow, separate the public area from the restricted one, and understand how to use testing utilities.',
  },
  {
    title: '8 - User Data',
    icon: <UserIcon />,
    content:
      'Understand how State and Context work in React, allow users to change their data and password.',
  },
];

function Module({ icon, title, content }) {
  return (
    <div className='space-y-2 bg-slate-100 p-4 rounded-lg'>
      <div className='flex flex-row items-center'>
        <span className='inline-block p-2 text-white bg-orange-600 rounded-xl'>
          {icon}
        </span>
        <h1 className='text-xl font-semibold capitalize ml-2'>{title}</h1>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default function Modules() {
  return (
    <section className='w-full py-8 bg-slate-900'>
      <div className='container mx-auto'>
        <div className='text-center mb-4'>
          <h2 className='font-semibold text-2xl text-orange-400'>
            Zero to Professional:
          </h2>
          <h1 className='font-bold text-3xl text-slate-50'>
            Authentication with <br /> React / TypeScript and Jest
          </h1>
          <Bar light={true} />
        </div>
        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {modules.map((m) => (
            <Module
              key={m.title}
              title={m.title}
              content={m.content}
              icon={m.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
