import CrudButtons from "./CrudButtons";

interface Contact {
  _id: string;
  name: string;
  email: string;
  description: string;
  number: string;
}
interface ReadyContactProps {
  contact: Contact;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedData: Partial<Contact>) => void;
  onEdit: (contact: Contact) => void;
}

const ReadyContact = ({ contact, onDelete, onEdit }: ReadyContactProps) => {
  return (
    <div className="max-w-5xl w-full bg-white mx-auto shadow-xl text-gray-800 rounded-lg px-12 py-6 flex flex-col justify-between gap-4 md:text-lg text-sm">
      <div className="flex justify-between md:flex-row-reverse flex-col gap-3 w-full">
        <CrudButtons
          onDelete={() => onDelete(contact._id)}
          onUpdate={() => onEdit(contact)}
        />

        <div className="flex flex-col justify-between">
          <p className="capitalize font-Noto">
            <span className="font-bold">Name:</span> {contact.name}
          </p>
          <p className="font-Merriweather capitalize">
            <span className="font-bold">phone Number:</span> {contact.number}
          </p>
          <div className="font-Merriweather">
            <span className="font-bold">Email Address: </span> {contact.email}
          </div>
        </div>
      </div>
      <div className="font-Merriweather bg-gray-100 p-2 text-gray-800 max-w-2xl rounded">
        <p>
          <strong className="capitalize text-lg">description</strong>
        </p>
        <p className="first-letter:capitalize">{contact.description}</p>
      </div>
    </div>
  );
};

export default ReadyContact;
