import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

interface CrudButtonsProps {
  onDelete: () => void;
  onUpdate: () => void;
}

const CrudButtons = ({ onDelete, onUpdate }: CrudButtonsProps) => {
  return (
    <div className="flex justify-start md:flex-col gap-2 w-full md:max-w-[200px]  bg-gray-50">
      <Button
        onClick={onUpdate}
        className={`p-6 md:text-lg text-sm font-semibold w-full text-white  bg-blue-600 hover:bg-blue-700`}
      >
        <span>
          <Edit />
        </span>{" "}
        Update
      </Button>

      <Button
        onClick={onDelete}
        className={`p-6 md:text-lg text-sm font-semibold w-full text-white bg-red-600 hover:bg-red-700`}
      >
        <span>
          <Trash2 />
        </span>{" "}
        Delete
      </Button>
    </div>
  );
};

export default CrudButtons;
