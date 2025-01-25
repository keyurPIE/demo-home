import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserList from "./Users/UserList";

export default function MainContainer({ value }) {
  const renderContent = () => {
    switch (value) {
      case "Home":
        return <Typography variant="h6">Home Content</Typography>;
      case "Users":
        return <UserList />;
      case "Log Out":
        return <Typography variant="h6">Log Out Content</Typography>;
      case "Settings":
        return <Typography variant="h6">Settings Content</Typography>;
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
