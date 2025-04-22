"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function AppBarHeader() {
  return (
    <>
      <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          MUI
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton size="large" aria-label="show 4 new mails">
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" aria-label="show 17 new notifications">
            <Badge badgeContent={17} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Box>
        <div className="p-3">
          <img
            className="size-8 rounded-full ring-2 ring-gray-500"
            src="/user-image-two.jpg"
            alt=""
          />
        </div>
      </Box>
    </>
  );
}
