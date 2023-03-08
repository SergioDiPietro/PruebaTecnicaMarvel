import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function Loading() {
  return (
    <Box sx={{marginLeft: '50%', marginTop: '20%'}}>
      <CircularProgress />
    </Box>
  );
}