'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide } from '@/src/animations';
import { Projects } from '@/src/types/projects';

const Component = ({ projects }: Projects): React.ReactElement => {
  return (
    <section className='wrapper flex-center flex-col my-8' id='projects'>
      <h1 className='header_text'>Projects</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6'>
        {projects.map((project, index) => (
          <motion.div
            className='group flex-start flex-col gap-4 pt-2 pb-6 border-b border-black3'
            whileInView={slide.up}
            key={`${index}-${project.title}`}
          >
            <Link
              href={project.link}
              className='text-white md:group-hover:text-black font-bold text-lg transition-normal'
            >
              {project.title}: {project.description}
            </Link>
            <div className='flex items-center gap-2 flex-wrap'>
              {project.technologies.map((item) => (
                <p
                  className='uppercase font-normal text-black3 text-xs'
                  key={item}
                >
                  {item}
                </p>
              ))}
              <span className='text-black3 text-xs'>|</span>
              <Link
                href={project.source}
                className='uppercase underline underline-offset-4 font-light text-accent text-xs'
              >
                Source Code
              </Link>
            </div>
          </motion.div>
        ))}
        {projects.length % 2 !== 0 && (
          <motion.div
            className='flex justify-center items-center gap-4 pt-2 py-6 md:py-0 border-0 md:border-b border-black3 text-black3 font-semibold md:font-bold text-md md:text-lg select-none'
            whileInView={slide.up}
          >
            Currently building something great
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Component;
