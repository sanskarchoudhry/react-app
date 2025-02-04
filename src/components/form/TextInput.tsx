import { useFormContext } from "react-hook-form";
import { Field } from "../ui/field";
import { Input } from "@chakra-ui/react";
import { TextInputSchema } from "../../schemas/types";
import ErrorField from "../error/ErrorField";

function TextInput({ inputLabel, inputType, inputName }: TextInputSchema) {
  const formMethods = useFormContext();
  return (
    <Field
      label={inputLabel}
      errorText={formMethods.formState.errors?.inputName?.message as string}
    >
      <Input
        type={inputType}
        placeholder={`Enter your ${inputLabel}`}
        {...formMethods.register(inputName)}
      />
      {formMethods.formState.errors && (
        <ErrorField
          errorMessage={
            formMethods.formState.errors[inputName]?.message as string
          }
        />
      )}
    </Field>
  );
}

export default TextInput;
