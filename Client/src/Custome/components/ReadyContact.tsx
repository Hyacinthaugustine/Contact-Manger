import CrudButtons from "./CrudButtons";

const ReadyContact = () => {
  return (
    <div className="w-full bg-gray-300 rounded-lg px-6 py-4 flex justify-between flex-row-reverse gap-4">
      <CrudButtons />

      <div className="flex flex-col gap-3  w-full">
        <p className="capitalize text-xl font-Noto">name</p>
        <p className="text-lg font-Merriweather">phone mumber </p>

        <div className="text-lg font-Merriweather">email</div>

        <div className="tetx-lg font-Merriweather bg-gray-200 p-2 rounded first-letter:capitalize">
          descrippton text Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sunt, atque inventore commodi quo eum iure, voluptatum placeat
          saepe cum modi totam velit nobis earum beatae!
        </div>
      </div>
    </div>
  );
};

export default ReadyContact;
