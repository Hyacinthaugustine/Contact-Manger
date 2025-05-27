import { Link } from "react-router-dom";
import AddContact from "./Custome/components/AddContact";
import { Contact } from "lucide-react";
import ProfileDetails from "./Custome/components/ProfileDetails";

const ProjectsRoutes = {
  Home: "/",
  //   signUp: "/register/sign-up",
  //   signIn: "/welcome-back/sign-in",
};

const NavBar = () => {
  const pages = Object.entries(ProjectsRoutes).map(([key, path]) => (
    <li key={key} className="md:text-xl font-medium text-lg capitalize">
      <Link to={path}>{key}</Link>
    </li>
  ));

  return (
    <div className=" flex justify-between items-center gap-5 border-b-2 border-b-orange px-4 py-2">
      <div className="flex gap-1">
        <Contact />
        <strong className="font-Noto">CM</strong>
      </div>

      <div className="flex justify-between items-center gap-5">
        <AddContact />
        <ul>{pages}</ul>

        <ProfileDetails />
      </div>
    </div>
  );
};

export default NavBar;
