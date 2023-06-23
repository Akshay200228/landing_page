import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { ArrowLongRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import styles from '../style';

const cardsData = [
  {
    id: 1,
    color: 'blue',
    title: 'Basic Plan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 29,
    features: [
      '5 team members',
      '200+ components',
      '40+ built-in pages',
      '1 year free updates',
      'Life time technical support',
    ],
  },
  {
    id: 2,
    color: 'green',
    title: 'Starter Plan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 49,
    features: [
      '10 team members',
      '300+ components',
      '60+ built-in pages',
      '2 years free updates',
      'Life time technical support',
    ],
  },
  {
    id: 3,
    color: 'blue',
    title: 'Premium plan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 49,
    features: [
      '10 team members',
      '300+ components',
      '60+ built-in pages',
      '2 years free updates',
      'Life time technical support',
    ],
  },
];

const CardDeal = () => {
  return (
    <section id='pricing' className="flex flex-wrap justify-center gap-8 mt-20" data-aos='fade-up' data-aos-delay='400'>
      <div className="flex flex-col items-center justify-center w-full mb-8 text-center">
        <div className="flex items-center py-[6px] px-4 mb-2">
          <p className={`${styles.paragraph} mx-auto bg-discount-gradient`}>
            <span className="p-4 text-white font-poppins font-semibold ss:text-[16px] text-[18px]">Pricing Plan</span>
          </p>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[32px] text-[35px] text-white ss:leading-[70px] leading-[75px] text-center'>
          Pay Only For <span className='text-gradient'>What You Need</span>
        </h1>
      </div>

      {cardsData.map((card) => (
        <Card
          key={card.id}
          color={card.color}
          variant="gradient"
          className="max-w-[20rem] p-8 bg-gray-900"
        >
          {/* Card header */}
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="pb-8 m-0 mb-8 text-center border-b rounded-none border-white/10"
          >
            <Typography
              variant="small"
              color="white"
              className="font-semibold text-left uppercase font-poppins"
            >
              {card.title}
            </Typography>
            <Typography className={`${styles.paragraph} text-left mt-2`}>
              {card.desc}
            </Typography>
            <div className="flex items-center py-[6px] px-4 mt-2">
              <Typography className={`${styles.paragraph} mx-auto bg-discount-gradient`}>
                <span className="p-4 text-green-400 font-poppins font-semibold ss:text-[12px] text-[16px]">Save up to 15%</span>
              </Typography>
            </div>
            <Typography
              variant="h1"
              color="white"
              className="flex justify-center gap-1 mt-4 text-4xl font-normal"
            >
              <span className="text-4xl">$</span>
              {card.price} <span className="self-end text-4xl">/mon</span>
            </Typography>
            <Button
              color="lightBlue"
              buttonType="filled"
              size="regular"
              rounded={false}
              block={true}
              ripple="light"
              className="w-full mt-4 mb-2 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 hover:from-gray-700 hover:via-gray-600 hover:to-gray-500"
            >
              <Typography
                variant="button"
                color="white"
                className="flex items-center justify-center gap-1 text-sm font-semibold"
              >
                Get Started
                <ArrowLongRightIcon strokeWidth={2} className="w-5 h-5" />
              </Typography>
            </Button>
            <hr />
          </CardHeader>

          {/* Card body */}
          <CardBody className="p-0">
            <ul className="flex flex-col gap-4">
              {card.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-white"
                >
                  <span className="p-1 border rounded-full border-white/20 bg-white/20">
                    <CheckIcon strokeWidth={2} className="w-3 h-3" />
                  </span>
                  <Typography className="font-normal">{feature}</Typography>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      ))}
    </section>
  );
};

export default CardDeal;
