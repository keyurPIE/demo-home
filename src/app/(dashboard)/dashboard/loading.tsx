import { Box } from "@mui/material";
import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <Box className="flex items-center justify-center h-full bg-white absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <Triangle color="#9585E3" height={80} width={80} />
    </Box>
  );
}
