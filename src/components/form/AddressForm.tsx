import { Input, VStack } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { useFormContext } from "react-hook-form";
import ErrorField from "../error/ErrorField";

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
        <ErrorField
          errorMessage={
            formMethods.formState.errors?.userAddressFirst?.message as string
          }
        />
      </Field>

      <Field label="Address line 2">
        <Input
          type="text"
          placeholder="Address line 2"
          {...formMethods.register("userAddressSecond")}
        />
        <ErrorField
          errorMessage={
            formMethods.formState.errors?.userAddressSecond?.message as string
          }
        />
      </Field>
      <Field label="City">
        <Input
          type="text"
          placeholder="Enter your city"
          {...formMethods.register("userCity")}
        />
        <ErrorField
          errorMessage={
            formMethods.formState.errors?.userCity?.message as string
          }
        />
      </Field>
      <Field label="State">
        <Input
          type="text"
          placeholder="Enter your state"
          {...formMethods.register("userState")}
        />
        <ErrorField
          errorMessage={
            formMethods.formState.errors?.userState?.message as string
          }
        />
      </Field>
      <Field label="Country">
        <Input
          type="text"
          placeholder="Enter your country"
          {...formMethods.register("userCountry")}
        />
        <ErrorField
          errorMessage={
            formMethods.formState.errors?.userCountry?.message as string
          }
        />
      </Field>
      <Field label="Pincode">
        <Input
          type="number"
          placeholder="Enter your pincode"
          {...formMethods.register("userPincode")}
        />
        <ErrorField
          errorMessage={
            formMethods.formState.errors?.userPincode?.message as string
          }
        />
      </Field>
    </VStack>
  );
}
