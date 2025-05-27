import { Button } from "@/components/ui/button";

const CrudButtons = () => {
  const buttonText = [
    { text: "Update", color: "blue" },
    { text: "Edit", color: "green" },
    { text: "Delete", color: "red" },
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
  };

  const btns = buttonText.map((btn, index) => (
    <Button
      key={index}
      className={`p-5 text-lg font-semibold text-white flex-1 ${
        colorClasses[btn.color]
      }`}
    >
      {btn.text}
    </Button>
  ));

  return (
    <div className="flex justify-between flex-col gap-2 w-full md:max-w-[200px]">
      {btns}
    </div>
  );
};

export default CrudButtons;
