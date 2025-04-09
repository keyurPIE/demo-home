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

  // import { useEffect, useState } from 'react';
  // import { db, collection, getDocs } from './firebase'; // Firebase imports

  // const UserList = () => {
  //   const [users, setUsers] = useState<any[]>([]); // Store fetched users
  //   const [loading, setLoading] = useState(true); // Loading state

  //   useEffect(() => {
  //     const fetchUsers = async () => {
  //       try {
  //         const querySnapshot = await getDocs(collection(db, 'users')); // Get all users from Firestore
  //         const usersData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //         setUsers(usersData); // Set fetched users to state
  //       } catch (error) {
  //         console.error('Error fetching users:', error);
  //       } finally {
  //         setLoading(false); // Set loading to false after fetching data
  //       }
  //     };

  //     fetchUsers();
  //   }, []); // Empty dependency array means this will run once on mount

  //   if (loading) {
  //     return <div>Loading...</div>; // You can replace with a loading spinner
  //   }

  //   return (
  //     <div>
  //       <h2>Users List</h2>
  //       <ul>
  //         {users.map((user) => (
  //           <li key={user.id}>
  //             {user.name} - {user.position}
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // };

  // export default UserList;

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
