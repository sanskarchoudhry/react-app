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

  userPhone: z.string().regex(phoneRegex, "Invalid Number!"),
  userAddressFirst: z.string().nonempty("This is a required field"),
  userCountry: z.string().nonempty("This is a required field"),
  userState: z.string().nonempty("This is a required field"),
  userCity: z.string().nonempty("This is a required field"),
  userAddressSecond: z.string(),
});
