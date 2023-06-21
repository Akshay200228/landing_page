import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    CardFooter,
} from '@material-tailwind/react';
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Carousel } from 'react-responsive-carousel';
import { card1, card2, card3 } from '../assets';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../style';

const Cards = () => {
    return (
        <div>
            {/* 1st Card */}
            <Card className="flex-col w-full mt-20 bg-gray-900 md:flex-row">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="bg-gray-900 md:w-2/5 h-96"
                >
                    <img
                        src={card1}
                        alt="image"
                        className="w-full h-full"
                    />
                </CardHeader>
                <CardBody className="md:w-3/5">
                    <Typography variant="h4" color="blue-gray" className="mb-2 text-dimWhite">
                        Lyft launching cross-platform service this week Lorem ipsum dolor sit amet.
                    </Typography>
                    <Typography color="gray" className={`${styles.paragraph} mb-8 font-normal`}>
                        Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.
                        Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.
                    </Typography>
                    <Button variant="text" className="flex items-center gap-2 bg-slate-100 hover:bg-dimWhite">
                        Read More <ArrowLongRightIcon strokeWidth={2} className="w-5 h-5" />
                    </Button>
                </CardBody>
            </Card>

            {/* 2nd and 3rd Cards - Only in Desktop View */}
            <div className="hidden mt-12 md:flex">
                {/* 2nd Card */}
                <Card className="w-1/2 mr-2 bg-gray-900">
                    <CardHeader color="blue-gray" className="relative bg-gray-900 h-80">
                        <img src={card2} alt="img-blur-shadow" className="w-full h-full" />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 text-dimWhite">
                            Lock down copy you want to keep and the AI will the rest.
                        </Typography>
                        <Typography color="gray" className={`${styles.paragraph} mb-8 font-normal`}>
                            Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center pt-0">
                        <Button variant="text" className="flex items-center gap-2 bg-slate-100 hover:bg-dimWhite">
                            Read More <ArrowLongRightIcon strokeWidth={2} className="w-5 h-5" />
                        </Button>
                    </CardFooter>
                </Card>

                {/* 3rd Card */}
                <Card className="w-1/2 mr-2 bg-gray-900">
                    <CardHeader color="blue-gray" className="relative bg-gray-900 h-80">
                        <img src={card3} alt="img-blur-shadow" className="w-full h-full" />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h4" color="blue-gray" className="mb-2 text-dimWhite">
                            Lock down copy you want to keep and the AI will the rest.
                        </Typography>
                        <Typography color="gray" className={`${styles.paragraph} mb-8 font-normal`}>
                            Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex justify-center pt-0">
                        <Button variant="text" className="flex items-center gap-2 bg-slate-100 hover:bg-dimWhite">
                            Read More <ArrowLongRightIcon strokeWidth={2} className="w-5 h-5" />
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            {/* Carousel - Only in Mobile View */}
            <div className="mt-12 md:hidden">
                <Carousel showStatus={false} showThumbs={false}>
                    <div>
                        <Card className="w-full bg-gray-900">
                            <CardHeader color="blue-gray" className="relative bg-gray-900 h-80">
                                <img src={card2} alt="img-blur-shadow" className="w-full h-full" />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2 text-dimWhite">
                                    Lock down copy you want to keep and the AI will the rest.
                                </Typography>
                                <Typography className={`${styles.paragraph} mb-8 font-normal`}>
                                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex justify-center pt-0">
                                <Button variant="text" className="flex items-center gap-2 bg-slate-100">
                                    Read More <ArrowLongRightIcon strokeWidth={2} className="w-5 h-5" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                    <div>
                        <Card className="w-full bg-gray-900">
                            <CardHeader color="blue-gray" className="relative bg-gray-900 h-80">
                                <img src={card3} alt="img-blur-shadow" className="w-full h-full" />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2 text-dimWhite">
                                    Lock down copy you want to keep and the AI will the rest.
                                </Typography>
                                <Typography className={`${styles.paragraph} mb-8 font-normal`}>
                                    Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.
                                </Typography>
                            </CardBody>
                            <CardFooter className="flex justify-center pt-0">
                                <Button variant="text" className="flex items-center gap-2 bg-slate-100">
                                    Read More <ArrowLongRightIcon strokeWidth={2} className="w-5 h-5" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Cards;
