'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
import Link from 'next/link';
import { animate } from '@/utils/animate';
import { sendEmail } from '@/app/api/email';
import { Props } from './types';
import { validateEmail } from '@/utils/validation';

const Component = ({ content }: Props): React.ReactElement => {
  const contactForm = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (isEmailValid) {
        setSending(true);
        await sendEmail(contactForm.current);
        setSending(false);
        e.target.reset();
      }
    } catch (error) {
      setSending(false);
    }
  };

  const isSendButtonDisabled = !isEmailValid || sending || !name || !message;

  const handleOnChange = (e: any) => {
    const { value } = e.target;
    setIsEmailValid(validateEmail.test(value));
    setEmailAddress(value);
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
            Question?
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
              placeholder='Your Name'
              onChange={(e) => setName(e.target.value)}
            />
            <div className='relative'>
              <input
                className='input_text_email w-full pr-3 md:pr-24'
                type='text'
                name='email'
                onChange={(e) => handleOnChange(e)}
                placeholder='Your Email'
              />
              {!isEmailValid && emailAddress && (
                <p className='absolute transition-all text-xs text-accent w-fit md:top-1/3 top-0 right-0'>
                  Invalid Email
                </p>
              )}
            </div>
            <textarea
              className='input_textarea'
              name='message'
              placeholder='Your Message'
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className='w-full md:w-1/2 uppercase font-semibold text-white bg-accent p-3 ml-auto disabled:bg-black2 disabled:text-accent transition-all'
              type='submit'
              disabled={isSendButtonDisabled}
            >
              {sending ? 'sending...' : 'send'}
            </button>
          </motion.form>
        </div>
        <div className='flex md:hidden my-auto flex-col items-center md:items-start gap-2'>
          <h3 className='font-bold text-white text-md md:text-2xl'>
            Let&apos;s talk about it.
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
            Get a copy
          </Link>
          <div className='flex flex-col text-xs items-center md:items-start md:text-sm text-gray'>
            <p>{content.address1}</p>
            <p>{content.address2}</p>
          </div>
          <div className='flex flex-row gap-2'>
            {content.socials.map((item) => (
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
          <Link
            href='/'
            className='text-sm uppercase text-black3 flex flex-row mt-6'
          >
            Scroll to top
          </Link>
        </div>
        <motion.div
          className='hidden md:flex mt-12 flex-col items-center md:items-start gap-2'
          whileInView={animate.left}
        >
          <h3 className='font-bold text-white text-md md:text-2xl'>
            Let&apos;s talk about it.
          </h3>
          <p className='text-gray text-sm text-center md:text-left'>
            You can find out more about me on my résumé.
          </p>
          <Link
            href={`${content.file.fileUrl}`}
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
            Get a copy
          </Link>
          <div className='flex flex-col text-xs items-center md:items-start md:text-sm text-gray'>
            <p>{content.address1}</p>
            <p>{content.address2}</p>
          </div>
          <div className='flex flex-row gap-2'>
            {content.socials.map((item) => (
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
          <Link
            href='/'
            className='text-sm uppercase text-black3 flex flex-row mt-6'
          >
            Scroll to top
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Component;
