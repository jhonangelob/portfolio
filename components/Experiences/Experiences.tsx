'use client';

import { animate } from '@/utils/animate';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Props } from './types';

const Component = ({
  textContent,
  experiences,
  technologies,
}: Props): React.ReactElement => {
  return (
    <section
      className='wrapper flex-start flex-col text-white gap-6'
      id='experiences'
    >
      <h1 className='header_text2'>Technology and Experience/s</h1>
      <motion.p
        className='w-full md:w-4/5 text-gray text-sm md:text-base'
        whileInView={animate.right}
      >
        I&apos;m a skilled web developer with expertise in various technologies
        and a passion for continuous learning and growth in the field.
      </motion.p>
      <div className='flex-start flex-col md:flex-row gap-6 md:gap-32'>
        <div className='flex flex-col gap-4 mb-4 md:mb-0'>
          <p className='text-accent font-medium'>Technologies</p>
          <p className='text-gray text-sm md:text-base'>
            {textContent.subText1}
          </p>
          <motion.div
            className='flex-start gap-6 flex-wrap'
            whileInView={animate.up}
          >
            {technologies[0].items.map((item, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  width: 35,
                  height: 35,
                }}
              >
                <Image src={item.src} alt={item.alt} fill={true} />
              </div>
            ))}
          </motion.div>
          <p className='text-gray text-sm md:text-base'>
            {textContent.subText2}
          </p>
          <motion.div
            className='flex-start gap-6 flex-wrap'
            whileInView={animate.up}
          >
            {technologies[1].items.map((item, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  width: 35,
                  height: 35,
                }}
              >
                <Image key={index} src={item.src} alt={item.alt} fill={true} />
              </div>
            ))}
          </motion.div>
        </div>
        <div className='flex-start gap-4 flex-col'>
          <p className='text-accent font-medium'>Experience/s</p>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className='text-gray flex flex-col gap-1'
              whileInView={animate.left}
            >
              <p className='text-white font-semibold'>{experience.position}</p>
              <p className='text-gray text-sm'>{experience.company}</p>
              <p className='text-black3 text-xs'>
                {experience.startDate} -{' '}
                <span className={`${experience.isPresent && 'text-accent'}`}>
                  {experience.endDate}
                </span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Component;
