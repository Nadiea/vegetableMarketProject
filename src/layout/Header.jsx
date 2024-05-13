import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { RiFacebookFill } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCarrot } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import { useState } from "react";
export default function Header() {
  //dropdown menu
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className=" text-secondary   font-sans  font-bold ">
      {/* first navbar */}
      <div className="  bg-primary shadow-md hidden md:block lg:block xl:block 2xl:block ">
        <div className="   container justify-between flex  py-2">
          <div className="flex gap-3">
            {" "}
            <div className="   text-base gap-1 flex">
              <p className=" mt-[3px] text-secondary">
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
      <div className="  bg-white   py-3">
        <div className=" container flex justify-between">
          <div className=" flex gap-1">
            <div className="  md:text-lg 2xl:text-2xl xl:text-2xl lg:text-xl text-sm font-bold text-secondary ">
              Vege
            </div>
            <div className=" text-logo">
              <FaCarrot size={30} />
            </div>
            <div className="  md:text-lg 2xl:text-2xl xl:text-2xl lg:text-xl text-sm font-bold text-secondary ">
              Table
            </div>
          </div>
          <div className="hidden lg:flex xl:flex 2xl:flex gap-5 justify-center items-center">
            <a href="#" className="text-secondary text-sm font-bold">
              Home
            </a>
            <a href="#" className="text-secondary text-sm font-bold">
              About
            </a>
            <a href="#" className="text-secondary text-sm font-bold">
              Category
            </a>
            <a href="#" className="text-secondary text-sm font-bold">
              Blog
            </a>
            <a href="#" className="text-secondary text-sm font-bold">
              Contact
            </a>
          </div>

          {/* cart */}
          <div className=" md:hidden lg:flex xl:flex 2xl:flex hidden">
            <div className=" mt-3">
              <FaCartArrowDown size={28} />
            </div>
            <div className="bg-primary rounded-full flex justify-center items-center p-1 m-1 h-6 w-6">
              <span className="text-white text-xs font-bold">7</span>
            </div>
          </div>

          {/* small screen */}
          <div
            onClick={handleMenu}
            className=" lg:hidden xl:hidden 2xl:hidden flex justify-center items-center"
          >
            <div>
              <RxDropdownMenu size={32} />
            </div>
          </div>

          {/* small screen navbar menu */}

          {showMenu && (
            <div className="lg:hidden xl:hidden 2xl:hidden p-4  absolute top-7 right-0 bg-primary w-full mt-8  ">
              <div className="flex flex-col gap-5 justify-center items-center">
                <a
                  href="#"
                  className="text-secondary hover:bg-logo text-sm font-bold"
                >
                  Home
                </a>
                <a href="#" className="text-secondary text-sm font-bold">
                  About
                </a>
                <a href="#" className="text-secondary text-sm font-bold">
                  Category
                </a>
                <a href="#" className="text-secondary text-sm font-bold">
                  Blog
                </a>
                <a href="#" className="text-secondary text-sm font-bold">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* third Navbar only category list dropdown and search bar */}

      <div className=" bg-white mt-5 mb-5">
        <div className=" container  2xl:flex xl:flex md:flex-none sm:flex-none flex-none lg:flex   md:gap-5 gap-0 ">
          <div className="flex gap-10 xl:w-4/12 2xl:w-4/12 lg:w-4/12 sm:w-12/12 md:w-12/12 w-12/12">
            <div className="hs-dropdown  sm:w-full  lg:w-full xl:w-full 2xl:w-full md:w-full relative inline-flex">
              <button
                id="hs-dropdown-with-dividers"
                type="button"
                className="hs-dropdown-toggle py-3 px-8 inline-flex items-center  sm:gap-x-72  lg:gap-x-72 xl:gap-x-56 2xl:gap-x-72 md:gap-x-72 gap-x-56 text-sm font-medium rounded-lg border border-gray-200 bg-secondary text-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                Actions
                <svg
                  className="hs-dropdown-open:rotate-180 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 divide-y divide-gray-200"
                aria-labelledby="hs-dropdown-with-dividers"
              >
                <div className="py-2 first:pt-0 last:pb-0">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    href="#"
                  >
                    Newsletter
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    href="#"
                  >
                    Purchases
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    href="#"
                  >
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    href="#"
                  >
                    Team Account
                  </a>
                </div>
                <div className="py-2 first:pt-0 last:pb-0">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    href="#"
                  >
                    Upgrade License
                  </a>
                </div>
                <div className="py-2 first:pt-0 last:pb-0">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    href="#"
                  >
                    Account Settings
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                    href="#"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-8/12  mt-2 md:mt-2 lg:mt-0 xl:mt-0 2xl:mt-0 sm:mt-2 ">
            <div className="flex gap-1 justify-between  w-full ">
              <input
                type="text"
                className="border rounded-md w-full  p-2"
               placeholder="Search"
              />
              <button className="bg-secondary border rounded-md text-white px-4 py-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
