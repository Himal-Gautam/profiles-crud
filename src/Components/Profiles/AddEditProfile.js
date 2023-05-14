import React from "react";
import { useMediaQuery } from "@mui/material";
// import { useParams } from "react-router-dom";
import { Container, TextField } from "@mui/material";

function Add_EditProfile() {
//   const { id } = useParams();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Container sx={{ mt: 3, maxWidth: isMobile ? "80%" : 1 / 2 }}>
      <div style={{ marginBottom: 10 }}>
        <label style={{ display: "block", fontWeight: "bold" }}>Name</label>
        <TextField
          variant="outlined"
          // InputLabelProps={{
          //   style: { position: 'absolute', top: 0, left: 15, fontWeight: 'bold' }
          // }}
          fullWidth
        />
      </div>
    </Container>
  );
}

export default Add_EditProfile;
