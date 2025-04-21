import React from "react";
import { Chip, Divider, Stack, Typography } from "@mui/material";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";
import Image from "next/image";
import CommonButton from "@/app/component/Button";
import { FaUserEdit } from "react-icons/fa";

export default function UserInfo() {
  return (
    <Stack gap={3} alignItems="flex-start">
      <h2 className="flex gap-2 items-center text-base md:text-xl">
        Profile picture <HiMiniQuestionMarkCircle />
      </h2>

      <div className="flex gap-2">
        <Image
          src="/user-image-two.jpg"
          alt=""
          width={56}
          height={56}
          className="w-28 h-28 rounded-md"
        />
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
