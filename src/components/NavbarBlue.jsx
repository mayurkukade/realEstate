import { Navbar, Button, Input } from "@material-tailwind/react";

export function NavbarBlue() {
  return (
    <div>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </div>

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
              className="!absolute right-1 top-1 rounded"
            >
              <i class="fa-solid fa-magnifying-glass fa-lg"></i>
            </Button>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
