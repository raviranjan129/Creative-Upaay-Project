import { FileIcon, MessageSquareIcon} from "lucide-react";

const Card = ({ status, heading, number, files }) => {
  return (
   



<div className="h-[200px] w-[250px] bg-gray-100 p-4 rounded-lg shadow-md">
      {/* Status */}
      <div>
        <p className="text-sm font-semibold text-gray-500">{status}</p>
      </div>

      {/* Heading of card */}
      <div className="mt-2">
        <h2 className="text-lg font-bold">{heading}</h2>
        <p className="text-sm text-gray-600">
          Brainstorming brings team members diverse experience into play.
        </p>
      </div>

      {/* Comments  */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-x-1 text-gray-600">
          <MessageSquareIcon className="w-4 h-4" />
          <p>{number} comments</p>
        </div>

        <div className="flex items-center gap-x-1 text-gray-600">
          <FileIcon className="w-4 h-4" />
          <p>{files} files</p>
        </div>
      </div>
    </div>

   
  );
};

export default Card;
