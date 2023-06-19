import React from 'react';
import styles from './style';
import { Navbar, Hero, CardDeal, Features, FAQ, Stats, Footer, Testimonials, About } from './components';

const App = () => {
  return (
    <div className='w-full overflow-hidden' style={{backgroundColor: '#0C0E10'}}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
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
  )
}

export default App