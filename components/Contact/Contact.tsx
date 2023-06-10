'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
import Link from 'next/link';
import { animate } from '@/utils/animate';
import { sendEmail } from '@/app/api/email';
import { Props } from './types';

const Contact = ({ file, socials }: Props): React.ReactElement => {
  const contactForm = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setSending(true);
      await sendEmail(contactForm.current);
      setSending(false);
      e.target.reset();
    } catch (error) {
      setSending(false);
    }
  };

  return (
    <section className='wrapper my-8' id='contact'>
      <h1 className='header_text'>Contact</h1>
      <div className='flex flex-col md:flex-row gap-14'>
        <div className='w-full md:w-4/5 flex flex-col gap-4'>
          <motion.h3
            className='font-semibold text-white text-xl md:text-2xl'
            whileInView={animate.right}
          >
            Any Question?
          </motion.h3>
          <p className='font-semibold text-accent text-sm md:text-base'>
            Leave me a message
          </p>
          <motion.form
            className='flex flex-col gap-4 font-light'
            onSubmit={handleSubmit}
            ref={contactForm}
            whileInView={animate.up}
          >
            <input
              className='input_text'
              type='text'
              name='name'
              placeholder='Name'
              required
            />
            <input
              className='input_text'
              type='text'
              name='email'
              placeholder='Email'
              required
            />
            <textarea
              className='input_textarea'
              name='message'
              placeholder='Your Message'
              rows={4}
              required
            />
            <button
              className='w-full md:w-1/2 uppercase font-semibold text-white bg-accent p-3 ml-auto'
              type='submit'
              disabled={sending}
            >
              {sending ? 'sending...' : 'send'}
            </button>
          </motion.form>
        </div>
        <motion.div
          className='flex md:hidden my-auto flex-col items-center md:items-start gap-2'
          whileInView={animate.up}
        >
          <h3 className='font-bold text-white text-md md:text-2xl'>
            Let&apos; talk about it.
          </h3>
          <p className='text-gray text-sm text-center md:text-left'>
            You can find out more about me on my résumé.
          </p>
          <Link
            href={'/'}
            className='font-semibold text-accent flex flex-row gap-2'
          >
            <div
              className='hidden md:block'
              style={{
                position: 'relative',
                width: 20,
                height: 20,
              }}
            >
              <Image src='assets/icons/file.svg' alt='pdf' fill={true} />
            </div>

            <p> Grab a copy</p>
          </Link>
          <div className='flex flex-col text-xs items-center md:items-start md:text-sm text-gray'>
            <p>Calamba, Laguna</p>
            <p>Philippines</p>
          </div>
          <div className='flex flex-row gap-2'>
            {socials.map((item) => (
              <SocialIcon
                key={item.name}
                url={item.url}
                style={{ width: 35, height: 35 }}
                bgColor='transparent'
                fgColor='white'
                className='md:hover:opacity-80'
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          className='hidden md:flex mt-12 flex-col items-center md:items-start gap-2'
          whileInView={animate.left}
        >
          <h3 className='font-bold text-white text-md md:text-2xl'>
            Let&apos; talk about it.
          </h3>
          <p className='text-gray text-sm text-center md:text-left'>
            You can find out more about me on my résumé.
          </p>
          <Link
            href={`${file.fileUrl}`}
            rel='noopener noreferrer'
            target='_blank'
            className='font-semibold text-accent flex flex-row gap-2'
          >
            <div
              className='hidden md:block'
              style={{
                position: 'relative',
                width: 20,
                height: 20,
              }}
            >
              <Image src='assets/icons/file.svg' alt='pdf' fill={true} />{' '}
            </div>

            <p>Grab a copy</p>
          </Link>
          <div className='flex flex-col text-xs items-center md:items-start md:text-sm text-gray'>
            <p>Calamba, Laguna</p>
            <p>Philippines</p>
          </div>
          <div className='flex flex-row gap-2'>
            {socials.map((item) => (
              <SocialIcon
                key={item.name}
                url={item.url}
                style={{ width: 35, height: 35 }}
                bgColor='transparent'
                fgColor='white'
                className='md:hover:opacity-80'
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
