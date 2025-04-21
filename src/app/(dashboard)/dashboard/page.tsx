"use client";
import React, { useEffect, useState } from "react";
import { styled, ThemeProvider, useTheme } from "@mui/material/styles";
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
import ProtectedRoute from "@/app/component/auth/ProtectedRoute";
import Loading from "@/app/loading";
import mainTheme from "@/app/theme";
const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3), // 24px for medium screens and larger
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1.5), // 12px for medium screens and lower
  },
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

const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [currentUrl, setCurrentUrl] = useState("Home");
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
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
    setCurrentUrl(item);
  };

  return (
    <ProtectedRoute>
      {loading ? (
        <Loading />
      ) : (
        <ThemeProvider theme={mainTheme}>
          <Box sx={{ display: "flex" }}>
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
              <>
                <DrawerHeader />
                <MainContainer value={currentUrl} />
              </>
            </Main>
          </Box>
        </ThemeProvider>
      )}
    </ProtectedRoute>
  );
};

export default Dashboard;
