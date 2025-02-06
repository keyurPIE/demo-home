import * as React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Stack, Step, StepLabel, Stepper } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import DropdownMenu from "@/app/component/Dropdown";
// import constant from "@/app/utils/constant";

interface profileConnectionsProps {
  title: string;
  isConnection?: boolean;
}

const steps = [
  {
    label: "12 Invoices have been paid",
    description: `Invoices have been paid to the company`,
    time: "12 min ago",
  },
  {
    label: "Client Meeting",
    description: "Project meeting with john @10:15am",
    time: "45 min ago",
  },
  {
    label: "Create a new project for client",
    description: `6 team members in a project`,
    time: "2 days ago",
  },
];

// const { connectionsData, teamsData } = constant;

export default function ProfileActivityTimeline({
  title,
}: profileConnectionsProps) {
  //   const [activeStep, setActiveStep] = React.useState(0);

  //   const handleNext = () =>
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);

  //   const handleBack = () =>
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);

  return (
    <Stack gap={2}>
      <Box className="flex items-center justify-between gap-2">
        <Typography
          sx={{ color: "#666cff" }}
          className="flex items-center gap-2"
        >
          <BarChartIcon />
          {title}
        </Typography>

        {/* Menu */}
        <DropdownMenu />
      </Box>

      {/* list items */}
      <Box>
        {/* <Stepper activeStep={activeStep} orientation="vertical"> */}
        <Stepper
          orientation="vertical"
          sx={{
            height: 360,
            "& .MuiStepConnector-line": { height: "100%" },
            "& .MuiStepLabel-root": { p: 0 },
            "& .MuiStepLabel-labelContainer": {
              display: "flex",
              flexDirection: "column",
              gap: 1,
            },
          }}
        >
          {steps.map((step, index) => (
            <Step key={step.label}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 1,
                }}
              >
                <StepLabel
                  sx={{
                    "& .MuiStepLabel-label": {
                      color: "#3B4056",
                      fontSize: { xs: 12, md: 15 },
                      fontWeight: 600,
                    },
                  }}
                  //   icon={
                  //     <Box
                  //       sx={{ backgroundColor: "red", height: 12, width: 12 }}
                  //       className="rounded-full"
                  //     />
                  //   }
                  optional={
                    <Typography
                      fontWeight={"normal"}
                      fontSize={{ xs: 12, md: 16 }}
                      sx={{ color: "#676B7B" }}
                    >
                      {step.description}
                    </Typography>
                  }
                >
                  {step.label}
                </StepLabel>
                <Typography
                  fontSize={{ xs: 10, md: 13 }}
                  sx={{ color: "#A8AAB4" }}
                >
                  {step.time}
                </Typography>
              </Box>
              {index === 1 ? (
                <Box
                  display="flex"
                  className="ml-9 items-center"
                  alignItems="flex-start"
                  gap={1}
                >
                  <Avatar
                    alt="user-profile"
                    src="/avatar/dummy-user-image.png"
                    sx={{ width: 30, height: 30 }}
                  />
                  <Stack>
                    <Typography sx={{ fontSize: 12, m: 0, color: "#3b4056" }}>
                      Lester McCarthy (Client)
                    </Typography>
                    <Typography sx={{ fontSize: 12, m: 0, color: "#3b4056" }}>
                      CEO of Pixinvent
                    </Typography>
                  </Stack>
                </Box>
              ) : null}
            </Step>
          ))}
        </Stepper>
      </Box>
    </Stack>
  );
}
