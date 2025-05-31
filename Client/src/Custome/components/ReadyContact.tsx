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
    <div className="w-full bg-slate-700 text-slate-100 rounded-lg px-6 py-4 flex flex-col justify-between gap-4 md:text-lg text-sm">
      <div className="flex justify-between md:flex-row-reverse flex-col gap-3 w-full">
        <CrudButtons />
        <div className="flex flex-col justify-between">
          <p className="capitalize font-Noto">Name: {contact.name}</p>
          <p className="font-Merriweather">phone Number: {contact.number}</p>
          <div className="font-Merriweather">
            Email Address: {contact.email}
          </div>
        </div>
      </div>
      <div className="font-Merriweather bg-gray-100 p-2 text-gray-800 rounded first-letter:capitalize">
        {contact.description}
      </div>
    </div>
  );
};

export default ReadyContact;
