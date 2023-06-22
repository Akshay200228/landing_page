import React, { useState } from 'react';
import styles from '../style';

const col1Faqs = [
  {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    question: 'Question 2',
    answer: 'Answer 2',
  },
  {
    question: 'Question 1',
    answer: 'Answer 1',
  },
  // Add more FAQs as needed
];

const col2Faqs = [
  {
    question: 'Col2 Question 1',
    answer: 'Col2 Answer 1',
  },
  {
    question: 'Col2 Question 2',
    answer: 'Col2 Answer 2',
  },
  {
    question: 'Col2 Question 1',
    answer: 'Col2 Answer 1',
  },
  {
    question: 'Col2 Question 2',
    answer: 'Col2 Answer 2',
  },
  {
    question: 'Col2 Question 1',
    answer: 'Col2 Answer 1',
  },
  // Add more FAQs for col2 as needed
];

const FAQ = () => {
  const [activeItemCol1, setActiveItemCol1] = useState(null);
  const [activeItemCol2, setActiveItemCol2] = useState(null);

  const handleItemClickCol1 = (index) => {
    setActiveItemCol1(activeItemCol1 === index ? null : index);
  };

  const handleItemClickCol2 = (index) => {
    setActiveItemCol2(activeItemCol2 === index ? null : index);
  };

  return (
    <section id='FAQ' className='mt-20'
    data-aos='fade-up' data-aos-delay='400'>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`} >
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>Frequently Asked Questions</span>
          </p>
        </div>

        <div className='flex flex-col items-center justify-center w-full'>
          <h1 className='font-poppins font-semibold text-4xl text-white leading-[70px] text-center'>
            Frequently Asked <span className='text-gradient'>Questions</span>
          </h1>
        </div>
      </div>

      <div className='grid w-full grid-cols-1 gap-4 mx-auto mt-6 md:grid-cols-2'
      data-aos='fade-up' data-aos-delay='500'>
        <div className="col-span-1">
          {col1Faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="overflow-hidden rounded-lg"
              >
                <button
                  className={`flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none ${
                    activeItemCol1 === index ? 'bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white' : 'bg-gray-900 text-white'
                  }`}
                  onClick={() => handleItemClickCol1(index)}
                >
                  <h2 className='text-lg font-medium'>{faq.question}</h2>
                  <svg
                    className={`w-6 h-6 transition-transform ${
                      activeItemCol1 === index ? 'transform rotate-180' : ''
                    }`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                {activeItemCol1 === index && (
                  <div className='p-6 text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700'>
                    <p className='text-white'>{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-1">
          {col2Faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="overflow-hidden rounded-lg "
              >
                <button
                  className={`flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none ${
                    activeItemCol2 === index ? 'bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white' : 'bg-gray-900 text-white'
                  }`}
                  onClick={() => handleItemClickCol2(index)}
                >
                  <h2 className='text-lg font-medium'>{faq.question}</h2>
                  <svg
                    className={`w-6 h-6 transition-transform ${
                      activeItemCol2 === index ? 'transform rotate-180' : ''
                    }`}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                {activeItemCol2 === index && (
                  <div className='p-6 text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700'>
                    <p className='text-white'>{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
