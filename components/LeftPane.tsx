import Image from "next/image";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsCalendar, BsDownload, BsPencil, BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

import AvatarPic from "../public/img/avatar.jpeg";

const LeftPane = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-9">
        <div className="relative mt-10 w-28 h-28 rounded-full avatar-img">
          <div className="absolute left-1 top-5 z-20 w-3 h-3 bg-green-500 rounded-full" />
          <div className="absolute left-1 top-5 z-20 w-3 h-3 bg-green-400 rounded-full animate-ping" />
          <Image
            src={AvatarPic}
            height={200}
            width={200}
            layout="responsive"
            className="z-10 rounded-full"
            placeholder="blur"
            alt="Avatar image"
          />
        </div>
        <div className="flex flex-col items-center space-y-1">
          <h4 className="text-3xl font-black text-white">Sourav RS</h4>
          <p className="px-3 py-1 font-light text-white bg-gray-600 rounded-full text-md">
            Frontend Developer
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-sm font-thin text-white">
          <div className="flex items-center space-x-3">
            <BsCalendar />
            <p>May 4, 1999</p>
          </div>
          <div className="flex items-center space-x-3">
            <GoLocation />
            <p>Kerala, India</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaGithub />
            <p>souravrs999</p>
          </div>
          <div className="flex items-center space-x-3">
            <BsPhone />
            <p>+91 9567611892</p>
          </div>
        </div>
        <div className="flex space-x-3 text-gray-300">
          <FaFacebookF />
          <FaGithub />
          <FaInstagram />
          <FaTwitter />
        </div>
        <div className="flex justify-center w-full">
          <button className="px-5 py-2 rounded-full border-2 border-blue-500 shadow-lg transition-all ease-in-out hover:bg-blue-500">
            <div className="flex items-center space-x-3 font-bold text-white cv-btn">
              <BsDownload className="w-4 h-4 icon" />
              <span>Download CV</span>
            </div>
          </button>
        </div>
        <div className="pb-5 text-sm text-white">
          &copy; {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </>
  );
};
export default LeftPane;
