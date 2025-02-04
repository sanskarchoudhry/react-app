export interface formValues {
  firstName: string;
  lastName: string;
  userEmail: string;

  userPhone: number;
  userAddressFirst: string;
  userCountry: string;
  userState: string;
  userCity: string;
  userAddressSecond: string;
  userPincode: number;
}

export interface TextInputSchema {
  inputType: string;
  inputName: string;
  inputLabel: string;
}
