import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
 

 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 gap-8">
      <Typography
        as="a"
        href="#"
        variant="h5"
        color="black"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      
      <Typography
        as="a"
        href="#"
        variant="h5"
        color="black"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Listing
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="h5"
        color="black"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Properties
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="h5"
        color="black"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact us
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="h5"
        color="black"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          About
        </ListItem>
      </Typography>
    </List>
  );
}
 
export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className="x-auto max-w-full px-6 py-3 rounded-none border-none shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
       <div className="flex mt-0">
        <div>
        <img src="https://s3-alpha-sig.figma.com/img/2458/f302/17d6a62fbb11ecefc8339858edd37ebb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdskbuWEUTdQrNEK0pA1JEMZowj9~gaCACga2EgWCFKezbXQzh2SVeIekVJWZbjaclkVAksSDpJQAbHPT6LBxCbml2iVI1n2~bwTW3YSqhn59Qwb4A2hfQ-koKhFdmy0VAlnWpb9SPK-jGwPjlXZVs5bCgyu1Ydyh0okcVMf0rq~gythcjPtcUnWShlYfVyCJkd~5Ngh3jMv4Nk~hHn2o4mVM0AHwcPV5WKrEIYaCn7itjjLkK~akfCnOWLOsfC4A1AGT9MogUUiim6OSDmukcUgrnG52405ozgS9XiSAyJGuYYsF4GomVz03DRUJrbtKwJY1Z5RUEtKnuJs9DQY~w__" className="w-16 h-16"></img>
        </div>
        <div>
        <Typography
          as="a"
          href="#"
          variant="h3"
          className=" cursor-pointer"
        >
          RealEstate
        </Typography>
        <Typography
           as="a"
           href="#"
           variant="paragraph"
           className=" cursor-pointer space-y-0 my-0 mt-0"
        >
            We'll lead you the way home
          </Typography>
          </div>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-8 lg:flex">
          <Button variant="outlined" size="md" >
            Log In
          </Button>
          <Button variant="filled"  size="md" color="indigo">
            Sign Up
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign Up
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

export default Header;