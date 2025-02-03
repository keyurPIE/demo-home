import {
  Avatar,
  AvatarGroup,
  Box,
  Chip,
  Divider,
  LinearProgress,
  linearProgressClasses,
  ListItemAvatar,
  Stack,
  styled,
  Typography,
} from "@mui/material";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import projectData from "@/data/userProjectData.json";
import constant from "@/app/utils/constant";
import { RiWechatLine } from "react-icons/ri";

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

interface TeamCardProps {
  title: string;
  clientName: string;
  banner: string;
  description: string;
  avatars: string[];
  tags: { label: string; colorCode: string };
  outOfTotalBudget: string;
  totalBudget: string;
  startDate: string;
  deadline: string;
  allHours: string;
  tasks: string;
  completed: string | number;
  members: string;
  messages: string;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#666cff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#e7e7ff",
    }),
  },
}));

const TeamCard: React.FC<TeamCardProps> = ({
  title,
  clientName,
  banner,
  description,
  avatars,
  tags,
  outOfTotalBudget,
  totalBudget,
  startDate,
  deadline,
  allHours,
  tasks,
  completed,
  members,
  messages,
}) => {
  let code;
  switch (tags.colorCode) {
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
    <Stack
      justifyContent="space-between"
      className="border rounded-lg"
      style={{ boxShadow: "0 .25rem .875rem 0 rgba(38,43,67,.16)" }}
    >
      <Stack p={{ xs: 1.5, md: 2.5 }} gap={2}>
        <Box className="text-gray-500 font-bold flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <ListItemAvatar sx={{ minWidth: 0, m: 0 }}>
              <Avatar alt={title} src={banner} />
            </ListItemAvatar>
            <Box>
              <Typography
                fontSize={{ xs: 14, md: 18 }}
                className="text-[#676b7b]"
              >
                {title}
              </Typography>
              <Typography
                fontSize={14}
                fontWeight={500}
                className="text-[#676b7b]"
              >
                <span className="font-semibold">Client:</span> {clientName}
              </Typography>
            </Box>
          </div>
          <MoreVertIcon />
        </Box>

        <div className="flex gap-2 justify-between items-center">
          <Box className="bg-[#f2f2f4] py-2 px-3 rounded-lg">
            <Typography fontSize={16}>
              {totalBudget} /{" "}
              <span className="text-[#676b7b]">{outOfTotalBudget}</span>
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={500}
              className="text-[#676b7b]"
            >
              Total Budget
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize={16}
              fontWeight={500}
              className="text-[#676b7b]"
            >
              <span className="font-semibold">Start Date:</span> {startDate}
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={500}
              className="text-[#676b7b]"
            >
              <span className="font-semibold">Deadline:</span> {deadline}
            </Typography>
          </Box>
        </div>

        <Typography sx={{ color: "#676b7b", fontSize: { xs: 12, md: 14 } }}>
          {description}
        </Typography>
      </Stack>

      <Divider />

      <Stack p={{ xs: 1.5, md: 2.5 }} gap={2}>
        <div className="flex gap-2 justify-between items-center">
          <Typography fontWeight={500} className="text-[#676b7b]">
            <span className="text-[#3b4056] font-semibold">All Hours:</span>{" "}
            {allHours}
          </Typography>

          <Chip label={tags.label} className="font-semibold" sx={code} />
        </div>

        <Stack gap={0.5}>
          <div className="flex items-center gap-2 justify-between">
            <Typography
              fontSize={14}
              fontWeight={500}
              className="text-[#676b7b]"
            >
              Task: {tasks}
            </Typography>
            <Typography
              fontSize={14}
              fontWeight={500}
              className="text-[#676b7b]"
            >
              {completed}% completed
            </Typography>
          </div>
          <BorderLinearProgress
            variant="determinate"
            value={Number(completed)}
          />
        </Stack>
        <Box gap={2} className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <AvatarGroup
              sx={{
                "& .MuiAvatarGroup-avatar": {
                  width: 28,
                  height: 28,
                  fontSize: 14,
                },
              }}
            >
              {avatars.map((avatar, index) => (
                <Avatar
                  key={index}
                  alt={`avatar-${index}`}
                  src={avatar}
                  sx={{ width: 28, height: 28 }}
                />
              ))}
            </AvatarGroup>
            <span className="text-sm text-[#a8aab4]">{members}</span>
          </div>
          <div className="flex gap-1 items-center">
            <RiWechatLine className="text-[#a8aab4] w-7 h-7" />
            <span className="text-md text-[#a8aab4]">{messages}</span>
          </div>
        </Box>
      </Stack>
    </Stack>
  );
};

export default function UserProjectsTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projectData.map((team, index) => (
        <TeamCard
          key={index}
          title={team.title}
          clientName={team.clientName}
          banner={team.banner}
          description={team.description}
          avatars={team.avatars}
          tags={team.tags}
          outOfTotalBudget={team.outOfTotalBudget}
          totalBudget={team.totalBudget}
          startDate={team.startDate}
          deadline={team.deadline}
          allHours={team.allHours}
          tasks={team.tasks}
          completed={team.completed}
          members={team.members}
          messages={team.messages}
        />
      ))}
    </div>
  );
}
