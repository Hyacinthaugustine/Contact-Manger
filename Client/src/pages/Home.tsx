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
    <div className="bg-beige max-w-8xl w-full mx-auto pb-3 text-lg px-6 min:h-dvh">
      <NavBar onAddContact={handleAddContact} />

      <div className="flex flex-col gap-2 mx-7 mt-4 w-full max-w-4xl">
        {contacts.map((contact, index) => (
          <ReadyContact key={index} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default Home;
