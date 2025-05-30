import { Button } from "@/components/ui/button";

const CrudButtons = () => {
  const buttonText = [
    { text: "Update", color: "blue" },
    { text: "Delete", color: "red" },
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
  };

  const btns = buttonText.map((btn, index) => (
    <div>
      <Button
        key={index}
        className={`p-5 text-lg font-semibold w-full text-white flex-1 ${
          colorClasses[btn.color]
        }`}
      >
        {btn.text}
      </Button>
    </div>
  ));

  return (
    <div className="flex justify-start flex-col gap-2 w-full md:max-w-[200px]">
      {btns}
    </div>
  );
};

export default CrudButtons;
