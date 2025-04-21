"use client";

import { Box } from "@mui/material";
import Dashboard from "./(dashboard)/dashboard/page";
import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { status } = useSession();
  const router = useRouter();

  // Simulate a loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Redirect if unauthenticated after loading completes
    if (!loading && status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [loading, status, router]);

  const isStillLoading = loading || status === "loading";

  if (isStillLoading || status === "unauthenticated") {
    return (
      <Box className="flex items-center justify-center min-h-screen bg-white">
        <Oval color="#00BFFF" height={80} width={80} />
      </Box>
    );
  }

  return <Dashboard />;
}
