import image from "../assets/image/healthy-vegetables-wooden-table.jpg";
import SmallBanner from "./SmallBanner";
import VegetableCategorycard from "./VegetableCategorycard";

export default function Hero() {
  return (
   <>
    <div className=" bg-hero  sm:mb-5  lg:mb-16 xl:mb-16 2xl:mb-16 md:mb-5 mb-5 relative">
      <div className=" container  pt-8  pb-28  sm:flex-none  lg:flex xl:flex 2xl:flex md:flex:none flex-none justify-center items-center mt-10 ">
        <div className=" w-full  sm:w-full  lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-full flex-col justify-center items-center">
          <h1 className="text-4xl  sm:pt-5  lg:pt-2 xl:pt-0 2xl:pt-0 md:pt-5 pt-5  font-bold">
            Welcome to the world of{" "}
            <span className="text-secondary">Vegetable</span>
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
          <button className=" bg-secondary rounded-md text-white px-4 py-2 mt-4">
            Get Started
          </button>
        </div>
        <div className=" w-full  sm:w-full  lg:w-1/2 xl:w-1/2 2xl:w-1/2 md:w-full sm:mt-5  lg:mt-2 xl:mt-0 2xl:mt-0 md:mt-5 mt-5 flex justify-center items-center ">
          <img
            src={image}
            alt="vegetable"
            className="w-full h-full rounded-3xl "
          />
        </div>
      </div>

      {/* small hero */}
    <SmallBanner/>

    </div>
        <VegetableCategorycard/> 
     
        
        
         </>

  );
}
