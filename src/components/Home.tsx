import { Container, Grid, Paper, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ClinicianDetails from "./ClinitianDetails";
import PatientList from "./PatientList";
import { CLINICAL_TITLE } from "../constants/strings";
import MedicationIcon from "@mui/icons-material/Medication";
import Header from "./Header";
import { Footer } from "./Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, mt: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={8} sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h5">{CLINICAL_TITLE}</Typography> <MedicationIcon />
            </Grid>
            <Grid item xs={6} sm={4} sx={{ display: "flex", justifyContent: 'flex-end' }}>
              <Item>
                <ClinicianDetails />
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item>
                <PatientList />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
