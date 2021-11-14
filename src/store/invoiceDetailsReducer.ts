import * as _ from "lodash";
import { createSlice } from "@reduxjs/toolkit";
import Invoice from "../interfaces/Invoice";

const initialState: Invoice = {
  invoiceNumber: "",
  customerId: "",
  tax: 0,
  total: 0,
  date: "",
  paid: false,
};
const invoiceDetailsReducer = createSlice({
  name: "invoiceDetails",
  initialState: {
    invoice: initialState,
  },
  reducers: {
    setInvoice: (state, action) => {
      state.invoice = action.payload;
    },
    updateInvoice: (state, action) => {
      const { prop, value }: { prop: string; value: any } = action.payload;
      _.set(state.invoice, prop, value);
    },
  },
});

export default invoiceDetailsReducer;
