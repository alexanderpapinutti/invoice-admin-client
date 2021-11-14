import { createSlice } from "@reduxjs/toolkit";

type AlertProps = {
  type?: "success" | "info" | "warning" | "error" | undefined;
  message: string;
};

const initialState: AlertProps = { message: "" };

export const alertReducer = createSlice({
  name: "alert",
  initialState: initialState,
  reducers: {
    setAlert: (state, action) => {
      state.type = action.payload?.type || "";
      state.message = action.payload?.message || "";
    },
  },
});

export default alertReducer;
