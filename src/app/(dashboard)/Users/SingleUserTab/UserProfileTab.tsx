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
// import ProfileProjectList from "./ProfileTab/ProfileProjectList";

export default function UserProfileTab({ singleUserDetails }: any) {
  const { name, role, status, country, language, contact, skype, email } =
    singleUserDetails;

  const about = [
    {
      label: "Full Name",
      value: name,
      default: "John Doe",
      icon: <PersonIcon className="md:mr-2" />,
    },
    {
      label: "Status",
      value: status,
      default: "Active",
      icon: <CheckIcon className="md:mr-2" />,
    },
    {
      label: "Role",
      value: role,
      default: "Developer",
      icon: <StarIcon className="md:mr-2" />,
    },
    {
      label: "Country",
      value: country,
      default: "USA",
      icon: <TourOutlinedIcon className="md:mr-2" />,
    },
    {
      label: "Languages",
      value: language,
      default: "English",
      icon: <TranslateOutlinedIcon className="md:mr-2" />,
    },
  ];

  const contacts = [
    {
      label: "Contact",
      value: contact,
      default: "(123) 456-7890",
      icon: <CallOutlinedIcon />,
    },
    {
      label: "Skype",
      value: skype,
      default: "john.doe",
      icon: <PiChatsCircle className="w-6 h-6" />,
    },
    {
      label: "Email",
      value: email,
      default: "john.doe@example.com",
      icon: <DraftsOutlinedIcon />,
    },
  ];

  const teams = [
    {
      label: "Backend Developer",
      value: "(126 Members)",
      default: "(126 Members)",
      icon: <FiGithub className="w-6 h-6" />,
    },
    {
      label: "React Developer",
      value: "(98 Members)",
      default: "(98 Members)",
      icon: <FaReact className="w-6 h-6" />,
    },
  ];

  const overview = [
    {
      label: "Task Compiled",
      value: "13.5k",
      default: "13.5k",
      icon: <CheckIcon className="md:mr-2" />,
    },
    {
      label: "Projects Compiled",
      value: "146",
      default: "146",
      icon: <PersonIcon className="md:mr-2" />,
    },
    {
      label: "Connections",
      value: "897",
      default: "897",
      icon: <StarIcon className="md:mr-2" />,
    },
  ];
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
                  {item.value || item.default}
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
        {/* <div className="border p-3 md:p-5 rounded-lg shadow-xl"> */}
        {/* <div className="border rounded-lg shadow-xl">
          <ProfileProjectList title="Activity Timeline" />
        </div> */}
      </Stack>
    </Box>
  );
}
