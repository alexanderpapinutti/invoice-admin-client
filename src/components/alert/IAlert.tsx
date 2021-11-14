import React, { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { setAlert } from "../../store";

export function IAlert() {
  const [open, setOpen] = React.useState(false);
  const alert = useTypedSelector((state) => state.alert);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    setOpen(!!alert.type);
  }, [alert.type]);

  const handleClose = () => {
    setOpen(false);
    dispatch(setAlert({ message: "" }));
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert severity={alert.type} sx={{ width: "100%" }}>
        {alert.message}
      </Alert>
    </Snackbar>
  );
}
