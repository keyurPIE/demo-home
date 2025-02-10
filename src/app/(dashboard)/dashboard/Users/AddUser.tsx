"use client";
import { ChangeEvent, useState } from "react";
// import constant from "@/app/utils/constant";
import {
  // Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { FormikProps, useFormik } from "formik";
import Image from "next/image";

// const { top100Films } = constant;

interface FormValues {
  // name: string;
  // email: string;
  // password: string;
  // movie: { label: string; year: number }; // Based on your logic it seems like a string
  // terms: boolean;
  // uploads: File[]; // Array of File objects
  name: string;
  position: string;
  // profile: string; // URL for the profile image
  profile: File | string | null; // URL for the profile image
  country: string;
  city: string;
  language: string;
  contact: string;
  skype: string;
  email: string;
  joinDate: string;
  status: string;
  role: string;
  isConnectedUser: boolean;
  uploads: File[]; // Array of File objects
}

interface AddUserProps {
  setAddUser: (value?: boolean) => void;
  addUserToList: (newUser: FormValues) => void;
}

// Validations for Form field
const validationSchema = yup.object({
  // name: yup.string().required("Name is required"),
  // email: yup
  //   .string()
  //   .email("Enter a valid email")
  //   .required("Email is required"),
  // password: yup
  //   .string()
  //   .min(8, "Password should be of minimum 8 characters length")
  //   .required("Password is required"),
  // movie: yup
  //   .object()
  //   .shape({
  //     label: yup.string().required("Movie is required"),
  //     year: yup.number().required("Year is required"),
  //   })
  //   .required("Movie is required"),
  // terms: yup
  //   .boolean()
  //   .oneOf([true], "You must accept the required checkbox")
  //   .required("Required checkbox must be checked"),
  // uploads: yup
  //   .array()
  //   .min(1, "At least one file must be uploaded")
  //   .required("Files are required"),

  name: yup.string().required("Name is required"),
  position: yup.string().required("Position is required"),
  profile: yup.mixed().required("Profile image is required"),
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  language: yup.string().required("Language is required"),
  contact: yup
    .string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/g,
      "Invalid contact number"
    )
    .required("Contact number is required"),
  skype: yup.string().required("Skype ID is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  joinDate: yup.string().required("Join Date is required"),
  status: yup.string().required("Status is required"),
  role: yup.string().required("Role is required"),
  isConnectedUser: yup.boolean().required("User connection status is required"),
  uploads: yup
    .array()
    .min(1, "At least one file must be uploaded")
    .required("Files are required"),
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function AddUser({ setAddUser, addUserToList }: AddUserProps) {
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  // const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [profileImagePreview, setProfileImagePreview] = useState<string | null>(
    null
  );

  const formik = useFormik<FormValues>({
    initialValues: {
      // name: "",
      // email: "",
      // password: "",
      // movie: { label: "", year: 0 },
      // terms: false,
      // uploads: [],
      name: "",
      position: "",
      // profile: "",
      profile: null,
      country: "",
      city: "",
      language: "",
      contact: "",
      skype: "",
      email: "",
      joinDate: "",
      status: "",
      role: "",
      isConnectedUser: false,
      uploads: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setAddUser(false);
      console.log("Form values submitted: ", JSON.stringify(values, null, 2));
      addUserToList(values);
      console.log("Uploaded files***", values.uploads);
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    setFieldValue,
    handleSubmit,
  }: FormikProps<FormValues> = formik;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // const file = event.target.files[0];
    // if (file) {
    //   const fileURL = URL.createObjectURL(file);
    //   setFilePreview(fileURL);
    //   console.log(file);
    // }
    // const files = Array.from(event.target.files);
    const files = event.target.files;
    console.log("✌️files --->", files);
    if (files) {
      const fileURLs = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setFilePreviews((prev) => [...prev, ...fileURLs]);
      setFieldValue("uploads", [...values.uploads, ...files]);
    }
  };

  const handleRemoveFile = (index: number) => {
    // Remove the file from the preview and the Formik value array
    const newPreviews = filePreviews.filter((_, idx) => idx !== index);
    const newFiles = values.uploads.filter((_, idx) => idx !== index);

    setFilePreviews(newPreviews);
    setFieldValue("uploads", newFiles);
  };

  // const handleProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files ? event.target.files[0] : null;
  //   if (file) {
  //     setProfilePreview(URL.createObjectURL(file)); // Set the profile image preview
  //     setFieldValue("profile", file); // Store the file in Formik
  //   }
  // };

  // const handleRemoveProfileImage = () => {
  //   setProfileImagePreview(null);
  //   setFieldValue("profile", "");
  // };

  const handleProfileImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setProfileImagePreview(fileURL);
      setFieldValue("profile", fileURL); // Save the profile image URL
      // setFieldValue("profile", file); // Save the profile image URL
    }
  };

  const handleRemoveProfileImage = () => {
    setProfileImagePreview(null);
    setFieldValue("profile", null);
  };

  return (
    <Stack gap={3} width="100%">
      <Box>
        {/* <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Full Name"
            placeholder="Jon Doe"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            placeholder="foobar@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <Autocomplete
            id="movie"
            // name="movie"
            // placeholder="The Godfather"
            disablePortal
            options={top100Films}
            value={values.movie}
            onChange={(event, newValue) => {
              setFieldValue("movie", newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Movie"
                error={touched.movie && Boolean(errors.movie)}
                // helperText={touched.movie && errors.movie}
                helperText={
                  touched.movie ? errors.movie?.label || errors.movie?.year : ""
                }
              />
            )}
          />

          <Stack>
           File Preview
            {filePreviews.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  marginBottom: 2,
                  maxHeight: 300,
                  overflowY: "auto",
                  flexWrap: "wrap",
                }}
              >
                {filePreviews.map((fileURL, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      width: 100,
                      height: 100,
                      border: "1px solid #ddd",
                      marginBottom: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={fileURL}
                      alt={`File preview ${index}`}
                      width={100}
                      height={100}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <IconButton
                      onClick={() => handleRemoveFile(index)}
                      sx={{
                        position: "absolute",
                        top: 2,
                        right: 2,
                        backgroundColor: "white",
                        padding: 0,
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
           File Upload 
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={handleFileChange}
                multiple
              />
            </Button>{" "}
            {touched.uploads && errors.uploads && (
              <Typography color="error">{errors.uploads}</Typography>
            )}
          </Stack>

          Required Checkbox 
          <FormControlLabel
            control={
              <Checkbox
                checked={values.terms}
                onChange={(e) => setFieldValue("terms", e.target.checked)}
              />
            }
            label="I agree to the terms and conditions"
          />
          {touched.terms && errors.terms && (
            <Typography color="error">{errors.terms}</Typography>
          )}
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form> */}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Full Name"
            placeholder="Jon Doe"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            fullWidth
            id="position"
            name="position"
            label="Position"
            placeholder="Network Engineer"
            value={values.position}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.position && Boolean(errors.position)}
            helperText={touched.position && errors.position}
          />
          {/* <TextField
            fullWidth
            id="profile"
            name="profile"
            label="Profile Image URL"
            placeholder="Enter profile image URL"
            value={values.profile}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.profile && Boolean(errors.profile)}
            helperText={touched.profile && errors.profile}
          /> */}

          {/* Profile Image Upload */}
          <Box>
            <Typography variant="h6">Profile Image</Typography>
            {profileImagePreview ? (
              <Box sx={{ position: "relative", width: 100, height: 100 }}>
                <Image
                  src={profileImagePreview}
                  alt="Profile Image"
                  width={100}
                  height={100}
                  style={{ objectFit: "cover" }}
                />
                <IconButton
                  onClick={handleRemoveProfileImage}
                  sx={{
                    position: "absolute",
                    top: 2,
                    right: 2,
                    backgroundColor: "white",
                    padding: 0,
                    ":hover": { backgroundColor: "#fff" },
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            ) : (
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload Profile Image
                <VisuallyHiddenInput
                  type="file"
                  onChange={handleProfileImageChange}
                />
              </Button>
            )}
          </Box>

          <TextField
            fullWidth
            id="country"
            name="country"
            label="Country"
            placeholder="USA"
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.country && Boolean(errors.country)}
            helperText={touched.country && errors.country}
          />
          <TextField
            fullWidth
            id="city"
            name="city"
            label="City"
            placeholder="Phoenix, AZ, USA"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.city && Boolean(errors.city)}
            helperText={touched.city && errors.city}
          />
          <TextField
            fullWidth
            id="language"
            name="language"
            label="Language"
            placeholder="English"
            value={values.language}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.language && Boolean(errors.language)}
            helperText={touched.language && errors.language}
          />
          <TextField
            fullWidth
            id="contact"
            name="contact"
            label="Contact Number"
            placeholder="+1-555-1011"
            value={values.contact}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.contact && Boolean(errors.contact)}
            helperText={touched.contact && errors.contact}
          />
          <TextField
            fullWidth
            id="skype"
            name="skype"
            label="Skype ID"
            placeholder="ethan.martinez_skype"
            value={values.skype}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.skype && Boolean(errors.skype)}
            helperText={touched.skype && errors.skype}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            placeholder="ethan.martinez@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            id="joinDate"
            name="joinDate"
            label="Join Date"
            placeholder="December 2019"
            value={values.joinDate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.joinDate && Boolean(errors.joinDate)}
            helperText={touched.joinDate && errors.joinDate}
          />
          <TextField
            fullWidth
            id="status"
            name="status"
            label="Status"
            placeholder="offline"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.status && Boolean(errors.status)}
            helperText={touched.status && errors.status}
          />
          <TextField
            fullWidth
            id="role"
            name="role"
            label="Role"
            placeholder="Developer"
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.role && Boolean(errors.role)}
            helperText={touched.role && errors.role}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={values.isConnectedUser}
                onChange={(e) =>
                  setFieldValue("isConnectedUser", e.target.checked)
                }
              />
            }
            label="Is Connected User"
          />

          <Stack>
            {filePreviews.length > 0 && (
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  marginBottom: 2,
                  maxHeight: 300,
                  overflowY: "auto",
                  flexWrap: "wrap",
                }}
              >
                {filePreviews.map((fileURL, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      width: 100,
                      height: 100,
                      border: "1px solid #ddd",
                      marginBottom: 2,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={fileURL}
                      alt={`File preview ${index}`}
                      width={100}
                      height={100}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <IconButton
                      onClick={() => handleRemoveFile(index)}
                      sx={{
                        position: "absolute",
                        top: 2,
                        right: 2,
                        backgroundColor: "white",
                        padding: 0,
                        ":hover": { backgroundColor: "#fff" },
                      }}
                    >
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            )}
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload files
              <VisuallyHiddenInput
                type="file"
                onChange={handleFileChange}
                multiple
              />
            </Button>
            {touched.uploads && errors.uploads && (
              <Typography color="error">{errors.uploads}</Typography>
            )}
          </Stack>

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Stack>
  );
}
