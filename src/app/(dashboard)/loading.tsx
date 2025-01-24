import { Box } from "@mui/material";
import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <Box className="flex items-center justify-center h-full bg-white">
      <Triangle color="#9585E3" height={80} width={80} />
    </Box>
  );
}
