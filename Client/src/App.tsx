import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Aruth/SignUp";
import SignIn from "./pages/Aruth/SigIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome/register/sign-up" element={<SignUp />} />
      <Route path="/welcome/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default App;
