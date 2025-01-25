import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddUser from "./AddUser";
import SingleUser from "./SingleUser";
import UserCard from "./helper/UserCard";

export default function UserList() {
  const [addUser, setAddUser] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);

  return (
    <Stack gap={3} width="100%">
      <Box display="flex" className="justify-between">
        {addUser && (
          <>
            <Typography variant="h5">add new user</Typography>
            <Button
              variant="contained"
              onClick={() => {
                setAddUser(false);
                setShowUserDetails(false);
              }}
            >
              Back to list
            </Button>
          </>
        )}
        {showUserDetails && (
          <>
            <Typography variant="h5">current user</Typography>
            <Button
              variant="contained"
              onClick={() => {
                setAddUser(false);
                setShowUserDetails(false);
              }}
            >
              Back to list
            </Button>
          </>
        )}
        {!addUser && !showUserDetails && (
          <>
            <Typography variant="h5">All user</Typography>
            <Button variant="contained" onClick={() => setAddUser(true)}>
              Add user
            </Button>
          </>
        )}
      </Box>

      {/* All users */}
      {addUser && <AddUser setAddUser={setAddUser} />}
      {showUserDetails && <SingleUser />}
      {!addUser && !showUserDetails && (
        <UserCard setShowUserDetails={setShowUserDetails} />
      )}
    </Stack>
  );
}
