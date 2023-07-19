'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { animate } from '@/utils/animate';
import { Props } from './types';

const Component = ({ content }: Props): React.ReactElement => {
  return (
    <section className='wrapper flex flex-col gap-6' id='about'>
      <h1 className='header_text2'>About</h1>
      <div className='w-full md:w-4/5 text-gray text-justify text-sm md:text-base md:text-left flex flex-col gap-4'>
        {content.mainText.map((item: any) => (
          <motion.p whileInView={animate.right} key={item.children[0].text}>
            {item.children[0].text}
          </motion.p>
        ))}
      </div>
      <div className='w-full md:w-3/5 flex flex-col gap-2'>
        <h4 className='font-bold text-xl text-accent'>TL;DR</h4>
        <motion.p
          className='text-gray text-sm md:text-base'
          whileInView={animate.up}
        >
          {content.tldr}
        </motion.p>
      </div>
      <div className='flex-center text-center gap-8 mt-10 md:mt-20'>
        <Link href='#contact' className='group flex-center flex-col'>
          <p className='font-semibold text-lg md:text-2xl text-accent md:group-hover:text-white transition-slow'>
            Let&apos; talk
          </p>
          <p className='font-medium text-xs md:text-sm text-black2 md:group-hover:text-background transition-fast'>
            Leave me a message
          </p>
        </Link>
        <Link
          href={`${content.file.fileUrl}`}
          rel='noopener noreferrer'
          target='_blank'
          className='group flex-center flex-col'
        >
          <p className='font-semibold text-lg md:text-2xl text-accent md:group-hover:text-white transition-slow'>
            Download
          </p>
          <p className='font-medium text-xs md:text-sm text-black2 md:group-hover:text-background transition-fast'>
            Get a copy of my résumé
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Component;
