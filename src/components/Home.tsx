import { Backdrop, CircularProgress, Grid, Paper, Skeleton, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ClinicianDetails from "./ClinitianDetails";
import PatientDetails from "./PatientDetails";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Home() {
    return(
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                {/* <Item> */}
                    <Typography>
                  Clinician Portal
                    </Typography>
                    {/* </Item> */}
              </Grid>
              <Grid item xs={6}>
                <Item>
                <ClinicianDetails />
                </Item>
              </Grid>
              <Grid item xs={12}>
                <Item><PatientDetails /></Item>
              </Grid>
              {/* <Grid item xs={8}>
                <Item>xs=8</Item>
              </Grid> */}
            </Grid>
          </Box>
    );
}