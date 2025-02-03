import {
  Avatar,
  Box,
  Button,
  Chip,
  ListItemAvatar,
  Stack,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import projectData from "@/data/userConnections.json";
import { RiMailOpenLine, RiUserFollowLine } from "react-icons/ri";
import { RiUserAddLine } from "react-icons/ri";
import constant from "@/app/utils/constant";

const {
  orangeColorCode,
  purpleColorCode,
  blueColorCode,
  greyColorCode,
  greenColorCode,
  mangoColorCode,
  defaultColorCode,
} = constant;

// Define the types
interface Tags {
  label: string;
  colorCode: string;
}

interface TeamCardProps {
  title: string;
  position: string;
  banner: string;
  project: string;
  tasks: string;
  connections: string;
  tags: Tags[];
  isConnected: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({
  title,
  position,
  banner,
  project,
  tasks,
  connections,
  isConnected,
  tags,
}) => (
  <Stack
    py={4}
    px={{ xs: "10px", lg: 4 }}
    gap={3}
    justifyContent="space-between"
    alignItems="center"
    className="border rounded-lg relative text-center"
    style={{ boxShadow: "0 .25rem .875rem 0 rgba(38,43,67,.16)" }}
  >
    <ListItemAvatar sx={{ minWidth: 0, m: 0 }}>
      <Avatar alt={title} src={banner} sx={{ width: 100, height: 100 }} />
    </ListItemAvatar>
    <Box>
      <Typography fontSize={18} fontWeight={500} className="text-[#3b4056]">
        {title}
      </Typography>
      <Typography fontSize={15} fontWeight={500} className="text-[#676b7b]">
        {position}
      </Typography>
    </Box>
    <MoreVertIcon className="absolute top-5 right-5" />

    <Box className="flex items-center justify-between gap-3 text-xs md:text-sm">
      {tags.map((tag, index) => {
        let code;
        switch (tag.colorCode) {
          case "orangeColorCode":
            code = orangeColorCode;
            break;
          case "purpleColorCode":
            code = purpleColorCode;
            break;
          case "blueColorCode":
            code = blueColorCode;
            break;
          case "greyColorCode":
            code = greyColorCode;
            break;
          case "greenColorCode":
            code = greenColorCode;
            break;
          case "mangoColorCode":
            code = mangoColorCode;
            break;
          default:
            code = defaultColorCode;
            break;
        }
        return (
          <Chip
            key={index}
            label={tag.label}
            className="font-semibold"
            sx={code}
          />
        );
      })}
    </Box>

    <div className="flex gap-2 justify-around items-center w-full">
      <Stack gap={0.5} sx={{ color: "#3b4056", fontSize: { xs: 16, lg: 20 } }}>
        {project}
        <span className="text-[#676b7b] text-base font-medium">Projects</span>
      </Stack>
      <Stack gap={0.5} sx={{ color: "#3b4056", fontSize: { xs: 16, lg: 20 } }}>
        {tasks}
        <span className="text-[#676b7b] text-base font-medium">Tasks</span>
      </Stack>
      <Stack gap={0.5} sx={{ color: "#3b4056", fontSize: { xs: 16, lg: 20 } }}>
        {connections}
        <span className="text-[#676b7b] text-base font-medium">
          Connections
        </span>
      </Stack>
    </div>

    <Stack gap={2} direction="row" alignItems="center">
      <Button
        startIcon={
          isConnected ? (
            <RiUserFollowLine className="w-4 h-4" />
          ) : (
            <RiUserAddLine className="w-4 h-4" />
          )
        }
        className={`hover:text-[${
          isConnected ? "#fff" : "#666cff"
        }] transition-all shadow-md`}
        sx={{
          backgroundColor: isConnected ? "#666cff" : "transparent",
          color: isConnected ? "#fff" : "#666cff",
          border: "1px solid #666cff",
          borderRadius: 2,
          padding: "5px 25px",
          ":hover": { backgroundColor: isConnected ? "#333ae5" : "#e7e7ff" },
        }}
      >
        {isConnected ? "Connected" : "Connect"}
      </Button>
      <RiMailOpenLine className="w-8 h-8 border p-1 rounded-lg border-[#6d788d]" />
    </Stack>
  </Stack>
);

export default function UserConnectionsTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projectData.map((team, index) => (
        <TeamCard
          key={index}
          title={team.title}
          position={team.position}
          banner={team.banner}
          project={team.project}
          tasks={team.tasks}
          connections={team.connections}
          isConnected={team.isConnected}
          tags={team.tags}
        />
      ))}
    </div>
  );
}
