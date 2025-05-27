import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactDetailsProps {
  user_info: string;
  name: string;
  value?: string;
  placeholder: string;
  type?: "text" | "email" | "number" | "textarea";
  onchange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ContactDetails = ({
  user_info,
  name,
  value = "",
  placeholder,
  type = "text",
  onchange,
}: ContactDetailsProps) => {
  return (
    <div className="flex flex-col gap-2 text-gray-700">
      <Label htmlFor={name} className="text-lg capitalize">
        {user_info}
      </Label>

      {type === "textarea" ? (
        <div>
          <p className="text-sm text-gray-500">
            {value.trim().split(/\s+/).length} / 25 words
          </p>

          <Textarea
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onchange}
            className="md:text-xl text-lg text-gray-900 font-Noto  md:h-32 h-20"
          />
        </div>
      ) : (
        <Input
          id={name}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onchange}
          className="md:text-xl text-lg text-gray-900 font-Noto"
        />
      )}
    </div>
  );
};

export default ContactDetails;
