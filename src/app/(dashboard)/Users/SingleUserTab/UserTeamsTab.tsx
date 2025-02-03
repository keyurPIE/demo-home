import StarBorderIcon from "@mui/icons-material/StarBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  AvatarGroup,
  Box,
  Chip,
  ListItemAvatar,
  Stack,
  Typography,
} from "@mui/material";
import constant from "@/app/utils/constant";
import teamData from "@/data/userTeamsData.json";

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
interface Tag {
  label: string;
  colorCode: string;
}

interface TeamCardProps {
  title: string;
  banner: string;
  description: string;
  avatars: string[];
  tags: Tag[];
}

const TeamCard: React.FC<TeamCardProps> = ({
  title,
  banner,
  description,
  avatars,
  tags,
}) => (
  <Stack
    p={{ xs: 1.5, md: 2.5 }}
    gap={2}
    justifyContent="space-between"
    className="border rounded-lg"
    style={{ boxShadow: "0 .25rem .875rem 0 rgba(38,43,67,.16)" }}
  >
    <Box className="text-gray-500 font-bold flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <ListItemAvatar sx={{ minWidth: 0, m: 0 }}>
          <Avatar alt={title} src={banner} />
        </ListItemAvatar>
        <Typography fontSize={{ xs: 14, md: 18 }} className="text-[#3B4056]">
          {title}
        </Typography>
      </div>
      <div className="flex gap-2 items-center">
        <StarBorderIcon />
        <MoreVertIcon />
      </div>
    </Box>
    <Typography sx={{ color: "#676b7b", fontSize: { xs: 12, md: 14 } }}>
      {description}
    </Typography>
    <Box gap={2} className="flex justify-between items-center">
      <AvatarGroup
        total={20}
        sx={{
          "& .MuiAvatarGroup-avatar": {
            width: 32,
            height: 32,
            fontSize: 14,
          },
        }}
      >
        {avatars.map((avatar, index) => (
          <Avatar
            key={index}
            alt={`avatar-${index}`}
            src={avatar}
            sx={{ width: 32, height: 32 }}
          />
        ))}
      </AvatarGroup>
      <Box className="flex items-center justify-between gap-2 text-xs md:text-sm">
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
    </Box>
  </Stack>
);

export default function UserTeamsTab() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {teamData.map((team, index) => (
        <TeamCard
          key={index}
          title={team.title}
          banner={team.banner}
          description={team.description}
          avatars={team.avatars}
          tags={team.tags}
        />
      ))}
    </div>
  );
}
