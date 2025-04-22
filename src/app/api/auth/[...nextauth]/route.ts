import { auth } from "@/lib/firebase";
import { addUserData } from "@/services/userService";
import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"; // or any provider you use

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const userCred = await signInWithEmailAndPassword(
            auth,
            credentials!.email,
            credentials!.password
          );

          // Return user data on success
          return {
            id: userCred.user.uid,
            email: userCred.user.email,
          };
        } catch (error: any) {
          // Log the error to understand why it's failing
          console.error("🔥 Firebase Auth error:", error.code, error.message);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
  callbacks: {
    async signIn({ user }) {
      if (user) {
        const uid = user.id || user.uid;
        const res = await addUserData(uid, {
          name: user.name,
          email: user.email,
          createdAt: new Date(),
        });
        console.log("res****", res);
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) token.uid = user.id;
      return token;
    },
    async session({ session, token }) {
      if (token) session.user.uid = token.uid as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
