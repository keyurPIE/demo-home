"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loading from "@/app/loading";
import UserInfo from "./Helper/UserInfo";
import TimeZone from "./Helper/TimeZone";

export default function ProfilePage() {
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
    <div className="w-full">
      <h1 className="text-[20px] md:text-[28px] lg:text-[38px] font-semibold mb-6">
        Profile
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border p-4 rounded-lg shadow-md">
          <UserInfo />
        </div>
        <div className="bg-white border p-4 rounded-lg shadow-md">
          <TimeZone />
        </div>
      </div>
    </div>
  );
}
