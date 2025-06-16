import ReadyContact from "@/Custome/components/ReadyContact";
import NavBar from "@/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

interface Contact {
  _id: string;
  name: string;
  email: string;
  description: string;
  number: string;
}

const Home = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:2020/contacts");
      setContacts(res.data);
    } catch (error) {
      console.error("Error fetching contacts", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleEdit = (contact: Contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const handleFormSubmit = async (formData: Contact) => {
    if (formData._id) {
      await axios.put(
        `http://localhost:2020/contacts/${formData._id}`,
        formData
      );
      fetchContacts();
    } else {
      const res = await axios.post("http://localhost:2020/contacts", formData);
      setContacts((prev) => [res.data, ...prev]);
    }
    setSelectedContact(null);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:2020/contacts/${id}`);
      setContacts((prev) => prev.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error("Error deleting contact", error);
    }
  };

  const handleUpdate = async (id: string, updatedData: Partial<Contact>) => {
    try {
      const res = await axios.put(
        `http://localhost:2020/contacts/${id}`,
        updatedData
      );
      setContacts((prev) => prev.map((c) => (c._id === id ? res.data : c)));
    } catch (error) {
      console.error("Error updating contact", error);
    }
  };

  const handleAddContact = (newContact: Contact) => {
    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };

  return (
    <div className="md:max-w-[1260] w-full mx-auto pb-3 text-sm bg-gray-50 md:text-lg md:px-6 px-2 min:h-svh max-h-full overflow-x-hidden">
      <NavBar
        onAddContact={handleAddContact}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedContact={selectedContact}
        handleFormSubmit={handleFormSubmit}
      />

      <div className="flex flex-col gap-10 md:mx-7 mt-3 md:mt-4 w-full">
        {contacts.map((contact) => (
          <ReadyContact
            key={contact._id}
            contact={contact}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
