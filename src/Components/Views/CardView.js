import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import ProfileActions from "./ProfileActions";

function CardView({ data, refetch }) {
  // state to store the anchor element for the menu
  const [anchorEl, setAnchorEl] = useState(null);
  const [id, setId] = useState(null);

  // function to handle menu open
  const handleMenuOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setId(id);
  };

  // function to handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={2}>
      {/* map over the profiles and create cards for each */}
      {data.getAllProfiles.profiles.map((profile) => (
        <Grid item xs={12} md={6} lg={3} key={profile.id}>
          <Card sx={{ maxWidth: 345, flexGrow: 1 }}>
            {/* card header with avatar, title, subheader, and menu icon */}
            <CardHeader
              avatar={
                <Avatar
                  src={profile.image_url}
                  alt={`${profile.first_name}'s Profile Image`}
                  sx={{ width: 50, height: 50 }}
                />
              }
              action={
                <IconButton
                  aria-label="settings"
                  onClick={(event) => handleMenuOpen(event, profile.id)}
                  sx={{ position: "stickey" }}
                >
                  <MoreVertIcon />
                </IconButton>
              }
              title={
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "nowrap",
                    gap: 1,
                    alignItems: "center",
                    maxWidth: "60%",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    noWrap
                    sx={{
                      maxWidth: "60%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {profile.first_name} {profile.last_name}
                  </Typography>
                  {profile.is_verified && (
                    <VerifiedRoundedIcon color="primary" fontSize="small" />
                  )}
                </Box>
              }
              subheader={
                <Box
                  sx={{
                    maxWidth: "60%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Typography variant="body2" noWrap>
                    {profile.email}
                  </Typography>
                </Box>
              }
            />
            {/* card content with description */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {profile.description}
              </Typography>
            </CardContent>
          </Card>
          {/* menu for editing and deleting the profile */}
          <ProfileActions
            anchorEl={anchorEl}
            handleMenuClose={handleMenuClose}
            id={id}
            refetch={refetch}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardView;
