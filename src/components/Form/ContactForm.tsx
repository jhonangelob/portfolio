'use client';

import React from 'react';
import { slide } from '@/src/animations';
import { motion } from 'framer-motion';
import { ContactForm } from '@/src/types/contact-form';

const ContactForm = ({
  handleSubmit,
  contactForm,
  setName,
  handleOnChange,
  setMessage,
  isSendButtonDisabled,
  isEmailValid,
  emailAddress,
  sending,
}: ContactForm): React.ReactElement => {
  return (
    <motion.form
      className='flex flex-col gap-4 font-light'
      onSubmit={handleSubmit}
      ref={contactForm}
      whileInView={slide.up}
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
  );
};

export default ContactForm;
