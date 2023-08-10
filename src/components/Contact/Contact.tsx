'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';
import Link from 'next/link';
import { slide } from '@/src/animations';
import { sendEmail } from '@/src/services/global/api';
import { Contact } from '@/src/types/contact';
import { validateEmail } from '@/src/utils/validation';
import { ContactForm } from '../Form';

const Component = ({ content }: Contact): React.ReactElement => {
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
            whileInView={slide.right}
          >
            Question?
          </motion.h3>
          <p className='font-semibold text-accent text-sm md:text-base'>
            Leave me a message
          </p>
          <ContactForm
            handleSubmit={handleSubmit}
            contactForm={contactForm}
            setName={setName}
            isSendButtonDisabled={isSendButtonDisabled}
            handleOnChange={handleOnChange}
            setMessage={setMessage}
            isEmailValid={isEmailValid}
            emailAddress={emailAddress}
            sending={sending}
          />
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
          whileInView={slide.left}
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
