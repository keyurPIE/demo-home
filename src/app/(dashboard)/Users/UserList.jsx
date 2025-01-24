"use client";
import {
  Autocomplete,
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
import constant from "../../utils/constant";
import * as yup from "yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { useState } from "react";

const { top100Films } = constant;

// Validations for Form field
const validationSchema = yup.object({
  name: yup.string("Enter your full name").required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  movie: yup.string("Select your movie").required("Movie is required"),
  terms: yup
    .boolean()
    .oneOf([true], "You must accept the required checkbox")
    .required("Required checkbox must be checked"),
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

export default function UserList() {
  const [filePreviews, setFilePreviews] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      movie: {},
      terms: false,
      uploads: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
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
  } = formik;

  const handleFileChange = (event) => {
    // const file = event.target.files[0];
    // if (file) {
    //   const fileURL = URL.createObjectURL(file);
    //   setFilePreview(fileURL);
    //   console.log(file);
    // }
    const files = Array.from(event.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setFilePreviews((prev) => [...prev, ...fileURLs]);

    // Set the files in Formik's `uploads` field
    setFieldValue("uploads", [...values.uploads, ...files]);
  };

  const handleRemoveFile = (index) => {
    // Remove the file from the preview and the Formik value array
    const newPreviews = filePreviews.filter((_, idx) => idx !== index);
    const newFiles = values.uploads.filter((_, idx) => idx !== index);

    setFilePreviews(newPreviews);
    setFieldValue("uploads", newFiles);
  };

  return (
    <Stack gap={3} width="100%">
      <Typography variant="h4">All users</Typography>

      {/* All users */}
      <Box>
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
            name="movie"
            type="string"
            placeholder="The Godfather"
            disablePortal
            options={top100Films}
            value={values.movie.label}
            onChange={(event, newValue) => {
              setFieldValue("movie", newValue.label);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label="Movie"
                error={touched.movie && Boolean(errors.movie)}
                helperText={touched.movie && errors.movie}
              />
            )}
          />

          <Stack>
            {/* File Preview */}
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
                    <img
                      src={fileURL}
                      alt={`File preview ${index}`}
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

            {/* File Upload */}
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
            </Button>
          </Stack>

          {/* Required Checkbox */}
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
        </form>
      </Box>
    </Stack>
  );
}
