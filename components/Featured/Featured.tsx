import { Props } from './types';

const Component = ({ content }: Props): React.ReactElement => {
  return (
    <section
      className='wrapper mt-24 mb-36 flex-center flex-col gap-2 md:gap-6'
      id='feature'
    >
      <h3 className='w-full flex justify-end text-xl md:text-3xl font-semibold text-gray italic md:not-italic'>
        {content.title}
      </h3>
      <h1 className='font-bold text-black3 text-justify md:text-left text-5xl md:text-7xl'>
        I specialize in <span className='text-accent'>Front-End</span> Web
        Development and <span className='text-accent'>UI/UX</span> Design.
      </h1>
    </section>
  );
};

export default Component;
