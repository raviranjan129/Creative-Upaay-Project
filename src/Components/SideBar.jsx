import { 
    ClipboardListIcon,
    HomeIcon, 
    MessageCircleIcon, 
    PlusIcon, 
    SettingsIcon, 
    User2Icon,
    Users, 
    
  } from "lucide-react";
  
  const SideBar = () => {
    return (
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[200px] h-screen flex flex-col bg-white rounded-md">


          <div className="p-5 ">
            <div className="flex gap-x-1">
              <HomeIcon />
              <p>Home</p>
            </div>
            <div className="flex gap-x-1">
              <MessageCircleIcon />
              <p>Messages</p>
            </div>
            <div className="flex gap-x-1">
             <ClipboardListIcon/>
              <p>Tasks</p>
            </div>
            <div className="flex gap-x-1">
                <Users/>
              <p>Members</p>
            </div>
            <div className="flex gap-x-1">
              <SettingsIcon />
              <p>Settings</p>
            </div>
          </div>
          <hr />
          <div className="p-5">
            <div className="mb-5 flex justify-between bg-gray-50">
              <h3>MY PROJECTS</h3>
              <PlusIcon />
            </div>
            
            {/* Colored List */}
            <ul className="space-y-2">
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Mobile App
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Website Redesign
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                Design System
              </li>
              <li className="flex items-center gap-x-2">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                Wireframes
              </li>
            </ul>
          </div>
  
          {/* Thoughts */}
          <div className="p-5 bg-gray-200 w-[150px] h-[300px] ml-6 rounded-xl">
            <div>
              <h3>Thoughts Time</h3>
            </div>
            <p className="text-sm pt-5 font-semibold">
              We don’t have any notice for you, till then you can share your thoughts with your pets.
            </p>
            <form className="mt-10 bg-white p-3 w-32 rounded-2xl">
              <input type="text" placeholder="Write messages" />
            </form>
          </div>
        </div>
  
        {/* Vertical Line */}
        <div className="w-[1px] bg-gray-300 h-screen"></div>
      </div>
    );
  };
  
  export default SideBar;
  