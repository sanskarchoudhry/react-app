import { VStack } from "@chakra-ui/react";
import AddressForm from "./form/AddressForm";
import TextInput from "./form/TextInput";
import FormWrapper from "./form/FormWrapper";

function UserForm() {
  return (
    <div>
      <FormWrapper>
        <VStack>
          <TextInput
            inputLabel="First Name"
            inputType="text"
            inputName="firstName"
          />
          <TextInput
            inputLabel="Last Name"
            inputType="text"
            inputName="lastName"
          />

          <TextInput
            inputLabel="Email"
            inputType="email"
            inputName="userEmail"
          />

          <TextInput
            inputLabel="Phone"
            inputType="number"
            inputName="userPhone"
          />
        </VStack>
        <AddressForm />

        <button>click</button>
      </FormWrapper>
    </div>
  );
}

export default UserForm;
