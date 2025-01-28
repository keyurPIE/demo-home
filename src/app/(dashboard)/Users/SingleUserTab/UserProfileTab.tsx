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
import ProfileConnections from "./ProfileTab/ProfileConnections";
import ProfileActivityTimeline from "./ProfileTab/ProfileActivityTimeline";
import ProfileProjectList from "./ProfileTab/ProfileProjectList";

const about = [
  {
    label: "Full Name",
    value: "John Doe",
    icon: <PersonIcon className="md:mr-2" />,
  },
  { label: "Status", value: "Active", icon: <CheckIcon className="md:mr-2" /> },
  { label: "Role", value: "Developer", icon: <StarIcon className="md:mr-2" /> },
  {
    label: "Country",
    value: "USA",
    icon: <TourOutlinedIcon className="md:mr-2" />,
  },
  {
    label: "Languages",
    value: "English",
    icon: <TranslateOutlinedIcon className="md:mr-2" />,
  },
];

const contacts = [
  {
    label: "Contact",
    value: "(123) 456-7890",
    icon: <CallOutlinedIcon />,
  },
  {
    label: "Skype",
    value: "john.doe",
    icon: <PiChatsCircle className="w-6 h-6" />,
  },
  {
    label: "Email",
    value: "john.doe@example.com",
    icon: <DraftsOutlinedIcon />,
  },
];

const teams = [
  {
    label: "Backend Developer",
    value: "(126 Members)",
    icon: <FiGithub className="w-6 h-6" />,
  },
  {
    label: "React Developer",
    value: "(98 Members)",
    icon: <FaReact className="w-6 h-6" />,
  },
];

const overview = [
  {
    label: "Task Compiled",
    value: "13.5k",
    icon: <CheckIcon className="md:mr-2" />,
  },
  {
    label: "Projects Compiled",
    value: "146",
    icon: <PersonIcon className="md:mr-2" />,
  },
  {
    label: "Connections",
    value: "897",
    icon: <StarIcon className="md:mr-2" />,
  },
];

export default function UserProfileTab() {
  return (
    <Box className="flex gap-6 w-full flex-col md:flex-row">
      <Stack gap={3} className="w-full md:w-[30%]">
        <Stack className="border p-3 md:p-5 gap-10 rounded-lg shadow-xl">
          <div className="flex flex-col gap-4">
            <small className="text-gray-500 font-bold">ABOUT</small>
            <Stack gap={2}>
              {about.map((item, index) => (
                <Box
                  key={index}
                  className="flex items-center justify-between gap-2 text-xs md:text-sm"
                >
                  <Typography
                    key={index}
                    sx={{ color: "#676b7b", fontSize: { xs: 12, md: 14 } }}
                  >
                    {item.icon} {item.label}:
                  </Typography>
                  {item.value}
                </Box>
              ))}
            </Stack>
          </div>
          <div className="flex flex-col gap-4">
            <small className="text-gray-500 font-bold">CONTACTS</small>
            <Stack gap={2}>
              {contacts.map((item, index) => (
                <Box
                  key={index}
                  className="flex items-center justify-between gap-2 text-xs md:text-sm"
                  sx={{ wordBreak: "break-all" }}
                >
                  <Typography
                    className="flex items-center gap-[6px] md:gap-3"
                    key={index}
                    sx={{ color: "#676b7b", fontSize: { xs: 12, md: 14 } }}
                  >
                    {item.icon} {item.label}:
                  </Typography>
                  {item.value}
                </Box>
              ))}
            </Stack>
          </div>
          <div className="flex flex-col gap-4">
            <small className="text-gray-500 font-bold">TEAMS</small>
            <Stack gap={2}>
              {teams.map((item, index) => (
                <Box
                  key={index}
                  className="flex items-center justify-between gap-2 text-xs md:text-sm"
                >
                  <Typography
                    key={index}
                    className="flex items-center gap-[6px] md:gap-3"
                    sx={{ color: "#676b7b", fontSize: { xs: 12, md: 14 } }}
                  >
                    {item.icon} {item.label}:
                  </Typography>
                  {item.value}
                </Box>
              ))}
            </Stack>
          </div>
        </Stack>
        <div className="border p-3 md:p-5 flex flex-col gap-4 rounded-lg shadow-xl">
          <small className="text-gray-500 font-bold">OVERVIEW</small>
          <Stack gap={2}>
            {overview.map((item, index) => (
              <Box
                key={index}
                className="flex items-center justify-between gap-2 text-xs md:text-sm"
              >
                <Typography
                  key={index}
                  sx={{ color: "#676b7b", fontSize: { xs: 12, md: 14 } }}
                >
                  {item.icon} {item.label}:
                </Typography>
                {item.value}
              </Box>
            ))}
          </Stack>
        </div>
      </Stack>
      <Stack gap={3} className="w-full md:w-[70%]">
        <div className="border p-3 md:p-5 rounded-lg shadow-xl">
          <ProfileActivityTimeline title="Activity Timeline" />
        </div>
        <div className="flex gap-6 flex-col md:flex-row">
          <div className="border p-3 md:p-5 rounded-lg shadow-xl w-full">
            <ProfileConnections title="Connections" isConnection={true} />
          </div>
          <div className="border p-3 md:p-5 rounded-lg shadow-xl w-full">
            <ProfileConnections title="Teams" isConnection={false} />
          </div>
        </div>
        <div className="border rounded-lg shadow-xl">
          <ProfileProjectList title="Activity Timeline" />
        </div>
      </Stack>
    </Box>
  );
}
