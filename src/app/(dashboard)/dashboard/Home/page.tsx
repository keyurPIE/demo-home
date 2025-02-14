"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase"; // Import the Firebase auth
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function DashboardHome() {
  // const [user, setUser] = useState<User | null>(null);
  // const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(setUser);
  //   return () => unsubscribe();
  // }, []);

  return (
    <div>
      <h1>Welcome to Next.js with Firebase!</h1>
      {/* {user ? <p>Logged in as {user.email}</p> : router.push("/auth/login")} */}
    </div>
  );
}
