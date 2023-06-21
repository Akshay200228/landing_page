import React from 'react';
import styles from '../style';

const cardData = [
  {
    title: '38+',
    description: 'Card 1 description goes here.',
  },
  {
    title: '24K',
    description: 'Card 2 description goes here.',
  },
  {
    title: '4.8/5',
    description: 'Card 3 description goes here.',
  },
  {
    title: '640+',
    description: 'Card 4 description goes here.',
  },
];

const About = () => {
  return (
    <div className="flex flex-col mt-20 mb-10 md:flex-row" data-aos='fade-up' data-aos-delay='400'>
      <div className="w-full p-4 md:w-1/4">
        <h2 className={`mb-4 text-2xl font-bold text-dimWhite text-center`}>About Norch Community</h2>
      </div>
      <hr className="hidden md:block w-px h-[250px] bg-gradient-to-tr from-transparent via-neutral-100 to-transparent opacity-20 dark:opacity-100" />
      <div className="w-full md:w-3/5">
        <div className={`${styles.paddingX} relative p-4`}>
          <p className={`${styles.paragraph}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod purus vel ex malesuada, vel semper velit facilisis.
            Donec at ligula in urna gravida condimentum. Aliquam feugiat arcu et bibendum finibus. Fusce ac diam feugiat, efficitur
            ex ac, bibendum felis. Quisque in vulputate risus, eget dapibus mauris. Nullam vitae justo et mi vestibulum gravida eget
            id enim. In semper felis sed finibus fermentum. Duis at tellus sed sapien lacinia dapibus.
          </p>
          <div className="flex flex-wrap mt-4 -mx-1" data-aos='fade-up' data-aos-delay='500'>
            {cardData.map((card, index) => (
              <div className="w-full px-1 sm:w-1/2 md:w-1/4" key={index}>
                <div className="p-4 mt-4 bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-1.05">
                  <h3 className="mb-2 text-2xl font-bold text-white">{card.title}</h3>
                  <p className="text-dimWhite">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
