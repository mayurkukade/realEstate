import { Navbar, Button, Input } from "@material-tailwind/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export function PropertyDetailPageNavbar() {
  return (
    <div>
      <Navbar
        variant="gradient"
        color="blue-gray"
        className="max-w-screen-3xl from-blue-700 px-52 py-3 rounded-none"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Find your location"
              className="pr-20"
              containerProps={{
                className: "min-w-[368px]",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 bottom-1 rounded"
            >
              <FaMagnifyingGlass style={{ fontSize: 16 }} />
            </Button>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
