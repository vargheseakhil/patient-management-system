import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function PatientListSkeleton() {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: "1rem", height: 100 }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem", height: 300 }} />
    </Stack>
  );
}
