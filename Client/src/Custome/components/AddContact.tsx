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

const AddContact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    description: "",
    number: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const words = value.trim().split(/\s+/);
    const trimmedValue = words.slice(0, 25).join(" ");

    setContact((prev) => ({
      ...prev,
      [name]: trimmedValue,
    }));
  };

  const handleSubmit = () => {
    console.log(contact);
    setContact({
      name: "",
      number: "",
      email: "",
      description: "",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange text-white text-lg tracking-wide font-semibold p-5">
          Add Contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-2xl my-5 md:my-0 md:mx-0">
        <DialogHeader>
          <DialogTitle>Add New Contact</DialogTitle>
          <DialogDescription>
            Save a contact with a vivid description of where you met
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 flex flex-col gap-4">
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
            onClick={() => handleSubmit()}
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
