import React, { useEffect } from 'react';
import styles from './style';
import { Navbar, Hero, CardDeal, Features, FAQ, Stats, Footer, Testimonials, About } from './components';
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

      <div className={`${styles.flexStart}`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`} data-aos="fade">
        <div className={`${styles.boxWidth}`}>
          <About />
          <Stats />
          <CardDeal />
          <Testimonials />
          <Features />
          <FAQ />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
