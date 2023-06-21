import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import { CheckIcon } from '@heroicons/react/24/outline';

const CardDeal = () => {
  return (
    <section className="grid grid-cols-3 gap-8 mt-20">
      {/* Card 1 */}
      <Card color="blue" variant="gradient" className="max-w-[20rem] p-8">
        {/* Card header */}
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="pb-8 m-0 mb-8 text-center border-b rounded-none border-white/10"
        >
          <Typography variant="small" color="white" className="font-normal uppercase">
            standard
          </Typography>
          <Typography variant="h1" color="white" className="flex justify-center gap-1 mt-6 font-normal text-7xl">
            <span className="mt-2 text-4xl">$</span>29 <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>

        {/* Card body */}
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">5 team members</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">200+ components</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">40+ built-in pages</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">1 year free updates</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">Life time technical support</Typography>
            </li>
          </ul>
        </CardBody>

        {/* Card footer */}
        <CardFooter className="p-0 mt-12">
          <Button
            size="lg"
            color="white"
            className="text-blue-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>

      {/* Card 2 */}
      <Card color="green" variant="gradient" className="max-w-[20rem] p-8">
        {/* Card header */}
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="pb-8 m-0 mb-8 text-center border-b rounded-none border-white/10"
        >
          <Typography variant="small" color="white" className="font-normal uppercase">
            premium
          </Typography>
          <Typography variant="h1" color="white" className="flex justify-center gap-1 mt-6 font-normal text-7xl">
            <span className="mt-2 text-4xl">$</span>49 <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>

        {/* Card body */}
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">10 team members</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">300+ components</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">60+ built-in pages</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">2 years free updates</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">Life time technical support</Typography>
            </li>
          </ul>
        </CardBody>

        {/* Card footer */}
        <CardFooter className="p-0 mt-12">
          <Button
            size="lg"
            color="white"
            className="text-green-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>

      {/* Card 3 (Existing Card) */}
      <Card color="blue" variant="gradient" className="max-w-[20rem] p-8">
      <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="pb-8 m-0 mb-8 text-center border-b rounded-none border-white/10"
        >
          <Typography variant="small" color="white" className="font-normal uppercase">
            premium
          </Typography>
          <Typography variant="h1" color="white" className="flex justify-center gap-1 mt-6 font-normal text-7xl">
            <span className="mt-2 text-4xl">$</span>49 <span className="self-end text-4xl">/mo</span>
          </Typography>
        </CardHeader>

        {/* Card body */}
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">10 team members</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">300+ components</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">60+ built-in pages</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">2 years free updates</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="p-1 border rounded-full border-white/20 bg-white/20">
                <CheckIcon strokeWidth={2} className="w-3 h-3" />
              </span>
              <Typography className="font-normal">Life time technical support</Typography>
            </li>
          </ul>
        </CardBody>

        {/* Card footer */}
        <CardFooter className="p-0 mt-12">
          <Button
            size="lg"
            color="white"
            className="text-green-500 hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default CardDeal;
