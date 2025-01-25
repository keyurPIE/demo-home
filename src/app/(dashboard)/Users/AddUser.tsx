import { ChangeEvent, useState } from "react";
import constant from "@/app/utils/constant";
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
import * as yup from "yup";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { FormikProps, useFormik } from "formik";
import Image from "next/image";

const { top100Films } = constant;

interface FormValues {
  name: string;
  email: string;
  password: string;
  movie: { label: string; year: number }; // Based on your logic it seems like a string
  terms: boolean;
  uploads: File[]; // Array of File objects
}

interface AddUserProps {
  setAddUser: (value?: boolean) => void;
}

// Validations for Form field
const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  movie: yup
    .object()
    .shape({
      label: yup.string().required("Movie is required"),
      year: yup.number().required("Year is required"),
    })
    .required("Movie is required"),
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

export default function AddUser({ setAddUser }: AddUserProps) {
  const [filePreviews, setFilePreviews] = useState<string[]>([]);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      movie: { label: "", year: 0 },
      terms: false,
      uploads: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setAddUser(false);
      console.log(JSON.stringify(values, null, 2));
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

      // Set the files in Formik's `uploads` field
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
  return (
    <Stack gap={3} width="100%">
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
            </Button>{" "}
            {touched.uploads && errors.uploads && (
              <Typography color="error">{errors.uploads}</Typography>
            )}
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
