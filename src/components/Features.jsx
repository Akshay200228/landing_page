import React, { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import styles from '../style';
import { card } from '../assets';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Features = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id='features' className='pt-20' data-aos='fade-up' data-aos-delay='400'>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>Fastest</span> Copywriting Your {" "}
            <span className='text-white'>Website</span>
          </p>
        </div>

        <div className='flex flex-col items-center justify-center w-full'>
          <h1 className='font-poppins font-semibold ss:text-[32px] text-[35px] text-white ss:leading-[70px] leading-[75px] text-center'>
            Say <span className='text-gradient'>GOODBYE</span> {" "}
            To The Hassle Of <br className="hidden sm:block" />{" "}
            Making <span className='text-gradient'>Words</span>
          </h1>
        </div>

        {isMobileView ? (
          <div className="flex flex-wrap justify-center mt-16">
            {/* Card 1 */}
            <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card className='bg-slate-900'>
                <img src={card} alt="Card 1 Header" className="object-cover w-full h-auto p-2" />
                <CardBody>
                  <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                    <p className={`${styles.paragraph} ml-2`}>
                      <span className='text-white'>Fastest</span> Copywriting Your {" "}
                      <span className='text-white'>Website</span>
                    </p>
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-white">
                    Lyft launching cross-platform
                  </Typography>
                  <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at magna vitae lorem dapibus cursus. Nulla viverra diam sed mi ullamcorper aliquet.</p>
                </CardBody>
              </Card>
            </div>

            {/* Card 2 */}
            <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card className='bg-slate-900'>
                <img src={card} alt="Card 2 Header" className="object-cover w-full h-auto p-2" />
                <CardBody>
                  <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                    <p className={`${styles.paragraph} ml-2`}>
                      <span className='text-white'>Fastest</span> Copywriting Your {" "}
                      <span className='text-white'>Website</span>
                    </p>
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-white">
                    Lyft launching cross-platform
                  </Typography>
                  <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at magna vitae lorem dapibus cursus. Nulla viverra diam sed mi ullamcorper aliquet.</p>
                </CardBody>
              </Card>
            </div>

            {/* Card 3 */}
            <div className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card className='bg-slate-900'>
                <img src={card} alt="Card 3 Header" className="object-cover w-full h-auto p-2" />
                <CardBody>
                  <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                    <p className={`${styles.paragraph} ml-2`}>
                      <span className='text-white'>Fastest</span> Copywriting Your {" "}
                      <span className='text-white'>Website</span>
                    </p>
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-white">
                    Lyft launching cross-platform
                  </Typography>
                  <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at magna vitae lorem dapibus cursus. Nulla viverra diam sed mi ullamcorper aliquet.</p>
                </CardBody>
              </Card>
            </div>
          </div>
        ) : (
          <div className="flex justify-center mt-16">
            {/* Card 1 */}
            <div className="mx-2">
              <Card className='bg-slate-900'>
                <img src={card} alt="Card 1 Header" className="object-cover w-full h-auto p-2" />
                <CardBody>
                  <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                    <p className={`${styles.paragraph} ml-2`}>
                      <span className='text-white'>Fastest</span> Copywriting Your {" "}
                      <span className='text-white'>Website</span>
                    </p>
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-white">
                    Lyft launching cross-platform
                  </Typography>
                  <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at magna vitae lorem dapibus cursus. Nulla viverra diam sed mi ullamcorper aliquet.</p>
                </CardBody>
              </Card>
            </div>
            {/* Card 2 */}
            <div className="mx-2" style={{ marginTop: '30px' }}>
              <Card className='bg-slate-900'>
                <img src={card} alt="Card 2 Header" className="object-cover w-full h-auto p-2" />
                <CardBody>
                  <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                    <p className={`${styles.paragraph} ml-2`}>
                      <span className='text-white'>Fastest</span> Copywriting Your {" "}
                      <span className='text-white'>Website</span>
                    </p>
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-white">
                    Lyft launching cross-platform
                  </Typography>
                  <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at magna vitae lorem dapibus cursus. Nulla viverra diam sed mi ullamcorper aliquet.</p>
                </CardBody>
              </Card>
            </div>
            {/* Card 3 */}
            <div className="mx-2" style={{ marginTop: '60px' }}>
              <Card className='bg-slate-900'>
                <img src={card} alt="Card 3 Header" className="object-cover w-full h-auto p-2" />
                <CardBody>
                  <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                    <p className={`${styles.paragraph} ml-2`}>
                      <span className='text-white'>Fastest</span> Copywriting Your {" "}
                      <span className='text-white'>Website</span>
                    </p>
                  </div>
                  <Typography variant="h5" color="blue-gray" className="mb-2 font-bold text-white">
                    Lyft launching cross-platform
                  </Typography>
                  <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at magna vitae lorem dapibus cursus. Nulla viverra diam sed mi ullamcorper aliquet.</p>
                </CardBody>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Features;
