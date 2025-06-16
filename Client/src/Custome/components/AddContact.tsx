import { useEffect, useState } from "react";
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
import axios from "axios";

interface AddContactProps {
  initialData?: {
    name: string;
    email: string;
    description: string;
    number: string;
    _id?: string;
  };
  onSubmit: (contact: {
    name: string;
    email: string;
    description: string;
    number: string;
    _id?: string;
  }) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const AddContact = ({
  initialData,
  onSubmit,
  isOpen,
  setIsOpen,
}: AddContactProps) => {
  const [contact, setContact] = useState({
    name: initialData?.name || "",
    email: initialData?.email || "",
    description: initialData?.description || "",
    number: initialData?.number || "",
    _id: initialData?._id,
  });

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

  useEffect(() => {
    if (initialData) {
      setContact(initialData);
    }
  }, [initialData]);

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

    axios
      .post("http://localhost:2020/contacts", cleanedContact)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));

    onSubmit(cleanedContact);
    setIsOpen(false);
    setContact({ name: "", number: "", email: "", description: "", _id: "" });
    setErrors({});
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-slate-700 hover:bg-slate-800 text-white md:text-lg text-sm tracking-wide font-semibold md:p-6 p-4">
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
            className="md:w-[25%] w-full p-6 uppercase bg-amber-700 hover:bg-amber-800 transition-all delay-300 text-white"
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddContact;
