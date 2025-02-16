import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const userFormSchema = z.object({
  firstName: z.string().nonempty("This is a required field"),
  lastName: z.string().nonempty("This is a required field"),
  userEmail: z
    .string()
    .nonempty("This is a required field")
    .email({ message: "Invalid email" }),

  userPhone: z
    .string()
    .regex(phoneRegex, "Invalid Number!")
    .min(10, "Phone number should be 10 digits long")
    .max(10, "Phone number should be 10 digits long"),
  userAddressFirst: z.string().nonempty("This is a required field"),
  userCountry: z.string().nonempty("This is a required field"),
  userState: z.string().nonempty("This is a required field"),
  userCity: z.string().nonempty("This is a required field"),
  userAddressSecond: z.string(),
  userPincode: z
    .string()
    .min(6, "Pincode should be 6 digits long")
    .max(6, "Pincode should be 6 digits long"),
});
