import * as React from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PropTypes from "prop-types";
import PersonIcon from "@mui/icons-material/Person";
import UserProfileTab from "./SingleUserTab/UserProfileTab";
import UserTeamsTab from "./SingleUserTab/UserTeamsTab";
import UserProjectsTab from "./SingleUserTab/UserProjectsTab";
import UserConnectionsTab from "./SingleUserTab/UserConnectionsTab";

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const TabWithIcon = [
  { label: "Profile", icon: <PersonIcon /> },
  { label: "Teams", icon: <PersonIcon /> },
  { label: "Projects", icon: <PersonIcon /> },
  { label: "Connections", icon: <PersonIcon /> },
];

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SingleUser() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <section className="h-full flex flex-col gap-8">
      <div className="border-2 rounded-lg shadow-lg w-full h-80 max-h-80">
        <div className="h-[220px] bg-slate-400 rounded-t-lg">
          <Image
            src="/profile-banner.png"
            alt="profile-banner"
            width={300}
            height={220}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-[100px] px-5 py-3 flex gap-3">
          <div className="relative h-[100px] w-[100px] bottom-7 border p-1 bg-white rounded-lg">
            <Image
              src="/dummy-user-image.png"
              alt="user-profile"
              className="w-full h-full"
              width={100}
              height={100}
            />
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex flex-col gap-1">
              <Typography
                variant="h5"
                fontWeight={600}
                className="text-[#3B4506]"
              >
                John doe
              </Typography>
              <div className="flex gap-3">
                <span className="flex gap-1 items-center text-[#676b7b]">
                  <LanguageIcon />
                  Front end Developer
                </span>
                <span className="flex gap-1 items-center text-[#676b7b]">
                  <LocationOnIcon />
                  Vatican city
                </span>
                <span className="flex gap-1 items-center text-[#676b7b]">
                  <CalendarMonthIcon />
                  Joined April 2021
                </span>
              </div>
            </div>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#666cff", borderRadius: 2 }}
              startIcon={<VerifiedUserIcon />}
            >
              connected
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs for users */}
      <Box sx={{ width: "100%", px: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          sx={{
            "& .MuiTabs-indicator": { display: "none" },
            "& .MuiTabs-flexContainer": {
              gap: 3,
              "& .MuiTab-root.Mui-selected": {
                backgroundColor: "#666cff",
                color: "#fff",
                borderRadius: 3,
                height: 40,
                minHeight: 0,
                py: 0.5,
                px: 2,
              },
              "& .MuiTab-root": {
                border: "2px solid #666cff",
                borderRadius: 3,
                color: "#666cff",
                height: 40,
                minHeight: 0,
                py: 0.5,
                px: 2,
              },
            },
          }}
        >
          {TabWithIcon.map((item, index) => (
            <Tab
              key={item.label}
              label={
                <Box className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </Box>
              }
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <div>
        <CustomTabPanel value={value} index={0}>
          <UserProfileTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <UserTeamsTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <UserProjectsTab />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <UserConnectionsTab />
        </CustomTabPanel>
      </div>
    </section>
  );
}
