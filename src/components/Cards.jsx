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
import { card1, card2, card3 } from '../assets';

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
                    <Typography variant="h6" color="blue" className="mb-4 uppercase">
                        startups
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Lyft launching cross-platform service this week
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.
                    </Typography>
                    <a href="#" className="inline-block">
                        <Button variant="text" className="flex items-center gap-2">
                            Learn More
                            <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                        </Button>
                    </a>
                </CardBody>
            </Card>
            <div className="flex mt-12">
                {/* 2nd Card */}
                <Card className="w-1/2 mr-2 bg-gray-900">
                    <CardHeader color="blue-gray" className="relative bg-gray-900 h-80">
                        <img src={card2} alt="img-blur-shadow" className="w-full h-full" />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>

                {/* 3rd Card */}
                <Card className="w-1/2 mr-2 bg-gray-900">
                    <CardHeader color="blue-gray" className="relative bg-gray-900 h-80">
                        <img src={card3} alt="img-blur-shadow" className="w-full h-full" />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by walk
                            and near to &quot;Naviglio&quot; where you can enjoy the main night life
                            in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default Cards;