"use client";
import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Page() {
  const router = useRouter();

  // Log Out
  const handleLogOut = () => {
    signOut(auth);
    router.push("/auth/login");
  };

  return (
    <Box className="border w-full rounded-xl shadow-lg relative">
      <Typography
        className="p-4"
        id="keep-mounted-modal-title"
        variant="h6"
        component="h2"
      >
        Confirmation
      </Typography>
      <Divider />
      <Typography
        className="p-4 h-28"
        id="keep-mounted-modal-description"
        sx={{ mt: 2 }}
      >
        This action can&apos;t be undo. Are you sure want to Proceed?
      </Typography>
      <div className="flex gap-3 p-4 justify-end absolute bottom-0 w-full">
        <Button
          className="border"
          variant="outlined"
          onClick={() => router.push("/")}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "red" }}
          onClick={handleLogOut}
        >
          Proceed
        </Button>
      </div>
    </Box>
  );
}
