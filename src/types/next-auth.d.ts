import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      uid?: string; // Add the 'uid' property here
    };
  }

  interface User {
    uid?: string; // Add the 'uid' property to the User interface
  }
}
