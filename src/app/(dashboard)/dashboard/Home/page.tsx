"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase"; // Import the Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth";

export default function DashboardHome() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Welcome to Next.js with Firebase!</h1>
      {user ? (
        <>
          <p>Logged in as {user.email}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      )}
    </div>
  );
}
