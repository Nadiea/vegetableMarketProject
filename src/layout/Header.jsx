import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { RiFacebookFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
export default function Header() {
  return (
    <div className=" text-secondary  2xl:  ">
      {/* first navbar */}
      <div className="  bg-primary shadow-md hidden lg:block xl:block 2xl:block ">
        <div className="   container justify-between flex  py-2">
          <div className="flex gap-3">
            {" "}
            <div className="   text-base gap-1 flex">
              <p className=" mt-[3px]">
                <CiMail size={20} />
              </p>
              <p className="mt-[2px]">test@gmail.com</p>
            </div>
            <div className=" mt-1  text-secondary ">
              {" "}
              <RxDividerVertical size={20} />
            </div>
            <div className="   text-sm gap-1 flex">
              <p className=" mt-1">
                <FaPhoneAlt size={16} />
              </p>
              <p>O1777435757</p>
            </div>
          </div>

          <div className=" flex gap-3">
            {" "}
            <div className="   text-sm gap-2 flex">
              <p className=" mt-1">
                <RiFacebookFill size={20} />
              </p>
              <p className=" mt-1">
                <CiInstagram size={20} />
              </p>
              <p className=" mt-1">
                <FaTwitter size={20} />
              </p>
              <p className=" mt-1">
                <FaPinterest size={20} />
              </p>
            </div>
            <div className=" mt-1  text-secondary ">
              {" "}
              <RxDividerVertical size={20} />
            </div>
            <div className="   text-sm gap-1 flex">
              <select
                name=" "
                className=" rounded-sm py-1 px-2 border-none bg-primary"
                id=""
              >
                <option className=" text-sm" value="en">
                  ENGLISH
                </option>
                <option className=" text-sm" value="bn">
                  BANGLA
                </option>
              </select>
            </div>
            <div className=" mt-1  text-secondary ">
              {" "}
              <RxDividerVertical size={20} />
            </div>
            <div className="   text-sm gap-2 flex">
              <p className=" ">
                <FaUser size={20} />
              </p>
              <p className=" text-base">Login</p>
            </div>
          </div>
        </div>
      </div>
      {/* second navbar */}
      <div className=" bg-white py-3">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
