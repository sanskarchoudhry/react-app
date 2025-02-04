import { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { formValues } from "../../schemas/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormSchema } from "../../schemas";

export default function FormWrapper({ children }: { children: ReactNode }) {
  const formMethods = useForm<formValues>({
    resolver: zodResolver(userFormSchema),
  });

  const handleFormSubmit = formMethods.handleSubmit((data) => {
    console.log("Submitted Data:", data);
  });

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleFormSubmit}>{children}</form>
    </FormProvider>
  );
}
