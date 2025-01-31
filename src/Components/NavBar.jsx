import { BellIcon, Calendar1Icon, MessageSquareIcon, SearchIcon } from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full">
      {/* Navbar */}
      <div className="h-[50px] flex items-center justify-between px-10 bg-white relative">
        {/* Project Name */}
        <div className="flex items-center">
          <h1 className="font-bold text-lg">Project M.</h1>
        </div>

        {/* Vertical Line */}
        <div
          className="absolute top-0 bottom-0 h-full w-[1px] bg-gray-300"
          style={{ left: "200px" }}
        ></div>

        {/* Search Bar */}
        <div className="flex items-center gap-x-3 bg-gray-100 px-4 py-2 rounded-xl ml-[220px]">
          <SearchIcon />
          <input
            className="w-64 bg-gray-100 outline-none"
            type="text"
            placeholder="Search for anything..."
          />
        </div>

        {/* Icons */}
        <div className="flex gap-x-5">
          <Calendar1Icon className="cursor-pointer" />
          <MessageSquareIcon className="cursor-pointer" />
          <BellIcon className="cursor-pointer" />
        </div>

        {/* User Section */}
        <div className="flex items-center gap-x-4">
          {/* User Info */}
          <div>
            <h6 className="font-semibold">Ravi Ranjan</h6>
            <p className="text-sm text-gray-500">Bihar, India</p>
          </div>
          {/* User Image */}
          <img
            src="../../ravi.jpg"
            alt="User"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-300 w-full mt-1" />
    </div>
  );
};

export default NavBar;
