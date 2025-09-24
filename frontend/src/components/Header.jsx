import React from "react";
import dayjs from "dayjs";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 px-8 bg-[#653F00] rounded-md shadow-md mb-8">
      <h1 className="text-2xl font-bold text-white">My Dashboard</h1>
      <p className="text-white mt-2 md:mt-0">{dayjs().format("dddd, MMMM D, YYYY")}</p>
    </header>
  );
};

export default Header;
