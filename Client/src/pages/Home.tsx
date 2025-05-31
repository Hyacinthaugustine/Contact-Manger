import ReadyContact from "@/Custome/components/ReadyContact";
import NavBar from "@/NavBar";
import { useState } from "react";

interface Contact {
  name: string;
  email: string;
  description: string;
  number: string;
}

const Home = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleAddContact = (newContact: Contact) => {
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  return (
    <div className="md:max-w-[1260] w-full mx-auto pb-3 text-sm md:text-lg md:px-6 px-2 min:h-svh max-h-full">
      <NavBar onAddContact={handleAddContact} />

      <div className="flex flex-col gap-3 md:mx-7 mt-3 md:mt-4 w-full max-w-4xl">
        {contacts.map((contact, index) => (
          <ReadyContact key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Home;
