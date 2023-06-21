import React from 'react';
import { stars } from '../assets';
import { testimonials } from '../data';

import styles from '../style';
import ClientSlider from './ClientSlider';

const Testimonials = () => {
  // destructure testimonials
  const { title, clients } = testimonials;

  return (
    <section id='testimonials' className='mt-20'>
      <div
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
        style={{
          background: `url(${stars}) center/cover`,
          borderRadius: '10px',
          boxShadow: '0 0 20px 20px rgba(0, 0, 0, 0.3)',
        }}
        data-aos='fade-up' data-aos-delay='400'
      >
        <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
            <p className={`${styles.paragraph} ml-2`}>
              <span className='text-white'>Customers Stories</span>
            </p>
          </div>

          <div className='flex flex-col items-center justify-center w-full'>
            <h1 className='font-poppins font-semibold ss:text-[32px] text-[35px] text-white ss:leading-[70px] leading-[75px] text-center'>
              Say <span className='text-gradient'>GOODBYE</span> to the Hassel of <br className="hidden sm:block" /> Making <span className='text-gradient'>Words</span>
            </h1>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className='container mx-auto'>
        {/* title */}
        <h2
          className='title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {title}
        </h2>
        {/* slider */}
        <div data-aos='fade-up' data-aos-delay='400'>
          <ClientSlider clients={clients} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
