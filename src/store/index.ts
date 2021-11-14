import { configureStore } from "@reduxjs/toolkit";
import customerDetailsReducer from "./customerDetailsReducer";
import fetchCollectionSlice from "./fetchCollection";
import alertReducer from "./alertReducer";
import invoiceDetailsReducer from "./invoiceDetailsReducer";

const store = configureStore({
  reducer: {
    customerDetails: customerDetailsReducer.reducer,
    invoiceDetails: invoiceDetailsReducer.reducer,
    alert: alertReducer.reducer,
    [fetchCollectionSlice.reducerPath]: fetchCollectionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(fetchCollectionSlice.middleware);
  },
});

export const { useFetchCollectionQuery } = fetchCollectionSlice;
export const { setCustomer, updateCustomer } = customerDetailsReducer.actions;
export const { setInvoice, updateInvoice } = invoiceDetailsReducer.actions;
export const { setAlert } = alertReducer.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
