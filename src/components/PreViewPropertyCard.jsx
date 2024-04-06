import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image1 from "../assets/images/Image1.jpg";
import Image2 from "../assets/images/Image2.jpg";

export function PreViewPropertyCard() {
  return (
    <div className="font-[lato] md:grid md:place-content-center m-4">
      <div className=" p-6 w-full md:w-[1100px] border rounded-lg border-cyan-100 shadow-xl">
        <div className="font-[poppins] text-2xl font-semibold mb-4 md:mb-5">
          Previously Viewed Properties
        </div>

        <div className="flex flex-col md:flex-row md:gap-x-6">
          <Card
            id="card1"
            className="w-full md:h-56 max-w-[28rem] flex flex-col md:flex-row border border-cyan-100 shadow-xl mb-4 md:mb-0"
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 md:w-2/5 shrink-0 md:rounded-r-none"
            >
              <img
                src={Image1}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h6"
                color="gray"
                className="font-[poppins] mb-2 uppercase"
              >
                1 BHK House
              </Typography>
              <Typography
                variant="h4"
                color="blue-gray"
                className="font-[poppins] text-xl mb-1 md:mb-2"
              >
                ₹ 90.0 Lac | 707 sqft
              </Typography>
              <Typography
                color="gray"
                className="font-[lato] text-black mb-1 md:mb-3 font-normal "
              >
                Green Hills Apartment Wagholi, Pune
              </Typography>
              <a href="#" className="inline-block">
                <Button
                  variant="text"
                  className="font-[lato] flex items-center gap-2 text-red-700"
                >
                  Contact Owner
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

          <Card
            id="card1"
            className="w-full md:h-56 max-w-[28rem] flex flex-col md:flex-row border border-cyan-100 shadow-xl"
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 md:w-2/5 shrink-0 md:rounded-r-none"
            >
              <img
                src={Image1}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h6"
                color="gray"
                className="font-[poppins] mb-2 uppercase"
              >
                1 BHK House
              </Typography>
              <Typography
                variant="h4"
                color="blue-gray"
                className="font-[poppins] text-xl mb-1 md:mb-2"
              >
                ₹ 90.0 Lac | 707 sqft
              </Typography>
              <Typography
                color="gray"
                className="font-[lato] text-black mb-1 md:mb-3 font-normal "
              >
                Green Hills Apartment Wagholi, Pune
              </Typography>
              <a href="#" className="inline-block">
                <Button
                  variant="text"
                  className="font-[lato] flex items-center gap-2 text-red-700"
                >
                  Contact Owner
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
      </div>
    </div>
  );
}
