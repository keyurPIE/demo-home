import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  alpha,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuProps,
  Stack,
  Step,
  StepLabel,
  Stepper,
  styled,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BarChartIcon from "@mui/icons-material/BarChart";
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

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    transformOrigin={{ vertical: "top", horizontal: "right" }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", { color: theme.palette.grey[300] }),
  },
}));

export default function ProfileActivityTimeline({
  title,
}: profileConnectionsProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  //   const [activeStep, setActiveStep] = React.useState(0);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  //   const handleNext = () =>
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);

  //   const handleBack = () =>
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);

  //   const handleReset = () => setActiveStep(0);

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
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{ "aria-labelledby": "demo-customized-button" }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <EditIcon />
              Edit
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <FileCopyIcon />
              Duplicate
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <ArchiveIcon />
              Archive
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <MoreHorizIcon />
              More
            </MenuItem>
          </StyledMenu>
        </div>
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
