"use client";
import { Box } from "@mui/material";
import Dashboard from "./(dashboard)/dashboard/page";
import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading screen on page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen">
      {loading ? (
        <Box className="flex items-center justify-center min-h-screen bg-white">
          <Oval color="#00BFFF" height={80} width={80} />
        </Box>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}
