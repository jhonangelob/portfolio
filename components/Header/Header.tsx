'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { translate } from '@/utils/animate';
import { Fragment } from 'react';
import { Props } from './types';

const MotionLink = motion(Link);

const Header = ({ socials }: Props): React.ReactElement => {
  const showBanner = true;
  return (
    <Fragment>
      <div
        className='hidden md:flex justify-center w-full items-center bg-black2 p-3'
        id='banner'
      >
        {showBanner ? (
          <p className='text-white text-sm'>
            Check out my awesome{' '}
            <Link href='#about' className='text-accent'>
              résumé
            </Link>{' '}
            to learn more about me!
          </p>
        ) : (
          <p className='text-white text-sm'>
            Downloading résumé is currently{' '}
            <span className='text-accent'>unavailable</span>.
          </p>
        )}
      </div>
      <header
        className='bg-background w-full sticky top-0 flex-center text-white overflow-hidden p-6 z-20'
        id='header'
      >
        <div className='flex-between w-full max-w-5xl'>
          <MotionLink
            className='font-bold text-xl md:text-2xl'
            href='/'
            initial={translate.left}
            animate={translate.animate}
            transition={translate.transition}
          >
            jhn
          </MotionLink>
          <motion.div
            className='flex-center gap-2'
            initial={translate.right}
            animate={translate.animate}
            transition={translate.transition}
          >
            {socials.map((item) => (
              <SocialIcon
                key={item.name}
                url={item.url}
                style={{ width: 35, height: 35 }}
                bgColor='transparent'
                fgColor='white'
                className='md:hover:opacity-80 transition-fast'
              />
            ))}
            <Link
              href='#contact'
              className='font-semibold uppercase text-xs md:text-sm md:hover:text-accent ml-2 transition-normal'
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
