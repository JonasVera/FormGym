import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default function AlertMsg({ action, type, msg }) {
  return (
    <Snackbar
      open={action}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      autoHideDuration={60}
    >
      <Alert elevation={6} variant="filled" severity={type}>
        {msg}
      </Alert>
    </Snackbar>
  );
}
