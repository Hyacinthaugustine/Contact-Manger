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
import InputError from "./InputError";

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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateError = () => {
    const newErrors: { [key: string]: string } = {};

    if (!contact.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!contact.number.trim()) {
      newErrors.number = "Phone number is required.";
    } else if (!/^\d+$/.test(contact.number)) {
      newErrors.number = "Phone number must contain only digits.";
    }

    if (!contact.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!contact.description.trim()) {
      newErrors.description = "Description is required.";
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const errorValidationBeforeSubmission = validateError();
    if (Object.keys(errorValidationBeforeSubmission).length > 0) {
      setErrors(errorValidationBeforeSubmission);
      return;
    }

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
    setErrors({});
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange text-white text-lg tracking-wide font-semibold p-5">
          Add Contact
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-full md:max-w-2xl my-5 md:my-0 md:mx-0 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Contact</DialogTitle>
          <DialogDescription>
            Save a contact with a vivid description of where you met
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 flex flex-col gap-4 w-full">
          <div>
            <ContactDetails
              user_info="name"
              name="name"
              placeholder="Enter name"
              value={contact.name}
              onchange={handleChange}
            />
            {errors.name && <InputError message={errors.name} />}{" "}
          </div>

          <div>
            <ContactDetails
              user_info="phone Number"
              name="number"
              placeholder="Enter phone Number"
              value={contact.number}
              onchange={handleChange}
            />
            {errors.number && <InputError message={errors.number} />}
          </div>

          <div>
            <ContactDetails
              user_info="email"
              name="email"
              type="email"
              placeholder="Enter email"
              value={contact.email}
              onchange={handleChange}
            />
            {errors.email && <InputError message={errors.email} />}
          </div>

          <div>
            <ContactDetails
              user_info="description"
              name="description"
              type="textarea"
              placeholder="Where did you meet this person?"
              value={contact.description}
              onchange={handleChange}
            />
            {errors.description && <InputError message={errors.description} />}
          </div>
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
