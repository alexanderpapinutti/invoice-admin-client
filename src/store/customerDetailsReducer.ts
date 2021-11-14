import * as _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import Customer from "my-interfaces/Customer";

const initialState: Customer = {
  name: "",
  address: "",
  postCode: "",
  currency: "",
  country: "",
  taxId: "",
  contact: {
    email: "",
    name: "",
    phone: "",
  },
};
const customerDetailsReducer = createSlice({
  name: "customerDetails",
  initialState: {
    customer: initialState,
  },
  reducers: {
    setCustomer: (state, action) => {
      state.customer = action.payload;
    },
    updateCustomer: (state, action) => {
      const { prop, value }: { prop: string; value: any } = action.payload;
      console.log("wth");

      if (_.includes(prop, "contact")) {
        const props = prop.split(".");
        _.set(state.customer, [...props], value);
      } else {
        _.set(state.customer, prop, value);
      }
    },
  },
});

export default customerDetailsReducer;
