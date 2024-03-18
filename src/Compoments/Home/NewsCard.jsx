
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

export default function NewsCard({image}) {
  return (
    <div>
         <Card className="w-full max-w-[36rem] h-[17rem] flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className="h-[15rem] w-full object-cover bg-cover bg-center"
        />
      </CardHeader>
      <CardBody>
        
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Home Price are Finally Falling
        </Typography>
        <Typography color="gray" className="mb-8 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laudantium necessitatibus quos quam ab reprehenderit tempora, similique voluptas minima error.
        </Typography>
        <a href="#" className="inline-block">
          <Button  className="flex items-center bg-green-500 gap-2">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
    </div>
  )
}
