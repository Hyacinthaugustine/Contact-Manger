import CrudButtons from "./CrudButtons";

interface Contact {
  name: string;
  email: string;
  description: string;
  number: string;
}

interface ReadyContactProps {
  contact: Contact;
}

const ReadyContact = ({ contact }: ReadyContactProps) => {
  return (
    <div className="w-full bg-gray-300 rounded-lg px-6 py-4 flex justify-between flex-row-reverse gap-4">
      <CrudButtons />

      <div className="flex flex-col gap-3 w-full">
        <p className="capitalize text-xl font-Noto">{contact.name}</p>
        <p className="text-lg font-Merriweather">{contact.number}</p>{" "}
        <div className="text-lg font-Merriweather">{contact.email}</div>
        <div className="tetx-lg font-Merriweather bg-gray-200 p-2 rounded first-letter:capitalize">
          {contact.description}
        </div>
      </div>
    </div>
  );
};

export default ReadyContact;
