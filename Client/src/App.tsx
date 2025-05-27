import ReadyContact from "./Custome/components/ReadyContact";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="bg-beige max-w-8xl w-full mx-auto pb-3 text-lg px-6  min:h-dvh">
      <NavBar />

      <div className="flex flex-col gap-2 mx-7 mt-4 w-full max-w-4xl">
        {/* show all added text inside this contatiner form new to old */}

        <ReadyContact />
        <ReadyContact />
        <ReadyContact />
      </div>
    </div>
  );
};

export default App;
