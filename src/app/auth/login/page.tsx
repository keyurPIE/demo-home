"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  auth,
  signInWithPopup,
  googleProvider,
} from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button, Divider, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export default function Page() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //     router.push("/dashboard"); // Redirect to dashboard after successful login
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // Handle Form Submission with Formik
  const handleSubmit = async (values: { email: string; password: string }) => {
    const { email, password } = values;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirect to dashboard after successful login
    } catch (error) {
      console.log("✌️error --->", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (error) {
      console.log("✌️error --->", error);
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="border p-6 max-w-md w-full bg-white shadow-md rounded-lg">
        <Typography fontWeight={600} fontSize={18} mb={2} align="center">
          Welcome back!
        </Typography>

        {/* Formik Form with Validation */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          className="border flex flex-col gap-3"
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-4">
              {/* Email Input */}
              <Field
                name="email"
                as={TextField}
                label="Email"
                placeholder="abc@example.com"
                variant="outlined"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              {/* Password Input */}
              <Field
                name="password"
                as={TextField}
                label="Password"
                placeholder="*******"
                type="password"
                variant="outlined"
                fullWidth
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              {/* Reset password */}
              <Link href="/forgot-password" className="text-right underline">
                Forgot Password
              </Link>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: "10px" }}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>

        <Divider>OR</Divider>

        <div>
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="underline">
            create one
          </Link>
        </div>

        {/* Error Message for Form Submission */}
        {error && (
          <Typography color="error" variant="body2" align="center">
            {error}
          </Typography>
        )}

        {/* Google Sign-In Button */}
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ marginTop: "16px" }}
          onClick={handleGoogleSignIn}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
