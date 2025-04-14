"use client";

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  auth,
  signInWithPopup,
  googleProvider,
} from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
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
    // <div className="flex justify-center items-center h-screen">
    //   <div className="border p-6 max-w-md w-full shadow-md rounded-lg bg-white">
    //     <Typography
    //       fontWeight={600}
    //       fontSize={18}
    //       mb={2}
    //       align="center"
    //       className="text-black"
    //     >
    //       Welcome back!
    //     </Typography>

    //     {/* Formik Form with Validation */}
    //     <Formik
    //       initialValues={{ email: "", password: "" }}
    //       validationSchema={validationSchema}
    //       onSubmit={handleSubmit}
    //       className="border flex flex-col gap-3"
    //     >
    //       {({ errors, touched }) => (
    //         <Form className="flex flex-col gap-4">
    //           {/* Email Input */}
    //           <Field
    //             name="email"
    //             as={TextField}
    //             label="Email"
    //             placeholder="abc@example.com"
    //             variant="outlined"
    //             fullWidth
    //             error={touched.email && Boolean(errors.email)}
    //             helperText={touched.email && errors.email}
    //           />
    //           {/* Password Input */}
    //           <Field
    //             name="password"
    //             as={TextField}
    //             label="Password"
    //             placeholder="*******"
    //             type="password"
    //             variant="outlined"
    //             fullWidth
    //             error={touched.password && Boolean(errors.password)}
    //             helperText={touched.password && errors.password}
    //           />

    //           {/* Reset password */}
    //           <Link
    //             href="/forgot-password"
    //             className="text-right underline text-black"
    //           >
    //             Forgot Password
    //           </Link>

    //           {/* Submit Button */}
    //           <Button
    //             type="submit"
    //             variant="contained"
    //             color="primary"
    //             fullWidth
    //             sx={{ padding: "10px" }}
    //           >
    //             Sign In
    //           </Button>
    //         </Form>
    //       )}
    //     </Formik>

    //     <Divider className="text-black">OR</Divider>

    //     <div className="text-black">
    //       Don&apos;t have an account?{" "}
    //       <Link href="/auth/register" className="underline">
    //         create one
    //       </Link>
    //     </div>

    //     {/* Error Message for Form Submission */}
    //     {error && (
    //       <Typography
    //         color="error"
    //         variant="body2"
    //         align="center"
    //         className="text-black"
    //       >
    //         {error}
    //       </Typography>
    //     )}

    //     {/* Google Sign-In Button */}
    //     <Button
    //       variant="outlined"
    //       color="primary"
    //       fullWidth
    //       sx={{ marginTop: "16px" }}
    //       onClick={handleGoogleSignIn}
    //     >
    //       Sign in with Google
    //     </Button>
    //   </div>
    // </div>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight hover:text-hover">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    as={TextField}
                    required
                    autoComplete="email"
                    placeholder="abc@example.com"
                    className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold hover:text-hover">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="********"
                    className="block w-full rounded-md px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <Divider>OR</Divider>

              <Stack gap={2}>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>

                {/* Google Sign-In Button */}
                <button
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleGoogleSignIn}
                >
                  Sign in with Google
                </button>
              </Stack>
            </Form>
          )}
        </Formik>

        <p className="mt-10 text-center text-sm/6 text-gray-500 dark:text-gray-400">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
