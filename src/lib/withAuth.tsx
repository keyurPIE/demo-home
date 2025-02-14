"use client";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const WithAuthComponent = (props: any) => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
        if (!user) router.push("/auth/login"); // Redirect to sign-in page if not logged in
      });

      // Clean up the subscription on unmount
      return () => unsubscribe();
    }, []);

    if (user === null) {
      return <p>Loading...</p>;
    }

    // Pass the `user` prop to the WrappedComponent
    return <WrappedComponent user={user} {...props} />;
  };

  return WithAuthComponent;
};

export default withAuth;
