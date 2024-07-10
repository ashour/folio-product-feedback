import { FieldError } from "react-hook-form";

type FormErrorMessageProps = {
  fieldError: FieldError | undefined;
};

export default function FormErrorMessage({
  fieldError,
}: FormErrorMessageProps) {
  return (
    fieldError && (
      <p className="mt-1 text-body-2 text-danger">{fieldError.message}</p>
    )
  );
}
