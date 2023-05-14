import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useMutation } from "@apollo/client";
import { DELETE_PROFILE } from "../../GraphQL/queries";
import { Link } from "react-router-dom";

// Component for profile actions (edit and delete)
function ProfileActions({ anchorEl, handleMenuClose, id, refetch }) {
  const [loading, setLoading] = useState(false);

  // Mutation to delete profile
  const [deleteProfile] = useMutation(DELETE_PROFILE, {
    variables: { deleteProfileId: id },
    onCompleted: () => {
      setLoading(false);
      handleMenuClose();
      refetch();
    },
  });

  // Function to handle edit click
  const handleEditClick = () => {
    // TODO: Handle edit click
    // <Link to="profile/edit"/>
  };

  // Function to handle delete click
  const handleDeleteClick = async () => {
    setLoading(true);
    await deleteProfile();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 1,
        sx: {
          "& .MuiList-root": {
            boxShadow: "none",
          },
        },
      }}
    >
      {/* Edit button */}
      <MenuItem component={Link} to={`/profile/edit/${id}`} onClick={handleEditClick}>
        Edit
      </MenuItem>

      {/* Delete button */}
      <MenuItem onClick={handleDeleteClick} disabled={loading}>
        {loading ? "Deleting..." : "Delete"}
      </MenuItem>
    </Menu>
  );
}

export default ProfileActions;
