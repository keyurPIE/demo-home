import * as React from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PropTypes from "prop-types";
import UserProfileTab from "./SingleUserTab/UserProfileTab";
import UserTeamsTab from "./SingleUserTab/UserTeamsTab";
import UserProjectsTab from "./SingleUserTab/UserProjectsTab";
import UserConnectionsTab from "./SingleUserTab/UserConnectionsTab";
import constant from "@/app/utils/constant";
import { allUserProps } from "@/types/singleUserType";

const { TabWithIcon } = constant;

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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SingleUser: React.FC<{ singleUserDetails: allUserProps }> = ({
  singleUserDetails,
}) => {
  const [value, setValue] = React.useState<number>(0);

  const { name, profile, position, city, joinDate, isConnectedUser } =
    singleUserDetails;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className="h-full flex flex-col gap-8">
      <div className="border-2 rounded-lg shadow-lg w-full md:h-80 md:max-h-80">
        <div className="h-auto md:h-[220px] bg-slate-400 rounded-t-lg">
          <Image
            src="/profile-banner.png"
            alt="profile-banner"
            width={300}
            height={220}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-auto md:h-[100px] px-5 py-3 flex flex-col md:flex-row gap-3">
          <div className="relative h-[100px] w-[100px] md:bottom-8 p-1 bg-white rounded-lg">
            <Image
              src={profile || "/avatar/dummy-user-image.png"}
              alt={`${name}-user-profile`}
              className="w-full h-full object-cover rounded-lg"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full gap-4 justify-between items-start md:items-center">
            <div className="flex flex-col gap-1">
              <Typography
                variant="h5"
                fontWeight={600}
                className="text-[#3B4506]"
              >
                {name || "John doe"}
              </Typography>
              <div className="flex gap-3 flex-col md:flex-row">
                <span className="flex gap-1 items-center text-[#676b7b]">
                  <LanguageIcon />
                  {position || "Front end Developer"}
                </span>
                <span className="flex gap-1 items-center text-[#676b7b]">
                  <LocationOnIcon />
                  {city || " Vatican city"}
                </span>
                <span className="flex gap-1 items-center text-[#676b7b]">
                  <CalendarMonthIcon />
                  {joinDate || "Joined April 2021"}
                </span>
              </div>
            </div>
            <Button
              variant="contained"
              // className="w-auto"
              sx={{ backgroundColor: "#666cff", borderRadius: 2 }}
              startIcon={
                isConnectedUser ? <VerifiedUserIcon /> : <PersonAddIcon />
              }
            >
              {isConnectedUser ? "connected" : "connect"}
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs for users */}
      <Box sx={{ width: "100%", px: { xs: 0, md: 2 } }}>
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
              flexDirection: { xs: "column", sm: "row" },
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
              className="hover:bg-[#e7e7ff] hover:text-[#666cff] transition-all"
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
          <UserProfileTab singleUserDetails={singleUserDetails} />
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
};

export default SingleUser;
