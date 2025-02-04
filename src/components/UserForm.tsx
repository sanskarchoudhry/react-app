import { useFormContext } from "react-hook-form";
import { Input, VStack } from "@chakra-ui/react";
import { Field } from "./ui/field";
import AddressForm from "./form/AddressForm";

function UserForm() {
  const formMethods = useFormContext();
  return (
    <div>
      <section>
        <VStack>
          <Field label="First name">
            <Input
              type="text"
              placeholder="Enter your First Name"
              {...formMethods.register("firstName")}
            />
          </Field>
          <Field label="Last name">
            <Input
              type="text"
              placeholder="Enter your Last Name"
              {...formMethods.register("lastName")}
            />
          </Field>
          <Field label="Email">
            <Input
              type="text"
              placeholder="Enter your Email"
              {...formMethods.register("userEmail")}
            />
          </Field>
          <Field label="Phone">
            <Input
              type="number"
              placeholder="Enter your Phone"
              {...formMethods.register("userPhone")}
            />
          </Field>
        </VStack>
        <AddressForm />
      </section>
    </div>
  );
}

export default UserForm;
