'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { animate } from '@/utils/animate';
import { Props } from './types';

const Component = ({ file }: Props): React.ReactElement => {
  return (
    <section className='wrapper flex flex-col gap-6' id='about'>
      <h1 className='header_text2'>About</h1>
      <div className='w-full md:w-4/5 text-gray text-justify md:text-left flex flex-col gap-4'>
        <motion.p whileInView={animate.right}>
          Hello, I&apos;m{' '}
          <span className='text-white'>Jhon Angelo Bustarde</span>, a Software
          Engineer from the Philippines. I specialize in developing intuitive
          software applications with great functionality, driven by my passion
          for creating exceptional user experiences.
        </motion.p>
        <motion.p whileInView={animate.right}>
          As a <span className='text-white'>software engineer</span>, I stay
          updated on industry developments and trends, continuously learn new
          technologies and methodologies to improve my work, and deliver
          high-quality results to help businesses create innovative software
          solutions.
        </motion.p>
        <motion.p whileInView={animate.right}>
          I enjoy creating software with clean,{' '}
          <span className='text-white'>minimalist</span> designs that prioritize
          simplicity and usability. By utilizing whitespace and intuitive user
          interfaces, I aim to create visually appealing and highly functional
          software.
        </motion.p>
      </div>
      <div className='w-full md:w-3/5 flex flex-col gap-2'>
        <h4 className='font-bold text-xl text-accent'>TL;DR</h4>
        <motion.p className='text-gray' whileInView={animate.up}>
          A Software Engineer who specializes in developing software with
          minimalistic designs that utilize whitespace.
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
          href={`${file.fileUrl}`}
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
