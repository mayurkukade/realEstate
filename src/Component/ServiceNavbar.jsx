import {
    Navbar,
    Button,
    Input,
  } from "@material-tailwind/react";

   
  export function ServiceNavbar() {
    return (
        <section>
      <Navbar
        variant="gradient"
        className="mx-5 bg-[#4a61e3] px-4 py-3 "
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white Cap">
          <div className="relative flex w-full gap-2 md:w-max font-[serif]">
            <Input
              type="search"
              color="white"
              label="Find your Services..."
              className=""
              containerProps={{
                className: "min-w-[350px]",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 font-[serif] rounded hover:bg-gray-100"
            >
              Search
            </Button>
          </div>
        </div>
      </Navbar>

      <div className=" flex mx-8 mt-5 justify-between ">
        <div>
            <Button
              size="sm"
              color="white"
              className="bg-[#ffffff] border capitalize text-sm font-[Lato] font-normal mr-5"
            >
              Services
            </Button>
            <Button
              size="sm"
              color="white"
              className="bg-[#ffffff] border capitalize font-[Lato] text-sm font-normal"
            >
              Top Service Providers
            </Button>
        </div>
      
            <div>
            <Button
              size="sm"
              color="white"
              className="flex text-end justify-end items-end rounded-full bg-[#ffffff]  border capitalize text-sm font-normal font-[Lato] px-5"
            >
            Sort by : Relevance
            </Button>
            </div>
      </div>
      <div className="border-b-2 border-gray-200 mt-2"></div>
      </section>
    );
  }