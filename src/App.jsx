import React, { useEffect } from 'react';
import styles from './style';
import { Navbar, Hero, CardDeal, Features, FAQ, Stats, Footer, Testimonials, About, Cards  } from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
      easing: 'ease',
    });
  }, []);

  return (
    <div className='w-full overflow-hidden' style={{ backgroundColor: '#0C0E10' }}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} mt-10 border-t border-gray-500 rounded-t-[100px] rounded-b-none shadow-md`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <Cards />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <Features />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart} mt-10 border-t border-gray-500 rounded-t-[100px] rounded-b-none shadow-md`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <CardDeal />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <Testimonials />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <FAQ />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart} mt-10 border-t border-gray-500 rounded-t-[100px] rounded-b-none shadow-md bg-gray-900`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
