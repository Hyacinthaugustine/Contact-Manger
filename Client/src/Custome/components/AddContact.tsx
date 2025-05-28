import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactDetails from "./ContactDetails";

interface AddContactProps {
  onAddContact: (contact: {
    name: string;
    email: string;
    description: string;
    number: string;
  }) => void;
}

const AddContact = ({ onAddContact }: AddContactProps) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    description: "",
    number: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const cleanDescription = contact.description
      .trim()
      .split(/\s+/)
      .slice(0, 25)
      .join(" ");

    const cleanedContact = {
      ...contact,
      description: cleanDescription,
    };

    onAddContact(cleanedContact);

    setContact({
      name: "",
      number: "",
      email: "",
      description: "",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange text-white text-lg tracking-wide font-semibold p-5">
          Add Contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-full md:max-w-2xl my-5 md:my-0 md:mx-0">
        <DialogHeader>
          <DialogTitle>Add New Contact</DialogTitle>
          <DialogDescription>
            Save a contact with a vivid description of where you met
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 flex flex-col gap-4 w-full">
          <ContactDetails
            user_info="name"
            name="name"
            placeholder="Enter name"
            value={contact.name}
            onchange={handleChange}
          />

          <ContactDetails
            user_info="phone Number"
            name="number"
            placeholder="Enter phone Number"
            value={contact.number}
            onchange={handleChange}
          />

          <ContactDetails
            user_info="email"
            name="email"
            type="email"
            placeholder="Enter email"
            value={contact.email}
            onchange={handleChange}
          />
          <ContactDetails
            user_info="description"
            name="description"
            type="textarea"
            placeholder="Where did you meet this person?"
            value={contact.description}
            onchange={handleChange}
          />
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="w-[25%] p-6 uppercase bg-amber-700 hover:bg-amber-800 transition-all delay-300 text-white"
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddContact;

// work on errro messages to ennsure all feilds are filled with data
