
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export default function Cards({image}) {
  return (
    <div>
      <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
         INR 210000
        </Typography>
        <Typography>
          4291 Bay Point Drive
        </Typography>
        <Typography className='text-xs'>
          4291 Bay Point Drive , Saswad, pin 4124411 
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to="/rentalpropertydetail">
        <Button className='bg-green-500'>View</Button>
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}
