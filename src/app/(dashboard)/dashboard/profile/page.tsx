"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loading from "@/app/loading";

export default function Page() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true); // default to true

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    } else if (status === "authenticated") {
      setLoading(false);
    }
  }, [status, router]);

  if (loading || status === "loading") {
    return <Loading />;
  }

  if (!session) {
    toast.error("User not found!");
    return null;
  }

  return (
    <Box>
      <h1>
        This is the profile page for {session.user?.name || "example@email.com"}
        !
      </h1>
    </Box>
  );
}
