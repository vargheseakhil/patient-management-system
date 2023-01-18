import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function CardSkeleton() {
  return (
    <Stack spacing={1} sx={{height : 180, minWidth: 300}}>
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={40} />
      <Skeleton variant="rounded" width={210} height={40} />
    </Stack>
  );
}