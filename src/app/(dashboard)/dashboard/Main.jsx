"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserList from "./Users/UserList";
import DashboardHome from "./Home/page";
import LogOut from "@/app/auth/logout";
import ProfilePage from "./profile/page";
import AccountPage from "./account/page";

export default function MainContainer({ value }) {
  const renderContent = () => {
    switch (value) {
      case "Home":
        return <DashboardHome />;
      case "Users":
        return <UserList />;
      case "Log Out":
        return <LogOut />;
      case "Profile":
        return <ProfilePage />;
      case "Settings":
        return <AccountPage />;
      default:
        return (
          <Typography variant="h6">Select a tab to see content</Typography>
        );
    }
  };
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }} className="px-1 h-full">
      {renderContent()}
    </Box>
  );
}
