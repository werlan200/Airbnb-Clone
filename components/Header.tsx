import { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  GlobeAmericasIcon,
  UserCircleIcon,
  Bars3Icon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import Link from "next/link";
import { useRouter } from "next/router";

type HeaderProps = {
  placeholder?: string;
};

const selectionRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

const Header = ({ placeholder }: HeaderProps) => {
  const [searchText, setSearchText] = useState("");
  const [selectedDate, setSelectedDate] = useState(selectionRange);
  const [peopleNumber, setPeopleNumber] = useState(1);

  const router = useRouter();

  const handleDateSelect = (ranges: any) => {
    const { startDate, endDate } = ranges.selection;
    setSelectedDate({ ...selectionRange, startDate, endDate });
  };

  const handleCancel = () => {
    setSearchText("");
    setSelectedDate(selectionRange);
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchText,
        startDate: selectedDate.startDate.toISOString(),
        endDate: selectedDate.endDate.toISOString(),
        peopleNumber,
      },
    });
    handleCancel();
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 md:px-10 shadow-md">
      <Link
        href="/"
        className="relative flex items-center h-10 my-auto cursor-pointer"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          fill
          alt="air bnb logo"
          className="object-contain object-left"
        />
      </Link>
      <div className="flex items-center md:shadow-sm md:border-2 rounded-full">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          className="flex-grow outline-none pl-4 bg-transparent rounded-full text-sm text-gray-600 placeholder-gray-400"
          placeholder={placeholder || "Search..."}
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

      {searchText && (
        <div className="relative z-100 col-span-3">
          <div className="absolute top-0 -left-10 -right-10 z-200 flex flex-col shadow-md bg-white pt-2.5">
            <div className="mx-auto">
              <DateRangePicker
                ranges={[selectedDate]}
                onChange={handleDateSelect}
                rangeColors={["#FD5B61"]}
                minDate={new Date()}
                className="[&>div:first-of-type]:hidden sm:[&>div:first-of-type]:block"
              />
              <div className="flex items-center border-b mt-1 md:mt-2 px-5 sm:px-0">
                <h2 className="font-bold text-xl flex-grow">
                  Number Of Guests
                </h2>

                <div className="flex space-x-1 items-center justify-end">
                  <UserGroupIcon className="h-5" />
                  <input
                    type="number"
                    value={peopleNumber}
                    onChange={(e) => {
                      setPeopleNumber(Number(e.target.value));
                    }}
                    min={1}
                    className="w-8 outline-none text-red-400 text-lg font-semibold"
                  />
                </div>
              </div>
              <div className="flex items-center my-0.5 md:my-1">
                <button
                  className="px-5 py-2 text-gray-500 flex-grow"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="px-5 py-2 text-red-400 flex-grow"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
