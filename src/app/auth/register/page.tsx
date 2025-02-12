"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword, auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Button, Divider, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Link from "next/link";

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Page() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password);
  //     router.push("/dashboard"); // Redirect to dashboard after successful sign-up
  //   } catch (error: any) {
  //     setError(error.message);
  //   }
  // };

  // Handle Form Submission with Formik
  const handleSubmit = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    const { email, password } = values;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); // Redirect to dashboard after successful sign-up
    } catch (error) {
      console.log("✌️error --->", error);
      setError("Error occurred during sign-up. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="border p-6 max-w-md w-full bg-white shadow-md rounded-lg">
        <Typography fontWeight={600} fontSize={18} mb={4} align="center">
          Create Your Account
        </Typography>

        {/* Formik Form with Validation */}
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col gap-4">
              {/* Name Input */}
              <Field
                name="name"
                as={TextField}
                label="Full Name"
                variant="outlined"
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              {/* Email Input */}
              <Field
                name="email"
                as={TextField}
                label="Email"
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
                type="password"
                variant="outlined"
                fullWidth
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Divider>OR</Divider>

              <div>
                already have an account?{" "}
                <Link href="/auth/login" className="underline">
                  sign in
                </Link>
              </div>
              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ padding: "10px", marginTop: "16px" }}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>

        {/* Error Message for Form Submission */}
        {error && (
          <Typography color="error" variant="body2" align="center">
            {error}
          </Typography>
        )}
      </div>
    </div>
  );
}
