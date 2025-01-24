"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBarHeader from "./Appbar";
import { useMediaQuery } from "@mui/material";
import MainContainer from "./Main";
import dynamic from "next/dynamic";
import Loading from "./loading";
const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-around",
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [currentUrl, setCurrentUrl] = React.useState("Home");
  const [loading, setLoading] = React.useState(false); // Manage loading state
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  React.useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true); // Keep sidebar open on larger screens
    }
  }, [isMobile]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleItemClick = (item: string) => {
    setLoading(true);
    setCurrentUrl(item);
    if (item === "Log Out") {
      console.log("clicked item!", item);
    }
    setTimeout(() => {
      setLoading(false); // Set loading to false after a short delay (simulating content load)
    }, 1000); // Adjust the time as needed
  };

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          border: "2px solid #D6D6D6",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[{ mr: 2 }, open && { display: "none" }]}
          >
            <MenuIcon />
          </IconButton>
          <AppBarHeader />
        </Toolbar>
      </AppBar>

      {/* side bar component */}
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        onItemClick={handleItemClick}
        currentSelection={currentUrl}
        variant={isMobile ? "temporary" : "persistent"}
        anchor="left" // Sidebar opens from the left by default
      />

      {/* Main */}
      <Main open={open}>
        {loading ? (
          <Loading /> // Show loading spinner while loading
        ) : (
          <React.Suspense fallback={<Loading />}>
            <DrawerHeader />
            <MainContainer value={currentUrl} />
          </React.Suspense>
        )}
      </Main>
    </Box>
  );
}
