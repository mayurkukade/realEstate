import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import imghome from "../assets/imghome.png";
import {
  Card,
  CardHeader,
  CardBody,
  
} from "@material-tailwind/react";
import apartment from "../assets/apartment.png";
import building from "../assets/building.png";
import house from "../assets/house.png";
import land from "../assets/land.png";
import store from "../assets/store.png";
import village from "../assets/village.png";
import warehouse from "../assets/warehouse.png";
import Property from '../components/Property';
import PropertySearchForm from '../components/PropertySearchForm';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 ">
      <header className="flex flex-col md:flex-row items-center justify-center md:justify-end text-center py-12">
      <div className="md:mr-52 font-kalam md:text-right">
        <h1 className="text-4xl md:text-8xl text-customBlue">Where Dreams</h1>
        <p className="text-4xl md:text-8xl text-customBlue mt-2 md:mt-4">Come Home</p>
      </div>
      <div className="flex flex-col items-center md:items-right mt-8 md:mt-20">
        {/* Top avatar */}
        <img src="https://s3-alpha-sig.figma.com/img/ff38/e6a7/ebbf24ebe4fe502ad5d7aa6690fc7f61?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lyu4KEH1-wi6Ownqd~bRpGgu~MGDA1OFFX2gyHZmIxRuSOhuqBWV9NOk7fq5SNNndfnkjapH1IC2-x~DxWmqu4t4sA9oPBdRKSXmgUUfgILLm9qK9T0Kpg6AMea-Q3f1hJPhvWF2pBOxqc8FXQ~nOt-RWdRLoE3puILr~nhRsLOilkLyuuWjn37-c0Irh0HA3hsd1o0IFqvPDsXY-Py9aQ70z2jjwBsjYt-vjpvDdJANxRhndJnBW7bcREC5h-51fnQiphP8rACPC3Hx~bJNFfCgwrvjEiI-AyDFwsbzNsKhZS9rQB1bES98lqEWdF9UusRHQZvCMnrxKXhqNwIWGQ__" alt="Avatar 1" className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-2 md:mb-4 ring-8 ring-white shadow-2xl" />
        {/* Below avatars */}
        <div className="flex justify-center md:justify-start gap-4">
          <img src="https://s3-alpha-sig.figma.com/img/e599/9e3e/12c10e38026a27cde9d17a2719f0f173?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hmn14~2XrUVN8ANApcSBUAxObq1t1d9aCBW8fnXcjwZh3u870Gi-D5HRkGu3F5xw4VXVCofhwWNIcazLFbu0Sv~KI2sqNXAyV6N~ees8xRYztHgrVeT1uEjDh1KRXR~le0o8GtG3-HkegFdYprpsw9Xz1jYFtJjLSbV37jixKAQ81sL08TnBZzpHLSsHcBvHTZsFGEoCj2dVllDtpH609QmTsMrVdft8Wvam5srP6N1wVzG4kMIqrEMy6tMObVs6VVi3HzgPKO4w25SBlWGldiCcjQgATouYwA0A3O4xYlYAcUZwxcxfY6fCJFrgQ7DbHxedJFDvgz-pexXGIJ-ecg__" alt="Avatar 2" className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-2 md:mr-4 -mt-8 md:mt-0 ring-8 ring-white shadow-2xl" />
          <img src="https://s3-alpha-sig.figma.com/img/0e57/e960/837f344b030ab9bcd5d1df703d5a6ebd?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEtyMv~KBm2nQxiGmtaizorlqvrk1GC6qqABvfQXlebk1U-~RX2G08lxVHiw5n2N2V~R6bAqPPf8eQiPX2OycfguSGSG5oO7QS5g0FsQvhvStTa6mOhMvk4YIpu~4ematxtHQCUJbybQGzMw0LBq0zkdPvzVfh1-M6QS8DX0HqvRJ7WfaBFpL57~Py1RnBN1VT42wA89KA4jlRl-t-BLOiLUW3gdrelQ6AjuP5xiNJrTdYoKp76~hSs97NyInHRlLMQmUdSK8ZW04VWqtz11qAscyM3LiFkjyJY36weZe1YIQV-hUoSloa6b~EcUs3dW490ybCrCNKGxVSPtYByAsQ__" alt="Avatar 3" className="w-16 h-16 md:w-20 md:h-20 rounded-full -mt-8 md:mt-0 ring-8 ring-white shadow-2xl" />
        </div>
      </div>
    </header>
       <div className="mx-auto lg:ml-96 lg:mb-8"> <Typography  className="place-items-center ml-20 mb-4" variant="h5">Find Your Dream Property</Typography></div>
        <PropertySearchForm/>
      </div>

      
      <div className="bg-cover bg-center" style={{ backgroundImage: `url(${imghome})` }}>
        <div className="container mx-auto px-4 py-44 md:py-96">
          {/* Content within the background image section */}
          {/* <Typography variant="h2" color="white" className="mb-4">Welcome to Our Website!</Typography> */}
          {/* Add more content as needed */}
         
        </div>
      </div>



      <div className="bg-green-200 flex flex-row md:gap-20 gap-4 justify-center items-center py-6">
    <div className="flex flex-col items-center justify-center">
        <Typography variant="h2" color="blue-gray" className="mb-2">300+</Typography>
        <Typography variant="h6" color="blue-gray">Happy Clients</Typography>
    </div>

    <div className="flex flex-col items-center justify-center">
        <Typography variant="h2" color="blue-gray" className="mb-2">1K+</Typography>
        <Typography variant="h6" color="blue-gray">Property Ready</Typography>
    </div>

    <div className="flex flex-col items-center justify-center">
        <Typography variant="h2" color="blue-gray" className="mb-2">80+</Typography>
        <Typography variant="h6" color="blue-gray">Completed Agent</Typography>
    </div>

    <div className="flex flex-col items-center justify-center">
        <Typography variant="h2" color="blue-gray" className="mb-2">60%</Typography>
        <Typography variant="h6" color="blue-gray">Years Growth</Typography>
    </div>
</div>
      <div className="flex md:flex-row flex-col justify-center items-center space-evenly mb-8 gap-2 md:gap-x-8 mt-8">
          {/* Card 1 */}
          <div className="relative w-64 h-40 bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105">
            <img src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card 1" className="w-full h-full object-cover rounded-t-lg" />
            <div className="absolute top-0 left-0 p-4">
              <Typography variant="h6" color="white">Rent</Typography>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-64 h-40 bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105">
            <img src="https://images.unsplash.com/photo-1622268643120-f5896e43f484?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card 2" className="w-full h-full object-cover rounded-t-lg" />
            <div className="absolute top-0 left-0 p-4">
              <Typography variant="h6" color="white">Resale</Typography>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-64 h-40 bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105">
            <img src="https://images.unsplash.com/photo-1610569244414-5e7453a447a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card 3" className="w-full h-full object-cover rounded-t-lg" />
            <div className="absolute top-0 left-0 p-4">
              <Typography variant="h6" color="white">Fresh Addition</Typography>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-64 h-40 bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card 4" className="w-full h-full object-cover rounded-t-lg" />
            <div className="absolute top-0 left-0 p-4">
              <Typography variant="h6" color="white">Plot for Sale</Typography>
            </div>
          </div>

          {/* Card 5 */}
          <div className="relative w-64 h-40 bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105">
            <img src="https://plus.unsplash.com/premium_photo-1661963478928-2d2d3e9b1e25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Card 5" className="w-full h-full object-cover rounded-t-lg" />
            <div className="absolute top-0 left-0 p-4">
              <Typography variant="h6" color="white">Services</Typography>
            </div>
          </div>
        </div>

        {/* Property Categories Section */}
      <div className="container mx-auto px-4 mt-8 mb-6">
        <div className="flex flex-col items-center mb-8">
          <Typography variant="h4" color="blue-gray" className="mb-4">Categories</Typography>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-12 justify-center ">
          {/* Category 1 */}
          <div className="flex flex-col items-center hover:shadow-xl hover:rounded-lg hover:bg-gray-200 hover:scale-105">
            {/* Icon or Image (replace placeholder with your actual image) */}
            <img src={apartment} alt="Category 1" className="w-28 h-28 mb-2" />
            {/* Category Name */}
            <Typography variant="h6" color="blue-gray" className="mb-2">Apartment</Typography>
          </div>
          <div className="flex flex-col items-center  hover:shadow-xl hover:rounded-lg hover:bg-gray-200 hover:scale-105">
            {/* Icon or Image (replace placeholder with your actual image) */}
            <img src={building} alt="Category 1" className="w-28 h-28 mb-2" />
            {/* Category Name */}
            <Typography variant="h6" color="blue-gray" className="mb-2">Building</Typography>
          </div>
          <div className="flex flex-col items-center  hover:shadow-xl hover:rounded-lg hover:bg-gray-200 hover:scale-105">
            {/* Icon or Image (replace placeholder with your actual image) */}
            <img src={house} alt="Category 1" className="w-28 h-28 mb-2" />
            {/* Category Name */}
            <Typography variant="h6" color="blue-gray" className="mb-2">House</Typography>
          </div> 
          <div className="flex flex-col items-center  hover:shadow-xl hover:rounded-lg hover:bg-gray-200 hover:scale-105">
            {/* Icon or Image (replace placeholder with your actual image) */}
            <img src={land} alt="Category 1" className="w-28 h-28 mb-2" />
            {/* Category Name */}
            <Typography variant="h6" color="blue-gray" className="mb-2">Land</Typography>
          </div> 
          <div className="flex flex-col items-center  hover:shadow-xl hover:rounded-lg hover:bg-gray-200 hover:scale-105">
            {/* Icon or Image (replace placeholder with your actual image) */}
            <img src={store} alt="Category 1" className="w-28 h-28 mb-2" />
            {/* Category Name */}
            <Typography variant="h6" color="blue-gray" className="mb-2">Store</Typography>
          </div> 
          <div className="flex flex-col items-center  hover:shadow-xl hover:rounded-lg hover:bg-gray-200 hover:scale-105">
            {/* Icon or Image (replace placeholder with your actual image) */}
            <img src={village} alt="Category 1" className="w-28 h-28 mb-2" />
            {/* Category Name */}
            <Typography variant="h6" color="blue-gray" className="mb-2">Village</Typography>
          </div> 
          <div className="flex flex-col items-center  hover:shadow-xl hover:rounded-lg hover:bg-gray-200 hover:scale-105">
            {/* Icon or Image (replace placeholder with your actual image) */}
            <img src={warehouse} alt="Category 1" className="w-28 h-28 mb-2" />
            {/* Category Name */}
            <Typography variant="h6" color="blue-gray" className="mb-2">Warehouse</Typography>
          </div>
        </div>
      </div>

      <Property />

      <div className="flex flex-col items-center mb-8">
        <Typography variant="h3" color="blue-gray" className="mb-4">Contact with Happy Customers</Typography>
      </div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

      {/* Contact Cards Section */}
      <div className="container mx-auto px-4 mt-4"> {/* Adjust top margin */}
        <div className="flex flex-col gap-10 md:flex-row justify-center md:gap-8">
          

    <div className='flex flex-col items-center cursor-pointer transform transition-all relative'>
       <img  className='object-cover w-full md:w-[250px] shadow-xl lg:w-[400px] h-[350px] md:h-[200px] lg:h-72 hover:shadow-2xl rounded-3xl hover:scale-105' src="https://s3-alpha-sig.figma.com/img/e743/c1a4/8093d306a0009e1a6398ed54b23d0116?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JmlkQBxqFLlB37GKI~yWLKTO9gKqAQxLbadTRJBI4mZj0voSOFQ7m4UfkTj70fsfORBYvg6UaIhkYsjQmurkZs0BNsly~jJtOI2HDqoTRMF~xjf2sCcLx4t3vRaqn2Miveu3krTX2Iwusa1XtrrVO6DmYu79BJ3JSqVwTo7xwR40QFflJSq7cAwRv~JZaLfYOpC4swZSJRJIe3Qv8XqCf6L1VjeK7k193Lq8SCTLJkZirrFJAQr0AGUzfMg-0ZOesBX4b5yHXoH4Z0n5iGk4y-zfJ12ZjXkUyfa6LgM2~sW0d7~tYx1PSxqFmnvq-SSCP9PaBHspiLWQlhfr8eZhwg__" alt="img"   />
       <h6 className='bg-[#FFFFFF] text-black text-center p-3 md:w-auto lg:w-auto w-full  border shadow-md rounded-lg absolute hover:bg-gray-100 -bottom-6 md:text-lg flex justify-between items-center'>
         <span className="mr-6">Benedicta Ellie <br />Harper</span>
          <span className="flex gap-4">
          <i className="fab fa-whatsapp text-3xl" style={{color: "#33691e",}}></i>
          <i className="fab fa-instagram text-3xl" style={{color: "#33691e",}}></i>
        </span>
       </h6>
  </div>

  <div className='flex flex-col items-center cursor-pointer transform transition-all relative'>
    <img  className='object-cover w-full md:w-[250px] shadow-xl lg:w-[400px] h-[350px] md:h-[200px] lg:h-72 hover:shadow-2xl rounded-3xl hover:scale-105' src="https://s3-alpha-sig.figma.com/img/6c6c/b393/614974341eccf94c06f6a8a6951f69f7?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HNHlGDY2z6nPeXJjSsFZ8PbI4Qb6DOUU-EZWu9rv8nAxLQSmp2ATiyGNJFjk3XYgJYsqFy~MAhuODW~9OTOYcyEvKtey~QVDNiZRBZW4sy3~zvQsTNJh5ZZBYg4Nevj9BtcKnXSU~LKZlPSQFJmxksC4YyIqleCLCf5I2nh8~X0cyhaf7NM9lEN5ijFETDOBCJ1WKy2ku0fb78Aaucvkcsy~3q1BQQQGNDlQtqzrsRwyZPYJwmIvZMucJPVMXaWuWlZZWW0A7THwTduZNQZ1r9ugVJqKou5vrHatRYVdG3YCLbUmcLiWMQ~wtQeX03N0uKvhU7dHVxF2fjUuGCqwEg__" alt="img"   />
    <h6 className='bg-[#FFFFFF] text-black text-center p-3 md:w-auto lg:w-auto w-full  border shadow-md rounded-lg absolute hover:bg-gray-100 -bottom-6 md:text-lg flex justify-between items-center'>
         <span className="mr-6">Johnny Ferdinard <br />Smith</span>
          <span className="flex gap-4">
          <i className="fab fa-whatsapp text-3xl" style={{color: "#33691e",}}></i>
          <i className="fab fa-instagram text-3xl " style={{color: "#33691e",}}></i>
        </span>
       </h6>
  </div>

  <div className='flex flex-col items-center cursor-pointer transform transition-all relative'>
    <img  className='object-cover w-full md:w-[250px] shadow-xl lg:w-[400px] h-[350px] md:h-[200px] lg:h-72 hover:shadow-2xl rounded-3xl hover:scale-105' src="https://s3-alpha-sig.figma.com/img/d1b2/cda0/4a945d7407a37d29f72113476d0da048?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KLAf-40cE01AodUMbq0APUiw8pIije684VWWUjcoX8ljSQR1cqqL6NtR1Cpbq3K5RjCCtCB9aAZp3brjXPaTB3KHesb60qfOuUJPQCbfRIo6StGz8tHNHopFXd3aVE~Y6F5Iqt~X9JdM4fOfjId0h1Bmg69KjKjvIlip8r9tESzo61J5w8aaghmyf-9XfVwif-cK1QM-Tdv4FOI59Ej8nJbksDLBRyCllro0a3Oo068etEBmhndLIPp4qdTMj7fwhjDnsPmMNTmIIIOpIQfO1pb8i0sdVvLqZChaFSEjIjIar76se~~5x~RuXIHDrvhnhsOM1wntQXVQ5wWSPdoTDQ__" alt="img"   />
       <h6 className='bg-[#FFFFFF] text-black text-center p-3 md:w-auto lg:w-auto w-full  border shadow-md rounded-lg absolute hover:bg-gray-100 -bottom-6 md:text-lg flex justify-between items-center'>
         <span className="mr-6">Bruno Leonard <br />Rarich</span>
          <span className="flex gap-4">
          <i className="fab fa-whatsapp text-3xl"style={{color: "#33691e",}}></i>
          <i className="fab fa-instagram text-3xl"style={{color: "#33691e",}}></i>
        </span>
       </h6>
  </div>

          
        </div>
      </div>

      {/* See More Button (below the cards) */}
      <div className="flex flex-col items-center mb-4 mt-16">
        {/* See More Button (replace with your actual link or functionality) */}
        <Button color="brown" onClick={() => console.log('See More clicked')}>See More</Button>
      </div>


      <div className="container mx-auto px-4 my-12">
      <style jsx>{`
    .card-image-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card-image {
      max-width: 100%;
      max-height: 100%;
    }
  `}</style>
  <div className="flex flex-col items-center mb-8">
    <Typography variant="h3" color="blue-gray" className="mb-4">Our Latest News</Typography>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    

   {/* card-1*/}
   <Card className="w-full max-w-[48rem] flex-row shadow-none">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none card-image-container"
      >
        <img
          src="https://media.istockphoto.com/id/157311391/photo/miniature-model-house-series.jpg?s=2048x2048&w=is&k=20&c=5K4d9dLydQM6XY7qQyoCnmCPIn6WJq8LVkWYyaAqZfs="
          alt="card-image"
          className="h-1/2 w-3/5 rounded-2xl card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="black" className="mb-4 uppercase">
        Home Prices Are Finally Falling:How Low Will They Go?
        </Typography>
        
        <Typography color="gray" className="mb-8 font-normal">
        Just how far will home prices fall? That's the million-dollar question for frustrated home buyers, worried sellers and homeowners.
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="filled" className="flex items-center gap-2" color="lime">
            Read More
            
          </Button>
        </a>
      </CardBody>
    </Card>

      {/* card-2*/}
    <Card className="w-full max-w-[48rem] flex-row shadow-none">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none  card-image-container"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1687996106455-b391358404bf?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-image"
          className="h-1/2 w-3/5 rounded-2xl  card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="black" className="mb-4 uppercase">
        How To Be Eco-Forward At Home
        </Typography>
        
        <Typography color="gray" className="mb-8 font-normal">
        From recycling to upcycling, sustainability is a priority for Americans. People are more proactive than ever in their pursuit of a sustainable lifestyle.
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="filled" className="flex items-center gap-2" color="lime">
            Read More
            
          </Button>
        </a>
      </CardBody>
    </Card>


      {/* card-3*/}
    <Card className="w-full max-w-[48rem] flex-row shadow-none">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none  card-image-container"
      >
        <img
          src="https://media.istockphoto.com/id/1357529193/photo/3d-rendering-of-a-cozy-living-room.jpg?s=2048x2048&w=is&k=20&c=3DNM6MEVHjVYylIG3nigNKX1NMiBdZRN3PxfThhwIXc="
          alt="card-image"
          className="h-1/2 w-3/5 rounded-xl  card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="black" className="mb-4 uppercase">
        What Your Home Personality Says About You
        </Typography>
        
        <Typography color="gray" className="mb-8 font-normal">
         What home personality are you? Read on to learn more about each style, and peep a few of our favorite homes available.
         5 Ways To Get Your House Ready For Summer
         The warmest season is here. check out these tips to maximize energy 
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="filled" className="flex items-center gap-2" color="lime">
            Read More
          </Button>
        </a>
      </CardBody>
    </Card>

      {/* card-4*/}
    <Card className="w-full max-w-[48rem] flex-row shadow-none">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none  card-image-container"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1683917068753-42d5abcc3ce4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-image"
          className="h-1/2 w-3/5 rounded-2xl  card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="black" className="mb-4 uppercase">
        5 Ways To Get Your House Ready For Summer
        </Typography>
        
        <Typography color="gray" className="mb-8 font-normal">
        The warmest season is here. check out these tips to maximize energy efficiency and make summer living a breeze.
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="filled" className="flex items-center mt-16 gap-2" color="amber">
            Read More
          </Button>
        </a>
      </CardBody>
    </Card>
    

    
  </div>
</div>

       
    </div>
  );
};

export default HomePage;
