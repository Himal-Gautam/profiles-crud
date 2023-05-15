import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { SnackBarContext } from "../../App";

// Component to show snackbar
export default function ShowSnackBar() {
  // Get the values from the SnackBarContext
  const { setOpenSnackBar, message, severity, openSnackBar } =
    React.useContext(SnackBarContext);

  // Function to handle close of the snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  // Define action to be displayed on the snackbar
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  // Render the snackbar component
  return (
    <div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={action}
        severity={severity}
      />
    </div>
  );
}
