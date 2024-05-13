import { MdLocalShipping } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { MdPayment } from "react-icons/md";
export default function SmallBanner() {
  return (
<div className=" sm:mb-40 mb-48 md:mb-40 lg:mb-24 xl:mb-20 2xl:mb-16   ">
    <div  className=" text-secondary container lg:left-28 space-y-5 xl:left-28 2xl:left-28 md:left-16 sm:left-16 left-8  bg-hover    py-5 absolute w-10/12   shadow-md rounded-md  xl:top-[460px] 2xl:top-[420px] lg:top-[400px] md:top-[690px] top-[550px] sm:flex-none  lg:flex xl:flex 2xl:flex md:flex-none flex-none justify-between items-center ">
        <div className=" flex-col justify-center  items-center ">
        <p className=" flex justify-center"><MdLocalShipping size={30} /></p>
          <p className="flex justify-center font-bold">FREE SHIPPING</p>
        
        </div>
        <div>
        <p className=" flex justify-center"><IoIosTime size={30} /></p>
          <p className="flex justify-center font-bold">DELIVERY ON TIME</p>
    
        </div>
        <div>
        <p className=" flex justify-center"><MdPayment size={30} /></p>
          <p className="flex justify-center font-bold">SECURE PAYMENT</p>
       
        </div>
      </div>
    </div>
  )
}
