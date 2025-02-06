import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, Button, Chip, Stack } from "@mui/material";
import constant from "@/app/utils/constant";
import DropdownMenu from "@/app/component/Dropdown";

interface profileConnectionsProps {
  title: string;
  isConnection?: boolean;
}

const {
  connectionsData,
  teamsData,
  orangeColorCode,
  purpleColorCode,
  blueColorCode,
  greyColorCode,
  defaultColorCode,
} = constant;

export default function ProfileConnections({
  title,
  isConnection,
}: profileConnectionsProps) {
  const [showAll, setShowAll] = React.useState(false);

  const data = isConnection ? connectionsData : teamsData;

  const handleShowMore = () => setShowAll(!showAll);
  const lengthNumber = 4;

  const displayedItems = showAll ? data : data.slice(0, lengthNumber);

  // Type guard to check if an item has isConnected
  const hasIsConnected = (item: any): item is { isConnected: boolean } => {
    return item?.isConnected !== undefined;
  };

  // Helper function to apply styles for the team icons
  const getChipStyle = (icon: any) => {
    const iconLower = icon.toLowerCase(); // Convert icon name to lowercase
    let chipStyle = { color: "", background: "" };
    switch (iconLower) {
      case "developer":
        chipStyle = orangeColorCode;
        break;
      case "support":
        chipStyle = purpleColorCode;
        break;
      case "designer":
        chipStyle = blueColorCode;
        break;
      case "marketing":
        chipStyle = greyColorCode;
        break;
      default:
        chipStyle = defaultColorCode;
        break;
    }
    return chipStyle;
  };

  return (
    <Stack gap={2}>
      <Box className="flex items-center justify-between gap-2">
        <Typography sx={{ color: "#666cff" }}>{title}</Typography>

        {/* Menu */}
        <DropdownMenu />
      </Box>

      {/* list items */}
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          maxHeight: 255,
          height: { md: 255 },
          overflowY: "auto",
          p: 0,
          px: 0.5,
        }}
      >
        {displayedItems.map((item, index) => {
          return (
            <ListItem
              key={index}
              alignItems="flex-start"
              sx={{ px: 0, gap: 1 }}
            >
              <ListItemAvatar sx={{ minWidth: 0, m: 0 }}>
                <Avatar alt={item.title} src={item.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={item.title}
                sx={{
                  m: 0,
                  color: "#3b4056",
                  "& .MuiTypography-root": {
                    fontWeight: 500,
                    fontSize: { xs: 12, md: 16 },
                  },
                }}
                secondary={item.subText}
              />
              {isConnection && hasIsConnected(item) ? (
                <Button
                  sx={{
                    border: "2px solid #666cff",
                    minWidth: 0,
                    width: 38,
                    height: 38,
                    px: "18px",
                    borderRadius: 2,
                    backgroundColor: item?.isConnected
                      ? "#666cff"
                      : "transparent",
                    color: item?.isConnected ? "#fff" : "#666cff",
                  }}
                >
                  {item.icon}
                </Button>
              ) : (
                <Chip
                  label={item.icon}
                  color="primary"
                  sx={getChipStyle(item.icon)}
                />
              )}
            </ListItem>
          );
        })}
      </List>

      {/* expand more  */}
      <Button
        className="pt-1 text-center text-[#666cff] cursor-pointer hover:text-[#4e52cf] transition-all"
        onClick={handleShowMore}
        // disabled={displayedItems.length! > lengthNumber ? true : false}
      >
        {showAll ? `Show Less` : `Show More`} {title}
      </Button>
    </Stack>
  );
}
