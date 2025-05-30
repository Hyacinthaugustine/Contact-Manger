import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface InputErrorProps {
  message?: string;
}

const InputError = ({ message }: InputErrorProps) => {
  if (!message) {
    return null;
  }
  return (
    <Alert variant="destructive" className="mt-2 border-2 border-red-500">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>required</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default InputError;
