import React from 'react';
import styles from '../style';
import { discount, stars } from '../assets';

const Stats = () => {
  return (
    <section
      id="company"
      className={`mt-20 flex md:flex-row flex-col ${styles.paddingY}`}
      style={{
        background: `url(${stars}) center/cover`,
        borderRadius: '10px',
        boxShadow: '0 0 20px 20px rgba(0, 0, 0, 0.3)',
      }}
      data-aos='fade-up' data-aos-delay='400'
    >
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img
            src={discount}
            alt="discount"
            className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>Fastest</span> Copywriting Your {" "}
            <span className='text-white'>Website</span>
          </p>
        </div>

        <div className='flex flex-col items-center justify-center w-full'>
          <h1 className='font-poppins font-semibold ss:text-[32px] text-[35px] text-white ss:leading-[70px] leading-[75px] text-center'>
            An <span className='text-gradient'>AI</span> {" "}
            Copywriting Tool <br className="hidden sm:block" />{" "}
            Made For <span className='text-gradient'>DESIGNERS</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Stats;
