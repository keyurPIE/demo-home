"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddUser from "./AddUser";
import SingleUser from "./SingleUser";
import UserCard from "./helper/UserCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import allUserData from "@/data/allUserData.json";

export default function UserList() {
  const [addUser, setAddUser] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [singleUserDetails, setSingleUserDetails] = useState({});
  const [users, setUsers] = useState([]);

  // // Load users from localStorage on initial load
  // useEffect(() => {
  //   const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  //   console.log("✌️storedUsers --->", storedUsers);
  //   const combinedUsers = [...allUserData, ...storedUsers];
  //   setUsers(combinedUsers);
  // }, []);

  // Add the new user to the state
  const addUserToList = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleGoBackToMain = () => {
    setAddUser(false);
    setShowUserDetails(false);
  };

  const handleSingleUserDisplay = (isShow, singleUser) => {
    setShowUserDetails(isShow);
    setSingleUserDetails(singleUser);
  };

  // const handleUserDelete = (userToDelete) => {
  //   const updatedUsers = users.filter((user) => user !== userToDelete);
  //   setUsers(updatedUsers); // Remove user from the list
  //   localStorage.setItem("users", JSON.stringify(updatedUsers));
  // };

  return (
    <Stack gap={3} width="100%">
      <Box display="flex" className="justify-between items-center">
        {addUser && (
          <>
            <Typography variant="h5">add new user</Typography>
            <Button variant="contained" onClick={handleGoBackToMain}>
              Back to list
            </Button>
          </>
        )}
        {showUserDetails && (
          <>
            <Typography variant="h5" className="flex gap-5 items-center">
              <FaArrowLeftLong
                className="cursor-pointer"
                onClick={handleGoBackToMain}
              />
              current user
            </Typography>
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
      {addUser && (
        <AddUser setAddUser={setAddUser} addUserToList={addUserToList} />
      )}
      {/* {addUser && <AddUser handleAddUser={handleAddUser} />} */}
      {showUserDetails && <SingleUser singleUserDetails={singleUserDetails} />}
      {!addUser && !showUserDetails && (
        <UserCard
          handleSingleUserDisplay={handleSingleUserDisplay}
          // handleUserDelete={handleUserDelete}
          // allUsers={users}
          allUsers={allUserData}
        />
      )}
    </Stack>
  );
}
