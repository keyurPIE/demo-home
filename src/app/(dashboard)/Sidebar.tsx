import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import constant from "../utils/constant";

const drawerWidth = 260;

interface SideBarProps {
  open: boolean;
  onClose: () => void;
  onItemClick: (item: string) => void;
  variant: string;
  anchor: string;
  currentSelection: string;
}

const { sidebarItems, sidebarItemsBottom } = constant;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: theme.breakpoints.down("md") ? "space-around" : "flex-end",
}));

const Sidebar = ({
  open,
  onClose,
  onItemClick,
  currentSelection,
}: SideBarProps) => {
  const theme = useTheme();

  return (
    <Drawer
      variant="persistent"
      open={open}
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#17385E",
          gap: 2,
          pt: 1.5,
        },
      }}
    >
      <DrawerHeader>
        <Typography
          sx={{
            textAlign: { xs: "left", md: "center" },
            color: "white",
            fontSize: { xs: 20, sm: 28 },
            fontWeight: 700,
          }}
        >
          Demo Home
        </Typography>
        <IconButton onClick={onClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon sx={{ color: "#fff" }} />
          ) : (
            <ChevronRightIcon sx={{ color: "#fff" }} />
          )}
        </IconButton>
      </DrawerHeader>

      {/* Item list */}
      <List
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {sidebarItems.map((text) => (
          <ListItem key={text.label} disablePadding>
            <ListItemButton
              onClick={() => onItemClick(text.label)}
              sx={{
                backgroundColor:
                  currentSelection === text.label ? "#375a7f" : "transparent",
                borderRadius: 1,
                borderLeft:
                  currentSelection === text.label
                    ? "5px solid #579BD0"
                    : "none",
                color: currentSelection === text.label ? "#fff" : "#AEBCC8",
                gap: 1.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: currentSelection === text.label ? "#fff" : "#AEBCC8",
                  minWidth: 0,
                }}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText
                primary={text.label}
                sx={{ "& .MuiTypography-root": { fontWeight: 700 } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {sidebarItemsBottom.map((text) => (
          <ListItem key={text.label} disablePadding>
            <ListItemButton
              onClick={() => onItemClick(text.label)}
              sx={{
                backgroundColor:
                  currentSelection === text.label ? "#375a7f" : "transparent",
                borderRadius: 1,
                color: currentSelection === text.label ? "#fff" : "#AEBCC8",
                borderLeft:
                  currentSelection === text.label
                    ? "5px solid #579BD0"
                    : "none",
                gap: 1.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: currentSelection === text.label ? "#fff" : "#AEBCC8",
                  minWidth: 0,
                }}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText
                primary={text.label}
                sx={{ "& .MuiTypography-root": { fontWeight: 700 } }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
