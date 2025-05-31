import { useState } from "react";
import { Link } from "react-router-dom";
import AddContact from "./Custome/components/AddContact";
import { Contact } from "lucide-react";
import ProfileDetails from "./Custome/components/ProfileDetails";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { cn } from "@/lib/utils";
import { Button } from "./components/ui/button";

interface NavBarProps {
  onAddContact: (contact: {
    name: string;
    email: string;
    description: string;
    number: string;
  }) => void;
}

const ProjectsRoutes = {
  Home: "/",
};

const NavBar = ({ onAddContact }: NavBarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pages = Object.entries(ProjectsRoutes).map(([key, path]) => (
    <li key={key} className="text-lg capitalize">
      <Link
        to={path}
        className="block py-2 px-4 hover:bg-gray-100 rounded-md"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {key}
      </Link>
    </li>
  ));

  return (
    <div className="flex justify-between items-center gap-5 border-b-2 border-b-slate-800 md:px-6 md:py-3 relative py-2 px-2">
      <Link
        to="/"
        className="font-Noto flex  items-center gap-1 md:px-2 py-1 md:text-2xl text-lg font-bold"
      >
        <Contact className="md:size-6  size-5" />
        CM
      </Link>

      <div className="hidden md:flex justify-between items-center gap-5">
        <ul className="flex justify-between gap-3 items-center">{pages}</ul>
        <AddContact onAddContact={onAddContact} />
        <ProfileDetails />
      </div>

      <div className="md:hidden flex items-center gap-4">
        <AddContact onAddContact={onAddContact} />{" "}
        <Button
          onClick={toggleMobileMenu}
          className="p-2 focus:outline-none focus:ring-2 focus:ring-orange rounded-md"
        >
          {isMobileMenuOpen ? (
            <MdClose className="md:size-8 size-6" />
          ) : (
            <FiMenu className="md:size-8 size-6" />
          )}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 md:hidden flex flex-col p-6 pt-20",
            "transform transition-transform ease-in-out duration-300",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <ul className="flex flex-col gap-2 mb-4">{pages}</ul>
          <div className="flex flex-col gap-4">
            <ProfileDetails />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
