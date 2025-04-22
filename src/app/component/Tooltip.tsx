import React, { ReactElement } from "react";
import {
  styled,
  SxProps,
  Theme,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";

interface tooltipProps {
  title?: string;
  placement?:
    | "bottom"
    | "left"
    | "right"
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start";
  sx?: SxProps<Theme>;
  children?: ReactElement;
}

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
    padding: "8px 12px",
    fontSize: 14,
    borderRadius: 12,
  },
}));

export default function CommonTooltip({
  title,
  placement,
  children,
  sx = {},
}: tooltipProps) {
  return (
    <BootstrapTooltip
      title={title || "This is a tooltip"}
      placement={placement || "top"}
      arrow
      sx={{ "& .MuiTooltip-tooltip": { backgroundColor: "black" }, ...sx }}
    >
      {children ? (
        children
      ) : (
        <HiMiniQuestionMarkCircle className="text-gray-400 size-5 hover:text-black cursor-pointer" />
      )}
    </BootstrapTooltip>
  );
}
