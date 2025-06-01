import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Aruth/SignUp";
import SignIn from "./pages/Aruth/SigIn";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/welcome/register/sign-up" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
