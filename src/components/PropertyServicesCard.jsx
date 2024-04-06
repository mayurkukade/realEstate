import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import PropertyServicesCardImg from "../assets/images/PropertyServicesCardImg.jpg";

export function PropertyServicesCard() {
  return (
    <div className="md:grid md:place-content-center m-4">
      <div className="p-6 w-full md:w-[1100px] border border-cyan-100 rounded-lg shadow-xl">
        <div
          id="heading"
          className="font-[poppins] text-2xl font-semibold mb-4 md:mb-5"
        >
          Property Services
        </div>

        <div id="cards" className="flex flex-col md:flex-row gap-4 md:gap-x-4">
          <div id="card1">
            <Card className="w-80 border border-cyan-100 shadow-xl mb-0">
              <CardHeader color="blue-gray" className="relative h-36 mt-0 mx-0">
                <img src={PropertyServicesCardImg} alt="card-image" />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-[poppins] mb-1"
                >
                  Home Loans
                </Typography>
                <Typography className="">
                  View & compare your best offers and apply online
                </Typography>
              </CardBody>
            </Card>
          </div>

          <div id="card2">
            <Card className="w-80 border border-cyan-100 shadow-xl mb-0">
              <CardHeader color="blue-gray" className="relative h-36 mt-0 mx-0">
                <img src={PropertyServicesCardImg} alt="card-image" />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-[poppins] mb-1"
                >
                  Legal Services
                </Typography>
                <Typography className="">
                  Get expert legal help for all property related matters
                </Typography>
              </CardBody>
            </Card>
          </div>

          <div id="card3">
            <Card className="w-80 border border-cyan-100 shadow-xl mb-0">
              <CardHeader color="blue-gray" className="relative h-36 mt-0 mx-0">
                <img src={PropertyServicesCardImg} alt="card-image" />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-[poppins] mb-1"
                >
                  Vastu
                </Typography>
                <Typography className="">
                  Consult the best vastu experts for your home or office
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
