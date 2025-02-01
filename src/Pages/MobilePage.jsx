import { Edit2Icon, LinkIcon, PlusIcon } from "lucide-react";
import Card from "../Components/Card";

const MobilePage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100 p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center h-[10%] p-1">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Mobile App</h1>
          <div className="flex items-center gap-2">
            <Edit2Icon className="w-5 h-5 text-gray-600" />
            <LinkIcon className="w-5 h-5 text-gray-600" />
          </div>
        </div>
        <div className="flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-lg cursor-pointer">
          <PlusIcon className="w-4 h-4" />
          <p>Invite</p>
        </div>
      </div>

      <div className="flex justify-between items-center h-[5%] p-4">
       
      </div>

      {/* Cards Section */}
      <div className="flex flex-grow gap-4 overflow-hidden h-[90%]">
        {/* To-Do Column */}
        <div className="bg-white rounded-xl shadow-md w-1/4 flex flex-col h-full p-4">
          <div className="flex justify-between items-center">
            <li className="flex items-center gap-2 text-blue-500 font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>To Do
            </li>
            <PlusIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
          <hr className="mt-2 border-blue-300" />
          <div className="flex flex-col gap-3 overflow-y-auto h-full p-2">
            <Card status="Low" heading="Brainstorming" number={1} files={0} />
            <Card status="High" heading="Development" number={8} files={3} />
            <Card status="Medium" heading="Testing" number={5} files={1} />
          </div>
        </div>

        {/* In Progress Column */}
        <div className="bg-white rounded-xl shadow-md w-1/4 flex flex-col h-full p-4">
          <div className="flex justify-between items-center">
            <li className="flex items-center gap-2 text-yellow-500 font-semibold">
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>In Progress
            </li>
            <PlusIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
          <hr className="mt-2 border-yellow-300" />
          <div className="flex flex-col gap-3 overflow-y-auto h-full p-2">
            <Card status="Medium" heading="Wireframing" number={3} files={2} />
            <Card status="High" heading="Testing Features" number={4} files={1} />
            <Card status="low" heading="Brainstorming" number={4} files={1} />
          </div>
        </div>

        {/* Completed Column */}
        <div className="bg-white rounded-xl shadow-md w-1/4flex flex-col h-full p-4">
          <div className="flex justify-between items-center">
            <li className="flex items-center gap-2 text-green-500 font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>Completed
            </li>
            <PlusIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
          <hr className="mt-2 border-green-300" />
          <div className="flex flex-col gap-3 overflow-y-auto h-full p-2">
            <Card status="High" heading="Final Review" number={6} files={4} />
            <Card status="Low" heading="Documentation" number={2} files={3} />
            <Card status="Completed" heading="Design System" number={2} files={13} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePage;
