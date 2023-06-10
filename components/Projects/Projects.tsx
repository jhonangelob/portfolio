'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { animate } from '@/utils/animate';
import { Props } from './types';

const Component = ({ projects }: Props): React.ReactElement => {
  return (
    <section className='wrapper flex-center flex-col my-8' id='projects'>
      <h1 className='header_text'>Projects</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6'>
        {projects.map((project, index) => (
          <motion.div
            className='group flex-start flex-col gap-4 pt-2 pb-6 border-b border-black3'
            whileInView={animate.up}
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
                  className='uppercase font-light text-black3 text-xs'
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
      </div>
    </section>
  );
};

export default Component;
