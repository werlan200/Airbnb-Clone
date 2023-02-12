import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  GlobeAmericasIcon,
  UserCircleIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 md:px-10 shadow-md">
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          fill
          alt="air bnb logo"
          className="object-contain object-left"
        />
      </div>
      <div className="flex items-center md:shadow-sm md:border-2 rounded-full">
        <input
          type="text"
          className="flex-grow outline-none pl-4 bg-transparent rounded-full text-sm text-gray-600 placeholder-gray-400"
          placeholder="Search..."
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex md:mx-1 bg-red-400 h-8 rounded-full text-white p-2 transition-all hover:p-1.5" />
      </div>
      <div className="flex items-center justify-end space-x-3 text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAmericasIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-1.5 border-2 rounded-full p-1.5 cursor-pointer">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
