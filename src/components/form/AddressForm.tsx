import { Input, VStack } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { useFormContext } from "react-hook-form";

export default function AddressForm() {
  const formMethods = useFormContext();

  return (
    <VStack>
      <Field label="Address line 1">
        <Input
          type="text"
          placeholder="Address line 1"
          {...formMethods.register("userAddressFirst")}
        />
      </Field>
      <Field label="Address line 2">
        <Input
          type="text"
          placeholder="Address line 2"
          {...formMethods.register("userAddressSecond")}
        />
      </Field>
      <Field label="City">
        <Input
          type="text"
          placeholder="Enter your city"
          {...formMethods.register("userCity")}
        />
      </Field>
      <Field label="State">
        <Input
          type="text"
          placeholder="Enter your state"
          {...formMethods.register("userState")}
        />
      </Field>
      <Field label="Country">
        <Input
          type="text"
          placeholder="Enter your country"
          {...formMethods.register("userCountry")}
        />
      </Field>
      <Field label="Pincode">
        <Input
          type="number"
          placeholder="Enter your pincode"
          {...formMethods.register("userPincode")}
        />
      </Field>
    </VStack>
  );
}
