import React from "react";
import { Chip, Divider, Stack, Typography } from "@mui/material";
import CommonButton from "@/app/component/Button";
import { FaUserEdit } from "react-icons/fa";
import CommonTooltip from "@/app/component/Tooltip";

export default function UserPersonalInfo() {
  return (
    <Stack gap={3} alignItems="flex-start">
      <h2 className="flex gap-2 items-center text-base md:text-xl">
        Personal information
        <CommonTooltip title="This information is presented on your public profile, please specify carefully what you want to display." />
      </h2>

      <Divider sx={{ width: "100%" }} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Stack justifyContent="space-between" gap={2}>
          <Chip
            label="Pro"
            color="primary"
            sx={{
              maxWidth: "fit-content",
              borderRadius: 1,
              px: 1,
              py: 0,
              maxHeight: 24,
              textTransform: "uppercase",
            }}
          />
          <Stack gap={0}>
            <Typography variant="h5">Joseph McFall</Typography>
            <Typography
              fontWeight={500}
              sx={{ color: "#6B7280", fontSize: 20 }}
            >
              Web Developer
            </Typography>
          </Stack>
        </Stack>
        <Stack justifyContent="space-between" gap={2}>
          <Chip
            label="Pro"
            color="primary"
            sx={{
              maxWidth: "fit-content",
              borderRadius: 1,
              px: 1,
              py: 0,
              maxHeight: 24,
              textTransform: "uppercase",
            }}
          />
          <Stack gap={0}>
            <Typography variant="h5">Joseph McFall</Typography>
            <Typography
              fontWeight={500}
              sx={{ color: "#6B7280", fontSize: 20 }}
            >
              Web Developer
            </Typography>
          </Stack>
        </Stack>
      </div>

      <Divider sx={{ width: "100%" }} />

      <CommonButton text="Edit" icon={<FaUserEdit />} />
    </Stack>
  );
}
