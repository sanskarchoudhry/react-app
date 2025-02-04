import { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";

export default function FormWrapper({ children }: { children: ReactNode }) {
  const formMethods = useForm();

  return (
    <>
      <FormProvider {...formMethods}>
        <form action="">{children}</form>
      </FormProvider>
    </>
  );
}
