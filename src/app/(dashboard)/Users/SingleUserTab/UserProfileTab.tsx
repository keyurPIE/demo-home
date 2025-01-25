import { Box, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import TourOutlinedIcon from "@mui/icons-material/TourOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import { FaReact } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { PiChatsCircle } from "react-icons/pi";
import CheckIcon from "@mui/icons-material/Check";

const about = [
  { label: "Full Name", value: "John Doe", icon: <PersonIcon /> },
  { label: "Status", value: "Active", icon: <CheckIcon /> },
  { label: "Role", value: "Developer", icon: <StarIcon /> },
  { label: "Country", value: "USA", icon: <TourOutlinedIcon /> },
  { label: "Languages", value: "English", icon: <TranslateOutlinedIcon /> },
];

const contacts = [
  { label: "Contact", value: "(123) 456-7890", icon: <CallOutlinedIcon /> },
  { label: "Skype", value: "john.doe", icon: <PiChatsCircle /> },
  {
    label: "Email",
    value: "john.doe@example.com",
    icon: <DraftsOutlinedIcon />,
  },
];

const teams = [
  { label: "Backend Developer", value: "(126 Members)", icon: <FiGithub /> },
  { label: "React Developer", value: "(98 Members)", icon: <FaReact /> },
];

const overview = [
  { label: "Task Compiled", value: "13.5k", icon: <CheckIcon /> },
  { label: "Projects Compiled", value: "146", icon: <PersonIcon /> },
  { label: "Connections", value: "897", icon: <StarIcon /> },
];

export default function UserProfileTab() {
  return (
    <Box className="flex gap-6">
      <Stack gap={3}>
        <Stack className="border p-5 gap-5 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4">
            <small className="text-gray-500 font-bold">ABOUT</small>
            <Stack gap={1}>
              {about.map((item, index) => (
                <Typography key={index} sx={{ color: "#676b7b", height: 25 }}>
                  {item.icon} {item.label}: {item.value}
                </Typography>
              ))}
            </Stack>
          </div>
          <div className="flex flex-col gap-4">
            <small className="text-gray-500 font-bold">CONTACTS</small>
            <Stack gap={1}>
              {contacts.map((item, index) => (
                <Typography
                  key={index}
                  className="flex items-center gap-3"
                  sx={{ color: "#676b7b", height: 25 }}
                >
                  {item.icon} {item.label}: {item.value}
                </Typography>
              ))}
            </Stack>
          </div>
          <div className="flex flex-col gap-4">
            <small className="text-gray-500 font-bold">TEAMS</small>
            <Stack gap={1}>
              {teams.map((item, index) => (
                <Typography
                  key={index}
                  className="flex items-center gap-3"
                  sx={{ color: "#676b7b", height: 25 }}
                >
                  {item.icon} {item.label}: {item.value}
                </Typography>
              ))}
            </Stack>
          </div>
        </Stack>
        <div className="border p-5 flex flex-col gap-4 rounded-lg shadow-lg">
          <small className="text-gray-500 font-bold">OVERVIEW</small>
          <Stack gap={1}>
            {overview.map((item, index) => (
              <Typography key={index} sx={{ color: "#676b7b", height: 25 }}>
                {item.icon} {item.label}: {item.value}
              </Typography>
            ))}
          </Stack>
        </div>
      </Stack>
      <Stack gap={3}>
        <div className="border p-5 rounded-lg shadow-lg">1</div>
        <div className="flex gap-6">
          <div className="border p-5 rounded-lg shadow-lg">1</div>
          <div className="border p-5 rounded-lg shadow-lg">2</div>
        </div>
        <div className="border p-5 rounded-lg shadow-lg">3</div>
      </Stack>
    </Box>
  );
}
